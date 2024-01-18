import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
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

                        <h2> Phone Policy</h2>
                        We ask that you refrain from using phones and cameras at the ceremony. <br /> 
                        But please feel free to snap and share during the reception!
                        <br />
                        Share your captured moments <a href="https://pin.it/3B9zRo6" target="_blank" rel="noreferrer">here </a>
                        <h2> Wedding Hashtag</h2>
                        #blahblahblah

                        <h2>Contact us</h2>
                        Join our Slack to volunteer, ask questions, connect with organizers, and engage with fellow guests! <br /> 
                        Your participation makes our celebration even more special.<br /> 
                        Click [here] to join the conversation
                        
                        <p />
                        <StaticImage
                            src="../images/image_landscape_1.jpg"
                        />

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








