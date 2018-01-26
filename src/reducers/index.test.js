import rootReducer from './index.js'

describe('rootReducer', () => {
  it('initializes default state', () => {
      expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} })
  })
})
