import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


const UserLogin = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }

        console.log(userData);
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
                    <h3 className = 'text-lg font-medium mb-2'>What's your email?</h3>
                    <input 
                        value = {email}
                        onChange = {(e) =>{
                            setEmail(e.target.value);
                        }}
                        className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
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
                        className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                        required 
                        type = "password" 
                        placeholder='password'
                    />

                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                    >Login</button>

                    <p className = 'text-center'>New Here?<Link to = '/signup' className = 'text-blue-500'>Create an Account</Link></p>


                </form>
            </div>


            <div>
                <Link
                    to = '/captain-login'
                    className='bg-[#3D8E53] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
            </div>

        </div>
    );
}

export default UserLogin;
