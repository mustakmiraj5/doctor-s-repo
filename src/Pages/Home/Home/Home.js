import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Infocards from '../InfoCards/Infocards';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Treatment></Treatment>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;