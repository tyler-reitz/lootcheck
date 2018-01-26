import * as constants from './constants'
import * as actions from './balance'

it('create an action to set the balance', () => {
  const balance = 0
  const expectedAction = { 
    type: constants.SET_BALANCE, 
    payload: { balance }
  }
  
  expect(actions.setBalance(balance)).toEqual(expectedAction)
})

it('creates an action to deposit a balance', () => {
  const deposit = 10
  const expectedAction = { type: constants.DEPOSIT, payload: { deposit } }
  
  expect(actions.deposit(deposit)).toEqual(expectedAction)
})

it('creates an action to withdraw some amount', () => {
  const withdrawal = 10
  const expectedAction = { type: constants.WITHDRAW, payload: { withdrawal } }

  expect(actions.withdraw(withdrawal)).toEqual(expectedAction)
})
