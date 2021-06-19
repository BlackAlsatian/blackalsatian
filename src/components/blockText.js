import React, { Fragment } from 'react'
import parse from 'html-react-parser'
import { randomID } from './helpers'

const BlockText = ({ text }) => {
    return text.map(({ copy }) => <Fragment key={randomID()}>{parse(copy)}</Fragment>)
}
export default BlockText
