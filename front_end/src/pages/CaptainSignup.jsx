import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [userData, setUserData] = useState({});
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
            e.preventDefault();
            const captainData = {
                fullname:{
                    firstname:firstName,
                    lastname:lastName
                },
                email:email,
                password:password,
                vehicle: {
                    color: vehicleColor,
                    plate: vehiclePlate,
                    capacity: vehicleCapacity,
                    vehicleType: vehicleType
                }
            };

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
            if (response.status === 201) {
              const data = response.data
              setCaptain(data.captain)
              localStorage.setItem('token', data.token)
              navigate('/captain-home')
            }
    
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setVehicleColor('');
            setVehiclePlate('');
            setVehicleCapacity('');
            setVehicleType('');
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
                <div>
                    <img className = 'w-16 mb-5' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>
                    <form onSubmit = {(e) =>{
                        submitHandler(e);
                    }}>
                        <h3 className = 'text-lg font-medium mb-2'>What's our Captain's name?</h3>
                        <div className = 'flex gap-4 mb-4'>
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
                            className='bg-[#EEEEEE] mb-4 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
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
                            className='bg-[#EEEEEE] mb-4 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
                            required 
                            type = "password" 
                            placeholder='password'
                        />

                        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                        <div className='flex gap-4 mb-5'>
                        <input
                          required
                          className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                          type="text"
                          placeholder='Vehicle Color'
                          value={vehicleColor}
                          onChange={(e) => {
                            setVehicleColor(e.target.value)
                          }}
                        />
                        <input
                          required
                          className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                          type="text"
                          placeholder='Vehicle Plate'
                          value={vehiclePlate}
                          onChange={(e) => {
                            setVehiclePlate(e.target.value)
                          }}
                        />
                        </div>

                        <div className='flex gap-4 mb-5'>
                          <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type="number"
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => {
                              setVehicleCapacity(e.target.value)
                            }}
                          />
                          <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => {
                              setVehicleType(e.target.value)
                            }}
                          >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Moto</option>
                          </select>
                    </div>
    
                        <button
                            className='bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2 border-gray-400 border w-full text-lg placeholder:text-base'
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