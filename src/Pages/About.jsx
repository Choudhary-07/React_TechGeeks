import React from 'react';
import group from "../images/group.svg";
import Common from '../Helper/Common'

const About= () => {
  return (
    <>
      <Common
      name="Welcome to About Us"
      imgsrc={group}
      visit="/Contact"
      btnname="Contact Now"
      />
    </>
  );
};

export default About;