import React, { useState } from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const signIn  = e =>{
          e.preventDefault();
          auth
              .signInWithEmailAndPassword(email,password)
              .then((auth) =>{
                  //it successfully created with email and pwd
                  if(auth){
                      history.push('/')
                  }
              })
              .catch(error =>alert(error.message))
    }
    const register  = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
              .then((auth) =>{
                //it succesfully created email and pwd
                if(auth){
                    history.push('/')
                }
            })
            .catch(error =>alert(error.message))
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
                <input type= "text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Paasword</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
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
