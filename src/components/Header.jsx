import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <div className="header-logo">
                    <img src="/images/logo.png" alt="Think Clarity" />
                    <span className="header-logo-text">Think Clarity</span>
                </div>
                <a href="#offer" className="btn btn-primary btn-sm">
                    無料相談会に参加
                </a>
            </div>
        </header>
    );
};

export default Header;
