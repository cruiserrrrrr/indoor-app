import React from "react";
import './NewGame.scss';

const NewGame = (props) =>{
    // const [] = props
    return(
        <div className="ng-container">
            <div className="newgame-wrapper">
                <div className="newgame-content">
                    <div className="newgame__info">
                        <p className="ng__text">New game here</p>
                        <p className="ng__tittle">Games are games, whether <span>indoor or outdoor.</span></p>
                        <button className="ng__btn">Start Now</button>
                    </div>
                    <div className="newgame__game">
                        
                    </div>
                </div>      
            </div>
            <div className="ng-back">

            </div>
        </div>
        
    )
}

export default NewGame;