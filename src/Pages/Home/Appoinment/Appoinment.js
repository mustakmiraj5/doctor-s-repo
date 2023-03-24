import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import bgimg from '../../../assets/images/appointment.png'

const Appoinment = () => {
    return (
        <div className="hero mt-48" style={{
            background:`url(${bgimg})`
        }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="hidden md:block rounded-lg -mt-32 -mb-4" alt='' />
                <div className='md:w-1/2'>
                    <p className='text-2xl text-primary font-bold'>Appoinment</p>
                    <h1 className="text-4xl font-bold my-5 text-white">Make an appointment Today</h1>
                    <p className="py-4 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;