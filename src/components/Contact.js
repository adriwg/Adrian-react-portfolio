import React from 'react';
import ContentWrapper from './ContentWrapper';
import InfoGroup from './InfoGroup';
import Enquiries from './Enquiries';
import '../css/Contact.css';

const Contact = () => {
  return (
    <ContentWrapper pageTitle="Contact">
      <p className="text-center section_title">Get in Touch</p>
      <div className="contact_info">
        <InfoGroup
          title="Email"
          icon="fa-solid fa-envelope"
          link="mailto:adrianwg04@gmail.com"
          linkName="adrianwg04@gmail.com"
        ></InfoGroup>

        <InfoGroup
          title="Github Profile"
          icon="fa-brands fa-github"
          link="https://github.com/adriwg"
          linkName="https://github.com/adriwg"
        ></InfoGroup>

        <InfoGroup
          title="LinkedIn"
          icon="fa-brands fa-linkedin"
          link="https://www.linkedin.com/in/adriwg"
          linkName="https://www.linkedin.com/in/adriwg"
        ></InfoGroup>
      </div>
      <section className="section_form">
        <Enquiries></Enquiries>
      </section> 
  </ContentWrapper>
  ) 
}

export default Contact