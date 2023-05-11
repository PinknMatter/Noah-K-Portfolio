import "../../Styles/FirstPage/Dsecond.css";
import YouTube from 'react-youtube';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import SplitText from 'split-text-js';
import SlideInOnScroll from "./SlideInOnScroll";

function Dsecond() {
    const videoId = 'R3MzK1XR4HU';
    const opts = {
        height: '720',
        width: '1280',
    }

    const titleRef = useRef(null);
    const observer = useRef(
        new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.intersectionRatio > 0) {
                const splitbefore = titleRef.current;
                const split = new SplitText(splitbefore);
                gsap.from(split.chars, {
                    duration: 1,
                    opacity: 0,
                    y: 50,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
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
            <div className="youTitle" >
                <p3 className="p3" ref={titleRef}>Showreel 2023</p3>
            </div>
            <div className="youtube">
                <YouTube className="video" videoId={videoId} opts={opts} />
            </div>
        </div>
    );
}

export default Dsecond;
