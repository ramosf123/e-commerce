import React, { Component } from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import SECTION_DATA from "../../data/section_data.js";

class Directory extends Component {
  state = {
    sections: SECTION_DATA,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
