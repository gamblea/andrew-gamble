import React, { Component } from 'react';

import InfoRow from './InfoRow';
import waterlooLogo from './images/waterlooLogo.png';
import sfuLogo from './images/sfuLogoSmall.jpg';
import fhLogo from './images/fhLogo.png';

export default function Academics() {
  const waterloo = {
    heading: 'University of Waterloo',
    subHeading: 'Honours of Computer Science, 2017-2022',
    paragraph: 'Pursuing a bachelors of computer science degree with an option in digital hardware.',
    photo: waterlooLogo
  };
  const sfu = {
    heading: 'Simon Fraser University',
    subHeading: 'Concurrent Studies 2016-2017',
    paragraph: 'Enrolled in a variety of classes part time throughout my final year of high school. Acheived a cummalitive of GPA of 4.13.',
    photo: sfuLogo
  };
  const fh = {
    heading: 'Fraser Heights Secondary',
    subHeading: 'High School Diploma 2012-2017',
    paragraph: `Enrolled in Science Academy a enriched Math and Science program where students have
    the oppurtunity to take University level courses.
    In addition, to Academics I was the captain of the senior boys volleyball and
    led the Fraser Heights Clean Water Club that raised funds and awareness
    for clean water projects throughout the community.`,
    photo: fhLogo
  };

  return (
    <div>
      <h2>Academics</h2>
      <hr />
      <InfoRow {...waterloo} />
      <InfoRow {...sfu} />
      <InfoRow {...fh} />
    </div>
  );
}
