import React, { Component } from "react";
import "./style.scss";
import Content from "./content";

export default class Dashboard extends Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <Content />
        </div>
      </div>
    );
  }
}
