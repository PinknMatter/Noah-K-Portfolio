import React from 'react';
import '../../Styles/Work/video.css';
import Navbar from '../FirstPage/Navbar';
import Background_color from '../FirstPage/background_color';
import Footer from '../FirstPage/Footer';
import ReactPlayer from 'react-player';

function Video() {
    return (
        <div>
            <Navbar></Navbar>
            <Background_color />


            <div className="portfolio-page">
                <h4 className="portfolio-title">22:06:43</h4>
                <div className="portfolio-video">
                    <ReactPlayer className='youtube-player'
                        url="https://youtu.be/XZQ8p7MYy_g"
                        width="100%"
                        height="100%"

                    />
                </div>
                <p5 className="portfolio-statement">
                    22:06:43 is a mesmerizing visual journey that explores the psychedelic
                    experiences of a woman after ingesting a hallucinogenic drug. Using a mix of AI, mixed media, stop motion,
                    and digital editing, the video takes viewers on a surreal and immersive trip through the character's consciousness.
                    Starting slowly, the pace of the video gradually increases as the character's psychedelic experience intensifies,
                    with the visuals becoming more vivid, saturated, and abstract. The video ends with the character coming to terms
                    with her existence in a tranquil clip, providing a moment of reflection and contemplation for the viewer. Overall,
                    22:06:43 offers a thought-provoking and visually stunning exploration of the nature of consciousness and the human experience.
                </p5>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Video;
