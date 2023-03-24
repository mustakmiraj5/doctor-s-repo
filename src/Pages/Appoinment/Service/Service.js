import React from 'react';

const Service = ({slot}) => {
    return (
        <div className="card w-96 bg-base-100 shadow">
            <div className="card-body">
                <h2 className="text-primary text-center text-2xl font-bold">{slot.name}</h2>
            </div>
        </div>
    );
};

export default Service;