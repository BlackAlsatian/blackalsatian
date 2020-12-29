/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

function PagesNav({
    previousPagePath,
    nextPagePath,
    previousName,
    nextName,
    backgroundColor,
    color,
}) {
    return (
        <nav>
            <ul
                sx={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    p: 4,
                }}
            >
                <li sx={{ m: 3 }}>
                    {previousPagePath && (
                        <>
                            <Link
                                to={previousPagePath}
                                rel='prev'
                                title={previousName || 'Previous'}
                                sx={{
                                    variant: 'buttons.simple',
                                    backgroundColor: `${backgroundColor}`,
                                    color: `${color}`,
                                    textDecoration: 'none',
                                    boxShadow: 'xl',
                                    transition: '200ms',
                                    py: 3,
                                    px: 4,
                                    fontSize: 3,
                                    fontWeight: 'black',
                                    '&:hover': {
                                        backgroundColor: `${backgroundColor}`,
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                ← {previousName || 'Previous'}
                            </Link>
                            <br />
                        </>
                    )}
                </li>
                <li sx={{ m: 3 }}>
                    {nextPagePath && (
                        <Link
                            to={nextPagePath}
                            rel='next'
                            title={nextName || 'Next'}
                            sx={{
                                variant: 'buttons.simple',
                                backgroundColor: `${backgroundColor}`,
                                color: `${color}`,
                                textDecoration: 'none',
                                boxShadow: 'xl',
                                transition: '200ms',
                                py: 3,
                                px: 4,
                                fontSize: 3,
                                fontWeight: 'black',
                                '&:hover': {
                                    backgroundColor: `${backgroundColor}`,
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            {nextName || 'Next'} →
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default PagesNav
