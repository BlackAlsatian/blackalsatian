/** @jsxImportSource theme-ui */
import React from 'react'
import LazyLoad from 'react-lazyload'
import BlockText from '../blockText'
import LeftColumn from './elements/leftColumn'
import RightColumn from './elements/rightColumn'
import GetForm from '../getForm'
import ColumnSection from './containers/columnSection'

const ContentBlock = ({
    backgroundColor,
    // color,
    anchor,
    heading,
    title,
    text,
    option,
    buttonBackground,
    buttonName,
    buttonUrl,
    headerSize,
}) => {
    return (
        <ColumnSection sectionVariant={'sections.blocks.' + backgroundColor} id={anchor}>
            <LeftColumn heading={heading} title={title} headerSize={headerSize} />
            <RightColumn>
                <BlockText text={text} />
                {buttonName && option !== 'none' && (
                    <LazyLoad height='100%' offset={200} once>
                        <GetForm
                            option={option}
                            buttonName={buttonName}
                            buttonUrl={buttonUrl}
                            backgroundColor={backgroundColor}
                            buttonBackground={buttonBackground}
                            formStyle='inputs.background'
                        />
                    </LazyLoad>
                )}
            </RightColumn>
        </ColumnSection>
    )
}
export default React.memo(ContentBlock)
