/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import { Link } from 'gatsby'

const ServiceLink = ({ item }) => {
    return (
        <Link key={item.id} to={item.url} title={item.label} sx={{ color: 'black', textDecoration: 'none' }}>
            <div sx={{ py: [2, 2, null], minHeight: ['5rem', '5rem', '6rem'], variant: 'divs.serviceBlockLinks' }}>
                <Heading
                    as='h4'
                    sx={{
                        fontSize: 3,
                        fontWeight: 'normal',
                    }}
                >
                    {item.label}
                </Heading>
            </div>
        </Link>
    )
}
export default ServiceLink
