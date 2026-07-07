import React, { Component } from 'react'
import githubLogo from '../img/GitHub-Mark-120px-plus.png'

export default class MyFooter extends Component {
  render() {
    return (
        <footer className="footer" style={{padding: '3rem 1.5rem 3rem'}}>
            <a href='https://github.com/dandrewbarlow'>
              <figure className="image is-32x32" style={{margin: 'auto'}}>
                <img src={githubLogo} alt="GitHub" />
              </figure>
            </a>
        </footer>
    )
  }
}
