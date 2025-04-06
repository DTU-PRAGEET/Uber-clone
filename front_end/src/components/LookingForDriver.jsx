import React from 'react'

const LookingForDriver = (props) => {

    var fare = props.fare.car;
    var image = 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png'
    function check(){
        if(props.vehicleType === 'moto'){
            fare = props.fare.moto;
            image = 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'
        }
        else if(props.vehicleType === 'auto'){
            fare = props.fare.auto;
            image = 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'
        }
        return {fare, image};
    }

    return (
        <div>
            <h5
                onClick={(e)=>{
                    props.setVehicleFound(false);
                }}
                className='p-3 text-center absolute top-0 w-[93%]'><i className="text-3xl text-gray-350 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
            
            <div className='flex gap-2 justify-center flex-col items-center'>
                <img className='h-30' src={check().image} alt=''/>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{check().fare}</h3>
                            <p className='text-sm mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LookingForDriver