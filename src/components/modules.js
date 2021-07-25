import React, { Fragment } from 'react'
import blocks from './blocks'

function Modules({ blockmodules }) {
    // const getRenderedContent = (index) => {
    // if (typeof window === 'undefined') return ''
    // const element = window.document.querySelector(`#Module__${moduleName}`)

    // }

    const staticRenderModule = (index, element) => {
        return <Fragment key={index.toString()} dangerouslySetInnerHTML={{ __html: element.innerHTML }} />
    }

    const renderModule = (moduleName, moduleIndex, fallback = null, attributes, innerBlocks) => {
        const Module = blocks[moduleName]

        if (!Module) {
            throw new Error(`Module ${module.__typename} does not exist`)
            // return null
        }

        return (
            <Fragment key={moduleIndex.toString()}>
                <Module attributes={attributes} innerBlocks={innerBlocks} module={module} fallback={fallback} />
            </Fragment>
        )
    }

    return blockmodules.map((module, index) => {
        // console.log(module)
        // console.log(module.__typename)

        // console.log({ Module })

        if (typeof window === 'undefined') {
            return renderModule(module.__typename, index)
        }

        const element = document.querySelector(`[data-module-index="${index.toString()}"]`)

        const fallback = element ? staticRenderModule(index, element) : null

        return renderModule(module.__typename, index, fallback, module.attributes, module.innerBlocks)
        // return (
        //     <Fragment id={`#Module__${module.typeName}`}>
        //         <Module
        //             attributes={attributes}
        //             innerBlocks={innerBlocks}
        //             module={module}
        //             fallback={
        //                 <div
        //                     dangerouslySetInnerHTML={{
        //                         __html: getRenderedContent(module.typeName),
        //                     }}
        //                 />
        //             }
        //         />
        //     </Fragment>
        // )
    })
    // }, [module])

    // return <ModuleComponent />
}
export default Modules

{
    /* <Module attributes={attributes} innerBlocks={innerBlocks} module={module} /> */
}
