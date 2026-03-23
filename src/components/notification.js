/* eslint-disable react/no-unknown-property */
/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types'
import { Box, Flex } from 'theme-ui'

const Notification = ({ color, bgColor, message, showAlert, status = 'success', title }) => {
    if (!showAlert) {
        return null
    }

    const isError = status === 'error'
    const label = title || (isError ? 'Please Try Again' : 'Got It!')
    const liveRole = isError ? 'alert' : 'status'
    const livePoliteness = isError ? 'assertive' : 'polite'
    const iconPath = isError
        ? 'M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
        : 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'

    return (
        <Flex
            as='div'
            sx={{
                animation: 'fadeBlockIn 600ms ease-in',
                color,
                px: 4,
                py: 3,
                mb: 3,
                borderRadius: 'md',
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                bg: bgColor,
                boxShadow: '2xl',
                zIndex: 50,
                alignItems: 'center',
            }}
            role={liveRole}
            aria-live={livePoliteness}
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
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={iconPath}></path>
            </Box>
            <p sx={{ mb: 0, fontSize: 1, lineHeight: '1.25rem' }}>
                <Box as='span' sx={{ textTransform: 'capitalize', fontWeight: 'black', mr: 1 }}>
                    {label}
                </Box>
                {message}
            </p>
        </Flex>
    )
}

Notification.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    message: PropTypes.string,
    showAlert: PropTypes.bool,
    status: PropTypes.string,
    title: PropTypes.string,
}

export default Notification
