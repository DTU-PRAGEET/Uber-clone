import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import CaptainDetails from '../components/CaptainDeatils';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'; 
import { CaptainDataContext } from '../context/CaptainContext';
import { SocketContext } from '../context/SocketContext';
import { useContext, useEffect } from 'react';


const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(false);
    const ridePopupPanelRef = useRef(null);

    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
    const confirmRidePopupPanelRef = useRef(null);
    const [ride, setRide] = useState(null);

    const {captain} = useContext(CaptainDataContext);
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        socket.emit('join', { userId: captain._id, userType: 'captain' });  
        
        const updateLocation = () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    
                    // console.log({
                    //     userId: captain._id,
                    //     location: {
                    //         ltd: position.coords.latitude,
                    //         lng: position.coords.longitude
                    //     }}
                    // );
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    });
                });
            }
        }
        
        const locationInterval = setInterval(updateLocation, 10000); // Update location every 5 seconds
        updateLocation(); // Initial location update
    });

    socket.on('new-ride', (data) => {
        console.log(data);
        setRide(data);
        setRidePopupPanel(true);
    });


    
    useGSAP(function(){
        if(ridePopupPanel){
            gsap.to(ridePopupPanelRef.current,{
                transform:"translateY(0)"
            })
        }
        else{
            gsap.to(ridePopupPanelRef.current,{
                transform:"translateY(100%)"
            })
        }
    }, [ridePopupPanel])

    useGSAP(function(){
        if(confirmRidePopupPanel){
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:"translateY(0)"
            })
        }
        else{
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:"translateY(100%)"
            })
        }
    }, [confirmRidePopupPanel])

    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
                <img className = 'w-16' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>
                <Link to={'/home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-3/5'>
                <img className = "h-full w-full object-cover" src = "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''></img>
            </div>
            
            <div className='h-2/5 p-6 '>
                <CaptainDetails/>
            </div>

            <div ref={ridePopupPanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-3 py-10 px-3'>
                <RidePopUp 
                ride={ride} setRide={setRide}
                setRidePopupPanel={setRidePopupPanel} 
                setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed h-screen w-full z-10 bg-white bottom-0 translate-y-full p-3 py-10 px-3'>
                <ConfirmRidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}  />
            </div>



        </div>
    );
}      

export default CaptainHome;