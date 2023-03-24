import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const AppointMentModal = ({treatment,selected, setTreatment}) => {
    const show = () => {
        toast.success('Booking Complete!',{
            duration: 9000
        })
    }
    const { user } = useContext(AuthContext)
    const { name } = treatment;
    const date = format(selected, 'PPP');

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value;
        const booking = {
            appointmentDate : date,
            treatment : treatment.name,
            patient: name,
            email: email,
            address: address,
            phone: phoneNumber
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                setTreatment(null);
            }
        })
        
        console.log(booking);
        
        
    }
    
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder={date} disabled className="input input-bordered input-info w-full mt-4 font-bold" />
                        <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full mt-4" />
                        <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered input-info w-full mt-4" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered input-info w-full mt-4" />
                        <input type="number" name='phoneNumber' placeholder="Phone No" className="input input-bordered input-info w-full mt-4" />
                        <br />
                        <input type="submit" onClick={show} className='btn btn-accent w-full mt-4' value={'Submit'} />
                        
                    </form>
                </div>
               
            </div>
            <Toaster />
        </>
    );
};

export default AppointMentModal;