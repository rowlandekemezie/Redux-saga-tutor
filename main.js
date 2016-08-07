import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { store } from './store';
import { bindActionCreators } from 'redux'; // Wraps action creator to the store dispatch function
import {getUserDetails} from './action';


class UserProfile extends Component {
  constructor() {
    super();
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  handleUserDetail(event){
    event.preventDefault();
    if(this.username !== null){
      this.props.getUserDetails(this.username);
    }
  }

  render() {
    console.log('This is great tutorial')
    console.log(this.props, 'porpsl');
    const {username, avatar, profile} = this.props;
    return (
      <div>
      <input
        type="text"
        ref={(ref) => this.username = ref}
      />
        <button onClick={this.handleUserDetail}>Search</button>
        <div>
          <img src={avatar}/>
          <a href={profile}>{username}</a>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.user, 'user profile')
  return {
    user:state.user
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(getUserDetails, dispatch);
// };

connect(mapStateToProps)(UserProfile);

ReactDOM.render(<Provider store={store}>
  <UserProfile />
</Provider>, document.getElementById('root'));
