import React, { useState } from 'react'
import './Register.css'
const Register = () => {
    const [user, setUser]=useState({
        "firstName": '',
        "lastName": '',
        "email": '',
        "password": '',
        "phone": ''
    });
    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser({
            "firstName": '',
            "lastName": '',
            "email": '',
            "password": '',
            "phone": ''
        });
    }
  return (
    <div className='parDiv'>
        <div className='sectionDiv'>
            <div className='inDiv'>
                Hello, my name is <span className='colSpan'>{user.firstName} {user.lastName}</span>
            </div>
            <div className='inDiv'>
                My email address is <span className='colSpan'>{user.email}</span>
            </div>
            <div className='inDiv'>
                and my phone number is <span className='colSpan'>{user.phone}</span>
            </div>
        </div>
        <form onSubmit={handleSubmit} className='regForm'>
            <h3 className='head3'>Sign Up!</h3>
            <p className='h3Para'>Please fill in this form to create an account.</p>
            <div className='fnameDiv'>
                <h6 className='head6'>First Name</h6>
                <input value={user.firstName} onChange={handleChange} name='firstName' className='inputForm'/>
            </div>
            <div className='lnameDiv'>
                <h6 className='head6'>Last Name</h6>
                <input value={user.lastName} onChange={handleChange} name='lastName' className='inputForm'/>
            </div>
            <div className='emailInputDiv'>
                <h6 className='head6'>Email</h6>
                <input value={user.email} onChange={handleChange} name='email' className='inputForm'/>
            </div>
            <div className='passwordInputDiv'>
                <h6 className='head6'>Password</h6>
                <input value={user.password} onChange={handleChange} name='password' className='inputForm' type='password'/>
            </div>
            <div className='phoneInputDiv'>
                <h6 className='head6'>Phone Number</h6>
                <input value={user.phone} onChange={handleChange} name='phone' className='inputForm'/>
            </div>
            <p className='tnpPara'>
                By creating an account you agree to our <a href='https://www.google.com/' target='_blank' className='tnpAnchor'>Terms & Privacy</a>
            </p>
            <div className='formBtnDiv'>
            <button type='submit' className='formBtn'>Sign Up!</button>
            </div>
        </form>
    </div>
    
  )
}

export default Register