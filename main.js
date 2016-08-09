import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'; // Provider makes the state of available to the components, and connect binds your react component to your redux store
import { store } from './store';
import { bindActionCreators } from 'redux'; // Wraps action creator to the store dispatch function
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
    console.log(user, 'user object');
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

const mapStateToProps = (state) => ({ user: state.user[0] });
const mapDispatchToProps = (dispatch) =>  bindActionCreators({ getUserDetails }, dispatch);

const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);


ReactDOM.render(<Provider store={store}>
  <UserProfilePage />
</Provider>, document.getElementById('root'));

