import React from 'react';

function ProjectCard(props) {
    return (
        <div className="card" key={props.name}>
            <div className="img-container">
                <img alt={props.name} src={require(`../../assets/${props.name}.PNG`).default} />
            </div>
            <div className="content">
                <ul className="text-black">
                    <li className="text-black">
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li className="text-black">
                        <a className="text-black" href={props.deployed} target="_blank" rel="nonreferrer"><strong>Deployed Link</strong></a>
                    </li>
                    <li className="text-black">
                        <a href={props.github} target="_blank" rel="nonreferrer"><strong>GitHub Repository</strong></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard