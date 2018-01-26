import * as constants from '../actions/constants'
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'

const balance = (state = 0, { type, payload}) => {
  let balance

  switch (type) {
    case constants.SET_BALANCE:
      balance = payload.balance
      break
    case constants.DEPOSIT:
      balance = state + payload.deposit
      break
    case constants.WITHDRAW:
      balance =  state - payload.withdrawal
      break
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state
  }

  bake_cookie(BALANCE_COOKIE, balance)
  return balance
}

export default balance
