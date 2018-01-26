import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/constants'

describe('bitcoinReducer', () => {
  const payload = { bpi: 'bitcoin price index' } 

  it('fetches and sets the bitcoin data', () => {
    expect(bitcoinReducer({}, { type: FETCH_BITCOIN, payload } ))
      .toEqual(payload)
  })
})

