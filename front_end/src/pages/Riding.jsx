import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-9-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className = "h-full w-full object-cover" src = "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''></img>

            </div>
            <div className='h-1/2 p-4 '>
                
                <div className='flex items-center justify-between'>
                    <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png' alt=''/>
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Prageet</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-center flex-col items-center'>
                    <div className='w-full mt-5'>
                        

                        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                            <i className="text-lg ri-map-pin-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm mt-1 text-gray-600'>Dwarka Sector-14, Delhi</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3 '>
                            <i className="ri-money-rupee-circle-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>$193.20</h3>
                                <p className='text-sm mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='w-3/4 mt-5 p-2 bg-green-600 text-white font-semibold rounded-4xl left-[1/4]'>Make a Payment</button>
                </div>
            </div>


        </div>
    )
}

export default Riding