/** @jsxImportSource theme-ui */
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

const AnimatedSwipeButton = ({
    props,
    name,
    url,
    direction,
    swipeColor,
    replace,
    linkRelation,
    backgroundColor,
    textColor,
    hoverColor,
}) => {
    return (
        <Link
            {...props}
            cover='true'
            duration={0.5}
            direction={direction}
            bg={swipeColor ? swipeColor : '#111827'}
            to={url}
            replace={replace}
            rel={linkRelation}
            title={name}
            sx={{
                variant: 'buttons.simple',
                backgroundColor: backgroundColor,
                color: textColor + ' !important',
                textDecoration: 'none',
                boxShadow: 'xl',
                transition: '200ms',
                fontSize: 3,
                fontWeight: 'black',
                '&:hover': {
                    color: hoverColor && hoverColor + ' !important',
                    backgroundColor: backgroundColor,
                    boxShadow: 'none',
                },
                '&:visited, &:active, &:focus': {
                    color: textColor,
                },
            }}
        >
            {name}
        </Link>
    )
}

export default AnimatedSwipeButton
