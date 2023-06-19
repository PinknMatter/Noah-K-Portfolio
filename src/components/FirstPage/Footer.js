import React from 'react';
import '../../Styles/FirstPage/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div>
                    <h4>Socials</h4>
                    <ul>
                        <li>Email</li>
                        <li>Instagram</li>
                        <li>Linkedln</li>
                        <li>Github</li>
                    </ul>
                </div>
                <hr className="footer-line" />
                <div>
                    <h4>Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Work</li>
                        <li>Resume</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <div>
                <p4 className="footer-paragraph">© 2023 Noah Kornberg. All rights reserved.</p4>
            </div>
        </footer>
    );
};

export default Footer;
