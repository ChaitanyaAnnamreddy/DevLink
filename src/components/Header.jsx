import reactLogo from '../assets/developer.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import imagePlaceholder from '../assets/person.svg'

const Header = () => {
  const [notification, setNotification] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)
  const connections = useSelector((state) => state.connection)
  const requests = useSelector((state) => state.requests)

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      dispatch(removeUser())

      setNotification({
        type: 'success',
        message: 'Logged out successfully! 🎉',
      })

      setTimeout(() => {
        setNotification(null)
      }, 1000)

      navigate('/login')
    } catch (error) {
      navigate('/error')

      setNotification({
        type: 'error',
        message: error.message,
      })
    }
  }

  return (
    <div className="navbar bg-base-100 fixed z-50 top-0" data-theme="synthwave">
      {/* ✅ Fixed Toast Notification */}
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

      <div className="flex-1">
        <div className="flex-1">
          <button onClick={() => navigate('/')} className="btn btn-ghost">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <span className="text-xl font-bold">DevLink</span>
          </button>
        </div>
      </div>

      <div className="flex-none gap-2">
        {selector?.user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={selector.user?.firstName + ' ' + selector.user?.lastName}
                  src={selector.user?.photoUrl || imagePlaceholder}
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button
                  className="justify-between"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/connections')}>
                  Connections
                  {connections?.connections?.data?.length > 0 && (
                    <span className="badge bg-red-200 text-black">
                      {connections?.connections?.data?.length}
                    </span>
                  )}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/requests')}>
                  Requests
                  {requests?.requests?.length > 0 && (
                    <span className="badge bg-red-200 text-black">
                      {requests?.requests?.length}
                    </span>
                  )}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/settings')}>Settings</button>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
