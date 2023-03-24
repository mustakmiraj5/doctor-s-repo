import React from 'react';

const InfoCard = ({info}) => {
    const {title, description, picture, styleCard} = info
    return (
        <div className={`card p-6 lg:card-side shadow-xl ${styleCard}`}>
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;