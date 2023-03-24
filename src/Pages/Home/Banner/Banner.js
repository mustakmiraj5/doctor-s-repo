import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero p-4 lg:relative my-2.5">
        <img src={chair} alt='' className='hidden lg:block customBgImage'></img>
            <div className="hero-content lg:absolute flex-col lg:flex-row-reverse lg:mx-9">
                <img alt='' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;