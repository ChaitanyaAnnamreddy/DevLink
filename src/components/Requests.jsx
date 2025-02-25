import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addRequests, removeRequests } from '../store/requestsSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useState } from 'react'

const Requests = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [notification, setNotification] = useState(null)

  const selector = useSelector((state) => state.requests)

  const requests = selector?.requests

  const reviewRequest = async (status, _id, firstName, lastName) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        {
          withCredentials: true,
        }
      )
      console.log(res.data)
      dispatch(removeRequests(_id))
      setNotification({
        type: 'success',
        message: `${
          status === 'accepted'
            ? `🎊 You and ${firstName} ${lastName} are now connected!`
            : `🚫 You passed on ${firstName} ${lastName}’s request. No hard feelings!`
        }`,
      })
      setTimeout(() => {
        setNotification(null)
      }, 2000)

      console.log(`✅ ${status} request processed, updated requests:`, requests)
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      })
      dispatch(addRequests(res.data))
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  return (
    <>
      <div
        className="h-screen py-24 px-8 overflow-y-auto scrollbar-smooth"
        data-theme="retro"
      >
        {notification && (
          <div className="toast toast-top toast-center fixed z-50">
            <div
              className={`alert ${
                notification.type === 'success'
                  ? 'alert-success'
                  : 'alert-error'
              }`}
            >
              <span>{notification.message}</span>
            </div>
          </div>
        )}
        <nav className="mb-1" aria-label="Breadcrumb">
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
                  Connection Requests
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <hr className="mt-4 border-gray-400 dark:border-gray-400" />
        <div className="py-12 flex flex-col gap-8" data-theme="retro">
          {requests?.length > 0 &&
            requests?.map((item) => (
              <div
                className="card md:card-side bg-base-100 shadow-xl w-full md:w-2/5 flex justify-center mx-24 md:mx-auto"
                data-theme="synthwave"
                key={item?.fromUserId._id}
              >
                <figure>
                  <img src={item?.fromUserId?.photoUrl} alt="Profile" />
                </figure>
                <div className="card-body lg:px-24 flex flex-col justify-center">
                  <h2 className="card-title text-3xl">
                    {item?.fromUserId?.firstName} {item?.fromUserId?.lastName}
                  </h2>
                  {item?.fromUserId?.age && item?.fromUserId?.gender && (
                    <p>
                      {item?.fromUserId?.age} years,{' '}
                      {item?.fromUserId?.gender.charAt(0).toUpperCase() +
                        item?.fromUserId?.gender.slice(1)}
                    </p>
                  )}
                  {item?.fromUserId?.skills && (
                    <p>
                      {item?.fromUserId?.skills
                        .map(
                          (skill) =>
                            skill.charAt(0).toUpperCase() + skill.slice(1)
                        )
                        .join(', ')}
                    </p>
                  )}
                  <p>{item?.fromUserId?.about}</p>
                  <div className="card-actions flex flex-nowrap">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        reviewRequest(
                          'accepted',
                          item?._id,
                          item?.fromUserId?.firstName,
                          item?.fromUserId?.lastName
                        )
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() =>
                        reviewRequest(
                          'rejected',
                          item?._id,
                          item?.fromUserId?.firstName,
                          item?.fromUserId?.lastName
                        )
                      }
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {requests?.length === 0 && (
            <p className="text-3xl w-full h-[60vh] flex items-center justify-center">
              🚀 No new connection requests at the moment. Check back later!
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Requests
