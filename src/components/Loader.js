import React, { Component } from 'react'
import sample from '../sample.gif'
export class Loader extends Component {
  render() {
    return (
      <div>
       <img src={sample} alt="sample"/>
      </div>
    )
  }
}

export default Loader
