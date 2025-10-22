import { Fragment } from 'react'
import safeParse from '../utils/safeParse'
// import React from 'react'

const BlockText = ({ text }) => {
    // console.log(text)
    return text.map(({ copy }, index) => <Fragment key={`${index}-paragraph`}>{safeParse(copy)}</Fragment>)
}
export default BlockText
