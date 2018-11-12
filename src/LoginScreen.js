import React, { Component } from 'react'
import LoginSection from './LoginSection'


class LoginScreen extends Component {
    render(){
        return(
            <div>
                <Header navItems={[{navTitle:'Features',href: "#"},{navTitle:'App Cases',href: "#"},{navTitle:'Pricing',href: "#"},{navTitle:'Support',href: "#"}]} />
                <LoginSection />
                <SignUpCTA />
            </div>
            )
    }
}


class Header extends Component {
    constructor(props){
        super()

    }

    render(){
        return(
            <div className="headerBG" > 
            <div className="header" >
                <img id="logoInHeader" src='logo_ReStudio@3x.svg' alt='A logo of react studio'/>
                <nav>
                    {this.props.navItems.map((item,i) => <a  key={i} href={item.href} className="navItem">{item.navTitle}</a>)}
                </nav>
                <button  className="primaryPhantomBtn" id = "signUpCTA">Sign Up</button>
            </div>
            </div>
            )
    }
}
class SignUpCTA extends Component {

    render(){
        return(
            <div className='signUpCTA'>
               <p id='CTA'>New here? Sign up an account for free.</p>
               <img src='chevron_right.svg' alt='Click to Sign Up.'  />
            </div>
            )
    }
}

export default LoginScreen