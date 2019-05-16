import React, { Component } from 'react';
import me from './images/me.jpg';

export default function Home() {
  return (
    <div>
      <img src={me} className="me" alt="Andrew" height="500" width="500" />
    </div>
  );
}
