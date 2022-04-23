import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

return (
  <div className='login-main-container'>
    <div className='login-main'>
    <div className='login'>
     <h2>Tipsy New Yorker<i className="fab fa-typo3" /></h2>
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
