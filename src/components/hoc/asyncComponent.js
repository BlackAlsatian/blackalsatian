import React, { useState, useEffect } from 'react'

const asyncComponent = (importComponent) => {
    const AsyncComponent = () => {
        const [component, setComponent] = useState(null)

        useEffect(() => {
            // <ImportComponent />
            const { default: component } = importComponent()
            setComponent(component)
        }, [])
        const C = component
        return C ? <C {...this.props} /> : null
    }
    export default AsyncComponent
}
