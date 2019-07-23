import React from 'react';
import { projects } from '../data/Projects';

function Project({match}) {
  const project = projects.find(({ id }) => id === match.params.projectId);
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}

export default Project;