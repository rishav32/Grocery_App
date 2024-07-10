import React from 'react'
import SomeQuestion from '../component/aboutus/SomeQuestion'
import FeatureAbout from '../component/aboutus/featureProduct'
import TeamMembers from '../component/aboutus/teamMembers'
import DeliveryMode from '../component/aboutus/deliveryMode'
import AboutSection from '../component/aboutus/aboutSection'

const About = () => {
  return (
    <div>
      <AboutSection />
      <FeatureAbout />
      <TeamMembers />
      <SomeQuestion />
      {/* <DeliveryMode /> */}
    </div>
  )
}

export default About