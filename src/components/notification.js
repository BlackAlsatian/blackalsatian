/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui'

const Notification = ({ color, bgColor, message, showAlert }) => {
    // const [showAlert, setShowAlert] = useState(false)

    return (
        <>
            {showAlert ? (
                <Flex
                    as='div'
                    sx={{
                        animation: showAlert ? 'fadeBlockIn 600ms ease-in' : 'fadeBlockOut 600ms ease-out',
                        color: color,
                        px: 4,
                        py: 3,
                        borderRadius: 'md',
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        bottom: 2,
                        bg: bgColor,
                        boxShadow: '2xl',
                        zIndex: 50,
                        alignItems: 'center',
                    }}
                    role='alert'
                >
                    <Box
                        as='svg'
                        sx={{ mr: 2, bg: 'transparent', fill: 'transparent !important', flexShrink: 0 }}
                        width='1.25rem'
                        height='1.25rem'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                        ></path>
                    </Box>
                    <p sx={{ mb: 3, fontSize: 1, lineHeight: '1.25rem' }}>
                        <Box as='span' sx={{ textTransform: 'capitalize', fontWeight: 'black', mr: 1 }}>
                            Got It!
                        </Box>{' '}
                        {message}
                    </p>
                    {/* <button
                        sx={{
                            position: 'absolute',
                            background: 'transparent !important',
                            fontSize: 2,
                            fontWeight: 'bold',
                            lineHeight: '1.25rem',
                            right: 0,
                            top: 0,
                            p: 0,
                            mt: 1,
                            mr: 2,
                            outline: 0,
                            border: 0,
                            color: color,
                            '&:focus': {
                                outline: 0,
                                border: 0,
                            },
                        }}
                        onClick={() => setShowAlert(false)}
                    >
                        <Box as='span'>×</Box>
                    </button> */}
                </Flex>
            ) : null}
        </>
    )
}

export default Notification
