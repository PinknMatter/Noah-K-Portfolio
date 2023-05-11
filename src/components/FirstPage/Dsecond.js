import "../../Styles/FirstPage/Dsecond.css"
 import {useState } from "react";
import ReactPlayer from 'react-player/youtube'



function Dsecond() {
    const [youtubeID] = useState('R3MzK1XR4HU');

   

    return (
        <div className="youContainer">
 <div className="youTitle">
            Showreel 2023
      </div>
        <div className = "player-wrapper">
        <ReactPlayer
          className='youtube-player'
          url={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
          width='100%'
          height='100%'
        />
 
        </div>

        </div>

    );
}

export default Dsecond;