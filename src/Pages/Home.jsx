import React from 'react';
import women from "../images/women.svg";
import Common from '../Helper/Common'

const About= () => {
  return (
    <>
      <Common
      name="Grow With Us"
      imgsrc={women}
      visit="/Services"
      btnname="Get Started"
      />
    </>
  );
};

export default About;