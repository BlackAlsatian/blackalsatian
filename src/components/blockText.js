import React from 'react'
import { Fragment } from 'react'
import parse from 'html-react-parser'
import { randomID } from './helpers'

export default function BlockText({ text }) {
    return text.map(({ copy }) => (
        <Fragment key={randomID()}>{parse(copy)}</Fragment>
    ))
}