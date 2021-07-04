/** @jsxImportSource theme-ui */
import parse from 'html-react-parser'
import LeftApostrophe from '../../icons/leftApostrophe'
import RightApostrophe from '../../icons/rightApostrophe'

const TestimonialTile = ({ content, author, role, company }) => {
    return (
        <div
            sx={{
                height: '100%',
                position: 'relative',
                transition: 'all .25s ease 0s',
                breakInside: 'avoid',
                counterIncrement: 'item-counter',
                mt: 4,
                mb: 4,
                '&:first-of-type': {
                    mt: 0,
                },
                boxShadow: 'xl',
                display: 'block',
            }}
        >
            <div
                sx={{
                    width: '100%',
                    height: '100%',
                    px: 4,
                    py: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    color: 'white',
                    backgroundColor: 'black',
                    transition: 'background-color 200ms ease-in',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <LeftApostrophe color='white' width={28} height={28} />
                {parse(content)}
                <span sx={{ textAlign: 'right' }}>
                    <RightApostrophe color='white' width={28} height={28} />
                </span>

                <small sx={{ textAlign: 'right', marginTop: 3 }}>
                    <i>- {author}</i>
                    {role && `, ${role}`}
                    {company && ` - ${company}`}
                </small>
            </div>
        </div>
    )
}

export default TestimonialTile
