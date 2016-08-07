// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {connect, Provider} from 'react-redux'; // Provider makes the state of available to the components, and connect binds your react component to your redux store
// import {store} from './store';
// import {bindActionCreators} from 'redux'; // Wraps action creator to the store dispatch function
// import * as action from './action';
//
//
// class UserProfile extends Component {
//   constructor() {
//     super();
//     this.handleUserDetail = this.handleUserDetail.bind(this);
//   }
//
//   componentWillMount(){
//   this.props.getUserDetails('row123');
// }
//
//   handleUserDetail(event) {
//     event.preventDefault();
//     if (this.username !== null) {
//       this.props.getUserDetails(this.username.value);
//       this.username.value = '';
//     }
//   }
//
//   render() {
//     const {user} = this.props;
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(ref) => this.username = ref}
//         />
//         <button onClick={this.handleUserDetail}>Search</button>
//         <div>
//           <p>Great are you Lord</p>
//           <img src={user.avatar}/>
//           <a href={user.profile}>{user.username}</a>
//         </div>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({user})  => {
//   return {
//     user
//   }
// };
//
// const mapDispatchToProps = (dispatch) =>  {
//   return bindActionCreators(action, dispatch);
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
