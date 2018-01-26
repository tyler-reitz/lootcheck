import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin'

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin()
  }

  computeBitcoin = () => {
    console.log(this.props.bitcoin)
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    )
  }
}

export default connect(
  ({balance, bitcoin}) => ({ balance, bitcoin }),
  { fetchBitcoin }
)(Loot)

