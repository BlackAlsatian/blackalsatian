/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from '../../assets/images/black-alsatian-logo.svg'

const Header = () => {
  const menuLinks = [
    {
      id: 1,
      name: 'About',
      url: '/about/',
    },
    {
      id: 2,
      name: 'Services',
      url: '/services/',
    },
    {
      id: 3,
      name: 'Portfolio',
      url: '/portfolio/',
    },
    {
      id: 4,
      name: 'Blog',
      url: '/blog/',
    },
    {
      id: 5,
      name: 'Contact',
      url: '/contact/',
    },
  ]
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: [2, 3],
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 10,
      }}
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='Black Alsatian Web Development Agency'
          sx={{
            width: 'sizes.full',
            maxWidth: 200,
          }}
        />
      </Link>
      <div sx={{ mx: 'auto' }} />
      {menuLinks.map(({ name, url, id }) => (
        <Link
          key={id}
          to={url}
          sx={{
            color: 'black',
            fontSize: 1,
            fontWeight: 'extrabold',
            textDecoration: 'none',
            px: 3,
            '&:last-child': {
              pr: 0,
            },
          }}
        >
          {name}
        </Link>
      ))}
    </header>
  )
}

export default Header
