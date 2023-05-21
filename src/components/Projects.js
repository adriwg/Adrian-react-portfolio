import { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import Project from './Project';
import projectlist from '../projects.json';
import '../css/Projects.css';

const Projects = () => {

  const [projectList, setProjects] = useState(projectlist);

  return (
<ContentWrapper pageTitle="Projects">
  <div className="card_wrapper">
        <div className="row no-gutters">
            {projectList.map((project) => (
              <Project
              key={project.id}
              id={project.id}
              image = {project.image}
              des = {project.des}
              title={project.title}
              deployURL={project.deployLink}
              repo = {project.github_repo}
              />
            ))}
        </div>
    </div>

</ContentWrapper>
  )
}

export default Projects