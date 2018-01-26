import { FETCH_BITCOIN } from '../actions/constants'

const bitcoin = (state = {}, { type, payload }) => {
  switch(type) {
    case FETCH_BITCOIN:
      return payload
    default:
      return state
  }
}

export default bitcoin
