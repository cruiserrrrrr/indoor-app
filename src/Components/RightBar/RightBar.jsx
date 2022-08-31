import React from "react";
import './RightBar.scss';


const RightBar = ({ active, setActive, children }) => {
    return (
        <div className={active ? "rightbar_wrapper active" : "rightbar_wrapper"}>
            <div className="rightbar-content">
                <div className="close-btn__barr" onClick={() => setActive(false)}>
                    <button className="close-btnn" onClick={() => setActive(false)}></button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default RightBar;