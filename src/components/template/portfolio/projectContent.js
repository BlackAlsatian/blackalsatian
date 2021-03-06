/** @jsxImportSource theme-ui */
import { Badge } from 'theme-ui'
import parse from 'html-react-parser'
import ColumnSection from '../containers/columnSection'
import RightColumn from '../elements/rightColumn'
import LeftColumnWrapper from '../elements/leftColumnWrapper'
import LeftColumnHeading from '../elements/leftColumnHeading'
import ProjectVisitButton from './projectVisitButton'

const ProjectContent = ({ project }) => {
    return (
        <ColumnSection sectionVariant={'main.black'}>
            <LeftColumnWrapper rightBorderColor='white' page={false}>
                {project.projectYear && <LeftColumnHeading heading={project.projectYear} headerSize='h3' />}
                {project.projectUrl && <ProjectVisitButton url={project.projectUrl} title={parse(project.title)} />}
                <div
                    sx={{
                        py: 4,
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
            </LeftColumnWrapper>
            <RightColumn>{parse(project.content)}</RightColumn>
        </ColumnSection>
    )
}

export default ProjectContent
