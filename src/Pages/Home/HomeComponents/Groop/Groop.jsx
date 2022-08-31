import React from "react";
import './Groop.scss';



const Groop = () =>{
    return(
        <div className="groop-wrapper">
            <div className="groop-header">
                <div className="groop__tittle">
                    <p>Top Channel</p>
                </div>
                <div className="groop__refresh">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.836667 2.79921C1.00572 2.32148 1.29304 1.89435 1.67182 1.55769C2.0506 1.22103 2.50849 0.985803 3.00276 0.873967C3.49704 0.762132 4.01158 0.777328 4.4984 0.918139C4.98521 1.05895 5.42842 1.32079 5.78667 1.67921L7.33333 3.13255M0 4.46588L1.54667 5.91921C1.90492 6.27764 2.34812 6.53948 2.83494 6.68029C3.32175 6.8211 3.8363 6.8363 4.33057 6.72446C4.82484 6.61263 5.28273 6.3774 5.66151 6.04074C6.04029 5.70408 6.32761 5.27695 6.49667 4.79921" stroke="white" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="groop-content">

                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/lv.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">Louis Vuitton</p>
                            <p className="groop__followers">471k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.7</p>
                    </div>
                </div>

                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/robf.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">Robert Fox</p>
                            <p className="groop__followers">370k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.5</p>
                    </div>
                </div>

                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/mc.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">McDonald's</p>
                            <p className="groop__followers">471k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.3</p>
                    </div>
                </div>
                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/robf.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">Robert Fox</p>
                            <p className="groop__followers">370k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.5</p>
                    </div>
                </div>

                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/apple.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">Apple</p>
                            <p className="groop__followers">471k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.3</p>
                    </div>
                </div>
                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/robf.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">Robert Fox</p>
                            <p className="groop__followers">370k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.5</p>
                    </div>
                </div>

                <div className="groop__item">
                    <div className="groop__info">
                        <img className="groop__img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/groop/mc.png?raw=true" alt="" />
                        <div className="info-wrapper">
                            <p className="groop__name">McDonald's</p>
                            <p className="groop__followers">471k Followers</p>
                        </div>
                    </div>
                    <div className="groop-rating">
                        <p>⭐ 4.3</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Groop;