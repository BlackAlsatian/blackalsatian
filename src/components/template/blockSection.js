import React from 'react'
import BlockText from '../blockText'
import GetForm from '../getForm'
import ColumnSection from './containers/columnSection'
import LeftColumn from './elements/leftColumn'
import RightColumn from './elements/rightColumn'

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
                    <GetForm
                        option={option}
                        buttonName={buttonName}
                        buttonUrl={buttonUrl}
                        backgroundColor={backgroundColor}
                        buttonBackground={buttonBackground}
                        formStyle='inputs.background'
                    />
                )}
            </RightColumn>
        </ColumnSection>
    )
}
export default React.memo(ContentBlock)
