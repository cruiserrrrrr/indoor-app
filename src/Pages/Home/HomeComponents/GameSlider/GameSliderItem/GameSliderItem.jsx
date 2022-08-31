import React from "react";
import './GameSliderItem.scss';



const GameSliderItem = props =>{
    const {img, status, name, users, star, link} = props;
    return(
        <div className={`slider-item slider-item__${img}`}>
            <div className="item__header">
                <p className="item__status">{status}</p>
            </div> 
            <div className="item__footer">
                <div className="item__info">
                    <p className="item__name">{name}</p>
                    <p className="item__users">{users}</p>
                    <p className="item__star">{star}</p>
                </div>
                <div className="item-download">
                    <button className="item-btn" >&#8595;</button>
                </div>
            </div>
        </div>
        // onClick={() => window.location.href=link}
    )
}

export default GameSliderItem;