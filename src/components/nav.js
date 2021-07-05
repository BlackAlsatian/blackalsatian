/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

const Nav = ({ navLinks }) => {
    return (
        <Flex
            as='nav'
            sx={{
                ml: 'auto',
                display: ['none', 'none', 'flex'],
            }}
        >
            {navLinks.map(
                (item) =>
                    item.label !== 'Home' && (
                        <Link to={item.url} key={item.id} title={parse(item.label)}>
                            {parse(item.label)}
                        </Link>
                    ),
            )}
        </Flex>
    )
}

export default Nav
