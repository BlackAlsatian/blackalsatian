/** @jsxImportSource theme-ui */
import UpArrow from './arrows/upArrow'

const GoToTopButton = ({ visible }) => {
    return (
        <a
            href='#start'
            variant='buttons.simple'
            ml='auto'
            sx={{
                display: visible ? 'block' : 'none',
                position: 'fixed',
                bottom: 5,
                right: 5,
                zIndex: 10,
                py: 1,
                px: 2,
                cursor: 'pointer',
                backgroundColor: 'gray',
                opacity: 0.3,
                color: 'white',
                textDecoration: 'none',
                boxShadow: '2xl',
                borderRadius: '50px',
                transition: 'ease-in-out 0.5s',
                '&:hover, &:focus': {
                    py: 0,
                    px: 1,
                    backgroundColor: 'yellow',
                    boxShadow: 'sm',
                    borderRadius: '20px',
                    bottom: '4.40rem',
                    opacity: 0.6,
                },
            }}
        >
            <UpArrow color='white' width={36} height={36} />
        </a>
    )
}

export default GoToTopButton
