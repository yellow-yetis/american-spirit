import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props


  ///// Old Verion of Tipsy Bartender //////
//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor="username">
//             <small>Username</small>
//           </label>
//           <input name="username" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <small>Password</small>
//           </label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//     </div>
//   )
// }

return (
  <div className='login-main-container'>
    <div className='login-main'>
    <div className='login'>
     <h2>Welcome to Tipsy New Yorker!</h2>
    <form onSubmit={handleSubmit} name={name}>
        <label htmlFor="username">
          <p>Username</p>
        <input
          name="username"
          type="text"
          placeholder="Username"
           />
        </label>
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          />
        <button className="button-login" type="submit" value="Login">{displayName}</button>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
     </div>
    </div>
  </div>
)
}

// TenRen Version //////////////////////////////////////////////////////

// return (
//   <div className='login-main-container'>
//   <div className='login-main'>
//   <div className='login'>
//   <h1>Welcome to Robin Noob</h1>
//   {this.state.msgBool ? this.message() : null}
//   <form onSubmit={handleSubmit} name={name}>
//     <label><h4>Username</h4>
//       <input
//         name="username"
//         type="text"
//         placeholder="Username"
//         value={this.state.username}
//         onChange={this.handleChange}
//       />
//     </label>
//     <label><h4>Password</h4>
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={this.state.password}
//         onChange={this.handleChange}
//       />
//     </label>
//     <input className='button-login' type="submit" value="Login" />
//   </form>
// </div>
// </div>
// </div>
// );
//////// TenRen Version //////////////////////////////////////////
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
