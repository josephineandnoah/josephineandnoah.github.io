import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { isLoggedIn } from "../../services/auth"



const DetailsPage = ({ data }) => {
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
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Details" />

export default DetailsPage