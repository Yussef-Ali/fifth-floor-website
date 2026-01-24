'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ArchitecturalShapes from '@/components/ui/architectural-shapes'
import { DotPattern } from '@/components/ui/grid-background'

const team = [
    {
        id: 1,
        name: 'Ahmad Al-Rashid',
        role: 'Founder & Creative Director',
        description: 'Visionary leader with 15+ years in branding and creative strategy.',
        expertise: ['Brand Strategy', 'Creative Direction', 'Client Relations'],
    },
    {
        id: 2,
        name: 'Sarah Mitchell',
        role: 'Head of Design',
        description: 'Award-winning designer specializing in visual identity systems.',
        expertise: ['Visual Identity', 'Typography', 'Print Design'],
    },
    {
        id: 3,
        name: 'Omar Hassan',
        role: 'Strategy Director',
        description: 'Expert in market analysis and brand positioning strategies.',
        expertise: ['Market Research', 'Brand Positioning', 'Competitive Analysis'],
    },
    {
        id: 4,
        name: 'Fatima Al-Zahra',
        role: 'Experience Director',
        description: 'Creates immersive brand experiences and event concepts.',
        expertise: ['Event Design', 'Experiential Marketing', 'Spatial Design'],
    },
    {
        id: 5,
        name: 'David Chen',
        role: 'Digital Lead',
        description: 'Bridges creative vision with digital innovation and technology.',
        expertise: ['Digital Strategy', 'Web Development', 'Interactive Design'],
    },
    {
        id: 6,
        name: 'Layla Abbas',
        role: 'Project Director',
        description: 'Ensures seamless delivery of complex multi-disciplinary projects.',
        expertise: ['Project Management', 'Client Success', 'Team Coordination'],
    },
]

export default function AboutTeam() {
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

        const items = sectionRef.current?.querySelectorAll('.team-item')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="team"
            ref={sectionRef}
            className="section-padding bg-[#3E3E3E] relative overflow-hidden"
        >
            {/* Background Decorations */}
            <ArchitecturalShapes
                variant="circle"
                size="xl"
                className="absolute -top-40 -left-40"
                opacity={0.03}
            />

            <DotPattern
                fadeFrom="corner-tr"
                dotColor="#6A6A6A"
                dotSize={1}
                spacing={35}
                opacity={0.08}
            />

            {/* Vertical Lines */}
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#6A6A6A]/10 to-transparent" />

            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] opacity-[0.02] pointer-events-none select-none rotate-12">
                <Image
                    src="/logos/fifth-decore-dark.png"
                    alt=""
                    fill
                    className="object-contain invert"
                />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-[#6A6A6A]" />
                            <p className="section-label text-[#919191]">The Collective</p>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#CFCFCF] mb-6">
                            Our Team
                        </h2>

                        <div className="w-20 h-px bg-[#6A6A6A] mb-8" />
                    </div>

                    <div className="lg:col-span-7 flex items-end">
                        <p className="text-lg text-[#919191] leading-relaxed max-w-xl">
                            A diverse collective of strategists, designers, and creators united by a shared
                            passion for crafting exceptional brand experiences. Each member brings unique
                            expertise and perspective to every project.
                        </p>
                    </div>
                </div>

                {/* Team Grid - Unconventional Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {team.map((member, idx) => (
                        <div
                            key={member.id}
                            className={`team-item opacity-0 translate-y-8 transition-all duration-700 group ${idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                                }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div
                                className={`relative bg-gradient-to-br from-[#4a4a4a] to-[#3E3E3E] p-8 h-full min-h-[280px] flex flex-col justify-between border border-[#6A6A6A]/20 hover:border-[#CFCFCF]/30 transition-colors duration-500 ${idx === 0 ? 'lg:flex-row lg:items-center lg:gap-12' : ''
                                    }`}
                            >
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-4 right-4 w-px h-8 bg-[#CFCFCF]/30" />
                                    <div className="absolute top-4 right-4 w-8 h-px bg-[#CFCFCF]/30" />
                                </div>

                                {/* Member Number */}
                                <div
                                    className={`absolute ${idx === 0 ? 'top-8 left-8' : 'top-6 left-6'
                                        } text-6xl font-bold text-[#CFCFCF]/5`}
                                >
                                    {String(idx + 1).padStart(2, '0')}
                                </div>

                                {/* Main Content */}
                                <div className={idx === 0 ? 'lg:flex-1' : ''}>
                                    <p className="text-xs uppercase tracking-widest text-[#919191] mb-3">
                                        {member.role}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#CFCFCF] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-base text-[#919191] leading-relaxed mb-6 max-w-sm">
                                        {member.description}
                                    </p>
                                </div>

                                {/* Expertise Tags */}
                                <div
                                    className={`flex flex-wrap gap-2 ${idx === 0 ? 'lg:justify-end lg:max-w-xs' : ''
                                        }`}
                                >
                                    {member.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 border border-[#6A6A6A]/30 text-[#919191] text-xs uppercase tracking-wider hover:border-[#CFCFCF]/40 hover:text-[#CFCFCF] transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join CTA */}
                <div className="mt-20 text-center">
                    <p className="text-[#919191] mb-6">
                        Passionate about creative excellence? We're always looking for exceptional talent.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 text-[#CFCFCF] font-medium hover:text-white transition-colors group"
                    >
                        <span className="border-b border-[#CFCFCF]/30 group-hover:border-[#CFCFCF] pb-1 transition-colors">
                            Join Our Team
                        </span>
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
