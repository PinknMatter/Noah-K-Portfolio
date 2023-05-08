import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./../../Styles/FirstPage/navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Noah Kornberg</h3>


            <nav ref={navRef}>
                <a href="/#">Work</a>
                <a href="/#">Resume</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
            <button className="nav-btn nav-btn-bars" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;