import React from "react";
import './Chat.scss';

// let express = require('express');
// let app = express();
// let serverMasage = require('http').createServer(app);
// let socketIo = require('socket.io').listen(serverMasage);


// serverMasage.listen(3000);

// app.get('/', function(request, respons){
//     respons.sendFile(__dirname + '')
// });








const Chat = () =>{
    return(
        <div className="chat-wrapper">
            <div className="chat__header"> 
                <div>
                    <p className="chat__tittle">Chat List</p>
                </div>
                <div className="attach-wrapper">
                    <button className="chat__attach">+</button>
                </div>
                
            </div>
            <div className="chat__massage">

                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie7.png?raw=true" alt="" />
                            <p>Jacob Jones</p>
                        </div>
                        <div className="item__time"><p>04:32:45</p></div>
                    </div>
                    <div className="item-content">
                        <p>Instrument Classification must be entered for the given instrument</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/6.png?raw=true" alt="" />
                            <p>Jones Smith</p>
                        </div>
                        <div className="item__time"><p>04:52:12</p></div>
                    </div>
                    <div className="item-content">
                        <p>See the Link: www.dribbble.com/mostafijur100</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie8.png?raw=true" alt="" />
                            <p>Thama Alva</p>
                        </div>
                        <div className="item__time"><p>05:02:23</p></div>
                    </div>
                    <div className="item-content">
                        <p>Can you recived any gift entered for the given instrument</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie7.png?raw=true" alt="" />
                            <p>Jacob Jones</p>
                        </div>
                        <div className="item__time"><p>05:24:16</p></div>
                    </div>
                    <div className="item-content">
                        <p>Instrument Classification must be entered for the given instrument</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/6.png?raw=true" alt="" />
                            <p>Jones Smith</p>
                        </div>
                        <div className="item__time"><p>05:43:51</p></div>
                    </div>
                    <div className="item-content">
                        <p>See the Link: www.dribbble.com/mostafijur100</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie8.png?raw=true" alt="" />
                            <p>Thama Alva</p>
                        </div>
                        <div className="item__time"><p>05:46:15</p></div>
                    </div>
                    <div className="item-content">
                        <p>Can you recived any gift entered for the given instrument</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie7.png?raw=true" alt="" />
                            <p>Jacob Jones</p>
                        </div>
                        <div className="item__time"><p>06:18:49</p></div>
                    </div>
                    <div className="item-content">
                        <p>Instrument Classification must be entered for the given instrument</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/6.png?raw=true" alt="" />
                            <p>Jones Smith</p>
                        </div>
                        <div className="item__time"><p>06:59:01</p></div>
                    </div>
                    <div className="item-content">
                        <p>See the Link: www.dribbble.com/mostafijur100</p>
                    </div>
                </div>
                <div className="massage-item">
                    <div className="item-header">
                        <div className="item__name">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/indoor/ie8.png?raw=true" alt="" />
                            <p>Thama Alva</p>
                        </div>
                        <div className="item__time"><p>07:14:42</p></div>
                    </div>
                    <div className="item-content">
                        <p>Can you recived any gift entered for the given instrument</p>
                    </div>
                </div>

            </div>
            <div className="chat__send">
                <input className="send__massage" type="text" name="" id="" placeholder="Taxt massage..."/>
                <div className="btn-wrapper">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33335 5V9.16667H1.66669V5" stroke="#FF891D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.16665 2.91664H0.833313V4.99997H9.16665V2.91664Z" stroke="#FF891D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 9.16664V2.91664" stroke="#FF891D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.99998 2.91669H3.12498C2.84871 2.91669 2.58376 2.80694 2.38841 2.61159C2.19306 2.41624 2.08331 2.15129 2.08331 1.87502C2.08331 1.59875 2.19306 1.3338 2.38841 1.13845C2.58376 0.943102 2.84871 0.833355 3.12498 0.833355C4.58331 0.833355 4.99998 2.91669 4.99998 2.91669Z" stroke="#FF891D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 2.91669H6.875C7.15127 2.91669 7.41622 2.80694 7.61157 2.61159C7.80692 2.41624 7.91667 2.15129 7.91667 1.87502C7.91667 1.59875 7.80692 1.3338 7.61157 1.13845C7.41622 0.943102 7.15127 0.833355 6.875 0.833355C5.41667 0.833355 5 2.91669 5 2.91669Z" stroke="#FF891D" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16665 0.833336L4.58331 5.41667" stroke="#FF158B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.16665 0.833336L6.24998 9.16667L4.58331 5.41667L0.833313 3.75L9.16665 0.833336Z" stroke="#FF158B" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>                
            </div>
        </div>
    )
}

export default Chat;