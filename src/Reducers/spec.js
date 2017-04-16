/* eslint-env mocha */
import expect from 'expect'

import * as Actions from '../Actions'
import reducer from './index'

describe('reducer', () => {
	it('sets event times', () => {
		const start = 1
		const end = 2
		const action = Actions.setEventTimes(start, end)
		const state = reducer(undefined, action)

		expect(state).toEqual({
			start,
			end,
		})
	})
})