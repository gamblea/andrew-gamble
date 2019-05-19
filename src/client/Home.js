import React, { Component } from 'react';
import me from './images/meSmall.jpg';

export default function Home() {
  return (
    <div className="row">
      <div className="meWrapper col-sm">
        <img src={me} className="me" alt="Andrew" />
      </div>
      <div className="col-sm">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit cursus, feugiat libero ac, consectetur risus. Proin nunc leo, placerat non mi vitae, pretium rhoncus lacus. Suspendisse in tempus enim, vel porta purus. Praesent fringilla risus id facilisis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec nec neque dolor. Nunc rhoncus mi quis lacinia posuere. Pellentesque dolor sapien, scelerisque nec dignissim vitae, ornare vehicula nibh. Nullam aliquam velit ac felis feugiat semper.
        </p>
        <p>
        Phasellus consequat commodo aliquet. Etiam feugiat massa magna, ultrices pharetra orci aliquet ut. Duis auctor erat nibh, at placerat felis pretium id. Aliquam in feugiat ipsum, luctus egestas enim. Nunc auctor semper convallis. Nulla felis arcu, condimentum ut elit in, pulvinar tincidunt erat. Vivamus ornare, ante at eleifend vehicula, justo eros porta est, id commodo leo elit vitae lacus. Suspendisse euismod rutrum diam, vitae sagittis odio tristique vel. Morbi dictum elementum ipsum non rhoncus. Vivamus semper, neque eget lacinia gravida, lacus magna lacinia mi, quis tempus sem diam at metus. Vivamus ut tellus eget orci placerat egestas. In vel lectus quis sem ultrices accumsan non et neque. Mauris viverra elit id scelerisque tempor. Aenean nec tellus a odio dictum tincidunt non vel ex.
        </p>
      </div>
    </div>
  );
}
