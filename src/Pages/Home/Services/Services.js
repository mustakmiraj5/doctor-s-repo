import React from 'react';
import fluo from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const serviceData  = [
        {
            id:1,
            picture:fluo,
            title: 'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            picture:cavity,
            title: 'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,
            picture:teeth,
            title: 'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <>
            <h2 className='text-primary font-bold text-2xl text-center mt-32'>OUR SERVICES</h2>
            <p className='text-center text-3xl mt-[7px] text-gray-600'>Services We Provide</p>
            <div className='mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;