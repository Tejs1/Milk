// src/components/CartPage.js
import Navbar from '../components/Navbar'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useStoreActions, useStoreState } from 'easy-peasy'

// Dummy cart items data

const CartPage = () => {
	const items = useStoreState(state => state.cart.items)
	const addItem = useStoreActions(actions => actions.cart.addItem)
	const removeItem = useStoreActions(actions => actions.cart.removeItem)
	const clearCart = useStoreActions(actions => actions.cart.clearCart)
	const itemCount = useStoreState(state => state.cart.count)
	const total = useStoreState(state => state.cart.total)

	// Function to calculate total price
	const calculateTotal = items => items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)

	return (
		<>
			<Navbar />
			<div className="container mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
				<div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
					<div className="w-full lg:w-3/4 p-5">
						<h1 className="text-xl font-semibold mb-5">Shopping Cart</h1>
						<ul>
							{items.map((item, idx) => (
								<CartItem item={item} key={idx} />
							))}
						</ul>
						<button className="text-indigo-600 flex items-center mt-5" onClick={clearCart}>
							<TrashIcon className="h-5 w-5 mr-1" />
							Clear Cart
						</button>
					</div>

					<div className="w-full lg:w-1/4 p-5 bg-gray-200 rounded-lg">
						<h2 className="text-xl font-semibold mb-5">Order Summary</h2>
						<div className="mb-5">
							<span className="text-sm">ITEMS {itemCount}</span>
							<span className="text-sm font-bold float-right">{}</span>
						</div>
						<div className="mb-5">
							<label htmlFor="promo" className="text-sm">
								PROMO CODE
							</label>
							<input type="text" id="promo" placeholder="Enter your code" className="w-full p-2 text-sm" />
							<button className="w-full bg-indigo-500 text-white mt-2 p-2 rounded hover:bg-indigo-600 transition-colors">
								Apply
							</button>
						</div>
						<div className="border-t-2 pt-5">
							<span className="text-sm font-bold">TOTAL COST</span>
							<span className="text-sm font-bold float-right">{total}</span>
							<button className="w-full bg-indigo-500 text-white mt-5 p-2 rounded hover:bg-indigo-600 transition-colors">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage

// export const CartItem = ({ item }) => {
// 	const changeQuantity = useStoreActions(actions => actions.cart.changeQuantity)
// 	return (
// 		<div className="flex items-center justify-between bg-gray-100 p-4 rounded-md mb-3">
// 			<div className="flex items-center space-x-4">
// 				<img className="h-16 w-16 object-cover" src="path/to/product/image" alt={item.name} />
// 				<div className="flex flex-col justify-between">
// 					<span className="font-bold text-sm sm:text-base">{item.name}</span>
// 					<button className="text-red-500 text-xs sm:text-sm flex items-center">
// 						<TrashIcon className="h-5 w-5 mr-2" />
// 						Remove
// 					</button>
// 				</div>
// 			</div>
// 			<div className="flex flex-col items-end space-y-1">
// 				<input
// 					className="border text-center w-16 p-1"
// 					type="number"
// 					value={item.quantity}
// 					onChange={e => changeQuantity({ id: item.id, quantity: e.target.value })}
// 				/>
// 				<span className="font-bold text-sm sm:text-base">{item.price.toFixed(2)}</span>
// 				<span className="font-bold text-sm sm:text-base">{(item.quantity * item.price).toFixed(2)}</span>
// 			</div>
// 		</div>
// 	)
// }

export const CartItem = ({ item }) => {
	const changeQuantity = useStoreActions(actions => actions.cart.changeQuantity)
	const removeItem = useStoreActions(actions => actions.cart.removeItem)
	const increaseQuantity = () => {
		changeQuantity({ id: item.id, quantity: item.quantity + 1 })
	}
	const decreaseQuantity = () => {
		if (item.quantity > 1) {
			changeQuantity({ id: item.id, quantity: item.quantity - 1 })
		}
	}

	return (
		<div className="flex items-center justify-between bg-gray-100 p-4 rounded-md mb-3">
			<div className="flex items-center space-x-4">
				<img className="h-16 w-16 object-cover" src={item.url} alt={item.name} />
				<div className="flex flex-col justify-between">
					<span className="font-bold text-sm sm:text-base">{item.name}</span>
					<button
						className="text-red-500 text-xs sm:text-sm flex items-center"
						onClick={() => removeItem({ id: item.id })}
					>
						<TrashIcon className="h-5 w-5 mr-2" />
						Remove
					</button>
				</div>
			</div>
			<div className="flex flex-col items-end space-y-1">
				<div className="flex items-center">
					<button onClick={decreaseQuantity} className="text-gray-500 hover:text-gray-700">
						<MinusIcon className="h-5 w-5" />
					</button>
					<input
						className="border text-center w-16 p-1 mx-2"
						type="text" // Change this to text to remove spinner
						readOnly // Make the input read-only since the buttons control the quantity
						value={item.quantity}
					/>
					<button onClick={increaseQuantity} className="text-gray-500 hover:text-gray-700">
						<PlusIcon className="h-5 w-5" />
					</button>
				</div>
				<span className="font-bold text-sm sm:text-base">${item.price.toFixed(2)}</span>
				<span className="font-bold text-sm sm:text-base">${(item.quantity * item.price).toFixed(2)}</span>
			</div>
		</div>
	)
}
