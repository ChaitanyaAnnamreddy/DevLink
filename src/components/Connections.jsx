import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../store/connectionSlice'
import { useNavigate } from 'react-router'

const Connections = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state) => state.connection)

  const connections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      })
      dispatch(addConnections(res.data))
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  useEffect(() => {
    connections()
  }, [])

  return (
    <div
      className="h-screen py-24 px-8 overflow-x-hidden scrollbar-smooth"
      data-theme="lofi"
    >
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
                Connections
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <hr className="mt-4 border-gray-400 dark:border-gray-100" />
      <div className="mx-auto max-w-screen-lg py-12 sm:py-8  px-4 sm:px-3">
        <div className="flex items-center justify-between pb-6">
          <h2 className="font-semibold text-gray-700">My Connections</h2>
        </div>
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-5">Profile</th>
                  <th className="px-5 py-5">Full Name</th>
                  <th className="px-5 py-5">Age</th>
                  <th className="px-5 py-5">Gender</th>
                  <th className="px-5 py-5">Role</th>
                  <th className="px-5 py-5">Skills</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {selector?.connections?.data?.length > 0 ? (
                  selector.connections.data.map((item) => (
                    <tr
                      key={item?._id}
                      className="border-b border-gray-200 bg-white hover:bg-gray-100 cursor-pointer"
                    >
                      <td className="px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src={
                                item?.photoUrl || '/images/default-profile.png'
                              }
                              alt="User"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">
                              {item?.firstName} {item?.lastName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">
                          {item?.age ? `${item?.age}` : 'NA'}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">
                          {item?.gender ? `${item?.gender}` : 'NA'}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">
                          {item?.about || 'No details available'}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">
                          {item?.skills?.length > 0
                            ? item.skills.join(', ')
                            : 'No skills added'}
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-5 py-5 text-center text-sm">
                      No connections found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connections
