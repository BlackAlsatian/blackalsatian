/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

const ServicesBlock = () => {
  const data = useStaticQuery(graphql`
    {
      allWpService {
        edges {
          node {
            id
            uri
            title
            slug
            excerpt
          }
        }
      }
    }
  `)
  return (
    <section
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: '100%',
        minheight: '50vh',
      }}
    >
      {data.allWpService.edges.map(({ node }) => (
        <div key={node.id} sx={{ minWidth: '30%' }}>
          <h4>{node.title}</h4>
          {parse(node.excerpt)}
        </div>
      ))}
    </section>
  )
}

export default ServicesBlock
