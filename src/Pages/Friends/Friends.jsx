import React from "react";
import Header from "../../Components/Header/Header";
import FriendsStorage from "./FriendsStorage/FriendsStorage.jsx"
import './Friends.scss';
import FriendsData from '../../Utils/FriendsData.js';
import SideBarMobile from "../../Components/SideBarMobile/SideBarMobile";


const Friends = () =>{

    return(
        <div className="friends-wrapper">
            <Header/>
            <div className="friends-container">
                <FriendsStorage friendList={FriendsData}/>
            </div>
            <SideBarMobile/>
        </div>
    )
}

export default Friends;