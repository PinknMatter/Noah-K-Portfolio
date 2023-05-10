import Featured_projects from "./Featured_projects";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import SplitText from 'split-text-js';
import "../../Styles/FirstPage/Dthird.css"

function Dthird() {
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
        observer.current.observe(titleRef.current);
        return () => {
            observer.current.unobserve(titleRef.current);
        };
    }, []);
    return (
        <div className="feaContainer">
            <div className="feaTitle">
                <p4 className="p4" ref={titleRef}>Featured Projects</p4>
            </div>
            <div>
                <Featured_projects></Featured_projects>
            </div>
        </div>
    );
}

export default Dthird;