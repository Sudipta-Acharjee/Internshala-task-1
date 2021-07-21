import React from 'react';
import Allinfo from '../Allinfo/Allinfo';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Fullpage = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <body>
                <Allinfo />
            </body>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Fullpage;