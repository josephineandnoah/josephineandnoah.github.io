import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { isLoggedIn } from "../services/auth"


const TravelPage = () => {
    return (
        <main>
            <Layout pageTitle="Travel Guide">
                {isLoggedIn() ? (
                    <>
                        <h2>Tranportation</h2>
                        <a href="https://www.michiganflyer.com/" target="_blank" rel="noopener noreferrer">

                            <strong>Michigan Flyer Airport Motorcoach</strong>
                        </a>
                        <br />
                        Plan your arrival and departure time accordingly as hours of operation are limited.
                        <p />
                        <a href="https://www.theride.org/" target="_blank" rel="noopener noreferrer">
                            <strong>Ann Arbor Bus System</strong>
                        </a>
                        <br />
                        Single fare can be bought ahead of time online or by paying cash or token when boarding the bus.
                        <br />
                        <a href="https://www.theride.org/fares-passes/buy-online" target="_blank" rel="noopener noreferrer">Buy a 1-Day Pass</a> for unlimited rides. Check the website for route details.

                        <p />
                        <a href="https://mbus.ltp.umich.edu/map" target="_blank" rel="noopener noreferrer">
                            <strong>University of Michigan Magic Bus</strong>
                        </a>
                        <br />Blue Buses are free to all students and guests on campus. Check the website for route details.

                        <p />
                        <strong>Rideshare:</strong> <a href="https://www.lyft.com/" target="_blank" rel="noopener noreferrer">Lyft</a> |{' '}
                        <a href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">Uber</a>
                        <br />Rideshare fares to and from the airport can be costly, so be sure to check beforehand to determine what option is right for you.



                        <h2>Accomodations and Things To Do</h2>
                        <iframe
                            title="Traveller's Guide to Ann Arbor"
                            src="https://www.google.com/maps/d/embed?mid=1tXmqGXNglCsB6A4HEjKU8o6WTI1RDPI&ehbc=2E312F&noprof=1"
                            width="80%"
                            height="300"
                        ></iframe>

                        <h2>Local Culture Highlights</h2>
                        Check out Kerrytown, search for fairy doors around Downtown, or take a casual stroll around Ann Arbor parks.
                        <br />
                        Wander the University of Michigan campus, stop by at the free University of Michigan museums and try the free
                        University of Michigan Blue Buses.
                        <p />

                        <h2>Weather</h2>
                        Michigan autumns mark cool temperatures and occasional rainfall.<br />
                        Variable temperatures thoughout the day, so layers are key!<br />
                        Monitor the weather forecast closer to the wedding date for accurate clothing preparation.<br />

                        <h2>Parking</h2>
                        Ample free parking will be available at both wedding event locations.<p />

                        Parking in Downtown Ann Arbor and U of M campus can be challenging; follow signage to avoid getting ticketed. <br />
                        Metered parking is free after 6pm and all day on Sunday. <br />
                        Residential streets can be good places to park, but be sure to obey
                        local regulations.
                        <p />

                        <h2>Time Zone</h2>
                        Eastern Daylight Time (EDT) timezone.<br />
                        <i>Also known as Detroit time</i>
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

export const Head = () => <Seo title="Travel" />

export default TravelPage








