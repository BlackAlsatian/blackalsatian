import React, { Fragment } from 'react'
import blocks from './blocks'

const getRenderedContent = (moduleName) => {
    if (typeof window === 'undefined') return ''
    const element = window.document.querySelector(`#Module__${moduleName}`)
    return element ? element.innerHTML : ''
}

function Module({ attributes, innerBlocks, module }) {
    // console.log(module)
    const Module = blocks[module.typeName]
    if (!Module) {
        return null
    }

    // const ModuleComponent = useCallback(() => {
    return (
        <Fragment id={`#Module__${module.typeName}`}>
            <Module
                attributes={attributes}
                innerBlocks={innerBlocks}
                module={module}
                fallback={
                    <div
                        dangerouslySetInnerHTML={{
                            __html: getRenderedContent(module.typeName),
                        }}
                    />
                }
            />
        </Fragment>
    )
    // }, [module])

    // return <ModuleComponent />
}
export default Module

{
    /* <Module attributes={attributes} innerBlocks={innerBlocks} module={module} /> */
}
