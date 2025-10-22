/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import React from 'react'
import { Flex } from 'theme-ui'
import safeParse from '../utils/safeParse'
import { removeTags } from './helpers'

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
                        <Link to={item.url} key={item.id} title={removeTags(item.label)}>
                            {safeParse(item.label)}
                        </Link>
                    ),
            )}
        </Flex>
    )
}

export default React.memo(Nav)
