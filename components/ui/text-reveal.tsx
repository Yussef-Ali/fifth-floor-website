'use client'

import { useEffect, useRef, useState } from 'react'

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
    staggerDelay?: number
    animationType?: 'letter' | 'word'
}

export default function TextReveal({
    text,
    className = '',
    delay = 0,
    staggerDelay = 50,
    animationType = 'word',
}: TextRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    const elements = animationType === 'word' ? text.split(' ') : text.split('')

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <span className="inline-flex flex-wrap">
                {elements.map((element, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden"
                    >
                        <span
                            className={`inline-block transition-all duration-700 ease-out ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-full opacity-0'
                                }`}
                            style={{
                                transitionDelay: `${index * staggerDelay}ms`,
                            }}
                        >
                            {element}
                            {animationType === 'word' && index < elements.length - 1 && '\u00A0'}
                        </span>
                    </span>
                ))}
            </span>
        </div>
    )
}

interface TextRevealLineProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function TextRevealLine({ children, className = '', delay = 0 }: TextRevealLineProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <div
                className={`transition-all duration-1000 ease-out ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-full opacity-0'
                    }`}
            >
                {children}
            </div>
        </div>
    )
}
