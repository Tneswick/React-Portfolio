import React from "react";
import headshot from '../../assets/headshot/360px-headshot.jpg'

const About = () => {
  return (
    <div className="d-grid about-grid">
      <img className="about-img" src={headshot} alt='Taylor Neswick' />
      <h1 className="about-header">Hello, I'm Taylor Neswick</h1>
      <div className="d-grid col-2 about-p-grid">
        <div></div>
        <p className="about-paragraph col-2">
          I've spent the last 9 years in the medical field as an Emergency Medical Technician. After considering my options I decided to make a career switch for myself and my family. Ultimately the available options above the position I was in not only wasn't financially exciting to me, but most of all, didn't sound mentally stimulating enough to me.  I enrolled in the UC Berkeley coding bootcamp to get myself into the tech field, which is an area of my life that I've always loved and had never really fully explored. My hope is to break into tech and further my skills to become an experienced web developer and work on mentally stimulating projects, and maybe even create web applications of my own. 
        </p>
        <div></div>
      </div>
    </div>
  )
}

export default About;