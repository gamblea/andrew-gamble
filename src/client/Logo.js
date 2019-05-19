import React, { Component } from 'react';

export default function Logo(props) {
  const {
    url, photo
  } = props;

  return (
    <div className="col-sm logoContainer">
      <a href={url} target="_blank">
        <img src={photo} className="logo" />
      </a>
    </div>
  );
}
