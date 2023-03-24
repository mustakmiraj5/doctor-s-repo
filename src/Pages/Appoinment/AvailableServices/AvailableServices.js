import React from 'react';
import AppointMentModal from '../AppointmentModal/AppointMentModal';
import AvailableService from '../AvailableService/AvailableService';

const AvailableServices = ({slots, treatment, setTreatment, selected}) => {
    return (
        <div className='mt-32 mx-auto'>
            <h2 className='text-primary font-semibold text-2xl my-6 text-center'>Available Slots</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    slots.map(slot => <AvailableService key={slot._id} slot={slot} setTreatment={setTreatment}></AvailableService>)
                }
            </div>
            {
                treatment && <AppointMentModal treatment={treatment} selected={selected} setTreatment={setTreatment}></AppointMentModal>
            }
        </div>
    );
};

export default AvailableServices;