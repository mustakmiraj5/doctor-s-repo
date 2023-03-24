import React, { useEffect, useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableServices from '../AvailableServices/AvailableServices';
import Services from '../Services/Services';


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    const [slots, setSlots] = useState([]);
    const [treatment, setTreatment] = useState({})
    useEffect(() => {
        // fetch('appointmentOptions.json')
        fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
            .then(data => setSlots(data))
    }, [])
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <Services selected={selected} slots={slots}></Services>
            <AvailableServices slots={slots} treatment={treatment} setTreatment={setTreatment} selected={selected}></AvailableServices>
        </div>
    );
};

export default Appointment;