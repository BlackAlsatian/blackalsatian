import parse from 'html-react-parser'
import { Fragment } from 'react'
// import React from 'react'

const BlockText = ({ text }) => {
    return text.map(({ i, copy }) => <Fragment key={i}>{parse(copy)}</Fragment>)
}
export default BlockText
