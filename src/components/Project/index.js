import React, { useState } from 'react';
const Project = () => {

  const [projects] = useState([
    {
      name: '🍿 Full On Flicks 🎥',
      url: 'https://dn691997.github.io/Full-On-Flicks/',
      repo: 'https://github.com/dn691997/Full-On-Flicks',
      screenshot: 'https://github.com/dn691997/Full-On-Flicks/raw/main/assets/images/screenshot.png'
    },
    {
      name: '🍴 CountingCalz 🧮',
      url: 'https://github.com/dn691997/Full-On-Flicks',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png'
    }
  ])
  return (
    <>
      {projects.map((projectMapped => {
        return (
        <div className='project-div-wrapper d-grid'>
          <h2>{projectMapped.name}</h2>
          <a href={projectMapped.url}>
            <img
              src={projectMapped.screenshot}
              alt={projectMapped.name}
              className="project-img"
              key={projectMapped.name}
            />
          </a>
          <a href={projectMapped.repo}>{projectMapped.name} Repository🔗</a>
        </div>
        )
      }))}
    </>
  )
}

export default Project;