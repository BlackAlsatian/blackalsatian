/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import serviceLinks from './serviceLinks'

export default function ServiceNav({ color }) {
    return (
        <Flex as='nav' sx={{ flexDirection: 'column' }}>
            {serviceLinks.map(({ name, url, id }) => (
                <Link key={id} to={url} sx={{ color: `${color}`, pb: 3 }}>
                    {name}
                </Link>
            ))}
        </Flex>
    )
}
