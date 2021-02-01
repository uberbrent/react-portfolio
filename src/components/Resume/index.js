import React from 'react';

function Resume() {
    return(
        <section className="grid grid-cols-2">
            <div className="col-span-1">
                <h1 className="resume-head text-center font-black">Resume</h1>
                <a className="resume-link text-center underline m-5" href="../../assets/brent-johnson-resume.pdf" download>Download the resume here</a>
                <div className="m-5 resume-list-head">
                    Front-End Proficiencies
                </div>
                <div className="m-5">
                    <ul className="resume-list">
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Client-side Javascript
                        </li>
                        <li>
                            Web and Third Party API
                        </li>
                        <li>
                            Distributed Version Control Systems
                        </li>
                    </ul>
                </div>
                <div className="m-5 resume-list-head">
                    Back-End Proficiencies
                </div>
                <div className="m-5">
                    <ul className="resume-list">
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            SQL and noSQL
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Progressive Web Applications
                        </li>
                        <li>
                            Object Oriented Programming and Object Relational Mapping
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;