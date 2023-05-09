import "../../Styles/Resume/ResumeInfo.css";
import React, { useState, useEffect } from 'react';
import resume from "../../assets/Noah_Kornberg_Resume.pdf"



function ResumeInfo() {


    return (
        <div className="Rcontainer">
            <div className="pdf">
                <iframe className="pdfI" src={resume}> </iframe>
                <a href={resume} download="Noah_Kornberg_Resume.pdf">
                    <button className="button_pdf">Download</button>
                </a>

            </div>

        </div>
    );
}

export default ResumeInfo;
