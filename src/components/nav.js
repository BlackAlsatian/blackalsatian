/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import React from 'react'
import { Flex } from 'theme-ui'

const Nav = ({ navLinks }) => {
    return (
        <Flex
            as='nav'
            aria-label='Primary'
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

export default React.memo(Nav)
