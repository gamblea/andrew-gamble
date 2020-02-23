import React, { Component } from "react";
import Logo from "./Logo";

import me from "./images/meSmall.jpg";
import instaLogo from "./images/instaLogo.png";
import wordpressLogo from "./images/wordpressLogo.png";
import youtubeLogo from "./images/youtubePlayLogo.png";
import linkedinLogo from "./images/linkedinLogo.png";
import githubLogo from "./images/githubLogo.png";

const logos = [
  { photo: instaLogo, url: "https://www.instagram.com/andrew_gamble" },
  { photo: wordpressLogo, url: "https://andrewgamblee.wordpress.com/" },
  {
    photo: youtubeLogo,
    url: "https://www.youtube.com/channel/UCdUc2TaPzSjy1xDlQtFGo4Q"
  },
  {
    photo: linkedinLogo,
    url: "https://www.linkedin.com/in/andrew-gamble-20900bb1/"
  },
  { photo: githubLogo, url: "https://github.com/gamblea/" }
];

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="meWrapper col-md">
          <img src={me} className="me" alt="Andrew" />
        </div>
        <div className="col-md align-self-center">
          <div className="mx-auto ">
            <p>
              Hi, I’m Andrew. I am an undergraduate student at the University of
              Waterloo, who enjoys eating pineapple on his pizza. I am eager
              learner and openly enjoy the process of expanding my
              understanding, either in the classroom or on my own.
            </p>
            <p>
              My main interests academically are in mathematics and computer
              science along with the hardware side of computing. Outside of
              academics I love being active, coding, reading about math,
              cooking, playing volleyball and sharing my experiences through
              making videos and photography.
            </p>
            <p>
              Being from the west coast I love getting outside and being active.
              From skiing through the trees to a long day of hiking there is
              nothing better than exploring the outdoors. In addition, I love
              experimenting in the kitchen and trying out new ways to not follow
              the recipe.
            </p>
            <p>
              Feel free to reach out, I’m always interested to meet new awesome
              people!
            </p>
            <p>Andrew</p>
          </div>
        </div>
      </div>
      <div className="row logos">
        {logos.map((logo, index) => (
          <Logo {...logo} key={index} />
        ))}
      </div>
    </div>
  );
}
