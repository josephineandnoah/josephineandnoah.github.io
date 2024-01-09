import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
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

export const Head = () => <title>RSVP</title>

export default RSVP