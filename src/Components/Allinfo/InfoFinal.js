import React from 'react';
import './InfoFinal.css';

const InfoFinal = ({ house }) => {
    const { Area, Name, id, Location, Image, Rent, Contact } = house;
    return (
        <div className="row">
            <div className="column">
                <div className="card houseCart container">
                        <img src={Image} alt="Avatar" class="image"/>
                        <div class="middle">
                            <div class="text">Click on Image</div>
                        </div>
                    <div>
                        <h2>{Name}</h2>
                        <p>{Location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoFinal;