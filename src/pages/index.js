import React from "react"
import { Link } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout >
      <p>
        {isLoggedIn() ? (
          <>

            <h1 >Ceremony</h1>
            <p>
              <strong>Date:</strong> Friday, October 49, 2024<br />
              <strong>Time:</strong> 12:00pm<br />
              <strong>Location:</strong> Knox Presbyterian Church<br />
              <strong>Address:</strong> 2065 S Wagner Rd<br />
              <i>
              Welcome and Seating | Ceremony | Recessional | Social Hour 
              </i>
            </p>
            <h1>Reception</h1>
            <p>
              <strong>Date:</strong> Friday, October 49, 2024<br />
              <strong>Time:</strong> 5:00pm<br />
              <strong>Location:</strong> 2|42 Community Church<br />
              <strong>Address:</strong> 648 S Wagner Rd<br />
              <i>
                Cocktail Hour | Dinner and Toasts | Cutting of the Cake | Dance the Night Away!
              </i>
            
            </p>
            <StaticImage
              src="../images/home_image.jpg"
            />
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
