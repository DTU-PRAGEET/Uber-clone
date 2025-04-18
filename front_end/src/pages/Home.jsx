import React, { useState, useRef, useContext, useEffect } from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css' 
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')

    const [panelOpen, setPanelOpen] = useState(false) 
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null)
    
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null);

    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const confirmRidePanelRef = useRef(null);

    const [vehicleFound, setVehicleFound] = useState(false)
    const vehicleFoundRef = useRef(null);

    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const waitingForDriverRef = useRef(null)

    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)

    const [fare, setFare] = useState({});

    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const navigate = useNavigate();

    const {socket} = useContext(SocketContext);
    const {user} = useContext(UserDataContext);

    useEffect(() => {
        console.log(user);
        socket.emit('join', {userType: "user", userId: user._id});
    }, [user])

    socket.on('ride-confirmed', ride => {

        console.log(ride);

        setVehicleFound(false);
        setWaitingForDriver(true);
        setRide(ride);
    })

    socket.on('ride-started', ride => {
        setWaitingForDriver(false);
        navigate('/riding', {state: {ride}})
    })


    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    async function fareCalculation(){
        setVehiclePanelOpen(true);
        setPanelOpen(false);

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: {
                pickup,
                destination
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) 
        setFare(response.data);

    }

    async function createRide(){

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })   

        // console.log(response.data);

    }

    const submitHandler = async (e) =>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current, {
                height:'70%',
                padding:24,
                // opacity:1
            })  
            gsap.to(panelCloseRef.current,{
                opacity:1
            })          
        }
        else{
            gsap.to(panelRef.current, {
                height:'0%',
                padding:0,
                // opacity:0
            }) 
            
            gsap.to(panelCloseRef.current,{
                opacity:0
            }) 
        }
    }, [panelOpen]);

    useGSAP(function(){
        if(vehiclePanelOpen){
            gsap.to(vehiclePanelRef.current,{
                transform: 'translateY(0)'
            })
        }
        else{
            gsap.to(vehiclePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanelOpen]) //// [vehiclePanel] this is passed as a dependency

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current,{
                transform: 'translateY(0)'  
            }) 
        }
        else{
            gsap.to(confirmRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(0)'  
            })
        }
        else{
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform: 'translateY(0)'  
            })
        }
        else{
            gsap.to(waitingForDriverRef.current,{
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className = 'w-16 absolute left-5 top-5' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'></img>
            <div className='h-screen w-screen'>
                {/* image for temporary use */}
                <LiveTracking/>
                {/* <img className = "h-full w-full object-cover" src = "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''></img> */}
            </div>

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
                <div className='h-[30%] bg-white p-6 relative'>
                    <h5 onClick = {(e) =>{
                        setPanelOpen(false);
                    }}
                    ref = {panelCloseRef}
                    className='absolute opacity-0 top-2 right-3 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-3xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) =>{
                        submitHandler(e);
                    }}>
                        <div className='line absolute h-16 w-1 top-[49%] bg-gray-900 left-10 rounded-full'></div>
                        <input
                        onClick = {(e) =>{
                            setPanelOpen(true)
                            setActiveField('pickup')
                        }}
                        value = {pickup}
                        onChange={handlePickupChange}
                        className='bg-[#EEEEEE] px-12 py-2 text-lg rounded-lg w-full mt-5' 
                        type='text' 
                        placeholder='Add a pick-up location'
                        />

                        <input 
                        onClick = {(e) =>{
                            setPanelOpen(true)
                            setActiveField('destination')
                        }}
                        value = {destination}
                        onChange = {handleDestinationChange}
                        className='bg-[#EEEEEE] px-12 py-2 text-lg rounded-lg w-full mt-3' 
                        type='text' 
                        placeholder='Enter your destination'
                        />
                    </form>
                    
                </div>

                <div ref = {panelRef} className='h-0 bg-white'>
                    <button
                    onClick={fareCalculation}
                    className='text-[18px] text-white w-full font-semibold mb-4 relative bg-black px-10 py-2 rounded-full'>
                        Find Trip
                        <i className="ri-arrow-right-line"></i>    
                    </button>
                    <LocationSearchPanel 
                    suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                    setPanelOpen={setPanelOpen}
                    setVehiclePanelOpen={setVehiclePanelOpen}
                    setPickup={setPickup}
                    setDestination={setDestination}
                    activeField={activeField}
                    />
                </div>
            </div>

            <div ref = {vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-3 py-10 px-3'>
                <VehiclePanel                 
                setVehicleType={setVehicleType}
                fare={fare}
                setVehiclePanelOpen={setVehiclePanelOpen} 
                confirmRidePanel={confirmRidePanel} 
                setConfirmRidePanel={setConfirmRidePanel} />
            </div>

            <div ref = {confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-3 py-6 px-3 pt-12'>
                <ConfirmedRide 
                createRide={createRide}
                pickup={pickup}
                destination={destination}
                vehicleType={vehicleType} 
                fare={fare} setFare={setFare}
                setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>

            <div ref = {vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-3 py-6 px-3 pt-12'>
                <LookingForDriver 
                pickup={pickup}
                destination={destination}
                vehicleType={vehicleType}
                fare={fare} 
                setVehicleFound={setVehicleFound} />
            </div>

            <div ref = {waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-3 py-6 px-3 pt-12'>
                <WaitingForDriver 
                ride={ride}
                vehicleType={vehicleType} 
                setVehicleFound={setVehicleFound}
                setWaitingForDriver={setWaitingForDriver}
                waitingForDriver={waitingForDriver}
                />
            </div>

        </div>
    );
}

export default Home;    



























































