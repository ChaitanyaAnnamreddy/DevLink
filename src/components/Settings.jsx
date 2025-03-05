import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../store/userSlice'
import { useDispatch } from 'react-redux'

const Settings = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`${BASE_URL}/user/delete`, {
        withCredentials: true,
      })

      setShowDialog(false)

      dispatch(removeUser())

      navigate('/login')
    } catch (error) {
      console.error('Error deleting account:', error)
      setShowDialog(false)
    }
  }

  const handleClick = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordUpdate = async () => {
    try {
      const payload = { currentPassword, newPassword }
      const res = await axios.patch(`${BASE_URL}/profile/password`, payload, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      })
      setSuccess(res.data.message)
      setError('')
      setCurrentPassword('')
      setNewPassword('')
      setNotification({
        type: 'success',
        message: res.data.message,
      })

      setTimeout(() => {
        setNotification(null)
      }, 1000)
    } catch (error) {
      setError(error.response?.data?.error || 'Current password is incorrect')
      setSuccess('')
      setNotification(null)
    }
  }

  return (
    <div className="min-h-screen" data-theme="retro">
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
      <div className="mx-4 max-w-screen-xl sm:mx-10 md:mx-20 lg:mx-10">
        <div className="pt-4 pb-2 mt-16">
          <nav className="mb-1 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue"
                >
                  <svg
                    className="me-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                    Settings
                  </span>
                </div>
              </li>
            </ol>
          </nav>{' '}
        </div>
        <hr className="mt-2 mb-4 border-gray-400 dark:border-gray-400" />
        <div className="lg:mx-[30%] mt-10">
          <p className="py-2 text-xl font-semibold">Email Address</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-600">
              Your email address is <strong>{selector?.user?.emailId}</strong>
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <p className="py-2 text-xl font-semibold">Password</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
              <label htmlFor="current-password">
                <span className="text-sm text-gray-500">Current Password</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="current-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="***********"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
              </label>
              <label htmlFor="new-password">
                <span className="text-sm text-gray-500">New Password</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="new-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="***********"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div onClick={handleClick}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
              )}
            </div>
          </div>
          {error && <p className="pt-2 text-sm text-red-500">{error}</p>}
          <button
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
            onClick={handlePasswordUpdate}
          >
            Save Password
          </button>
          <hr className="mt-4 mb-4" />

          <div className="mb-2">
            <p className="py-2 text-xl font-semibold">Delete Account</p>
            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Proceed with caution
            </p>
            <p className="mt-2">
              Your account will be permanently deleted. This action cannot be
              undone.
            </p>
            <button
              className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
              onClick={() => {
                setShowDialog(true)
              }}
            >
              Continue with deletion
            </button>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Account Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete your account?
            </p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary bg-red-600 text-white"
                onClick={handleDeleteAccount}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Settings
