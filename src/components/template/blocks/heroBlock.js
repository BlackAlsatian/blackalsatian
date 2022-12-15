/* eslint-disable react/prop-types */
/** @jsxImportSource theme-ui */
import { Heading, Paragraph } from 'theme-ui'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageHeroHeader from '../containers/pageHeroHeader'
import PageHeaderContainer from '../containers/pageHeaderContainer'

const HeroBlock = ({ featuredImage, title, intro }) => {
    const featuredImageData = getImage(featuredImage.node.main)

    return (
        <PageHeroHeader containerVariant='default'>
            <GatsbyImage
                image={featuredImageData}
                alt={featuredImage.node.altText || title}
                loading='eager'
                objectPosition='60% 40%'
                objectFit='cover'
                backgroundColor='#111827'
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '100vh',
                    filter: 'brightness(75%)',
                }}
            />
            <PageHeaderContainer>
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [6, 10],
                    }}
                >
                    {parse(title)}
                </Heading>
                <Paragraph sx={{ variant: 'paragraph.pageHeading' }}>{parse(intro)}</Paragraph>
            </PageHeaderContainer>
        </PageHeroHeader>
    )
}

export default HeroBlock
