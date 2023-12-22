import * as React from 'react'
import Layout from '../components/layout'
// import PrivateRoute from '../components/privateRoute'
// import RSVPForm from '../components/RSVPForm'
// import { Router } from "@reach/router"
// import Login from "../components/login"

import { isLoggedIn } from "../services/auth"
import RSVPForm from '../components/RSVPForm'


const RSVP = () => {
    return (
        <main>
            <Layout pageTitle="RSVP">
                {isLoggedIn() ? (
                    <p>
                        <RSVPForm />
                    </p>

                ) : null}
            </Layout>
        </main>
    )
}

export const Head = () => <title>RSVP</title>

export default RSVP