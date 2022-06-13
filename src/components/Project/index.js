import React from "react";

const Project = () => {

  const projects = [
    {
      name: 'Full On Flicks',
      url: 'https://dn691997.github.io/Full-On-Flicks/',
      repo: 'https://github.com/dn691997/Full-On-Flicks',
      screenshot: '../../assets/screenshots/full-on-flicks.png'
    },
    {
      name: 'CountingCalz',
      url: 'https://github.com/dn691997/Full-On-Flicks',
      repo: 'https://github.com/JacobReeder/Counting-Calz',
      screenshot: '../../assets/screenshots/countingcalz.png'
    }
  ]
  return (
    <>
      {projects.map((projectMapped => {
        return (
        <>
          <a href={projectMapped.url}>
            <img
              src={require(`${projectMapped.screenshot}`)}
              alt={projectMapped.name}
              className=""
              key={projectMapped.name}
            />
          </a>
          <h2>{projectMapped.name}</h2>
          <a href={projectMapped.repo}>Repository</a>
        </>
        )
      }))}
    </>
  )
}

export default Project;