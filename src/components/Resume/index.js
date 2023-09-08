import React from "react";

const Resume = () => {
  return (
    <>
      <h2 className='contact-header'>Resume</h2>
      <div className="resume-card d-grid">
        <div className="resume-1">
          <h3>Coding Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Markdown</li>
            <li>HandleBars</li>
          </ul>
        </div>
        <div className="resume-2">
          <h3>Coding Skills</h3>
          <ul>
            <li>Git</li>
            <li>Web and 3rd Party APIs</li>
            <li>Node.js</li>
            <li>Object Oriented Programming</li>
            <li>Express.js</li>
            <li>Object-Relational Mapping</li>
            <li>Model-View-Controller</li>
            <li>NoSQL</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
      <h4 className="resume-dl-link">
        <a href="https://drive.google.com/file/d/17deObHKXadICioEJ0jhjrxUR36pGTdLZ/view?usp=sharing" target="_blank" rel="noreferrer">Link to Downloadable Resume</a>
      </h4>
    </>
  )
}

export default Resume;