import React from "react"
import NavBar from "./nav-bar"
import {
  container,
  heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => (
  <>
    <div className={container}>

      <NavBar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  </>
)

export default Layout