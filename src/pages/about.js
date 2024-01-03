import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">

                <h2>Bob</h2>
                <p>
                    Bob's lifelong passion for Bibles began with a gift in his youth. He collected them zealously, seeking their wisdom and stories. His diverse collection became a bridge, uniting cultures through shared faith and history.
                </p>

                <h2>Alice</h2>
                <p>
                    Alice, inquisitive by nature, stumbled upon Bob's tale of collecting Bibles. Bewildered yet intrigued, she marveled at his passion. She couldn't fathom his fervor for collecting ancient texts. Yet, amidst her confusion, she found fascination. Bob's dedication puzzled her, but she admired his ability to connect with people through these stories.
                </p>

                <h2>Our Story</h2>
                <p>
                    Alice and Bob's chance meeting at a bookstore ignited a spark. Alice, intrigued by Bob's passion, found common ground in curiosity. Their shared wonder for life's mysteries kindled a beautiful love story, uniting them in pursuit of the unknown. Their love story, a tapestry woven with shared wonder and mutual respect, blossomed into a deep connection. Now, standing on the threshold of forever, Alice and Bob celebrate their union, embracing not only each other but also the richness of their individual stories.
                </p>
                <p>
                    Their marriage is a celebration of their differences, a merging of two worlds, and a testament to the power of love and understanding. Together, they embark on a new adventure, ready to explore life's marvels hand in hand, forever cherishing the awe-inspiring journey that brought them together.
                </p>

                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/fish_PNG25137.png"
                />
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage