import reactLogo from '../assets/developer.png'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar bg-base-100 fixed z-50" data-theme="synthwave">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a href="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://yt4.ggpht.com/ytc/AIdro_lr2YRGxPaLwi_AslnVpf2OHnD0SemofC3TRkQfgvY=s64-c-k-c0x00ffffff-no-rj"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between" href="/profile">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/login">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
