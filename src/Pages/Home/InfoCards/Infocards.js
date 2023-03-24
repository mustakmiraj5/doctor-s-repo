import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const Infocards = () => {
    const InfoData = [
        {
            id:1,
            title: 'Opening Hours',
            description:'Lorem Ipsum is simply dummy text of the pri',
            picture:clock,
            styleCard: 'bg-gradient-to-r from-primary to-secondary text-white'
        },
        {
            id:2,
            title: 'Visit Our Location',
            description:'Lorem Ipsum is simply dummy text of the pri',
            picture:marker,
            styleCard: 'bg-gray-600 text-white'
        },
        {
            id:3,
            title: 'Contact Us Now',
            description:'Lorem Ipsum is simply dummy text of the pri',
            picture:phone,
            styleCard: 'bg-gradient-to-r from-primary to-secondary text-white'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                InfoData.map(info => <InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default Infocards;