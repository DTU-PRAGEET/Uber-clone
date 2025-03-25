import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});


    const submitHandler = (e) => {
            e.preventDefault();
            setUserData({
                fullName:{
                    firstName:firstName,
                    lastName:lastName
                },
                email:email,
                password:password
            });
    
            console.log(userData);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
                <div>
                    <img className = 'w-16 mb-7' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>
                    <form onSubmit = {(e) =>{
                        submitHandler(e);
                    }}>
                        <h3 className = 'text-lg font-medium mb-2'>What's our Captain's name?</h3>
                        <div className = 'flex gap-4 mb-5'>
                            <input 
                                value = {firstName}
                                onChange = {(e) =>{
                                    setFirstName(e.target.value);
                                }}
                                className='bg-[#EEEEEE] w-1/2 rounded px-4 py-2 border-gray-400 border  text-lg placeholder:text-base'
                                required 
                                type = "text" 
                                placeholder = "First name"
                            />
                            <input 
                                value = {lastName}
                                onChange = {(e) =>{
                                    setLastName(e.target.value);
                                }}
                                className='bg-[#EEEEEE] w-1/2 rounded px-4 py-2 border-gray-400 border  text-lg placeholder:text-base'
                                // required 
                                type = "text" 
                                placeholder = "Last name"
                            />
                        </div>
                        <h3 className = 'text-lg font-medium mb-2'>What's our Captain's email?</h3>
                        <input 
                            value = {email}
                            onChange = {(e) =>{
                                setEmail(e.target.value);
                            }}
                            className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                            required 
                            type = "email" 
                            placeholder = "example@gmail.com"
                        />
    
                        <h3 className = 'text-lg font-medium mb-2'>Password</h3>
                        <input 
                            value = {password}  
                            onChange = {(e) =>{
                                setPassword(e.target.value);
                            }}
                            className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                            required 
                            type = "password" 
                            placeholder='password'
                        />
    
                        <button
                            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                        >Sign Up</button>
    
                        <p className = 'text-center'>Already have an account?<Link to = '/captain-login' className = 'text-blue-500'>Login here</Link></p>
    
    
                    </form>
                </div>
    
    
                <div>
                    <p className = 'text-[10px] leading-tight'>
                        This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>. 
                    </p>
                </div>
    
        </div>
    );
}

export default CaptainSignup;