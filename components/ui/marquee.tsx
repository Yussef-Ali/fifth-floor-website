'use client'

import { useEffect, useRef, useState } from 'react'

interface MarqueeProps {
    children: React.ReactNode
    speed?: number
    direction?: 'left' | 'right'
    pauseOnHover?: boolean
    className?: string
}

export default function Marquee({
    children,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    className = '',
}: MarqueeProps) {
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex gap-8"
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationPlayState: isPaused ? 'paused' : 'running',
                }}
            >
                {/* Duplicate content for seamless loop */}
                <div className="flex gap-8 shrink-0">{children}</div>
                <div className="flex gap-8 shrink-0">{children}</div>
                <div className="flex gap-8 shrink-0">{children}</div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
        </div>
    )
}

interface MarqueeItemProps {
    children: React.ReactNode
    className?: string
}

export function MarqueeItem({ children, className = '' }: MarqueeItemProps) {
    return (
        <div className={`shrink-0 ${className}`}>
            {children}
        </div>
    )
}
