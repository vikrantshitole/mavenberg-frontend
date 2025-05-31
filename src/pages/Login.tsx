import React, { use } from 'react'
import { api } from '../services/api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const Login = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    React.useEffect(() => {
        // Reset error when email or password changes
        setError(null)
    }, [email, password])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true)
            api.post('auth/login', { email, password })
                .then((response) => {
                    setLoading(false)
                    navigate('/dashboard');
                    setEmail('');
                    setPassword('');
                    dispatch(login(response.data));
                })
                .catch((error) => { 
                    setError('Login failed. Please check your credentials and try again.')
                    setLoading(false)
                    console.error('Login error:', error)    
                })
            
        }

    }
    const validate = () => {
        if (!email || !password) {
            setError('Email and password are required.')
            return false
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.')
            return false
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return false
        }
        setError(null)
        return true
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                aria-required="true"
                                autoComplete="email"
                                placeholder="Enter your email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-solid border-gray-500 focus:border-0 outline-2 -outline-offset-2 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                aria-required="true"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 border-2 border-solid border-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:border-0 focus:outline-indigo-600 sm:text-sm/6"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login