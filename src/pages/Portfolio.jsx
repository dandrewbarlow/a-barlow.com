import React, { Component } from 'react';

import { Tabs } from 'react-bulma-components';

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
    return (
        <Tabs type='toggle' fullwidth={false} align="center">
          <Tabs.Tab active={this.state.tab==="graphic"} onClick={() => this.setState({tab:"graphic"})}>
            Graphic Design
          </Tabs.Tab>
          <Tabs.Tab active={this.state.tab==="web"} onClick={() => this.setState({tab:"web"})}>
            Web Development
          </Tabs.Tab>
          <Tabs.Tab active={this.state.tab==="creative"} onClick={() => this.setState({tab:"creative"})}>
            Creative Coding
          </Tabs.Tab>
          <Tabs.Tab active={this.state.tab==="3d"} onClick={() => this.setState({tab:"3d"})}>
            3D
          </Tabs.Tab>
        </Tabs>
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
