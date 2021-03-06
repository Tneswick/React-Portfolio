import React, { useState } from 'react';
const Project = () => {

  const [projects] = useState([
    {
      name: '๐ฟ Full On Flicks ๐ฅ',
      url: 'https://dn691997.github.io/Full-On-Flicks/',
      repo: 'https://github.com/dn691997/Full-On-Flicks',
      screenshot: 'https://github.com/dn691997/Full-On-Flicks/raw/main/assets/images/screenshot.png'
    },
    {
      name: '๐ด CountingCalz ๐งฎ',
      url: 'https://github.com/dn691997/Full-On-Flicks',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png'
    },
    {
      name: '๐ TheCircuitry ๐ท',
      url: 'https://the-circuitry.herokuapp.com/',
      repo: 'https://github.com/Tneswick/TheCircuitry',
      screenshot: 'https://github.com/Tneswick/TheCircuitry/raw/main/public/images/the-circuitry.herokuapp.com_.png'
    },
    {
      name: 'โ TrueNote ๐',
      url: 'https://github.com/Tneswick/TrueNote/blob/main',
      repo: 'https://github.com/Tneswick/TrueNote',
      screenshot: 'https://github.com/Tneswick/TrueNote/raw/main/public/assets/images/TrueNote%20Home.png'
    },
    {
      name: '๐งช CodeIQ',
      url: 'https://tneswick.github.io/CodeIQ/',
      repo: 'https://github.com/Tneswick/CodeIQ',
      screenshot: 'https://github.com/Tneswick/CodeIQ/raw/main/assets/images/screenshot-of-page.png?raw=true'
    },
    {
      name: '๐ซโ WeatherLook ๐กโ',
      url: 'https://tneswick.github.io/WeatherLook/',
      repo: 'https://github.com/Tneswick/WeatherLook',
      screenshot: 'https://github.com/Tneswick/WeatherLook/raw/main/assets/images/Screenshot.png'
    },
    {
      name: '๐ The-Cal-Zone ๐ง ',
      url: 'https://the-cal-zone.herokuapp.com/',
      repo: 'https://github.com/JacobReeder/Counting-Calz-2.0',
      screenshot: 'https://raw.githubusercontent.com/JacobReeder/Counting-Calz-2.0/main/imgs/dashboard-test-data(iPhone%20XR).png',
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
          <a href={projectMapped.repo}>{projectMapped.name} Repository๐</a>
        </div>
        )
      }))}
    </>
  )
}

export default Project;