import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
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
            <li className={navLinkItem}>
              <Link to="/updates" className={navLinkText}>
                Updates {` `}
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
          ) : (
            <li className={navLinkItem}>
              <Link to="/guest/login" className={navLinkText}>
                Login {` `}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}