import React from 'react';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={require("../../assets/goodBrent.jpg").default}></img>
            <div>
                <p>
                    Attended the University of Wisconsin - Coding Boot Camp for full stack web development. Has an extensive background in sales and customer service, including working knowledge of the transporation, health care, and retail industry. Previous work experience was with United Healthcare in claims and customer benefits, Schneider Transportation in Logistics Sales.
                    Sharp and quick to adapt, willing to tackle any problem with enthusiasm, solo or as part of a working group. "You have to look through the rain to see the rainbow." -Karen White
                </p>
            </div>
        </div>
    )
}

export default About;