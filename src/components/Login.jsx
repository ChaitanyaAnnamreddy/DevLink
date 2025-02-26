import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'
import { BASE_URL } from '../utils/constants'

const Login = () => {
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [isSignIn, setIsSignIn] = useState(true)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [notification, setNotification] = useState(null)
  const [signInError, setSignInError] = useState('')
  const [signUpError, setSignUpError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ✅ Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const validateFirstName = (firstName) => {
    return firstName.length >= 3
  }

  const validateLastName = (lastName) => {
    return lastName.length >= 3
  }

  const handleLogin = async () => {
    setEmailError('')
    setPasswordError('')
    setFirstNameError('')
    setLastNameError('')

    if (!emailId || !validateEmail(emailId)) {
      setEmailError('Please enter a valid email address')
      return
    }
    if (!password || !validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long')
      return
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { emailId, password },
        { withCredentials: true }
      )

      dispatch(addUser(res.data))

      setNotification({
        type: 'success',
        message: 'Logged in successfully! 🎉',
      })

      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {
      setSignInError(`❌ ${error.response?.data || error.message}`)
    }
  }

  const handleSignUp = async () => {
    setEmailError('')
    setPasswordError('')
    setFirstNameError('')
    setLastNameError('')

    // **🚨 Check validation before API call**
    if (!emailId || !validateEmail(emailId)) {
      setEmailError('Please enter a valid email address')
      return
    }
    if (!password || !validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long')
      return
    }
    if (!firstName || !validateFirstName(firstName)) {
      setFirstNameError('First name must be at least 3 characters long')
      return
    }
    if (!lastName || !validateLastName(lastName)) {
      setLastNameError('Last name must be at least 3 characters long')
      return
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { emailId, password, firstName, lastName },
        { withCredentials: true }
      )

      dispatch(addUser(res.data.data))

      setNotification({
        type: 'success',
        message:
          'Welcome aboard! 🚀 Your journey starts here. Complete your profile and let the dev world discover you! 🌎💡',
      })

      setTimeout(() => {
        navigate('/profile')
        setNotification(null)
      }, 2000)
    } catch (error) {
      setSignInError(error.response?.data || error.message)
    }
  }

  return (
    <div
      className="flex h-screen flex-1 flex-col justify-center px-6 py-24 lg:px-8"
      data-theme="lofi"
    >
      {notification && (
        <div className="toast toast-top toast-center fixed z-50">
          <div
            className={`alert ${
              notification.type === 'success' ? 'alert-success' : 'alert-error'
            }`}
          >
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          {isSignIn ? 'Sign in to your account' : 'Sign up for an account'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isSignIn && (
            <div className="flex">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {firstNameError && (
                  <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {lastNameError && (
                  <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          {signInError && <p className="text-red-500 text-sm">{signInError}</p>}
          {signUpError && <p className="text-red-500 text-sm">{signUpError}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-xs hover:bg-indigo-500"
              onClick={isSignIn ? handleLogin : handleSignUp}
            >
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isSignIn ? 'Not a member? ' : 'Already a member? '}
          <span
            className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
