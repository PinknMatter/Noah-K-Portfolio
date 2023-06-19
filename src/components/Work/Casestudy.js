import React from 'react';
import '../../Styles/Work/Casestudy.css';
import Navbar from '../FirstPage/Navbar';
import Background_color from '../FirstPage/background_color';
import Footer from '../FirstPage/Footer';
import frame26 from "../../assets/images/Frame26.png";
import frame262 from "../../assets/images/frame262.png"
import calendar from "../../assets/images/Calendar.png";
import trips from "../../assets/images/trips.png";
import trips2 from "../../assets/images/trips2.png"
import ImageSlider from './ImageSlider';
import empathy from "../../assets/images/empathy.png";
import flow from "../../assets/images/flow.png";

const Casestudy = () => {
    return (
        <div>

            <Navbar />
            <Background_color />


            <div className="case-study-container">
                <h1 className="case-study-title">Case Study: Concordia Ski and Snowboard Club Website Redesign</h1>
                <div id="image-container">
                    <ImageSlider topImage={frame26} bottomImage={frame262} />
                    <ImageSlider topImage={trips} bottomImage={trips2} />


                </div>

                <section className="case-study-section">
                    <h2 className="case-study-heading">The Problem</h2>
                    <p5 className="case-study-paragraph">
                        I have chosen to redesign the Concordia Ski and Snowboard Club (CSSC) website, which, despite the club's popularity, isn't meeting the community's needs. I identified several issues with the existing Squarespace site: confusing navigation, unnecessary duplicate pages, irrelevant content on the front page, and an absence of clear social media links. Additionally, the website doesn't evoke a sense of community, which is vital to a club like CSSC. The black and white color scheme doesn't represent the club's vibrancy, and there's a lack of information about the club's events. To address these issues, I set forth four design principles: easy access, community, outreach, and personalization                    </p5>
                </section>

                <section className="case-study-section">
                    <h2 className="case-study-heading">Research and Data</h2>
                    <p5 className="case-study-paragraph">
                        To better understand the website's problems, I started by flow mapping it using Figma. I then conducted interviews with club members, executives, and uninvolved parties. These interviews revealed a need for simpler navigation, clear pricing and trip information, and stronger community features on the website. I also received suggestions to use email for official communication and to improve the site's aesthetic appeal with features like a calendar and a shared playlist.

                        Using empathy mapping and affinity diagramming, I found that both experienced members and beginners faced challenges with the website. While experienced members needed better trip listings and multimedia from past trips, beginners sought more accessible information and a stronger sense of community. These findings reaffirmed my design principles.                    </p5>
                </section>

                <div id="image-container">
                    <img src={empathy} />
                    <img src={flow} />

                </div>

                <section className="case-study-section">
                    <h2 className="case-study-heading">The Solution</h2>
                    <p5 className="case-study-paragraph">
                        I began the redesign process with a prototype that, though colorful and creative, ended up being too cluttered and ineffective in displaying essential information. However, iterative improvements led me to a cleaner and more user-friendly design, which I dubbed the "Clean" iteration. This version included a new navigation bar, an 'upcoming trips' section with detailed virtual tickets, a featured merchandise section, a contact form, and a comprehensive calendar.

                        I also developed an alternative "Grunge" version that added more personality to the site through handwritten texts and other design elements. The feedback I received favored the "Grunge" iteration, especially among club members and executives. The final design was a successful blend of "Grunge" and "Clean," delivering an informative, community-oriented platform for all members. Although I anticipate some implementation challenges due to Squarespace limitations, I plan to create a Squarespace-friendly version in the future, using the knowledge and design principles I have laid out.                    </p5>
                </section>

                <section className="case-study-section">
                    <h2 className="case-study-heading">Conclusion</h2>
                    <p5 className="case-study-paragraph">
                        Through this process, I found the redesign to be quite successful in fulfilling all design principles. The redesigned site now effectively serves as a community hub for both prospective and executive members. Despite the potential limitations of Squarespace, my aim is to implement this design in the future, adhering to the constraints of the platform while preserving the core design principles and concepts. This project not only allowed me to improve a platform that serves a community I'm passionate about, but it also taught me valuable lessons in user research, iterative design, and real-world application of design principles.                    </p5>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Casestudy;
