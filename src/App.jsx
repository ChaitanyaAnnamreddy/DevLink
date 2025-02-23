import Body from './components/Body'
import { BrowserRouter, Routes, Route } from 'react-router'
import Hero from './components/Hero'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Hero />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
