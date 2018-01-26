import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as constants from '../actions/constants'

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10

    it('sets a balance', () => {
      const balance = 10
      const initialState = undefined
      const action = { type: constants.SET_BALANCE, payload: { balance } }

      expect(balanceReducer(initialState, action)).toEqual(balance)
    })

    describe('then - re-inits', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
  })

  it('deposits into the balance', () => {
    const initialState = 5
    const deposit = 10
    const action = { type: constants.DEPOSIT, payload: { deposit } }

    expect(balanceReducer(initialState, action)).toEqual(initialState + deposit)
  })

  it('withdraws some amount from the balance', () => {
    const initialState = 20
    const withdrawal = 10
    const action = { type: constants.WITHDRAW, payload: { withdrawal } }

    expect(balanceReducer(initialState, action)).toEqual(initialState - withdrawal)
  })
})

