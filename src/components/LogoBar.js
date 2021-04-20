import React from "react";
import { logoBar } from "../preferences/preferences.js";
// eslint-disable-next-line
import styling from "../styling/logobar.css";

export class LogoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: logoBar.companyName,
      companyLogo: logoBar.companyLogo,
    };
  }
  render() {
    return (
      <div className="logoBar">
        <img className="logoImg" src={this.state.companyLogo} alt=""></img>
        <h1 className="logoBarTitle">{this.state.companyName}</h1>
      </div>
    );
  }
}