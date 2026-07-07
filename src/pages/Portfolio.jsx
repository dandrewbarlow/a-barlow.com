import React, { Component } from 'react';

import ThreeD from './content/ThreeD';
import Web from './content/Web';
import Graphic from './content/Graphic';
import Creative from './content/Creative';


export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      tab: "graphic"
    }

  }
  tabs() {
    const tabs = [
      { key: "graphic", label: "Graphic Design" },
      { key: "web", label: "Web Development" },
      { key: "creative", label: "Creative Coding" },
      { key: "3d", label: "3D" },
    ];
    return (
        <div className="tabs is-centered is-toggle">
          <ul>
            {tabs.map(({ key, label }) => (
              <li key={key} className={this.state.tab === key ? "is-active" : ""}>
                <a onClick={() => this.setState({ tab: key })}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
    )
  }


  render() {
    let content;

    if(this.state.tab === "3d") {
        content = ThreeD();
    }
    else if (this.state.tab === "web") {
        content = Web();
    }
    else if (this.state.tab ===  "graphic") {
      content = Graphic();
    }
    else if (this.state.tab ===  "creative") {
      content = Creative();
    }

    return (
      <>

        {this.tabs()}

        {content}

      </>
    )
  }
}
