import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="rounded-lg shadow-2xl w-[322px] md:w-[458px] h-[406px] md:h-[576px]" alt='' />
                <div className='md:w-1/2 md:p-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;