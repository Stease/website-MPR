import React from "react";
import { ImageContainer } from "./ImageContainer"
import { homepageWindow } from "../preferences/preferences.js";

export class HomepageWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrcs: homepageWindow.imageSrcs,
      imageAlts: homepageWindow.imageAlts,
      imageTitles: homepageWindow.imageTitles,
      imageTexts: homepageWindow.imageTexts,
      imagePositions: homepageWindow.imagePositions,
      containerColors: homepageWindow.containerColors,
    };
  }

  render() {
    console.log(this.state.imageTexts)
    return (
      <div>
        {this.state.imageSrcs.map((item, i) =>
          <ImageContainer src={item} alt={this.state.imageAlts[i]} title={this.state.imageTitles[i]} text={this.state.imageTexts[i]} position={this.state.imagePositions[i]} bColor={this.state.containerColors[i]} />

        )}
      </div>
    );
  }
}