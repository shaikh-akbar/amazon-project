import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to ="/">
            <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon"/>
            </Link>
            <div className='login--container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type= 'text' />
                <h5>Paasword</h5>
                <input type='paasword' />
                <button className='login--signButton'>Sign In</button>
            </form>
            <p> By continuing,you agreee to amazon,condition,
                our cookies notice and our interest-biased ads notice.....
            </p>
            <button className='login--registrationButton'> Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
