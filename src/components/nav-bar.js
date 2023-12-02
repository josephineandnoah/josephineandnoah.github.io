import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{greetingMessage}</span>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>

              Home {` `}
            </Link>

          </li>

          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About {` `}
            </Link>
          </li>

          {isLoggedIn() ? (
            <li className={navLinkItem}>
              <Link to="/rsvp" className={navLinkText}>
                RSVP {` `}
              </Link>
            </li>
          ) : null}

          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/guest/login`))
              }}
            >
              <li className={navLinkItem}>
                Logout
              </li>
            </a>
          ) : null}

        </ul>
      </nav>
    </div>
  )
}