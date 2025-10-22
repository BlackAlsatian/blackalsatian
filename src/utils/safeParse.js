import parse from 'html-react-parser'

// Parse HTML from CMS safely and enforce best-practice link attributes
// - Adds rel="noopener noreferrer" to all anchors
// - Adds rel="nofollow" for external links
// - Preserves other attributes
export const safeParse = (html) =>
    parse(html || '', {
        replace: (node) => {
            if (!node || node.type !== 'tag') return undefined
            if (node.name !== 'a' || !node.attribs) return undefined

            const attrs = node.attribs || {}
            const href = attrs.href || ''
            const relTokens = (attrs.rel || '')
                .split(/\s+/)
                .map((t) => t.trim())
                .filter(Boolean)

            const ensure = (token) => {
                if (!relTokens.includes(token)) relTokens.push(token)
            }

            // Always ensure these for security when links are from CMS
            ensure('noopener')
            ensure('noreferrer')

            // Add nofollow to external links (not on our domain)
            const isExternal = /^https?:\/\//i.test(href) && !/blackalsatian\.co\.za/i.test(href)
            if (isExternal) ensure('nofollow')

            node.attribs.rel = relTokens.join(' ')
            return node
        },
    })

export default safeParse
