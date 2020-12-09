/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => {
  return (
    <footer
      sx={{
        width: '100%',
        bg: 'white',
        fontSize: 0,
        color: 'muted',
        variant: 'footer',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 3,
        }}
      >
        <Link to='/privacy-policy/' sx={{ color: 'inherit' }}>
          Privacy Policy
        </Link>
        <div sx={{ mx: 1 }} />
        <Link to='/terms-of-use/' sx={{ color: 'inherit' }}>
          Terms of Use
        </Link>
        <div sx={{ mx: 1 }} /> &copy; 2003 - {new Date().getFullYear()}{' '}
        <Link
          to='/'
          sx={{
            ml: 1,
          }}
        >
          {siteTitle}
        </Link>
        , All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
