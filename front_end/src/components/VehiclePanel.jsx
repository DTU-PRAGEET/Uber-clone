import React from 'react'

const VehiclePanel = (props) => {

    const fare = props.fare;

    return (
        <div>
            <h5
                onClick={(e)=>{
                    props.setVehiclePanelOpen(false);
                }}
                className='p-3 text-center absolute top-0 w-[93%]'><i className="text-3xl text-gray-350 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
                
            <div 
                onClick={(e)=>{                    
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanelOpen(false);
                    props.setVehicleType('car');
                }}
                className='w-full p-3 mb-2 flex items-center justify-between border-2 active:border-black rounded-xl'>
                    <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png' alt=''/>
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'  >UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-normal text-xs'>Affordable, compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹{fare.car}</h2>
            </div>

            <div 
                onClick={(e)=>{
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanelOpen(false);
                    props.setVehicleType('moto');
                }}
                className='w-full p-3 mb-2 flex items-center justify-between border-2 active:border-black   rounded-xl'>
                    <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt=''/>
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'  >Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs'>Affordable motorcycle rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹{fare.moto}</h2>
            </div>

            <div
                onClick={(e)=>{
                    props.setConfirmRidePanel(true);
                    props.setVehiclePanelOpen(false);
                    props.setVehicleType('auto');
                }}
                className='w-full p-3 mb-2 flex items-center justify-between border-2 active:border-black  rounded-xl'>
                    <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' alt=''/>
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'  >UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-normal text-xs'>Affordable auto rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹{fare.auto}</h2>
            </div>

        </div>
    )
}

export default VehiclePanel;