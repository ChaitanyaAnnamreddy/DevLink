import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../store/connectionSlice'
import { useNavigate } from 'react-router'

const Connections = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state) => state.connection)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const connections = async (pageNumber) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/connections?page=${pageNumber}&limit=5`,
        {
          withCredentials: true,
        }
      )
      dispatch(addConnections(res.data))
      setTotalPages(res.data.totalPages)
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  useEffect(() => {
    connections(page)
  }, [page])

  return (
    <div
      className="h-screen py-24 px-8 overflow-x-hidden scrollbar-smooth"
      data-theme="retro"
    >
      <nav className="mb-1" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
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
                className="mx-1 h-4 w-4 text-gray-400"
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
              <span className="ms-1 text-sm font-medium text-gray-500">
                Connections
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <hr className="mt-4 border-gray-400" />
      <div className="mx-auto max-w-screen-lg py-12 sm:py-8 px-4 sm:px-3">
        <div className="flex items-center justify-between pb-6">
          <h2 className="font-semibold text-gray-700">My Connections</h2>
        </div>
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className="text-left text-xs font-semibold uppercase tracking-widest text-white"
                  data-theme="aqua"
                >
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
                      className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                      data-theme="garden"
                    >
                      <td className="px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={
                              item?.photoUrl || '/images/default-profile.png'
                            }
                            alt="User"
                          />
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        {item?.firstName} {item?.lastName}
                      </td>
                      <td className="px-5 py-5 text-sm">
                        {item?.age ? `${item?.age}` : 'NA'}
                      </td>
                      <td className="px-5 py-5 text-sm">
                        {item?.gender ? `${item?.gender}` : 'NA'}
                      </td>
                      <td className="px-5 py-5 text-sm">
                        {item?.about || 'No details available'}
                      </td>
                      <td className="px-5 py-5 text-sm">
                        {item?.skills?.length > 0
                          ? item.skills.join(', ')
                          : 'No skills added'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-5 py-5 text-center text-sm">
                      No connections found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="join mt-4 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`join-item rounded-lg btn ${
                  page === index + 1 ? 'btn-active' : ''
                }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Connections
