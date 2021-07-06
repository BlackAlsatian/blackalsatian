import React, { useCallback } from 'react'
import blocks from './blocks'

function Modules({ attributes, innerBlocks, module }) {
    const Module = blocks[module.name]
    if (!Module) {
        return null
    }

    const ModuleComponent = useCallback(() => {
        return <Module attributes={attributes} innerBlocks={innerBlocks} module={module} />
    }, [module])

    return <ModuleComponent />
}
export default React.memo(Modules)
