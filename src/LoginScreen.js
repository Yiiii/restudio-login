import React, { Component } from 'react'
import LoginSection from './LoginSection'


class LoginScreen extends Component {
    render(){
        return(
            <div>
                <Header navItems={[{navTitle:'Features',href: "#"},{navTitle:'App Cases',href: "#"},{navTitle:'Pricing',href: "#"},{navTitle:'Support',href: "#"}]} />
                Below is a log-in Section:
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
            <div className="header" >
                <img id="logoInHeader" src='logo_ReStudio@3x.svg' alt='A logo of react studio'/>
                <nav>
                    {this.props.navItems.map((item) => <a href={item.href} class="navItem">{item.navTitle}</a>)}
                </nav>
                <button className="alignToLeft" className="primaryPhantomBtn" id = "signUpCTA">Sign Up</button>
            </div>
            )
    }
}
class SignUpCTA extends Component {

    render(){
        return(
            <div >
               You should really sign up for React Studio!
            </div>
            )
    }
}

export default LoginScreen