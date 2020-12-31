/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import serviceLinks from './serviceLinks'

export default function ServiceNav({ color, handleMenuClick }) {
    return (
        <Flex as='nav' sx={{ flexDirection: 'column' }}>
            {serviceLinks.map(({ name, url, id }) => (
                <AniLink
                    swipe
                    // duration={0.7}
                    direction='down'
                    // top='entry'
                    entryOffset={80}
                    color='black'
                    key={id}
                    to={url}
                    sx={{ color: `${color}`, pb: 3 }}
                    onClick={handleMenuClick}
                >
                    {name}
                </AniLink>
            ))}
        </Flex>
    )
}
