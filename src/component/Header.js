import React from 'react';
import '../styles.css'


export default function Header() {
    return(
        <div className="header">
            <img className='logo' src='logo.png' alt='MovieDucks'/>
            <h2 className='app-subtitle'> Its Time Popcorn ! Find your next Movie</h2>
        </div>
    );
}