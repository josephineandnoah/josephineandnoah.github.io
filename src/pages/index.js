import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Seo from '../components/seo'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout >
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/guest/profile">profile</Link>
            <p><Link to="/about">About</Link> </p>
            <p>I'm making this by following the Gatsby Tutorial.</p>

          </>
        ) : (
          <>
            You should <Link to="/guest/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
