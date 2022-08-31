import React, { useState } from "react";
import './Gamelis.scss'

const Gamelist = (props) => {

    const [show] = useState(true);
    const {list = []} = props;
    return (
        <div >
            {show ?
                <div className='items-wrapper'>
                    {
                        list.map((obj, index) => {
                            return (
                                    <li className="library-item">
                                        <span className="item__name">{obj.name}</span>
                                        <img className="item__img" src={obj.img} alt="" />
                                        <span className="item__status"></span>
                                        <button className="item__btn">{obj.status}</button>
                                    </li>
                            )

                        })
                    }
                </div>
                : <></>}
        </div >
    )
}

export default Gamelist;