import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { addUser } from '../store/userSlice'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state) => state.user)

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      })
      dispatch(addUser(response.data))
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  useEffect(() => {
    if (!selector?.user) {
      fetchUser()
    }
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Body
