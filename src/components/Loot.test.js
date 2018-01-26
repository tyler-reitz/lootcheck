import React from 'react'
import { shallow, mount } from 'enzyme'
import { Loot } from './Loot'
import { fetchBitcoin } from '../actions/bitcoin'

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  let props = { balance: 0, bitcoin: {}, fetchBitcoin }
  let loot = shallow(<Loot {...props} />)

  it('renders properly', () => {
   expect(loot).toMatchSnapshot() 
  })

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin
      loot = mount(<Loot {...props} />)
    })

    it('calls `fetchBitcoin()` passed from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    })
  })

  describe('when there are valid props', () => {
    beforeEach(() => {
      props = { 
        balance: 10,
        bitcoin: { bpi: { USD: { rate: '1,000' } } }, 
        fetchBitcoin: mockFetchBitcoin
      }
      loot = shallow(<Loot {...props} />)
    })

    it('displays the correct bitoicn value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
    })
  })
})
