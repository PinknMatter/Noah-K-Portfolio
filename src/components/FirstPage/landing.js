import React from "react";
import videoBg from ".././../assets/videobg.mp4";
import ".././../Styles/FirstPage/Landing.css";
import LandingAnimation from "./LandingAnimation.js";


function Landing() {



    return (
        <div className="main">
            <video src={videoBg} autoPlay loop />

            <div className="content">
                <h1>Noah Kornberg</h1>
                <div className="container">
                    <div className="text-wrapper">
                        <LandingAnimation />

                    </div>
                </div>
            </div>

        </div>


    );
}

export default Landing;