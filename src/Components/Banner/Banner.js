import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "../../axios/axios";
import { API_KEY, imageUrl } from "../../constants/constants";



function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => 
  {
  
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `https://static.hidive.com/slides/2021/10.%20October/HD_Carousel_Fall21Simul_Neon.gif`,
      }}
    >
      <div className="content">
        
        <div className="banner_buttons">
          <button className="button">Play Now</button>
          <button className="button">My Watchlist</button>
        </div>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
