// src/components/Home.jsx
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useStoreActions, useStoreState } from 'easy-peasy'

const products = [
	// Add your product details here
	{
		id: 1,
		name: 'Full Cream Milk',
		description: 'Rich and creamy full cream milk',
		price: 80,
		url: 'public/images/skimmedMilk.png',
	},
	{ id: 2, name: 'Malai Paneer', description: 'Low-fat skimmed milk', price: 480 },
	{ id: 3, name: 'Malai Youghart (dahi)', description: 'Delicious soy milk with added calcium', price: 120 },
	// Add more products as needed
]

const Home = () => {
	const items = useStoreState(state => state.cart.items)
	const addItem = useStoreActions(actions => actions.cart.addItem)
	const removeItem = useStoreActions(actions => actions.cart.removeItem)
	const clearCart = useStoreActions(actions => actions.cart.clearCart)
	console.log(items)

	return (
		<div className="bg-gray-100">
			{/* Top Navigation */}
			<Navbar />
			{/* Product List */}
			<div className="container mx-auto py-8 px-4">
				<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Milk Products</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map(product => (
						<div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
							<img src={product.url} alt={product.name} className="w-full h-56 object-cover mb-4" />
							<p className="text-gray-600 mb-4">{product.description}</p>
							<span className="text-lg font-bold text-gray-800 mb-4 block">{product.price}</span>
							<button
								onClick={() => addItem(product)}
								className="w-full bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition-colors"
							>
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
