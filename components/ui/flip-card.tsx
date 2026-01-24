'use client'

import { useState } from 'react'

interface FlipCardProps {
    frontContent: React.ReactNode
    backContent: React.ReactNode
    className?: string
}

export default function FlipCard({
    frontContent,
    backContent,
    className = '',
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div
            className={`group perspective-1000 cursor-pointer ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {frontContent}
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    {backContent}
                </div>
            </div>
        </div>
    )
}
