import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata';
import './HouseDetails.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { Counter } from './Counter';


const HouseDetails = () => {
    const { id } = useParams();
    const first = Fakedata.slice(0, 6);
    const [details, setdetails] = useState(first);

    if (details[0].id === id) {
        return details[id].Image;

    }
    return (
        <section className="control">
            <div className="d-flex diff">
                <div className="col-md-7">
                    <img className="image-crop" src={details[id].Image} alt="Picture"></img>
                </div>
                <div className="col-md-5 diff1">
                    <h3><HomeWorkIcon /> {details[id].Name}</h3>
                    <h5> Rent: ${details[id].Rent}</h5>
                    <button>Contact: <PhoneInTalkIcon /> {details[id].Contact}</button>
                    <h5>Area: {details[id].Area} <AspectRatioIcon /></h5>
                    <p>Review: <Counter/><StarHalfIcon /> </p>
                </div>
            </div>
        </section>
    );
};

export default HouseDetails;