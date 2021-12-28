import React, { useState } from 'react'
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
    const[email,setEmail] = useState('');
    const[paasword,setPaasword] = useState('');
    const signIn  = e =>{
          e.preventDefault();
          //firebase
    }
    const register  = e =>{
        e.preventDefault();
        //firebase
    }
    return (
        <div className='login'>
            <Link to ="/">
            <img className="login--logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon"/>
            </Link>
            <div className='login--container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type= 'text' value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Paasword</h5>
                <input type='paasword' value={paasword} onChange={e=>setPaasword(e.target.value)}/>
                <button type = 'submit' onClick = {signIn}className='login--signButton'>Sign In</button>
            </form>
            <p> By continuing,you agreee to amazon,condition,
                our cookies notice and our interest-biased ads notice.....
            </p>
            <button type = 'submit' onClick={register} className='login--registrationButton'> Create Your Amazon Account
            </button>
            </div>
        </div>
    )
}

export default Login
