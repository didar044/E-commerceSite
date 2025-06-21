import React from 'react';
import './Css/LoginSingup.css'
const LoginSingup = () => {
    return (
        <div className='loginsingup' >
            <div className="loginsingup-container">
                <h1>Login</h1>
                <div className="loginsingup-fields">
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email Address' required />
                    <input type="password" placeholder='Passeord' required />
                </div>
                <button className='bc'>Continue</button>
                <p className="loginsingup-login">Already have an account? <button className='bl'>Login Here</button></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continue, i agree to the terms of use & provacy policy.</p>
                </div>
            </div>
        </div>
       
    );
};

export default LoginSingup;