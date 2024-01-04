import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const DetailPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title

      }
    }
  }
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default DetailPost