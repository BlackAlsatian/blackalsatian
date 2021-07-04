import { useCallback, memo } from 'react'
import { useInView } from 'react-intersection-observer'
import PlaceholderLoader from './placeholderLoader'

const LazyLoader = ({ children, top }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: `${top || '200px'} 0px 0px 0px`,
    })
    const LazyLoaderComponent = useCallback(() => {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={ref}>
                {inView ? <>{children}</> : <PlaceholderLoader />}
            </div>
        )
    }, [inView])

    return <LazyLoaderComponent />
}

export default memo(LazyLoader)
