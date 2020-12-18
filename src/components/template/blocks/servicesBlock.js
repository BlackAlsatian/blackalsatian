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
                flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'space-around',
                height: '100%',
                width: '100%',
                minheight: '50vh',
                maxWidth: '100vw',
            }}
        >
            {data.allWpService.edges.map(({ node }) => (
                <div key={node.id} sx={{ maxWidth: '100%', p: 2 }}>
                    <h4>{node.title}</h4>
                    {parse(node.excerpt)}
                </div>
            ))}
        </section>
    )
}

export default ServicesBlock
