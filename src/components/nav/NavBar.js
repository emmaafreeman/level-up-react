import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <button className="nav-link fakeLink"
          onClick={() => {
            history.push({ pathname: "/" })
          }}>Games</button>
      </li>
      <li className="navbar__item">
        <button className="nav-link fakeLink"
          onClick={() => {
            history.push({ pathname: "/events" })
          }}>Events</button>
      </li>
      <li className="navbar__item">
        <button className="nav-link fakeLink"
          onClick={() => {
            history.push({ pathname: "/profile" })
          }}>Profile</button>
      </li>
      {
        (localStorage.getItem("lu_token") !== null) ?
          <li className="nav-item">
            <button className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("lu_token")
                history.push({ pathname: "/" })
              }}
            >Logout</button>
          </li> :
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </>
      }
    </ul>
  )
}
