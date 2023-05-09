import Navbar from "../../components/FirstPage/Navbar";
import Landing from '../../components/FirstPage/landing';
import Background from '../../components/FirstPage/background';
import Dfirst from '../../components/FirstPage/Dfirst';
import Dsecond from '../../components/FirstPage/Dsecond';
import SmoothScroll from '../../components/FirstPage/Smoothscroll';
import Background_color from '../../components/FirstPage/background_color';

function Home() {
    return (
        <div>
            <Landing></Landing>
            <Navbar />
            <Background_color />
            <SmoothScroll>
                <Background />
                <Dfirst></Dfirst>
                <Dsecond></Dsecond>
            </SmoothScroll>
        </div>
    );
}

export default Home;