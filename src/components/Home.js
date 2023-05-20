import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div>
      <section className="jumbotron">
        <div className="container hero-banner">
          <div className="nameWrapper">
              <div className="hi">Hi, I'm</div>
              <div className="name">Adrian Wong</div>
              <div className="title">UI Designer and Front-end Developer</div>
          </div>
        <div className="profilePic_holder"></div>
        </div>
      </section>
      <section className="section_content_home">
        <div className="container">
          <p>
          I possess strong skills in transforming ideas into visually stunning and intuitive design solutions. Leveraging my expertise in modern and responsive front-end development, I specialize in elevating user interfaces to deliver seamless and engaging experiences.
          </p>
      <button type="button" className="btn-default">Get in Touch</button>
        </div>
      </section>
    </div>
  )
}

export default Home