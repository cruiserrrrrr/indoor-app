import React from "react";
import './GameSlider.scss';
import InfiniteCarousel from 'react-leaf-carousel';
import GameSliderItem from "./GameSliderItem/GameSliderItem";

const GameSlider = () =>{
  return(
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          showSides:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          sideSize: 1
        },
      },
      {
        breakpoint: 670,
        settings: {
          showSides:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          sideSize: 1
        },
      },
      {
        breakpoint: 768,
        settings: {
          showSides:true,
          slidesToShow: 0,
          slidesToScroll: 1,
          sideSiz: 1
        },
      },
      {
        breakpoint: 930,
        settings: {
          showSides:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          sideSize: 1
        },
      },
      {
        breakpoint: 1101,
        settings: {
          showSides:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          sideSize: 1
        },
      },
      {
        breakpoint: 1201,
        settings: {
          showSides:true,
          slidesToShow: 2,
          slidesToScroll: 1,
          sideSize: 1
        },
      },
    ]}
    swipe={true}
    dots={false}
    sidesOpacity={1}
    showSides={true}
    sideSize={.5}
    autoCycle={false}
    slidesToScroll={1}
    cycleInterval={50000}
    slidesToShow={3}
    scrollOnDevice={true}
  >
    <div>
        <GameSliderItem name='Dota 2' star='⭐⭐⭐⭐⭐' status='Popular' users='254.1k User' img='dota' link='https://store.steampowered.com/app/570/Dota_2/'/>
    </div>

    <div>
        <GameSliderItem name='GTA V' star='⭐⭐⭐⭐⭐' status='Popular' users='120.01k User' img='gta' link='https://store.rockstargames.com/ru/game/buy-gta-v'/>
    </div>

    <div>
        <GameSliderItem name='Minecraft' star='⭐⭐⭐' status='Challange' users='56.6k User' img='minecraft' link='https://www.minecraft.net/ru-ru'/>
    </div>

    <div>
        <GameSliderItem name='Mortal Kombat' star='⭐⭐⭐⭐' status='New' users='32k User' img='mk' link='https://mortalkombat.com/ru-RU/purchase'/>
    </div>
    <div>
        <GameSliderItem name='Stray' star='⭐⭐⭐⭐⭐' status='New' users='15.1k User' img='stray' link='https://metarankings.ru/images/uploads/2021/07/stray-boxart-cover.jpg'/>
    </div>
    
  </InfiniteCarousel>
  )
}

export default GameSlider;
