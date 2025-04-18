import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FinishRide = (props) => {

    const navigate = useNavigate();

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }
    }

    return (
        <div >
            <h5
                onClick={(e)=>{
                    props.setFinishRidePanel(false);
                }}
                className='p-3 text-center absolute top-0 w-[93%]'><i className="text-3xl text-gray-350 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg  mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src='https://img.freepik.com/free-photo/passenger-sitting-car-talking-phone_23-2148510645.jpg' alt=''/>
                    <h2 className='text-xl font-medium'>{props.ride?.user.fullname.firstname}</h2>
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



                <div className='mt-10 w-full'>
                    <button
                    onClick={endRide}
                    className='w-full mt-5 p-2 flex justify-center text-lg  bg-green-600 text-white font-semibold rounded-4xl border-2 border-green-50 active:border-black'>Finish Ride</button>                            
                </div>
            </div>



        </div>
    )
}

export default FinishRide