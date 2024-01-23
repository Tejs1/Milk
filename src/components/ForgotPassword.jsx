// src/components/ForgotPassword.js

const ForgotPassword = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-blue-50">
			<div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
				<h3 className="text-2xl font-bold text-center text-gray-700">Forgot Password</h3>
				<p className="mt-2 text-center text-sm text-gray-600">
					Enter your email address below and we&rsquo;ll send you a link to reset your password.
				</p>
				<form action="" className="mt-6">
					<div className="mt-4">
						<label className="block text-gray-700" htmlFor="email">
							Email Address
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							id="email"
							required
							className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						/>
					</div>
					<div className="flex items-baseline justify-center">
						<button className="px-6 py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
							Send Reset Link
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ForgotPassword
