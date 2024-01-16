import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { isLoggedIn } from "../services/auth"


const DetailsPage = () => {
    return (
        <main>
            <Layout pageTitle="Details">
                {isLoggedIn() ? (
                    <>
                        <h2>Attire</h2>
                        Comfortable elegance for fun and dancing. Bright colors and patterns are welcome!

                        <h2>Children and Plus Ones</h2>
                        Please refer to your individual wedding inviations for details regarding children and plus ones.<br />

                        <h2> Gifts and Registry </h2>
                        Your presence is the greatest gift of all!<br />
                        While gifts are not expected, we'd be delighted by unique art pieces or home decor.<br />
                        <a href="https://pin.it/3B9zRo6" target="_blank" rel="noreferrer">Pinterest Board for Inspiration </a>

                        <h2> Photo Policy</h2>
                        We will be having a no-phones ceremony.  
                        <h2> Wedding Hashtag</h2>
                        #blahblahblah
                    </>
                ) : (
                    <>
                        You should <Link to="/guest/login">log in</Link> to see restricted
                        content
                    </>
                )}
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="Details" />

export default DetailsPage








