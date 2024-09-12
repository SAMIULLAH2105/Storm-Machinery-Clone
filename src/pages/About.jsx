import React from 'react';
import Description from '../components/Description';
import AdvantagesSection from '../components/AdvantagesSection';
function About() {
  return (
    <>
    <div className="about">
<Description 
  heading="About Us" 
  subheading="Professional Truck Export Company" 
  description="We are a construction equipment sales business focused on providing high quality, high performance new and used trucks and trailers." 
  buttonText="Contact Us"  
  />

    </div>
 <AdvantagesSection/>
 </>
  );
}

export default About;
