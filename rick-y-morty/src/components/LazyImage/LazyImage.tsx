import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
}

export const LazyImage = ({ src, alt, className }: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!imgRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.disconnect()
                    }
                })
            },
            { rootMargin: '50px' }
        )

        observer.observe(imgRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <img
            ref={imgRef}
            src={isInView ? src : undefined}
            alt={alt}
            className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
        />
    )
}
