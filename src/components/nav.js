/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import navLinks from './navLinks'

export default function Nav() {
    return (
        <Flex as='nav'>
            {navLinks.map(({ name, url, id }) => (
                <Link key={id} to={url}>
                    {name}
                </Link>
            ))}
        </Flex>
    )
}
