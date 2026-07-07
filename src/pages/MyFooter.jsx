import React, { Component } from 'react'
import { Container, Content, Footer, Image } from 'react-bulma-components'
import githubLogo from '../img/GitHub-Mark-120px-plus.png'

export default class MyFooter extends Component {
  render() {
    return (
        <Footer style={{padding: '3rem 1.5rem 3rem'}}>
            <a href='https://github.com/dandrewbarlow'>
              <Image src={githubLogo} size={32} style={{margin: 'auto'}}/>
            </a>
        </Footer>
    )
  }
}
