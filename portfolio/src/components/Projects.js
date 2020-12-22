import React from 'react';
import PROJECTS from '../data/projects'

const Project = (props) =>{
    const {title,image,description,link} = props.project
    return (
        <div style={{display:'inline-block', width: 300, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{width:200,height:120}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>

    );
}

const Projects =()=>{
    return(
        <div>
            <h2>Highlighed Projects</h2>
            <div>
                {
                    PROJECTS.map((project)=>{
                        return(
                            <Project key={project.id} project={project}/>
                        );
                    })
                }
            </div>
        </div>

    );
}
export default Projects;
