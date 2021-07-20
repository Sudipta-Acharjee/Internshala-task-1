import React from 'react';
import Allinfo from '../Allinfo/Allinfo';
import Navbar from '../Navbar/Navbar';

const Fullpage = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <body>
                <Allinfo/>
            </body>
        </div>
    );
};

export default Fullpage;