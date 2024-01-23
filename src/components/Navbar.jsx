import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

const Navbar = () => {
	//get total items in cart
	const itemCount = useStoreState(state => state.cart.count)

	return (
		<nav className="bg-white border-b-2 py-4 px-6 flex justify-between items-center">
			<Link to="/home">
				<span className="text-2xl font-bold text-indigo-600">Milkify</span>
			</Link>
			<div className="flex items-center space-x-4 text-indigo-600">
				<Link to="/cart">
					<ShoppingCartIcon className="h-6 w-6" />
					{itemCount}
				</Link>
				<Link to="/profile">
					<UserCircleIcon className="h-6 w-6" />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
