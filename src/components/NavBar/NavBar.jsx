import React, {useState} from 'react'

import './NavBar.css';
import images from '../../constants/images';
import Payment from "../Payment/Payment";
import { useLocation } from 'react-router-dom';
import FindRoom from '../FindRoom/FindRoom';
import Contacts from '../Contacts/Contacts';




const NavBar = () => {
    let location = useLocation();

    return (
        <>
        {location.hash === '#find-room' &&
            <FindRoom />
        }
        {(location.hash === '#become-owner' || location.hash === "#support-by-toy") &&
            <Contacts />
        }
        {location.hash === '#support' &&
            <Payment />
        }
            <div className='app__navbar'>
                <a href="#support-by-toy" className='navbar__buttons_helpToy'>
                    <img className='navbar__buttons_helptoy-icon navbar__helpToyIcon' src={images.navbar__helpToy} alt='Bear with toy'/>
                    <p className='navbar__buttons_helptoy-text'>допомогти іграшкою</p>
                </a>
                <a href='#support' className='navbar__buttons_charity'>
                    <p className='navbar__buttons_helptoy-text' >підтримати проєкт</p>
                    <img className="navbar__buttons_helptoy-icon navbar__charityIcon" src={images.navbar__charity} alt="Charity heart"/>
                </a>
            </div>
        </>
    );
};

export default NavBar;
