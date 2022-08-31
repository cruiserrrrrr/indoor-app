import React, { useState } from "react";
import Chat from "./HomeComponents/Chat/Chat";
import GameSlider from "./HomeComponents/GameSlider/GameSlider";
import GameView from "./HomeComponents/GameView/GameView";
import Groop from "./HomeComponents/Groop/Groop";
import Header from '../../Components/Header/Header'
import NewGame from "./HomeComponents/NewGame/NewGame";
import SideBarMobile from "../../Components/SideBarMobile/SideBarMobile";
import './Home.scss';
import RightBar from "../../Components/RightBar/RightBar";










const Home = () => {

    const [modalActiveSettings, setModalActive] = useState(false);




    return (
        <div className="home-container">
            <Header />
            <div className="home-wrapper">
                <div className="home-shop">
                    <NewGame />
                    <GameSlider />
                    <div className="home-game-wrapper">
                        <GameView name='Overwatch' tplayers='40k+' nplayers='12k+' avg='$34.00' session='2h - 4h' status='High' link='https://icon-library.com/images/overwatch-16x16-icon/overwatch-16x16-icon-24.jpg' />
                        <GameView name='Apex Legends' tplayers='43k+' nplayers='15k+' avg='$40.00' session='2h - 5h' status='High' link='https://img.utdstc.com/icon/2f3/476/2f347694849eccecfd0f07e95ea333c74ced5893122436205cea0901108b9ca6:200' />
                    </div>
                </div>
                <div className="home-social" id="leftbat">
                    <Chat />
                    <Groop />
                </div>
                <div className="rightbar-obtn-wrapper">
                    <button className="rightbar-obtn" onClick={() => setModalActive(true)}></button>
                </div>
                <SideBarMobile />
            </div>
            <RightBar active={modalActiveSettings} setActive={setModalActive}>
                <Chat />
                <Groop />
            </RightBar>
        </div>
    )
}

export default Home;