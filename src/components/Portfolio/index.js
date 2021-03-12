import React from 'react';
import ProjectCard from '../ProjectCard'
import projectList from '../../projects.json';

function Portfolio() {
    return(
        <section className="flex flex-wrap flex-auto">
            {projectList.map((project) => (
                <ProjectCard 
                  name={project.name}
                  image={project.image}
                  deployed={project.deploy}
                  github={project.github}
                  key={project.name}
                />    
            ))}
        </section>
    )
}

export default Portfolio;