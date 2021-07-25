import React, { useCallback } from 'react'
import blocks from './blocks'

function Modules({ blockmodules }) {
    const ModuleComponent = useCallback(() => {
        return blockmodules.map((module, index) => {
            const Module = blocks[module.__typename]

            if (!Module) {
                // throw new Error(`Module ${module.__typename} does not exist`)
                return null
            }

            return (
                <Module key={index} attributes={module.attributes} innerBlocks={module.innerBlocks} module={module} />
            )
        })
    }, [module])

    return <ModuleComponent />
}
export default React.memo(Modules)
