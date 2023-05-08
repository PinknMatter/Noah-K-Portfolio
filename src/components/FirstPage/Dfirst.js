import "../../Styles/FirstPage/Dfirst.css";
import image from "../../assets/selfie.jpg";
import Dfirst_anime from "./Dfirst_anime";
import { useEffect } from "react";

function Dfirst() {
    useEffect(() => {
        const keywords = document.querySelectorAll('.keyword');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        keywords.forEach(keyword => {
            observer.observe(keyword);
        });



    });


    return (
        <div className="Container">
            <div className="Grid">
                <div><img src={image} /></div>
                <div>
                    <div className="title"><Dfirst_anime /></div>
                    <li className="para">I am a <span class="keyword">highly motivated</span> student
                        with a diverse skill set of technical
                        expertise and artistic <span class="keyword">creativity</span>, I
                        bring a unique approach to all of my
                        projects.  I am <span class="keyword">passionate</span> about creative
                        storytelling and skilled in motion design,
                        VFX, video and photo editing,
                        web development, and programming.
                        I thrive in challenging environments
                        and enjoy collaborating with others
                        to achieve shared goals.  Whether working
                        independently or as part of a team, I am
                        dedicated to delivering <span class="keyword">high-quality results</span> and exceeding expectations.</li>

                </div>

            </div>
        </div>
    );
}

export default Dfirst;