import React from 'react';

const AvailableService = ({slot, setTreatment}) => {
    const {name, slots} = slot
    return (
        <div className="card w-96 text-primary-content shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-semibold text-primary">{name}</h2>
                <p className='text-center'>{ slots.length > 0 ? slots[0] : 'Try another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(slot)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;