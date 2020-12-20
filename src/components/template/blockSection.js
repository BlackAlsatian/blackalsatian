/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import BlockText from '../blockText'
import EnquiryForm from '../forms/enquiryForm'
import LeadForm from '../forms/leadForm'
import QuoteForm from '../forms/quoteForm'

export default function ContentBlock(props) {
    const backgroundColor = props.backgroundColor
    const color = props.color
    const anchor = props.anchor
    const heading = props.heading
    const title = props.title
    const text = props.text
    const option = props.option
    const buttonBackground = props.buttonBackground
    const buttonName = props.buttonName
    const buttonUrl = props.buttonUrl
    function getForm(option) {
        if (option === 'btnonly') {
            return (
                <>
                    <Link
                        to={buttonUrl}
                        sx={{
                            variant: 'buttons.simple',
                            backgroundColor: `${buttonBackground}`,
                            color: `${backgroundColor || 'white'}`,
                            textDecoration: 'none',
                        }}
                    >
                        {buttonName}
                    </Link>
                </>
            )
        } else if (option === 'lead') {
            return <LeadForm />
        } else if (option === 'contact') {
            return <EnquiryForm />
        } else if (option === 'quote') {
            return <QuoteForm />
        }
    }
    return (
        <section
            sx={{
                backgroundColor: `${backgroundColor || 'white'}`,
                color: `${color || 'black'}`,
                width: '100%',
                py: 5,
                minHeight: '30vh',
                zIndex: 20,
            }}
            id={anchor}
        >
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
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
                            justifyContent: 'center',
                            borderRight: [0, '1px solid black'],
                        }}
                    >
                        <Heading
                            sx={{
                                fontSize: [4, 3, 4, 5],
                                fontWeight: 'thin',
                                lineHeight: 1,
                                mb: 4,
                                letterSpacing: 'tighter',
                            }}
                        >
                            {heading}
                        </Heading>
                        <Heading
                            as='h4'
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: 0,
                                mt: [4, 4, 0],
                                ml: ['auto', 'auto', null],
                            }}
                        >
                            {title}
                        </Heading>
                    </Box>
                    <Box
                        py={4}
                        px={5}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                        }}
                    >
                        <BlockText text={text} />
                        {buttonName && option !== 'none' && getForm(option)}
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}