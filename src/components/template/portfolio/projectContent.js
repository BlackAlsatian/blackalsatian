/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box, Badge } from 'theme-ui'
import parse from 'html-react-parser'

function ProjectContent({ project }) {
    return (
        <section sx={{ py: 5 }}>
            <Container p={5}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                        color: 'white',
                    }}
                >
                    <Box
                        p={[5, 5, 3, 5]}
                        sx={{
                            textAlign: ['left', 'left', 'right'],
                            flex: [null, null, 1],
                            width: ['100%', null],
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
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
                                    color: 'black',
                                    textDecoration: 'none',
                                    boxShadow: 'xl',
                                    '&:hover': {
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                Visit
                            </a>
                        )}

                        <div
                            sx={{
                                py: 5,
                                pl: 5,
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
                        py={[4, 4, 5]}
                        px={[4, 4, 5]}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                            variant: 'layout.project',
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
