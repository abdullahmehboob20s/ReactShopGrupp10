import React from 'react';
import home from '../components/styling/home.module.css';

function Home() {
  return (
    <div className={home.homeContainer}>
     hejsan från Home 
      <video className={home.video}>
        <source autoPlay muted loop src='../video/ShortFilm-Porsche.mp4' type='video/mp4' />
      </video>

    </div>
  )
}

export default Home