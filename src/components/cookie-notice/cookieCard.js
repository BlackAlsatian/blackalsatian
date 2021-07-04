/** @jsxImportSource theme-ui */
import { navigate } from 'gatsby'

const CookieCard = ({ header, message, onClick, button, privacyUrl, privacyText, visible }) => {
    return (
        <div
            sx={{
                display: visible ? 'block' : 'none',
                position: 'fixed',
                bottom: [0, 0, 4],
                right: [0, 0, 4],
                maxWidth: ['768px', '768px', '640px'],
                p: 4,
                backgroundColor: 'black',
                boxShadow: 'lg',
                opacity: '0.7',
                zIndex: 6,
            }}
        >
            <h5
                sx={{
                    fontSize: 0,
                    lineHeight: 'none',
                    mt: 0,
                    mb: 2,
                    display: 'block',
                    fontWeight: 'bold',
                    color: 'white',
                }}
            >
                {header}
            </h5>
            <div p={2}>
                <p
                    sx={{
                        mb: 3,
                        color: 'white',
                        flex: [null, null, '1 1 0%'],
                        fontSize: '12px',
                    }}
                >
                    {message}
                </p>
                <div
                    sx={{
                        textAlign: 'right',
                    }}
                >
                    <button
                        sx={{
                            variant: 'buttons.simple',
                            py: 1,
                            px: 2,
                            color: 'black',
                            fontSize: '12px',
                            backgroundColor: 'white',
                            mr: 1,
                        }}
                        onClick={onClick}
                    >
                        {button}
                    </button>
                    {privacyUrl && (
                        <button
                            sx={{
                                variant: 'buttons.simple',
                                py: 1,
                                px: 2,
                                color: 'black',
                                fontSize: '12px',
                                backgroundColor: 'white',
                            }}
                            onClick={() => navigate(privacyUrl)}
                        >
                            {privacyText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CookieCard
