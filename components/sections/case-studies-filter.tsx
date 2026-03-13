'use client'

import { useRef, useEffect } from 'react'

const categories = [
    'All',
    'Brand Strategy',
    'Events',
    'Booths',
    'Digital',
    'Marketing',
]

interface CaseStudiesFilterProps {
    activeFilter: string
    onFilterChange: (filter: string) => void
    projectCounts: Record<string, number>
}

export default function CaseStudiesFilter({ activeFilter, onFilterChange, projectCounts }: CaseStudiesFilterProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const activeRef = useRef<HTMLButtonElement>(null)

    // Scroll active button into view on mobile
    useEffect(() => {
        if (activeRef.current && scrollRef.current) {
            const container = scrollRef.current
            const btn = activeRef.current
            const containerLeft = container.scrollLeft
            const containerRight = containerLeft + container.clientWidth
            const btnLeft = btn.offsetLeft
            const btnRight = btnLeft + btn.clientWidth

            if (btnLeft < containerLeft + 16) {
                container.scrollTo({ left: btnLeft - 16, behavior: 'smooth' })
            } else if (btnRight > containerRight - 16) {
                container.scrollTo({ left: btnRight - container.clientWidth + 16, behavior: 'smooth' })
            }
        }
    }, [activeFilter])

    return (
        <div id="case-studies" className="sticky top-[64px] sm:top-[72px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#919191]/20">
            {/* Mobile: full-width pill strip */}
            <div
                ref={scrollRef}
                className="flex items-center gap-2 overflow-x-auto scroll-smooth px-4 sm:px-6 md:px-12 lg:px-24 py-3 sm:py-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Divider label – hidden on very small screens */}
                <div className="hidden sm:flex items-center gap-3 mr-1 shrink-0">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#b3b3b3] font-medium whitespace-nowrap">
                        Filter
                    </span>
                    <div className="w-px h-4 bg-[#919191]/25" />
                </div>

                {categories.map((cat) => {
                    const isActive = activeFilter === cat
                    const count = cat === 'All'
                        ? Object.values(projectCounts).reduce((a, b) => a + b, 0)
                        : (projectCounts[cat] || 0)

                    return (
                        <button
                            key={cat}
                            ref={isActive ? activeRef : undefined}
                            onClick={() => onFilterChange(cat)}
                            className={`group relative shrink-0 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 font-medium rounded-full border
                                ${isActive
                                    ? 'bg-[#3E3E3E] text-white border-[#3E3E3E] shadow-sm'
                                    : 'bg-transparent text-[#6A6A6A] border-[#919191]/30 hover:border-[#3E3E3E]/40 hover:text-[#3E3E3E] hover:bg-[#f5f5f5]'
                                }`}
                        >
                            <span>{cat}</span>
                            {/* Count badge */}
                            <span
                                className={`inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full text-[9px] font-semibold transition-colors duration-300
                                    ${isActive
                                        ? 'bg-white/20 text-white'
                                        : 'bg-[#919191]/10 text-[#919191] group-hover:bg-[#3E3E3E]/10 group-hover:text-[#3E3E3E]'
                                    }`}
                            >
                                {count}
                            </span>
                        </button>
                    )
                })}

                {/* Fade right edge — ensures last pill is never hidden by overflow */}
                <div className="shrink-0 w-4 sm:hidden" />
            </div>

            {/* Thin active-filter indicator bar */}
            <div className="relative h-[2px] w-full bg-transparent">
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#3E3E3E] transition-all duration-300"
                    style={{ width: `${(1 / categories.length) * 100}%`, opacity: 0 }}
                />
            </div>
        </div>
    )
}
