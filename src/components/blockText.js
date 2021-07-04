/** @jsxImportSource theme-ui */
import { Fragment } from 'preact'
import parse from 'html-react-parser'

const BlockText = ({ text }) => {
    return text.map(({ i, copy }) => <Fragment key={i}>{parse(copy)}</Fragment>)
}
export default BlockText
