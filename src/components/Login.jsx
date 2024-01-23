// src/components/Login.js
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-blue-50">
			<div className="px-10 py-8 mt-6 text-left bg-white shadow-xl rounded-2xl">
				<h3 className="text-2xl font-bold text-center text-gray-700">Login to your account</h3>
				<form action="" className="mt-6">
					<div className="mt-4">
						<label className="block text-gray-700" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							placeholder="Email"
							id="email"
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						/>
					</div>
					<div className="mt-4">
						<label className="block text-gray-700">Password</label>
						<input
							type="password"
							placeholder="Password"
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						/>
					</div>
					<div className="flex items-baseline justify-between">
						<Link to="/home">
							<button className="px-6 py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
								Login
							</button>
						</Link>
						<Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
							Forgot password?
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
