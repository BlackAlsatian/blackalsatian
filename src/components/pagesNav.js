/** @jsxImportSource theme-ui */
import AnimatedSwipeButton from './template/elements/animatedSwipeButton'

const PagesNav = ({ previousPagePath, nextPagePath, previousName, nextName, backgroundColor, color, swipeColor }) => {
    return (
        <div>
            <ul
                sx={{
                    p: [3, 3, 4],
                    variant: 'uls.flexList',
                }}
            >
                <li sx={{ m: 3 }}>
                    {previousPagePath && (
                        <>
                            <AnimatedSwipeButton
                                name={previousName ? '← ' + previousName : '← Previous'}
                                url={previousPagePath}
                                direction='right'
                                swipeColor={swipeColor}
                                linkRelation='prev'
                                backgroundColor={backgroundColor}
                                textColor={color}
                            />
                        </>
                    )}
                </li>
                <li sx={{ m: 3 }}>
                    {nextPagePath && (
                        <AnimatedSwipeButton
                            name={nextName ? nextName + ' →' : 'Next →'}
                            url={nextPagePath}
                            direction='left'
                            swipeColor={swipeColor}
                            linkRelation='next'
                            backgroundColor={backgroundColor}
                            textColor={color}
                        />
                    )}
                </li>
            </ul>
        </div>
    )
}

export default PagesNav
