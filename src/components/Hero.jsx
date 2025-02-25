import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../store/feedSlice'
import { useNavigate } from 'react-router'

const Hero = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.feed)

  const navigate = useNavigate()

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true })
      dispatch(addFeed(res.data))
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <>
      <div
        className="h-screen flex flex-col md:grid grid-cols-2 gap-8 items-center overflow-y-auto px-4 md:px-24 py-24 scrollbar-smooth"
        data-theme="lofi"
      >
        {selector?.feed?.data?.length > 0 &&
          selector?.feed?.data?.map((item) => (
            <div
              className="card bg-base-100 shadow-xl lg:w-1/2 flex justify-center mx-4 md:mx-auto"
              data-theme="synthwave"
              key={item?._id}
            >
              <figure>
                <img src={item?.photoUrl} alt="Profile" />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-3xl flex justify-center">
                  {item?.firstName} {item?.lastName}
                </h2>
                {item?.age && item?.gender && (
                  <p className="flex justify-center">
                    {item?.age} years,{' '}
                    {item?.gender.charAt(0).toUpperCase() +
                      item?.gender.slice(1)}
                  </p>
                )}
                {item?.skills && (
                  <p className="flex justify-center">
                    {item?.skills
                      .map(
                        (skill) =>
                          skill.charAt(0).toUpperCase() + skill.slice(1)
                      )
                      .join(', ')}
                  </p>
                )}
                <p className="flex justify-center">{item?.about}</p>
                <div className="card-actions flex flex-nowrap justify-center">
                  <button className="btn btn-success">Interested</button>
                  <button className="btn btn-error">Decline</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Hero
