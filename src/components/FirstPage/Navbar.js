import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./../../Styles/FirstPage/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <Link to="/" className="headerLink"> Noah Kornberg</Link>


            <nav ref={navRef}>
                <Link to="/#" className="pLink">Work</Link>
                <Link to="/Resume" className="pLink">Resume</Link>
                <Link to="/#" className="pLink">About</Link>
                <Link to="/#" className="pLink">Contact</Link>
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