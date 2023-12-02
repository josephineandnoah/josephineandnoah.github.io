import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">

                <Link to="/">Back to Home</Link>
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/fish_PNG25137.png"
                />
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage