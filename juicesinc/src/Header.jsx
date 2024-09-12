import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Set to true when scrolled down
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id='header' className={isScrolled ? 'sticky' : 'not-scrolled'}>
            <div className="logo_area">
                <Link className={isScrolled ? 'display_home_link':'hide_home_link'} to='/'><img className={isScrolled? 'display_img':'hide_img'} src="drink.png" alt="juices_logo" /></Link>
                <Link className={isScrolled ? 'main_link1_scrl':'main_link1_unscrl'} to='/order'>Order Now</Link>
            </div>
            <div className={isScrolled ? 'main_vid_cont_scrl':'main_vid_cont'}>
                <video className={ isScrolled ? 'video-hidden' : 'video-display'} src="./main_vid.mp4" muted autoPlay loop></video>
            </div>
        </header>
    );
}

export default Header;
