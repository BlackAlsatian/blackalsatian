/** @jsxImportSource theme-ui */
import { Container, Heading, Flex, Box, Badge } from 'theme-ui'
import parse from 'html-react-parser'

const ProjectContent = ({ project, pageStyle }) => {
    return (
        <section sx={{ py: [2, 2, 5], minHeight: 'initial', variant: 'layout.main.' + pageStyle }}>
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                    }}
                >
                    <Box
                        p={[4, 4, 3, 5]}
                        sx={{
                            textAlign: ['left', 'left', 'right'],
                            flex: [null, null, 1],
                            width: ['100%', null],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: ['flex-start', 'flex-start', 'flex-end'],
                            borderRight: [0, 0, '1px solid white'],
                        }}
                    >
                        {project.projectYear && (
                            <Heading
                                as='h3'
                                sx={{
                                    fontSize: [4, 3, 4, 5],
                                    fontWeight: 'thin',
                                    lineHeight: 1,
                                    mb: 4,
                                    letterSpacing: 'tighter',
                                }}
                            >
                                {project.projectYear}
                            </Heading>
                        )}

                        {project.projectUrl && (
                            <a
                                href={project.projectUrl}
                                title={parse(project.title)}
                                target='_blank'
                                rel='noopener nofollow noreferrer'
                                sx={{
                                    variant: 'buttons.simple',
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: '#111827  !important',
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
                        )}

                        <div
                            sx={{
                                py: [2, 2, 5],
                                pl: [null, null, 5],
                                lineHeight: 'loose',
                            }}
                        >
                            {project.tags.nodes &&
                                project.tags.nodes.map(({ name, id }) => (
                                    <Badge key={id} variant='outline'>
                                        {name}
                                    </Badge>
                                ))}
                        </div>
                    </Box>
                    <Box
                        py={[0, 0, 5]}
                        px={[4, 4, 5]}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                            // variant: 'layout.project',
                        }}
                    >
                        {parse(project.content)}
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}

export default ProjectContent
