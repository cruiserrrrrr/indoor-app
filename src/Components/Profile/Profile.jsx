import React, { useRef, useState, useEffect } from "react";
import './Profile.scss';


const Profile = (props) =>{

    const {list = [], placeholder = '', background, img} = props
  
  const [selectedValue, setSelectedValue] = useState({ value: '' })
  const [show, setShow] = useState(false)

  const selectEl = useRef()

  useEffect(() => {
    const onClick = e => selectEl.current?.contains(e.target) || setShow(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
    }, []);

  useEffect(() => {
    setShow(false)
  }, [selectedValue])

  return (
    <div className="dd_wrapper" ref={selectEl}>
        {show ?
        <div className='dropdown-content'>
          {
            list.map((obj, index) => {
              return (
                <a
                  onClick={() => setSelectedValue({value: obj.value})} 
                  className={`dropdown_items ${background}`}
                  key={obj.value}
                  id={obj.value}
                >
                    <img src={`${obj.img}`} alt="" />
                  {obj.value}
                </a>
              )

            })
          }
        </div>
        : <></>}
        <div onClick={() => setShow(true)}  className='custom-dropdown'>
            <img src={`${img}`} alt="" />
            <label className={selectedValue.value ? '' : 'placeholder'}>
              {selectedValue.value ? selectedValue.value : `${placeholder}`}
            </label>
            <i className="icon-chev-down">
            <svg className="asd" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91" />
            </svg>
            </i>
        </div>
      
    </div>
  )














    // return(
    //     <div className="profile-wrapper">
    //           <div className="container">
    //             <div className="option">
    //                 <div  className="option__item">
    //                     <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/profile.png?raw=true"/>
    //                     Thomas
    //                 </div>
    //                 <div  className="option__item">
    //                     <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/profile.png?raw=true"/>
    //                     Jacob
    //                 </div>
    //                 <div  className="option__item">
    //                     <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/profile.png?raw=true"/>
    //                     Jones
    //                 </div>
    //             </div>
    //             <input type="text" className="profile__dropdowm" placeholder="Choice you profile"/>
    //           </div>
    //     </div>
    // )
}

export default Profile;