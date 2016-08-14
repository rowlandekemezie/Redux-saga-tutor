import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { store } from './store';
import { getUserDetails } from './action';


class UserProfile extends Component {
  constructor() {
    super();
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails('row123');
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

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};

// Map the store's state to component's props.
const mapStateToProps = (state) => ({ user: state });

// Wrap action creator with dispatch method. This way getUserDetails is passed in as props.
const mapDispatchToProps = (dispatch) => ({ getUserDetails: (username) => dispatch(getUserDetails(username)) });

// React-redux connect function connects our React component to redux store
const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// Mount our component to the DOM
const element = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <UserProfilePage />
  </Provider>,
  element, 0
);
