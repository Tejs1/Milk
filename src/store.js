// src/store.js

import { createStore, action, computed, persist, debug } from 'easy-peasy'

const storeModel = {
	cart: persist({
		items: [],
		//no of items in cart
		// Computed properties for count and total
		count: computed(state => state.items.reduce((sum, item) => sum + item.quantity, 0)),
		total: computed(state => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)),

		//actions
		addItem: action((state, payload) => {
			//check if item is already in cart
			const item = state.items.find(item => item.id === payload.id)
			if (item) {
				item.quantity += payload.quantity ? payload.quantity : 1
			} else {
				// add quantity property to payload
				payload.quantity = 1
				state.items.push(payload)
			}
		}),
		// change quantity
		changeQuantity: action((state, payload) => {
			const item = state.items.find(item => item.id === payload.id)
			item.quantity = payload.quantity
		}),
		removeItem: action((state, payload) => {
			state.items = state.items.filter(item => item.id !== payload.id)
		}),
		clearCart: action(state => {
			state.items = []
		}),
	}),

	// ...other models
}

const store = createStore(storeModel)

export default store
