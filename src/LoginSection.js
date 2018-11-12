import React, { Component } from 'react'

class LoginForm extends Component {

    render(){
        return(
            <form className='loginForm'>
                    <h2 className='formTitle'>Sign in to Your Dashboard</h2> 

                   <input type='email' name="Registered Email" className='accountInput' placeholder='Email' required></input><br/>
                   
                   
                   <input type='password' name="Password" className='accountInput'placeholder='Password' required></input><br/>
                   
                   <button type='submit' className='loginBtn'>Log In</button>
            </form>
            )
    }
}
// class accountInput extends Component{
//     render(){
//         return(
//             <div className='accountInput'>

//             </div>
//             )
//     }
// }


class LoginSection extends Component {
    render(){
        return(
            <div className='logInBG'>
                <LoginForm />
                <a href="#" id='findmypassword'>Find my password</a>
            </div>
         )
    }
}

export default LoginSection