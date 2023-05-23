import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Home.css';
import cv from '../assets/cv.pdf';

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
          <div className="brand_statments">
            <div className="statements_wrapper">
              <span className="b1">Transforming ideas into robust and intuitive design solutions</span>
              <span className="b2">Leveraging my expertise in modern and responsive front-end development.</span>
            </div>
          </div>
          <div className="btn_wrapper">
            <a href={cv} className="btn-default btn_cv">
            My Resume
            </a>
          </div>
          <div className="contact_wrapper">
            <div className="contactLink">
              <a href="mailto:adrianwg04@gmail.com">
                <FontAwesomeIcon icon="fa-solid fa-envelope" size="2xl" style={{color: "#303944",}} />
              </a>
              <a href="https://github.com/adriwg">
                <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" style={{color: "#303944",}} />
              </a>
              <a href="https://www.linkedin.com/in/adriwg">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" style={{color: "#303944",}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home