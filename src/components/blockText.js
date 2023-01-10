import parse from 'html-react-parser'
import { Fragment } from 'react'
// import React from 'react'

const BlockText = ({ text }) => {
    // console.log(text)
    return text.map(({ copy }, index) => <Fragment key={`${index}-paragraph`}>{parse(copy)}</Fragment>)
}
export default BlockText
