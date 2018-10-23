import React, { Component } from 'react'

class LoginForm extends Component {

    render(){
        return(
            <div>
               <h3>Log-In Form</h3>
               <form>
                   Email: <br/>
                   <input type='email' name="Registered Email" required></input><br/>
                   Password: <br/>
                   <input type='password' name="Password" required></input><br/>
                   <button type='submit'>Log In</button>
                   <button>Foget your password?</button>
               </form>
            </div>
            )
    }
}

class LoginSection extends Component {

    render(){
        return(
            <div>
            <h2>Sign in to Your Dashboard</h2> 
               <LoginForm />
            </div>
            )
    }
}

export default LoginSection