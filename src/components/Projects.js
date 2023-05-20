import React from 'react';
import ContentWrapper from './ContentWrapper';
import ProjCard from './ProjCard';
import '../css/Projects.css';

const Projects = () => {
  return (
<ContentWrapper pageTitle="Projects">
  <div className="card_wrapper">
        <div className="row no-gutters">
            <ProjCard />
        </div>
    </div>

</ContentWrapper>
  )
}

export default Projects