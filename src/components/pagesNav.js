/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

function PagesNav({
    previousPagePath,
    nextPagePath,
    previousName,
    nextName,
    backgroundColor,
    color,
    swipeColor,
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
                            <AniLink
                                cover
                                duration={0.5}
                                direction='right'
                                bg={swipeColor || '#111827'}
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
                            </AniLink>
                            <br />
                        </>
                    )}
                </li>
                <li sx={{ m: 3 }}>
                    {nextPagePath && (
                        <AniLink
                            cover
                            duration={0.5}
                            direction='left'
                            bg={swipeColor || '#111827'}
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
                        </AniLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default PagesNav
