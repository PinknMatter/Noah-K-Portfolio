import "../../Styles/FirstPage/Dsecond.css"
import YouTube from 'react-youtube';


function Dsecond() {
    const videoId = 'R3MzK1XR4HU';
    const opts = {
        height: '720',
        width: '1280',


    }

    return (
        <div className="youContainer">
            <div className="youTitle">
                Showreel 2023
            </div>

            <div className="youtube">
                <YouTube className="video" videoId={videoId} opts={opts} />
            </div>
        </div>


    );
}

export default Dsecond;