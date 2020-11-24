/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => {
  return (
    <footer
      sx={{
        width: '100%',
        variant: 'layout.footer',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 3,
        }}
      >
        <Link to='/' sx={{ color: 'inherit' }}>
          Privacy Policy
        </Link>
        <div sx={{ mx: 1 }} />
        <Link to='/' sx={{ color: 'inherit' }}>
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
