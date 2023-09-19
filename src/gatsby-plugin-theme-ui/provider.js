import { merge, ThemeUIProvider } from 'theme-ui'
// import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import React from 'react'

import useThemeUiConfig from '../../node_modules/gatsby-plugin-theme-ui/src/hooks/configOptions'
import localTheme from '../../node_modules/gatsby-plugin-theme-ui/src/index'

// import { MDXProvider, useMDXComponents } from '@mdx-js/react'

const Root = ({ children }) => {
    const themeUiConfig = useThemeUiConfig()
    const { preset, prismPreset } = themeUiConfig

    const theme = preset.default || preset

    const themeWithPrism = merge(theme, {
        styles: {
            pre: prismPreset,
        },
    })

    const fullTheme = merge(themeWithPrism, localTheme)

    return (
        <ThemeUIProvider theme={fullTheme}>
            {/* <MDXProvider
        components={useThemedStylesWithMdx(useMDXComponents(components))}
      > */}
            {children}
            {/* </MDXProvider> */}
        </ThemeUIProvider>
    )
}

export const WrapRootElement = ({ element }) => {
    return <Root>{element}</Root>
}
