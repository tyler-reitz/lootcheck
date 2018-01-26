import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {

  state = { localBalance: 0 }

  updateBalance = (e) => {
    const localBalance = parseInt(e.target.value, 10)
    this.setState({ localBalance })
  }

  render() {
    const { 
      props: { balance, deposit, withdraw }, 
      state: { localBalance },
      updateBalance
    } = this

    return (
      <div>
        <h3 className="balance">Wallet balance: { balance }</h3>
        <br />
        <input className="input-wallet" onChange={updateBalance} />
        <button className="btn-deposit" onClick={() => deposit(localBalance)}>
          deposit
        </button>
        <button className="btn-withdraw" onClick={() => withdraw(localBalance)}>
          withdraw
        </button>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  { deposit, withdraw }
)(Wallet)
