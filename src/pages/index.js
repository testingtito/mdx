import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid
const IndexPage = () => {
  return (
    <Layout>
      <Hero showPerson />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do,YYYY ")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`
export default IndexPage
