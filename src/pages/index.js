import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Seo from '../components/seo'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout >
      <h1>Welcome!</h1>
      <p>
        {isLoggedIn() ? (
          <>

            <h2>Ceremony</h2>
            <p>
              <strong>Date:</strong> Friday, October 49, 2024<br />
              <strong>Time:</strong> 12:00pm<br />
              <strong>Location:</strong> Knox Presbyterian Church<br />
              <strong>Address:</strong> 2065 S Wagner Rd<br />
            </p>
            <h2>Reception</h2>
            <p>
              <strong>Date:</strong> Friday, October 49, 2024<br />
              <strong>Time:</strong> 5:00pm<br />
              <strong>Location:</strong> 2|42 Community Church<br />
              <strong>Address:</strong> 648 S Wagner Rd<br />
            </p>
  
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
