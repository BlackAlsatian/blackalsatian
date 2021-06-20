/** @jsxImportSource theme-ui */
import BlockSection from '../blockSection'

const ContentBlock = (props) => {
    const { attributes, innerBlocks } = props
    const heading = attributes.contentHeading
    const title = attributes.contentTitle
    const text = innerBlocks
    // return <BlockSection heading={heading} title={title} text={text} headerSize='h2' />
    return <BlockSection heading={heading} title={title} text={text} />
}
export default ContentBlock
