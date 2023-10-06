import React ,{useState} from 'react'
import './Login.css'
import {Link } from "react-router-dom"
import { auth } from './firebase';
import { useNavigate} from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase login
        auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          // Successfully created a new user with email and password
          navigate('/');
        })
        .catch((error) => alert(error.message));
    
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((userCredential) => {
          // Successfully signed in
          navigate('/');
        })
        .catch(error => alert(error.message))
        //firebase register
    }
  return (
    <div className='login'>
        <Link to='/'>
        
       <img className="login_logo" src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png' />
       </Link>

       <div className='login_container'>
           <h1>Sign-In</h1>
           
           <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={ e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={ e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn}
            className='login_signInButton'>Sign In</button>
           </form>

           <p>
                 By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
                 Please see our Privacy Notice, our Cookies Notice
                 and our Interest-Based Ads Notice.
           </p>

           <button onClick={register}
            className='login_RegisterButton'>Create your Amazon Account</button>
       </div>
    </div>
  )
}

export default Login
 