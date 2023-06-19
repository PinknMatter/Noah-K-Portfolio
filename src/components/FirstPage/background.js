import React, { useEffect } from "react";
import "./../../Styles/FirstPage/Background.css";

function Background() {
    useEffect(() => {
        function fillSvgPaths() {
            const paths = document.querySelectorAll('path');
            const footer = document.getElementById('footer');
            const landingImage = document.getElementById('landing');
            const footerHeight = footer ? footer.offsetHeight : 0;
            const landingImageHeight = landingImage ? landingImage.offsetHeight : 0;

            const scrollHeight = document.documentElement.scrollHeight - footerHeight;
            const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
            const scrollPercentage = scrollTop / (scrollHeight - document.documentElement.clientHeight);

            paths.forEach(path => {
                const pathLength = path.getTotalLength();
                path.style.strokeDasharray = `${pathLength} ${pathLength}`;
                path.style.strokeDashoffset = pathLength.toString();
                const drawLength = pathLength * scrollPercentage;
                path.style.strokeDashoffset = (pathLength - drawLength).toString();
            });
        }



        document.addEventListener('scroll', fillSvgPaths);

        return () => {
            document.removeEventListener('scroll', fillSvgPaths);
        };
    }, []);

    return (
        <div className="bgcontainer">
            <svg className="bgsvg" viewBox="0 0 1628 4050" preserveAspectRatio="xMidYMin meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M842 0V389H1622V1642H5V2697H1622V3831.5H958V4049.5" stroke="#898989" strokeWidth="5" />
            </svg>
        </div>
    );
}

export default Background;
