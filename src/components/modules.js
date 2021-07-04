import React, { useCallback } from 'react'
import blocks from './blocks'

function Modules({ attributes, featuredImage, innerBlocks, module }) {
    // console.log(props)
    // const { attributes, featuredImage, innerBlocks, module } = props

    const Module = blocks[module.name]
    if (!Module) {
        return null
    }

    const ModuleComponent = useCallback(() => {
        // const ModuleComponent = () => {
        return (
            <Module attributes={attributes} featuredImage={featuredImage} innerBlocks={innerBlocks} module={module} />
        )
    }, [module])

    return <ModuleComponent />
}
export default React.memo(Modules)
// export default Modules
