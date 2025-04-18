import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5
                onClick={(e)=>{
                    props.setRidePopupPanel(false);
                }}
                className='p-3 text-center absolute top-0 w-[93%]'><i className="text-3xl text-gray-350 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
            
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg  mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src='https://img.freepik.com/free-photo/passenger-sitting-car-talking-phone_23-2148510645.jpg' alt=''/>
                    <h2 className='text-xl font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h2 className='text-lg font-semibold'>2.2 KM</h2>
            </div>


            <div className='flex gap-2 justify-center flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>${props.ride?.fare}</h3>
                            <p className='text-sm mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <button 
                onClick={(e)=>{
                    props.setConfirmRidePopupPanel(true);
                    props.confirmRide();
                }}
                className='w-3/4 mt-5 p-2 bg-green-600 text-white font-semibold rounded-4xl border-2 border-green-50 active:border-black'>Accept
                </button>


                <button 
                onClick={(e)=>{
                    props.setRidePopupPanel(false);
                }}
                className='w-3/4 mt-1 p-2 bg-gray-300 text-gray-700 font-semibold rounded-4xl border-2 border-gray-50 active:border-black'>Ignore
                </button>
            </div>



        </div>
    )
}

export default RidePopUp