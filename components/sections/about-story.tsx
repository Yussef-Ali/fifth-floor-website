'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ArchitecturalShapes from '@/components/ui/architectural-shapes'
import { DotPattern } from '@/components/ui/grid-background'
import { TextRevealLine } from '@/components/ui/text-reveal'

const milestones = [
    {
        year: '2016',
        title: 'The Beginning',
        description: 'Fifth Floor was founded with a vision to elevate brand experiences in the GCC region.',
        highlight: 'Founded in Riyadh',
    },
    {
        year: '2018',
        title: 'First Major Client',
        description: 'Partnered with Ministry of Culture for our first government project, establishing our reputation.',
        highlight: 'Ministry of Culture',
    },
    {
        year: '2020',
        title: 'Experiential Expansion',
        description: 'Launched our events and exhibitions division, creating immersive brand experiences.',
        highlight: 'Events Division',
    },
    {
        year: '2022',
        title: 'Regional Growth',
        description: 'Expanded operations across the GCC, working with premium clients in UAE and Kuwait.',
        highlight: 'GCC Expansion',
    },
    {
        year: '2024',
        title: 'Creative Excellence',
        description: 'Recognized as a leading creative agency with 150+ projects and counting.',
        highlight: '150+ Projects',
    },
]

export default function AboutStory() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

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

        const items = sectionRef.current?.querySelectorAll('.story-item')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="story"
            ref={sectionRef}
            className="section-padding bg-[#3E3E3E] relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-px h-40 bg-[#6A6A6A] opacity-20" />
            <div className="absolute bottom-0 right-1/3 w-px h-32 bg-[#6A6A6A] opacity-20" />

            <ArchitecturalShapes
                variant="curve"
                size="xl"
                className="absolute -top-32 -right-32"
                opacity={0.05}
            />

            <DotPattern
                fadeFrom="corner-br"
                dotColor="#6A6A6A"
                dotSize={1}
                spacing={40}
                opacity={0.1}
            />

            {/* Background Decor */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-[0.03] pointer-events-none select-none">
                <Image
                    src="/logos/fifth-decore-dark.png"
                    alt=""
                    fill
                    className="object-contain invert"
                />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 md:mb-28">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-px bg-[#6A6A6A]" />
                        <p className="section-label text-[#919191]">Our Journey</p>
                    </div>

                    <TextRevealLine>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#CFCFCF] mb-6">
                            The Story
                        </h2>
                    </TextRevealLine>

                    <div className="w-20 h-px bg-[#6A6A6A] mb-8" />

                    <p className="text-lg text-[#919191] leading-relaxed max-w-2xl">
                        From a bold idea to a trusted creative partner—our journey has been defined by
                        relentless pursuit of excellence and meaningful client relationships.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6A6A6A]/50 via-[#6A6A6A]/30 to-transparent transform md:-translate-x-1/2" />

                    {/* Milestones */}
                    <div className="space-y-16 md:space-y-24">
                        {milestones.map((milestone, idx) => (
                            <div
                                key={milestone.year}
                                className={`story-item opacity-0 translate-y-8 transition-all duration-700 relative ${idx % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'
                                    }`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-0 md:left-1/2 w-4 h-4 bg-[#CFCFCF] border-4 border-[#3E3E3E] rounded-full transform -translate-x-1/2 z-10 ${idx === milestones.length - 1 ? 'animate-pulse' : ''
                                        }`}
                                    style={{ top: '0.5rem' }}
                                />

                                {/* Content Card */}
                                <div
                                    className={`ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                                        }`}
                                >
                                    {/* Year Badge */}
                                    <div
                                        className={`inline-flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                            }`}
                                    >
                                        <span className="text-5xl md:text-6xl font-bold text-[#CFCFCF]/20">
                                            {milestone.year}
                                        </span>
                                        <span className="px-3 py-1 bg-[#CFCFCF]/10 text-[#CFCFCF] text-xs uppercase tracking-wider">
                                            {milestone.highlight}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#CFCFCF] mb-4">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-base text-[#919191] leading-relaxed max-w-md inline-block">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
