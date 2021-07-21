import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area  text-center clear-both">
            <div className="  pt-5">
                <div className=" py-5">
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FacebookIcon className="icon active-icon" /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><SearchIcon className="icon" /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><InstagramIcon className="icon" /></a></li>
                    </ul>
                </div>
                <div className=" text-center footer-text">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;