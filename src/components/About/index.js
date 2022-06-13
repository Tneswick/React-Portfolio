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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ipsum nec nisl maximus elementum. Vestibulum fermentum commodo efficitur. Nulla ultrices hendrerit leo, pharetra gravida ligula facilisis et. Nulla rutrum facilisis est, eget tincidunt ligula sodales eget. Donec cursus viverra felis, at volutpat ligula cursus at. Nam eu lacinia odio, vitae semper mauris. Aenean ultricies lectus non faucibus congue.
          <br />
          Maecenas purus sem, tempus nec ultrices ac, pretium sit amet tortor. Cras eu turpis rutrum nisi convallis semper. Aliquam imperdiet consequat aliquet. Sed ornare ipsum in justo maximus, sed lacinia felis porttitor. Ut in luctus diam. Donec porta imperdiet neque, a malesuada elit viverra sit amet. Vivamus hendrerit eros ac fermentum mollis. Fusce scelerisque elit quis justo suscipit suscipit. Integer vel semper ex, sit amet tempor dolor. Nunc semper quis velit eget posuere. Etiam in ullamcorper leo. Duis tempor urna aliquet mattis efficitur. Quisque et purus nibh.
        </p>
        <div></div>
      </div>
    </div>
  )
}

export default About;