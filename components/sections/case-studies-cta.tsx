'use client'

import { useEffect, useRef } from 'react'

export default function CaseStudiesCTA() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100')
                        entry.target.classList.remove('opacity-0', 'translate-y-6')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const items = sectionRef.current?.querySelectorAll('.cta-animate')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-48 bg-white overflow-hidden"
        >
            {/* Giant Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <span className="text-[14vw] font-bold text-[#CFCFCF]/15 tracking-[0.1em] whitespace-nowrap leading-none">
                    COLLABORATE
                </span>
            </div>

            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-[#919191]/30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                {/* Eyebrow */}
                <p className="cta-animate opacity-0 translate-y-6 transition-all duration-700 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#919191] font-medium mb-8">
                    Ready to Start?
                </p>

                {/* Headline */}
                <h2 className="cta-animate opacity-0 translate-y-6 transition-all duration-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E3E3E] leading-[1.1] mb-8"
                    style={{ transitionDelay: '0.08s' }}
                >
                    Let&apos;s Build Something
                    <br />
                    <span className="text-[#919191]">Extraordinary</span>
                </h2>

                {/* Divider */}
                <div className="cta-animate opacity-0 translate-y-6 transition-all duration-700 flex items-center justify-center gap-3 mb-8"
                    style={{ transitionDelay: '0.16s' }}
                >
                    <div className="w-12 h-px bg-[#919191]" />
                    <div className="w-2 h-2 border border-[#3E3E3E]/30 rotate-45" />
                    <div className="w-12 h-px bg-[#919191]" />
                </div>

                {/* Description */}
                <p className="cta-animate opacity-0 translate-y-6 transition-all duration-700 text-base sm:text-lg text-[#6A6A6A] font-light max-w-xl mx-auto mb-12"
                    style={{ transitionDelay: '0.24s' }}
                >
                    Every great brand starts with a conversation. Tell us about your vision and we&apos;ll craft the strategy to make it real.
                </p>

                {/* CTA Button */}
                <div className="cta-animate opacity-0 translate-y-6 transition-all duration-700"
                    style={{ transitionDelay: '0.32s' }}
                >
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#3E3E3E] text-white font-medium tracking-wide hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Start a Project
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
