import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';
import "../../Styles/FirstPage/LandingAnimation.css";
import { useEffect } from 'react';

function LandingAnimation() {

    useEffect(() => {
        const titles = gsap.utils.toArray('p')
        const tl = gsap.timeline({ repeat: -1, repeatDelay: -0 / 8 });
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);

            tl
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    stagger: 0.05
                }, "<")

                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -50,
                    rotateX: 90,
                    stagger: 0.05
                }, "<2")

        }, [])
    });

    return (
        <div className="container">
            <div className="text-wrapper">
                <p>UI DESIGNER</p>
                <p>3D ARTIST</p>
                <p>UX DESIGNER</p>
                <p>FRONT END DEV</p>
                <p>IXD DESIGNER</p>
                <p>VIDEO EDITOR</p>
                <p>PIPELINE TD</p>

            </div>
        </div>
    );
}

export default LandingAnimation;