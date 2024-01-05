import React from "react"
import NavBar from "./nav-bar"
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
  container,
  heading,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )

  return (
    <div className={container}>
      <header className={siteTitle}>

        <StaticImage
          src="../images/header_image.jpeg"
        />
        {data.site.siteMetadata.title}
      </header>

      <NavBar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

