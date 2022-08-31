import React  from "react";
import './Setting.scss';


const Settings = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
             <div className={active ? "settings__container active" : "settings__container"} onClick={e => e.stopPropagation()}>
                <div className="close-btn__wrapper"><button className="close-btn" onClick={() => setActive(false)}>Close</button></div>
                {children}
             </div>
         </div>
    )
}

export default Settings;