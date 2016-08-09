import * as ReduxSaga from "./node_modules/redux-saga/lib/index";
import { connect, Provider} from "./node_modules/react-redux/dist/react-redux";
const { applyMiddleware, createStore, bindActionCreators } = Redux;
const React = React;
const createSagaMiddleware = ReduxSaga.default;
const { put, call } = ReduxSaga.effects;
const { takeEvery } = ReduxSaga;
const ReactDOM = ReactDOM;

// GitHub API
const gitHubApi = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
        .then(({ login, avatar_url, html_url }) => ({ login, avatar_url, html_url }));
    })
    .catch(error => {
      throw error;
    })
};

// Action
const getUserDetails = (payload) => {
  return {
    type: 'LOAD_USER_REQUEST',
    payload
  }
};

// Reducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return [action.user];
    default:
      return state;
  }
};

// Sagas
function* loadUserDetails({ payload }) {
  try {
    const user = yield call(gitHubApi, payload); // Make Api call to Github api with the username
    yield put({ type: 'LOAD_USER_SUCCESS', user }); // Yields effect to the reducer specifying the action type and optional parameter
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
function* watchRequest() {
  yield* takeEvery('LOAD_USER_REQUEST', loadUserDetails);
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails('andela-rekemezie');
  }

  handleUserDetail(event) {
    event.preventDefault();
    if (this.username !== null) {
      this.props.getUserDetails(this.username.value);
      this.username.value = '';
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {user ? <div>
          <input
            type="text"
            ref={(ref) => this.username = ref}
          />
          <button onClick={this.handleUserDetail}>Search</button>
          <div>
            <h1> User Profile </h1>
            <img src={user.avatar_url}/>
            <p><a href={user.html_url} target="_blank">{user.login}</a></p>
          </div>
        </div> : '...loading'}
      </div>
    )
  }
}
// Setup store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchRequest);

const mapStateToProps = (state) => ({ user: state[0] }); // Map the store's state to component's props

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUserDetails }, dispatch); // wrap action creator with dispatch method
const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const element = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <UserProfilePage />
  </Provider>,
  element
);
