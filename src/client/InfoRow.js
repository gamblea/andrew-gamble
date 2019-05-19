import React, { Component } from 'react';

export default function InfoRow(props) {
  const {
    heading, subHeading, paragraph, photo
  } = props;

  return (
    <div className="row infoRow">
      <div className="col-sm-8">
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
        <p>{paragraph}</p>
      </div>
      <div className="col-sm-4 logoConatainer">
        <img src={photo} className="logo" alt="waterloo logo" />
      </div>
    </div>
  );
}
