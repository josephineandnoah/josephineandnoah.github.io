import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { isLoggedIn } from "../../services/auth"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const DetailsPage = ({ data }) => {
  // const image = getImage(data.allMdx.nodes.frontmatter.hero_image)
  return (
    <Layout pageTitle="Details">


      {isLoggedIn() ? (
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/details/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>

            </h2>
            {/* {node.frontmatter.hero_image_alt} */}



          </article>
        ))
      ) : (
        <>
          You should <Link to="/guest/login">log in</Link> to see restricted
          content
        </>
      )}

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: ASC }}) {
      nodes {
        frontmatter {
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Details" />

export default DetailsPage