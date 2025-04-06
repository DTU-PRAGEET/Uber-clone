import React, {useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext.jsx'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext);

    return (
        <div>
            <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-3'>
                        <img className='h-10 w-10 rounded-full object-cover' src='data:image/jpeg;base64,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' alt=''/>
                        <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>$249.3</h4>
                        <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                </div>

                <div className='flex p-3 mt-6 bg-gray-200 rounded-xl justify-center gap-5 items-start'>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                </div>
        </div>
    )
}

export default CaptainDetails