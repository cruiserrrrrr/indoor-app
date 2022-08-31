import React from "react";
import Header from "../../Components/Header/Header";
import Gamelist from "./GameList/Gamelist.jsx";
import './Library.scss';
import SelectDataGame from "../../Utils/SelectDataGame.js";
import SideBarMobile from "../../Components/SideBarMobile/SideBarMobile";


const Library = () => {


    return (
        <div className="library-wrapper">
            <Header />
            <div className="library-items__wrapper">
                <ul className="library-items">
                    <Gamelist list={SelectDataGame} />
                </ul>
            </div>
            <SideBarMobile/>
        </div>
    )
}

export default Library;