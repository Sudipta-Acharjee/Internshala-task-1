import React from 'react';
import { Link } from 'react-router-dom';
import './InfoFinal.css';

const InfoFinal = ({ house }) => {
    const { Area, Name, id, Location, Image, Rent, Contact } = house;
    return (
        <div className="row-control">
            <div className="column-control">
                <Link to={`/houses/${id}`}>
                    <div className="card houseCart container">

                        <img src={Image} alt="Avatar" />
                        <div class="middle">
                            <div class="text">Click on Image</div>
                        </div>
                        <div>
                            <h2>{Name}</h2>
                            <p>{Location}</p>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default InfoFinal;