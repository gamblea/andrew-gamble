import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Academics from './Academics';

export default function Main() {
  return (
    <div className="row">
      <div className="col">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/academics" component={Academics} />
        </Switch>
      </div>
    </div>
  );
}
