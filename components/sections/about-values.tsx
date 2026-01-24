'use client'

import { useEffect, useRef } from 'react'
import ArchitecturalShapes from '@/components/ui/architectural-shapes'
import GridBackground from '@/components/ui/grid-background'
import FlipCard from '@/components/ui/flip-card'

const values = [
    {
        id: 1,
        title: 'Strategic Vision',
        icon: '◆',
        frontBg: 'bg-gradient-to-br from-[#3E3E3E] to-[#2a2a2a]',
        description:
            'Every project begins with deep understanding. We craft strategies that align with your goals and resonate with your audience.',
        principle: 'Think before you create',
    },
    {
        id: 2,
        title: 'Creative Excellence',
        icon: '✦',
        frontBg: 'bg-gradient-to-br from-[#4a4a4a] to-[#3E3E3E]',
        description:
            'We push creative boundaries while maintaining sophistication. Bold ideas executed with refined precision.',
        principle: 'Excellence in every detail',
    },
    {
        id: 3,
        title: 'Cultural Intelligence',
        icon: '◇',
        frontBg: 'bg-gradient-to-br from-[#3E3E3E] to-[#2a2a2a]',
        description:
            'Deep understanding of regional values and global trends. We create brands that feel authentic and relevant.',
        principle: 'Global vision, local heart',
    },
    {
        id: 4,
        title: 'Client Partnership',
        icon: '○',
        frontBg: 'bg-gradient-to-br from-[#4a4a4a] to-[#3E3E3E]',
        description:
            "We're invested in your success beyond project delivery. Long-term relationships built on trust and shared vision.",
        principle: 'Your success is our measure',
    },
    {
        id: 5,
        title: 'Refined Execution',
        icon: '□',
        frontBg: 'bg-gradient-to-br from-[#3E3E3E] to-[#2a2a2a]',
        description:
            'From concept to delivery, every detail matters. We maintain the highest standards throughout the process.',
        principle: 'Precision at every step',
    },
    {
        id: 6,
        title: 'Experiential Mastery',
        icon: '△',
        frontBg: 'bg-gradient-to-br from-[#4a4a4a] to-[#3E3E3E]',
        description:
            'We create immersive experiences that leave lasting impressions. Emotional connections that drive action.',
        principle: 'Create memories, not just moments',
    },
]

export default function AboutValues() {
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

        const items = sectionRef.current?.querySelectorAll('.value-item')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="values"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5]"
        >
            {/* Background Decorations */}
            <GridBackground
                fadeFrom="corner-tl"
                gridColor="#919191"
                gridSizeX={24}
                gridSizeY={32}
                opacity={0.12}
            />

            <ArchitecturalShapes
                variant="rectangle"
                size="xl"
                className="absolute -top-20 -right-20 rotate-12"
                opacity={0.05}
            />

            <div className="absolute top-1/3 left-0 w-px h-48 bg-[#919191] opacity-20" />
            <div className="absolute bottom-1/4 right-0 w-px h-32 bg-[#919191] opacity-20" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-[#919191]" />
                        <p className="section-label text-[#6A6A6A]">What Drives Us</p>
                        <div className="w-12 h-px bg-[#919191]" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#3E3E3E] mb-6">
                        Our Values
                    </h2>

                    <div className="w-20 h-px bg-[#919191] mx-auto mb-8" />

                    <p className="text-lg text-[#6A6A6A] leading-relaxed max-w-2xl mx-auto">
                        The principles that guide every decision, shape every creation,
                        and define who we are as a creative partner.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value, idx) => (
                        <div
                            key={value.id}
                            className="value-item opacity-0 translate-y-8 transition-all duration-700"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <FlipCard
                                className="h-80"
                                frontContent={
                                    <div
                                        className={`w-full h-full ${value.frontBg} p-8 flex flex-col justify-between relative overflow-hidden group`}
                                    >
                                        {/* Decorative Pattern */}
                                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                            <div className="absolute top-4 right-4 w-px h-16 bg-[#CFCFCF]" />
                                            <div className="absolute top-4 right-4 w-16 h-px bg-[#CFCFCF]" />
                                        </div>

                                        {/* Icon */}
                                        <span className="text-4xl text-[#CFCFCF]/60 group-hover:text-[#CFCFCF]/80 transition-colors">
                                            {value.icon}
                                        </span>

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#CFCFCF] mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-[#919191] uppercase tracking-wider">
                                                Hover to learn more →
                                            </p>
                                        </div>
                                    </div>
                                }
                                backContent={
                                    <div className="w-full h-full bg-white border border-[#919191]/30 p-8 flex flex-col justify-between">
                                        {/* Principle */}
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-[#6A6A6A] mb-4">
                                                {value.principle}
                                            </p>
                                            <div className="w-12 h-px bg-[#3E3E3E] mb-6" />
                                        </div>

                                        {/* Description */}
                                        <p className="text-base text-[#3E3E3E] leading-relaxed">
                                            {value.description}
                                        </p>

                                        {/* Icon */}
                                        <span className="text-2xl text-[#919191]/40 self-end">
                                            {value.icon}
                                        </span>
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </div>

                {/* Philosophy Quote */}
                <div className="mt-24 pt-16 border-t border-[#919191]/30 text-center">
                    <blockquote className="max-w-3xl mx-auto">
                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#3E3E3E] mb-6">
                            "We believe that luxury is not about noise—it's about precision.
                            Excellence is communicated through restraint, authenticity through discretion."
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-8 h-px bg-[#919191]" />
                            <p className="text-xs uppercase tracking-widest text-[#6A6A6A]">
                                Studio Philosophy
                            </p>
                            <div className="w-8 h-px bg-[#919191]" />
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
