import Body from './components/Body'
import { BrowserRouter, Routes, Route } from 'react-router'
import Hero from './components/Hero'
import Login from './components/Login'
import Profile from './components/Profile'
import Error from './components/Error'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import Settings from './components/Settings'
import Connections from './components/Connections'
import Requests from './components/Requests'

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Hero />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
