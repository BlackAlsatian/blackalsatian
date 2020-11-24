/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from '../../assets/images/black-alsatian-logo.svg'

const Header = () => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'layout.header',
      }}
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='Black Alsatian Web Development Agency'
          sx={{
            width: 'sizes.full',
            maxWidth: 250,
          }}
        />
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link
        to='/about/'
        sx={{
          variant: 'layout.navlink',
        }}
      >
        About
      </Link>
      <Link
        to='/services/'
        sx={{
          variant: 'layout.navlink',
        }}
      >
        Services
      </Link>
      <Link
        to='/portfolio/'
        sx={{
          variant: 'layout.navlink',
        }}
      >
        Portfolio
      </Link>
      <Link
        to='/blog/'
        sx={{
          variant: 'layout.navlink',
        }}
      >
        Blog
      </Link>
      <Link
        to='/contact/'
        sx={{
          variant: 'layout.navlink',
        }}
      >
        Contact
      </Link>
    </header>
  )
}

export default Header
