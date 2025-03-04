import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'


export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#FFF'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

setCurrentColor = (hex) => {
  this.setState({
    color: hex
  })
}

currentColor = () => {
  this.state.color;
}

  render() {
    return (
      <div id="app">
        <ColorSelector />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
