'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import DiagonalGrid from '@/components/ui/diagonal-grid'
import { CircleDecoration } from '@/components/ui/architectural-shapes'
import ArchitecturalShapes from '@/components/ui/architectural-shapes'
import AnimatedCounter from '@/components/ui/animated-counter'
import TextReveal, { TextRevealLine } from '@/components/ui/text-reveal'

const stats = [
    { value: 8, suffix: '+', label: 'Years of Excellence' },
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 50, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '', label: 'Creative Minds' },
]

export default function AboutHero() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100')
                        entry.target.classList.remove('opacity-0')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const items = sectionRef.current?.querySelectorAll('.animate-item')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]"
        >
            {/* Animated Background Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3E3E3E]/5 to-transparent rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-[#919191]/5 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: '1.5s' }}
            />

            {/* Diagonal Grid Background */}
            <DiagonalGrid
                position="top-left"
                gridColor="#919191"
                gridSize={40}
                opacity={0.15}
            />

            <DiagonalGrid
                position="bottom-right"
                gridColor="#919191"
                gridSize={40}
                opacity={0.1}
            />

            {/* Circle Decorations */}
            <CircleDecoration
                className="absolute top-32 right-32 md:top-40 md:right-40"
                size="xl"
            />
            <CircleDecoration
                className="absolute -bottom-40 -left-40"
                size="xl"
            />

            {/* Vertical Line Decorations */}
            <div className="absolute top-1/4 left-12 md:left-20 w-px h-64 bg-gradient-to-b from-transparent via-[#919191]/30 to-transparent" />
            <div className="absolute bottom-1/4 right-12 md:right-20 w-px h-48 bg-gradient-to-b from-transparent via-[#919191]/20 to-transparent" />

            {/* Horizontal Lines */}
            <div className="absolute top-1/3 left-0 w-32 md:w-48 h-px bg-gradient-to-r from-[#919191]/20 to-transparent" />
            <div className="absolute bottom-1/3 right-0 w-24 md:w-40 h-px bg-gradient-to-l from-[#919191]/20 to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-7">
                        {/* Premium Label */}
                        <div className="flex items-center gap-4 mb-10 animate-item opacity-0 transition-opacity duration-1000">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#919191]" />
                            <div className="tracking-[0.3em] text-xs font-semibold text-[#6A6A6A] uppercase px-4 py-2 border border-[#919191]/30 rounded-full">
                                About Fifth Floor
                            </div>
                        </div>

                        {/* Main Headline with Text Reveal */}
                        <div className="mb-10">
                            <TextReveal
                                text="We Are"
                                className="text-5xl md:text-6xl lg:text-7xl font-light text-[#6A6A6A] leading-[1.1]"
                                staggerDelay={80}
                            />
                            <TextReveal
                                text="The Architects of Brand Experiences"
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E3E3E] leading-[1.1] mt-2"
                                delay={300}
                                staggerDelay={60}
                            />
                            {/* <TextReveal
                                text="of Brand"
                                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#3E3E3E] via-[#5a5a5a] to-[#3E3E3E] bg-clip-text text-transparent leading-[1.1] mt-2"
                                delay={600}
                                staggerDelay={60}
                            />
                            <TextReveal
                                text="Experiences"
                                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#3E3E3E] via-[#5a5a5a] to-[#3E3E3E] bg-clip-text text-transparent leading-[1.1] mt-2"
                                delay={800}
                                staggerDelay={60}
                            /> */}
                        </div>

                        {/* Animated Divider */}
                        <div className="flex items-center gap-3 mb-10 animate-item opacity-0 transition-opacity duration-1000 delay-500">
                            <div className="w-20 h-px bg-[#3E3E3E]" />
                            <div className="w-2 h-2 border border-[#3E3E3E]/40 rotate-45" />
                        </div>

                        {/* Description */}
                        <TextRevealLine delay={700}>
                            <p className="text-lg md:text-xl text-[#6A6A6A] font-light leading-relaxed max-w-xl mb-12">
                                Fifth Floor is a premium creative agency crafting strategic brand identities,
                                immersive experiences, and cultural narratives for discerning clients across the GCC and beyond.
                            </p>
                        </TextRevealLine>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-item opacity-0 transition-opacity duration-1000">
                            <a
                                href="#story"
                                className="group px-8 py-4 bg-[#3E3E3E] text-white font-medium tracking-wide hover:bg-[#2a2a2a] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Discover Our Story
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border border-[#3E3E3E]/30 text-[#3E3E3E] font-medium tracking-wide hover:border-[#3E3E3E] hover:bg-[#3E3E3E]/5 transition-all duration-300"
                            >
                                Work With Us
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Visual & Stats */}
                    <div className="lg:col-span-5 relative">
                        {/* Hero Visual */}
                        <div className="relative aspect-[4/5] mb-12 animate-item opacity-0 transition-all duration-1000">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3E3E3E]/10 to-transparent" />
                            <Image
                                src="/images/about-hero-visual.png"
                                alt="Fifth Floor Creative Space"
                                fill
                                className="object-cover"
                            />
                            {/* Frame Lines */}
                            <div className="absolute top-6 left-6 w-12 h-px bg-[#3E3E3E]" />
                            <div className="absolute top-6 left-6 w-px h-12 bg-[#3E3E3E]" />
                            <div className="absolute bottom-6 right-6 w-12 h-px bg-[#3E3E3E]" />
                            <div className="absolute bottom-6 right-6 w-px h-12 bg-[#3E3E3E]" />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div
                                    key={stat.label}
                                    className="animate-item opacity-0 transition-all duration-700 group p-6 bg-white/60 backdrop-blur-sm border border-[#919191]/20 hover:border-[#3E3E3E]/30 hover:bg-white/80"
                                    style={{ transitionDelay: `${800 + idx * 150}ms` }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-2">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                                    </div>
                                    <p className="text-sm text-[#6A6A6A] uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Decorations */}
            <ArchitecturalShapes
                variant="corner"
                size="md"
                className="absolute bottom-8 left-8"
                opacity={0.15}
            />
            <ArchitecturalShapes
                variant="corner"
                size="md"
                className="absolute top-8 right-8 rotate-180"
                opacity={0.1}
            />

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-item opacity-0 transition-opacity duration-1000">
                <span className="text-xs uppercase tracking-[0.3em] text-[#919191]">Scroll</span>
                <div className="w-px h-8 bg-[#919191] animate-pulse" />
            </div>
        </section>
    )
}
