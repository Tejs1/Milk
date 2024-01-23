import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Home from './pages/home'
import CartPage from './pages/CartPage'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cart" element={<CartPage />} />

				{/* Add other routes here */}
			</Routes>
		</Router>
	)
}

export default App
