import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

export default function TestimonialsBlock() {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allWpTestimonial {
        edges {
          node {
            id
            title
            content
            uri
            slug
            testimonialRole
            testimonialCompany
            testimonialAuthor
          }
        }
      }
    }
  `)
  //   console.log(data)
  return (
    <section>
      {data.allWpTestimonial.edges.map(({ node }) => (
        <div key={node.id}>
          {parse(node.content)}
          <p>
            <i>- {node.testimonialAuthor}</i>, {node.testimonialRole} -{' '}
            {node.testimonialCompany}
          </p>
        </div>
      ))}
    </section>
  )
}
