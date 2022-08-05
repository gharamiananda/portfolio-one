import './Topbar.scss';
import { Person, Mail } from "@material-ui/icons"
import { useState } from 'react';

const Topbar = ({ menuOpen, setMenuOpen }) => {


    return (
        <div className={'topbar ' + (menuOpen && " active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Genius.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+84 343434323</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>abc@gmail.com</span>
                    </div>

                </div>

                <div className="right">
                    <div className="hambarger" onClick={() => setMenuOpen(!menuOpen)}>

                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;