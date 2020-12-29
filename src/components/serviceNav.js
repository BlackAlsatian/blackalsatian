/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import serviceLinks from './serviceLinks'

export default function ServiceNav({ color }) {
    return (
        <Flex as='nav' sx={{ flexDirection: 'column' }}>
            {serviceLinks.map(({ name, url, id }) => (
                <AniLink
                    swipe
                    duration={0.7}
                    direction='down'
                    color='black'
                    key={id}
                    to={url}
                    sx={{ color: `${color}`, pb: 3 }}
                >
                    {name}
                </AniLink>
            ))}
        </Flex>
    )
}
