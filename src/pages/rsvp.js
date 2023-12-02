import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'



const RSVP = () => {
    return (
        <main>
            <Layout pageTitle="RSVP">


                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                <Link to="/">This text is passed into the Link component's children prop!</Link>

            </Layout>
        </main>
    )
}

export const Head = () => <title>RSVP</title>

export default RSVP