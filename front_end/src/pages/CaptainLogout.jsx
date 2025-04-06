import React, { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    
    axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    })

    return (
        <div>
            <h2>CaptainLogout</h2>
        </div>
    );
};

export default CaptainLogout;