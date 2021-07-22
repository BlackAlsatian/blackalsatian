/** @jsxImportSource theme-ui */

const ProjectVisitButton = ({ url, title }) => {
    return (
        <a
            href={url}
            title={title}
            target='_blank'
            rel='noopener nofollow noreferrer'
            sx={{
                variant: 'buttons.simple',
                display: 'inline-block',
                backgroundColor: 'white',
                color: '#111827 !important',
                textDecoration: 'none',
                boxShadow: 'xl',
                '&:hover': {
                    boxShadow: 'none',
                },
                '&:visited, &:active, &:focus': {
                    color: '#111827 !important',
                },
            }}
        >
            Visit
        </a>
    )
}

export default ProjectVisitButton
