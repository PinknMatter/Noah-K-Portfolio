import Footer from "../FirstPage/Footer";
import Navbar from "../FirstPage/Navbar";
import SmoothScroll from "../FirstPage/Smoothscroll";
import ResumeInfo from "../Resume/ResumeInfo";

function Resume() {
    return (

        <div id="resume">
            <SmoothScroll>
                <Navbar />

                <ResumeInfo />
                <Footer />
            </SmoothScroll>











        </div>

    );
}

export default Resume;