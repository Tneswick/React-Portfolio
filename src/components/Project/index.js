import React, { useState } from 'react';
const Project = () => {

  const [projects] = useState([
    {
      name: 'Full On Flicks',
      url: 'https://dn691997.github.io/Full-On-Flicks/',
      repo: 'https://github.com/dn691997/Full-On-Flicks',
      screenshot: 'https://github.com/dn691997/Full-On-Flicks/raw/main/assets/images/screenshot.png'
    },
    {
      name: 'CountingCalz',
      url: 'https://github.com/dn691997/Full-On-Flicks',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png'
    },
    {
      name: 'TrueNote',
      url: 'https://github.com/Tneswick/TrueNote/blob/main',
      repo: 'https://github.com/Tneswick/TrueNote',
      screenshot: 'https://github.com/Tneswick/TrueNote/raw/main/public/assets/images/TrueNote%20Home.png'
    },
    {
      name: 'CodeIQ',
      url: 'https://tneswick.github.io/CodeIQ/',
      repo: 'https://github.com/Tneswick/CodeIQ',
      screenshot: 'https://github.com/Tneswick/CodeIQ/raw/main/assets/images/screenshot-of-page.png?raw=true'
    },
    {
      name: 'WeatherLook',
      url: 'https://tneswick.github.io/WeatherLook/',
      repo: 'https://github.com/Tneswick/WeatherLook',
      screenshot: 'https://github.com/Tneswick/WeatherLook/raw/main/assets/images/Screenshot.png'
    },
    {
      name: 'The-Cal-Zone',
      url: 'https://the-cal-zone.herokuapp.com/',
      repo: 'https://github.com/Tneswick/The_Cal-Zone',
      screenshot: 'https://github.com/Tneswick/The_Cal-Zone/blob/main/imgs/Slides.png?raw=true',
    }
  ])
  return (
    <>
      {projects.map((projectMapped => {
        return (
        <div className='project-div-wrapper d-grid'>
          <h2>{projectMapped.name}</h2>
          <a href={projectMapped.url} target='_blank' rel='noreferrer'>
            <img
              src={projectMapped.screenshot}
              alt={projectMapped.name}
              className="project-img"
              key={projectMapped.name}
            />
          </a>
          <a href={projectMapped.repo} target='_blank' rel='noreferrer'>{projectMapped.name} Repo🔗</a>
        </div>
        )
      }))}
    </>
  )
}

export default Project;