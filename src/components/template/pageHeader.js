/** @jsxImportSource theme-ui */
import { Heading, Paragraph } from 'theme-ui'
import PageHeroHeader from './containers/pageHeroHeader'
import PageHeaderContainer from './containers/pageHeaderContainer'

const PageHeader = ({ title, intro, headerStyle }) => {
    return (
        <PageHeroHeader containerVariant={headerStyle}>
            <PageHeaderContainer>
                <Heading
                    as='h1'
                    sx={{
                        // fontSize: [6, 7, 7, 10],
                        fontSize: [6, 10],
                        animation: 'fadeBlockIn 400ms ease-in both',
                        animationDelay: '300ms',
                    }}
                >
                    {title}
                </Heading>
                {intro && <Paragraph sx={{ variant: 'paragraph.pageHeading' }}>{intro}</Paragraph>}
            </PageHeaderContainer>
        </PageHeroHeader>
    )
}

export default PageHeader
