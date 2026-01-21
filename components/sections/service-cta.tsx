'use client'

import React, { useState, useCallback } from 'react'
import GridBackground from '@/components/ui/grid-background'
import { CircleDecoration } from '@/components/ui/architectural-shapes'
import { OFFICE_LOCATIONS, COMPANY_INFO } from '@/lib/contact-config'
import { emailOnlySchema, validateForm, type EmailOnlyData, type FormErrors } from '@/lib/contact-schema'

export default function ServiceCTA() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError(null)
  }, [error])

  const handleBlur = useCallback(() => {
    setTouched(true)
    const result = emailOnlySchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.errors[0]?.message || 'Invalid email')
    }
  }, [email])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = validateForm(emailOnlySchema, { email })

    if (!result.success) {
      setError((result.errors as FormErrors<EmailOnlyData>).email || 'Invalid email')
      setTouched(true)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setEmail('')
      setError(null)
      setTouched(false)
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClassName = () => {
    const baseClass = "w-full py-4 bg-transparent border-b text-white placeholder-[#6A6A6A] focus:outline-none transition-colors duration-300"
    if (touched && error) return `${baseClass} border-red-400 focus:border-red-500`
    if (touched && !error && email) return `${baseClass} border-green-400 focus:border-green-500`
    return `${baseClass} border-[#919191] focus:border-white`
  }

  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-[#3E3E3E] overflow-hidden text-[#CFCFCF]">
      {/* Grid Background */}
      <GridBackground
        fadeFrom="center"
        gridColor="#919191"
        gridSizeX={40}
        gridSizeY={40}
        opacity={0.15}
        className="text-[#919191]"
      />

      {/* Circle Decorations */}
      <div className="absolute top-0 right-0 opacity-10">
        <CircleDecoration size="lg" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10">
        <CircleDecoration size="xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-12 text-white">
            <span className="block">Ready to Elevate</span>
            <span className="block text-[#919191]">Your Brand?</span>
          </h2>

          <p className="text-lg text-[#CFCFCF] max-w-2xl mb-12 leading-relaxed font-light">
            We approach each partnership with the same commitment to excellence. Whether you're launching a new brand or evolving an established one, we're here to guide you through a transformative creative journey.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1 relative group">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClassName()}
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
              {touched && error && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-400">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 bg-white text-[#3E3E3E] font-medium uppercase tracking-widest hover:bg-[#CFCFCF] transition-colors duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sent!
                </>
              ) : 'Initiate Discussion'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="mb-8 py-3 px-6 bg-green-500/20 border border-green-500/30 rounded inline-block">
              <p className="text-green-300 text-sm">We'll be in touch {COMPANY_INFO.responseTime}!</p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-[#919191]/30">
            <div className="group cursor-pointer">
              <p className="text-xs uppercase tracking-widest text-[#919191] mb-3 group-hover:text-white transition-colors duration-300">Email</p>
              <a href={`mailto:${COMPANY_INFO.mainEmail}`} className="text-lg font-light text-[#CFCFCF] group-hover:text-white transition-colors duration-300">
                {COMPANY_INFO.mainEmail}
              </a>
            </div>

            <div className="group cursor-pointer">
              <p className="text-xs uppercase tracking-widest text-[#919191] mb-3 group-hover:text-white transition-colors duration-300">Phone</p>
              <p className="text-lg font-light text-[#CFCFCF] group-hover:text-white transition-colors duration-300">
                {OFFICE_LOCATIONS[0].phone}
              </p>
            </div>

            <div className="group cursor-pointer">
              <p className="text-xs uppercase tracking-widest text-[#919191] mb-3 group-hover:text-white transition-colors duration-300">Location</p>
              <p className="text-lg font-light text-[#CFCFCF] group-hover:text-white transition-colors duration-300">
                {OFFICE_LOCATIONS.map(loc => loc.region.toUpperCase()).join(' | ')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#919191]/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs text-[#919191] italic opacity-80">
            We value thoughtful communication and mutual respect. Expect detailed, honest guidance and work that reflects your vision.
          </p>
        </div>
      </div>
    </section>
  )
}
