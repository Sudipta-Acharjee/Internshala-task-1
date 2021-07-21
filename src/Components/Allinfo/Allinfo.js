import React, { useState } from 'react';
import Fakedata from '../../Fakedata';
import InfoFinal from './InfoFinal';

const Allinfo = () => {
    const first = Fakedata.slice(0, 6);
    const [houses, setHouses] = useState(first);

    return (
        <div>
            <div>
                <h2 style={{color:"blue","text-align":"center","margin-top":"60px"}}></h2>
            </div>
            <div>
                {
                    houses.map(house => <InfoFinal house={house}></InfoFinal>)
                }
            </div>
        </div>
    );
};

export default Allinfo;