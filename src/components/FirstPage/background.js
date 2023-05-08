import "./../../Styles/FirstPage/Background.css";
import React from "react";
import { useEffect } from "react";


function Background() {

    useEffect(() => {

        console.log("herin useEffect");
        let paths = document.querySelectorAll('path');


        document.addEventListener('scroll', fillSvgPaths)

        function fillSvgPaths() {


            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            for (var i = 0; i < paths.length; i++) {
                let path = paths[i];


                let pathLength = path.getTotalLength();

                path.style.strokeDasharray = pathLength - 800;
                path.style.strokeDashoffset = pathLength;

                let drawLength = pathLength * scrollPercentage;

                path.style.strokeDashoffset = pathLength - drawLength;
            }
        }

    }, [])


    return (
        <div className="bgcontainer" >
            <svg className="bgsvg" width="1628" height="4050" viewBox="0 0 1628 4050" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg width="1627" height="4050" viewBox="0 0 1627 4050" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M842 0V389H1622V1642H5V2697H1622V3831.5H958V4049.5" stroke="#898989" stroke-width="10" stroke-dasharray="30 30" />
                </svg>
            </svg>






        </div >
    );
}

export default Background;