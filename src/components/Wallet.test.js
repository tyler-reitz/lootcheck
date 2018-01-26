import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const mockDeposit = jest.fn()
  const mockWithdraw = jest.fn()
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
  const wallet = shallow(<Wallet {...props} />)

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })

  it('provides an input for amounts', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true)
  })

  describe('on user input', () => {
    const userBalance = '25'

    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', {
        target: { value: userBalance }
      })
    })

    it('casts the users value to a Number and adds it to `state`', () => {
      expect(wallet.state().localBalance).toEqual(parseInt(userBalance, 10))
    })

    describe('if user clicks to deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click')
      })

      it('dispatches `deposit()` from props with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })

    describe('if user clicks to withdraw', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click')
      })

      it('dispatches `withdraw()` from props with local balance', () => {
        expect(mockWithdraw).toBeCalledWith(parseInt(userBalance, 10))
      })
    })
  })
})
