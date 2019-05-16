import React, { Component } from 'react';
import waterlooLogo from './images/waterlooLogo.png';
import sfuLogo from './images/sfuLogo.png';
import fhLogo from './images/fhLogo.png';

export default function Academics() {
  return (
    <div className="container">
      <h2>Academics</h2>
      <div className="row">
        <div className="col-sm">
          <h3>University of Waterloo</h3>
          <h4>Honours of Computer Science, 2017-2022</h4>
          <p>Pursuing a bachelors of computer science degree with an option in digital hardware.</p>
        </div>
        <div className="col-sm">
          <img src={waterlooLogo} className="logo" alt="waterloo logo" />
        </div>
      </div>
      <div>
        <h3>Simon Fraser University</h3>
        <h4>Conccurent Studies 2016-2017</h4>
        <p>
          Enrolled in a variety of classes part time throughout my final year of high school.
          Acheived a cummalitive of GPA of 4.13.
        </p>
        <div>
          <img src={sfuLogo} className="logo" alt="sfu logo" />
        </div>
      </div>
      <div>
        <h3>Fraser Heights Secondary</h3>
        <h4>High School Diploma 2012-2017</h4>
        <p>
          Enrolled in Science Academy a enriched Math and Science program where students have
          the oppurtunity to take University level courses.
          In addition, to Academics I was the captain of the senior boys volleyball and
          led the Fraser Heights Clean Water Club that raised funds and awareness
          for clean water projects throughout the community.
        </p>
        <img src={fhLogo} className="logo" alt="sfu logo" />
      </div>

    </div>
  );
}
