'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ArchitecturalShapes from '@/components/ui/architectural-shapes'
import GridBackground from '@/components/ui/grid-background'
import Marquee, { MarqueeItem } from '@/components/ui/marquee'
import AnimatedCounter from '@/components/ui/animated-counter'
import Testimonials from '@/components/sections/testimonials'

const achievements = [
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Satisfied Clients' },
    { value: 8, suffix: '', label: 'Years of Excellence' },
    { value: 12, suffix: '', label: 'Industry Awards' },
]

const awards = [
    { name: 'Design Excellence', year: '2024' },
    { name: 'Brand Innovation', year: '2023' },
    { name: 'Creative Agency of the Year', year: '2023' },
    { name: 'Event Design Award', year: '2022' },
    { name: 'Best Visual Identity', year: '2022' },
    { name: 'Marketing Excellence', year: '2021' },
]

const clients = [
    'Ministry of Culture',
    'Kuwait Investment Authority',
    'Abu Dhabi Design Week',
    'Al Raya Collection',
    'Royal Commission',
    'Saudi Tourism',
    'Gulf Finance',
    'Tech Innovation Hub',
]

export default function AboutAwards() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100')
                        entry.target.classList.remove('opacity-0', 'translate-y-8')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const items = sectionRef.current?.querySelectorAll('.award-item')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="recognition"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-white to-[#fafafa]"
        >
            {/* Top Section - Achievements */}
            <div className="section-padding relative">
                {/* Background Decorations */}
                <GridBackground
                    fadeFrom="corner-br"
                    gridColor="#919191"
                    gridSizeX={28}
                    gridSizeY={36}
                    opacity={0.1}
                />

                <ArchitecturalShapes
                    variant="rectangle"
                    size="lg"
                    className="absolute top-20 right-20"
                    opacity={0.05}
                />

                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#919191]" />
                            <p className="section-label text-[#6A6A6A]">Recognition</p>
                            <div className="w-12 h-px bg-[#919191]" />
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#3E3E3E] mb-6">
                            Awards & Achievements
                        </h2>

                        <div className="w-20 h-px bg-[#919191] mx-auto mb-8" />

                        <p className="text-lg text-[#6A6A6A] leading-relaxed max-w-2xl mx-auto">
                            Recognition for our commitment to excellence and innovation in creative branding and experiential design.
                        </p>
                    </div>

                    {/* Large Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
                        {achievements.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className="award-item opacity-0 translate-y-8 transition-all duration-700 text-center"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#3E3E3E] mb-4">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                                </div>
                                <p className="text-sm text-[#6A6A6A] uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Awards List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {awards.map((award, idx) => (
                            <div
                                key={award.name}
                                className="award-item opacity-0 translate-y-8 transition-all duration-700 group"
                                style={{ transitionDelay: `${300 + idx * 80}ms` }}
                            >
                                <div className="flex items-center justify-between p-6 border border-[#919191]/20 hover:border-[#3E3E3E]/40 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl text-[#919191] group-hover:text-[#3E3E3E] transition-colors">
                                            ✦
                                        </span>
                                        <span className="text-base font-medium text-[#3E3E3E]">{award.name}</span>
                                    </div>
                                    <span className="text-sm text-[#919191]">{award.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clients Marquee Section */}
            <div className="py-16 bg-[#3E3E3E] relative overflow-hidden">
                {/* Decorative Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6A6A6A]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6A6A6A]/30 to-transparent" />

                <div className="mb-8 text-center">
                    <p className="text-xs uppercase tracking-widest text-[#919191]">
                        Trusted By Industry Leaders
                    </p>
                </div>

                {/* First Marquee - Left */}
                <Marquee speed={40} direction="left" className="mb-4">
                    {clients.map((client) => (
                        <MarqueeItem key={client} className="px-8 md:px-12">
                            <span className="text-2xl md:text-3xl font-light text-[#CFCFCF]/60 hover:text-[#CFCFCF] transition-colors whitespace-nowrap">
                                {client}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>

                {/* Second Marquee - Right */}
                <Marquee speed={35} direction="right">
                    {[...clients].reverse().map((client) => (
                        <MarqueeItem key={client} className="px-8 md:px-12">
                            <span className="text-lg md:text-xl font-light text-[#919191]/40 hover:text-[#919191] transition-colors whitespace-nowrap">
                                {client}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>
            </div>

            {/* Testimonial Section - Now uses separate component */}
            <Testimonials />
        </section>
    )
}
