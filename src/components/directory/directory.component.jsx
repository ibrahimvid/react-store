import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import SECTIONS_DATA from './sections.data';
import "./directory.styles.scss";

// Needs to be class component, because we need to store the state value of those menu items that we need to pass to create menu items

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
