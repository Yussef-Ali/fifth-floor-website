'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        quote: "Fifth Floor understood our vision from the very first meeting. They delivered a brand identity that truly represents our values and resonates with our audience.",
        author: "Mohammed Al-Faisal",
        role: "Director",
        company: "Ministry of Culture",
        highlight: "Brand Identity",
    },
    {
        id: 2,
        quote: "The event experience they designed was nothing short of spectacular. Every detail was meticulously crafted to leave a lasting impression on our guests.",
        author: "Sarah Al-Mansour",
        role: "CEO",
        company: "Kuwait Investment Authority",
        highlight: "Event Experience",
    },
    {
        id: 3,
        quote: "Their strategic approach to our rebrand completely transformed how our customers perceive us. The results exceeded all our expectations.",
        author: "Ahmad Hassan",
        role: "Marketing Director",
        company: "Al Raya Collection",
        highlight: "Strategic Rebrand",
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Auto-rotate testimonials
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleNext()
        }, 6000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [activeIndex])

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
            setIsAnimating(false)
        }, 300)
    }

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setTimeout(() => {
            setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            setIsAnimating(false)
        }, 300)
    }

    const handleDotClick = (index: number) => {
        if (isAnimating || index === activeIndex) return
        setIsAnimating(true)
        if (intervalRef.current) clearInterval(intervalRef.current)
        setTimeout(() => {
            setActiveIndex(index)
            setIsAnimating(false)
        }, 300)
    }

    const activeTestimonial = testimonials[activeIndex]

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-white to-[#fafafa] opacity-0 translate-y-8 transition-all duration-1000"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Large Quote Mark - Background */}
                <div className="absolute top-20 left-10 md:left-20 text-[20rem] md:text-[30rem] font-serif text-[#919191]/5 leading-none select-none">
                    "
                </div>

                {/* Floating Shapes */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#919191]/10 rotate-45 hidden lg:block" />
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#919191]/10 rounded-full hidden lg:block" />

                {/* Animated Lines */}
                <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-[#919191]/20 to-transparent" />
                <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-[#919191]/20 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#919191]" />
                        <p className="section-label text-[#6A6A6A]">Client Stories</p>
                        <div className="w-12 h-px bg-[#919191]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E]">
                        What They Say
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    {/* Main Card Container */}
                    <div className="relative bg-white border border-[#919191]/20 shadow-2xl shadow-black/5">
                        {/* Highlight Tag */}
                        <div className="absolute -top-4 left-8 md:left-12">
                            <span className="px-4 py-2 bg-[#3E3E3E] text-white text-xs uppercase tracking-widest">
                                {activeTestimonial.highlight}
                            </span>
                        </div>

                        {/* Card Content */}
                        <div className="p-8 md:p-16 pt-12 md:pt-20">
                            {/* Quote */}
                            <div
                                className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                    }`}
                            >
                                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-[#3E3E3E] leading-relaxed mb-12 relative">
                                    <span className="absolute -left-4 md:-left-6 -top-2 text-5xl md:text-6xl text-[#3E3E3E]/10 font-serif">
                                        "
                                    </span>
                                    {activeTestimonial.quote}
                                    <span className="text-5xl md:text-6xl text-[#3E3E3E]/10 font-serif align-bottom">
                                        "
                                    </span>
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center justify-between flex-wrap gap-6">
                                    <div className="flex items-center gap-6">
                                        {/* Avatar Placeholder */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#3E3E3E] to-[#6A6A6A] flex items-center justify-center">
                                            <span className="text-white text-xl font-bold">
                                                {activeTestimonial.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-lg font-semibold text-[#3E3E3E]">
                                                {activeTestimonial.author}
                                            </p>
                                            <p className="text-sm text-[#6A6A6A]">
                                                {activeTestimonial.role}, {activeTestimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-[#3E3E3E]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-0 right-0 flex">
                            <button
                                onClick={handlePrev}
                                className="w-14 h-14 bg-[#f5f5f5] hover:bg-[#3E3E3E] text-[#3E3E3E] hover:text-white transition-all duration-300 flex items-center justify-center group"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-14 h-14 bg-[#3E3E3E] hover:bg-[#2a2a2a] text-white transition-all duration-300 flex items-center justify-center group"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Side Decorations */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#919191]/40 to-transparent hidden lg:block" />
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#919191]/40 to-transparent hidden lg:block" />
                </div>

                {/* Dots Navigation */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`transition-all duration-500 ${index === activeIndex
                                    ? 'w-10 h-2 bg-[#3E3E3E]'
                                    : 'w-2 h-2 bg-[#919191]/40 hover:bg-[#919191]'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-8">
                    <span className="text-sm text-[#919191]">
                        <span className="text-[#3E3E3E] font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
                        {' / '}
                        {String(testimonials.length).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </section>
    )
}
