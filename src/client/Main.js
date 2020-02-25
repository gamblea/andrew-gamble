import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Academics from "./Academics";
import Blog from "./Blog";

import posts from "./posts.json";
console.log(posts);

export default function Main() {
  return (
    <div className="row">
      <div className="col">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/academics" component={Academics} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </div>
  );
}
