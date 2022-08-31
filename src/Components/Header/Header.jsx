import React, { useState } from "react";
import './Header.scss';
import "../Settings/Setting.scss";
import Settings from "../Settings/Setting";
import { useTheme } from "../../Hooks/useTheme";



const Header = () => {

    const [modalActiveSettings, setModalActive] = useState(false);
    const [modaActiveNotice, setNoticActive] = useState(false);

    const{setTheme} = useTheme();
    
    const handleLightThemeClick = () =>{
        setTheme('light');
    };
    const handleDarkThemeClick = () =>{
        setTheme('dark');
    };
    const handleBlueThemeClick = () =>{
        setTheme('blue');
    };
    return (
        <div className="header-container">
            <div className="search">
                <input className="header__search" type="text" placeholder="Search Game" />
            </div>
            <div className="header-notification">
                <button className="notification__btn" onClick={() => setNoticActive(true)}>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.003 10.7548H16.0012V6.55001C16.0012 6.52661 16.003 6.50319 16.003 6.47979C16.003 2.9356 13.0708 0.0592346 9.45825 0.0592346C5.84567 0.0592346 2.91351 2.9356 2.91351 6.47979C2.91351 6.50319 2.91347 6.52661 2.91527 6.55001V10.8394L0.00830078 15.0118H18.991L16.003 10.7548Z" fill="#525252" />
                    </svg>
                </button>

                <button className="notification__btn" onClick={() => setModalActive(true)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.45946 11.3172H2.30441C2.48364 11.3172 2.63727 11.4196 2.71408 11.6245C2.7909 11.8037 2.76529 11.9829 2.63727 12.111L2.04836 12.6999C1.76671 12.9815 1.61309 13.34 1.61309 13.724C1.61309 14.1081 1.76671 14.4666 2.04836 14.7482L3.25178 15.9516C3.53343 16.2333 3.89189 16.3869 4.27596 16.3869C4.66003 16.3869 5.01849 16.2333 5.30014 15.9516L5.88905 15.3627C6.01707 15.2347 6.1963 15.2091 6.40114 15.2859C6.58037 15.3627 6.68279 15.5164 6.68279 15.6956V16.5405C6.68279 17.3343 7.3229 18 8.14225 18H9.85775C10.6515 18 11.3172 17.3599 11.3172 16.5405V15.6956C11.3172 15.5164 11.4196 15.3627 11.5989 15.2859H11.6245C11.8037 15.2091 11.9829 15.2347 12.111 15.3627L12.6999 15.9516C12.9815 16.2333 13.34 16.3869 13.724 16.3869C14.1081 16.3869 14.4666 16.2333 14.7482 15.9516L15.9516 14.7482C16.2333 14.4666 16.3869 14.1081 16.3869 13.724C16.3869 13.34 16.2333 12.9815 15.9516 12.6999L15.3627 12.111C15.2347 11.9829 15.2091 11.8037 15.2859 11.5989C15.3627 11.4196 15.5164 11.3172 15.6956 11.3172H16.5405C17.3343 11.3172 18 10.6771 18 9.85775V8.14225C18 7.34851 17.3599 6.68279 16.5405 6.68279H15.6956C15.5164 6.68279 15.3627 6.58037 15.2859 6.37553C15.2091 6.1963 15.2347 6.01707 15.3627 5.88905L15.9516 5.30014C16.2333 5.01849 16.3869 4.66003 16.3869 4.27596C16.3869 3.89189 16.2333 3.53343 15.9516 3.25178L14.7482 2.04836C14.4666 1.76671 14.1081 1.61309 13.724 1.61309C13.34 1.61309 12.9815 1.76671 12.6999 2.04836L12.111 2.63727C11.9829 2.76529 11.8037 2.7909 11.5989 2.71408C11.4196 2.63727 11.3172 2.48364 11.3172 2.30441V1.45946C11.3172 0.665718 10.6771 0 9.85775 0H8.14225C7.34851 0 6.68279 0.640114 6.68279 1.45946V2.30441C6.68279 2.48364 6.58037 2.63727 6.40114 2.71408H6.37553C6.1963 2.7909 6.01707 2.76529 5.88905 2.63727L5.30014 2.04836C5.01849 1.76671 4.66003 1.61309 4.27596 1.61309C3.89189 1.61309 3.53343 1.76671 3.25178 2.04836L2.04836 3.25178C1.76671 3.53343 1.61309 3.89189 1.61309 4.27596C1.61309 4.66003 1.76671 5.01849 2.04836 5.30014L2.63727 5.88905C2.76529 6.01707 2.7909 6.1963 2.71408 6.40114C2.63727 6.58037 2.48364 6.68279 2.30441 6.68279H1.45946C0.665719 6.68279 0 7.3229 0 8.14225V9.85775C0 10.6771 0.640114 11.3172 1.45946 11.3172ZM8.96159 6.1963C10.5235 6.1963 11.7781 7.45093 11.7781 9.0128C11.7781 10.5747 10.5235 11.8293 8.96159 11.8293C7.39972 11.8293 6.14509 10.5747 6.14509 9.0128C6.14509 7.45093 7.39972 6.1963 8.96159 6.1963Z" fill="#525252" />
                    </svg>
                </button>
            </div>
            <Settings active={modaActiveNotice} setActive={setNoticActive}>
                <div className="settings__header">
                    <p className="settings__tittle">Notice</p>
                </div>
                <div className="settings__content">
                    <div className="settings__item">
                        <div className="red-alert"></div>
                        <p className="theme-tittle">Please reconnect you email</p>
                    </div>
                </div>
                <div className="settings__footer">

                </div>
            </Settings>
            <Settings active={modalActiveSettings} setActive={setModalActive}>
                <div className="settings__header">
                    <p className="settings__tittle">Settings</p>
                </div>
                <div className="settings__content">
                    <div className="settings__item">
                        <p className="theme-tittle">Choice Theme :</p>
                        <button className="theme-btn light" onClick={handleLightThemeClick}>Light</button>
                        <button className="theme-btn dark" onClick={handleDarkThemeClick}>Dark</button>
                        <button className="theme-btn blue" onClick={handleBlueThemeClick}>Blue</button>
                    </div>
                    <div className="settings__item">
                        <p className="theme-tittle">Choose language :</p>
                        <button className="theme-btn">RU</button>
                        <button className="theme-btn">EN</button>
                        <button className="theme-btn">CN</button>
                    </div>
                </div>
                <div className="settings__footer">
                    <button className="footer-btn">Support</button>
                    <button className="footer-btn">Logout</button>
                </div>
            </Settings>
        </div>
    )
}

export default Header;