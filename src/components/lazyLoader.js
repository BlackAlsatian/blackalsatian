// import React from 'react'
import { useInView } from 'react-intersection-observer'
import PlaceholderLoader from './placeholderLoader'

const LazyLoader = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px 0px 0px',
    })
    return <div ref={ref}>{inView ? <>{children}</> : <PlaceholderLoader />}</div>
}

export default LazyLoader
