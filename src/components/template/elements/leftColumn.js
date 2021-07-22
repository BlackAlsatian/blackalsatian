/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import LeftColumnWrapper from './leftColumnWrapper'
import LeftColumnHeading from './leftColumnHeading'

const LeftColumn = ({ heading, title, page, rightBorderColor, headerSize }) => {
    return (
        <LeftColumnWrapper page={page} rightBorderColor={rightBorderColor}>
            {heading && <LeftColumnHeading heading={heading} headerSize={headerSize} />}
            {title && (
                <Heading
                    as='h3'
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: 0,
                        mt: [0, 0, 0],
                        ml: ['auto', 'auto', null],
                    }}
                >
                    {title}
                </Heading>
            )}
        </LeftColumnWrapper>
    )
}
export default LeftColumn
