import "../../Styles/FirstPage/Dsecond.css"
import ReactPlayer from 'react-player/youtube'
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitText from 'split-text-js';
import HoverEffect from "../Moduler/HoverEffect";
import "../Moduler/HoverEffect.css"



function Dsecond() {
  const [youtubeID] = useState('R3MzK1XR4HU');
  const titleRef = useRef(null);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.intersectionRatio > 0) {
        const splitbefore = titleRef.current;
        const split = new SplitText(splitbefore);
        gsap.from(split.chars, {
          duration: 0.5,
          opacity: 0,
          y: 50,
          stagger: 0.1,
          ease: "back.out(0.7)",
        });
      }
    })
  );

  useEffect(() => {
    const { current: observerInstance } = observer;
    if (titleRef.current) {
      observerInstance.observe(titleRef.current);
    }
    return () => {
      if (titleRef.current) {
        observerInstance.unobserve(titleRef.current);
      }
    };
  }, []);



  return (
    <div className="youContainer">
      <div className="youTitle">
        <p5 className="p3" ref={titleRef}>Showreel 2023</p5>
      </div>

      <div className="player-wrapper">

        <ReactPlayer
          className='youtube-player'
          url={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
          width='100%'
          height='100%'
        />

      </div>




    </div >

  );
}

export default Dsecond;