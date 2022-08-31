import React, { useState } from "react";
import './FriendsStorage.scss';

const FriendsStorage = (props) => {




    const [show] = useState(true);
    const { friendList = [] } = props;
    let friendsItem = document.getElementById('friends-items')

    

    return (
        <div >
            {show ?
                <div className='items-wrapper'>
                    {
                        friendList.map((obj) => {
                            return (
                                <>
                                    <li className={`friends-item friends-${obj.status.online}`}>
                                        <img className="friends__img" src={obj.img} alt="" />
                                        <div className="item-info">
                                            <span className="friends__name">{obj.name}</span>
                                            <marquee className="friends__game">{obj.status.game}</marquee>
                                        </div>
                                    </li>
                                </>
                            )

                        })
                    }
                </div>
                : <></>}
        </div >
    )
}

export default FriendsStorage;