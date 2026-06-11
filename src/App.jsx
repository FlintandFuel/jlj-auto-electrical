/*
 * JLJ Auto Electrical Services and Spares — Landing Page
 * -------------------------------------------------------
 * Positioning angle: "The specialist Pretoria trusts by name" —
 *   family-run warmth meets decades of alternator and starter
 *   expertise; positioned against faceless trade counters
 *
 * Top trust signals: RMI Registration No. 4000076, Uncle Johan
 *   named in reviews, 24-hour turnaround, swap-guarantee on parts,
 *   4.0/5 Google rating (50+ reviews)
 *
 * Primary CTA rationale: "Book Your Service" drives a call or form
 *   submission — lowest-friction conversion for a physical-service
 *   business where trust is built through direct conversation
 *
 * Font pairing: Stack (Google Fonts) at weight 400 for all section
 *   headings — editorial, modern, and authoritative without being
 *   heavy. Inter for body — neutral, highly readable.
 *
 * Accent colour #9B1C1C Deep Crimson — CTAs, quote marks, section
 *   labels, trust bar background. Never as large-area fill on
 *   light sections.
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SalesBar from './components/SalesBar'
import './index.css'

// Prefix public-folder paths for GitHub Pages subdirectory deployments
const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const StarIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
)

// ── Navigation ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why JLJ', href: '#why-jlj' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#111111] shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex flex-col leading-none group shrink-0" aria-label="JLJ Auto Electrical Services home">
            <span
              className="text-white text-2xl font-black tracking-tight group-hover:text-[#9B1C1C] transition-colors duration-200"
              style={{ fontFamily: "'Stack', sans-serif" }}
            >
              JLJ
            </span>
            <span className="text-white text-[9px] font-bold tracking-[0.22em] uppercase leading-none mt-0.5">
              Auto Electrical
            </span>
          </a>

          <nav className="hidden nav:flex items-center gap-7" aria-label="Main navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#c0c0c0] text-sm font-medium tracking-wide hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:0123270948" className="text-[#c0c0c0] text-sm font-medium hover:text-white transition-colors duration-200">
              012 327 0948
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[44px] bg-[#9B1C1C] text-white text-xs font-bold tracking-[0.18em] uppercase px-6 hover:bg-[#7d1616] transition-colors duration-150"
            >
              Book Service
            </a>
          </nav>

          <button
            className="nav:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="w-6 h-0.5 bg-current block" />
            <span className="w-6 h-0.5 bg-current block" />
            <span className="w-4 h-0.5 bg-current block self-start" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#111111] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 flex items-center justify-center w-11 h-11 text-white"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" aria-hidden="true">
                <path d="M3 3l14 14M17 3L3 17" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-10 px-8 w-full" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-white text-4xl hover:text-[#9B1C1C] transition-colors duration-150"
                  style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400 }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:0123270948"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="text-[#9B1C1C] text-2xl font-bold"
                onClick={() => setOpen(false)}
              >
                012 327 0948
              </motion.a>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center justify-center min-h-[56px] bg-[#9B1C1C] text-white text-sm font-bold tracking-[0.18em] uppercase px-10 w-full max-w-xs"
                onClick={() => setOpen(false)}
              >
                Book Service
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img('images/hero-bg.webp')})` }}
        aria-hidden="true"
      />
      {/* Dark overlay — heavier on right so text always legible */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.88) 55%, rgba(10,10,10,0.95) 100%)' }}
        aria-hidden="true"
      />
      {/* Crimson glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(155,28,28,0.15) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1180px] mx-auto px-8 lg:px-8 py-40 md:py-52">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-8"
        >
          Auto Electrical Specialists, Pretoria West
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-white leading-[1.05] tracking-tight max-w-[820px] mb-8"
          style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Get your car's electrical system fixed. The first time.
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '3rem', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="h-px bg-[#9B1C1C] mb-8"
          aria-hidden="true"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#b8b8b8] text-lg md:text-xl leading-relaxed max-w-[580px] mb-12"
        >
          Alternators, starters, and wiring faults sorted fast, honestly, and at prices that won't make a bad day worse. Our customers drive from across Gauteng for it.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#9B1C1C] text-white font-bold text-sm tracking-[0.18em] uppercase px-8 hover:bg-[#7d1616] transition-colors duration-150"
          >
            Book Your Service
          </a>
          <a
            href="tel:0123270948"
            className="inline-flex items-center justify-center min-h-[52px] border border-white/25 text-white font-medium text-sm tracking-wide px-8 hover:border-white/60 hover:bg-white/5 transition-all duration-150"
          >
            012 327 0948
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.54, duration: 0.7 }}
          className="flex items-center gap-3 mt-16"
          aria-label="Google rating: 4 out of 5, 151 reviews"
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {[1, 2, 3, 4].map(i => (
              <StarIcon key={i} className="w-4 h-4 text-[#9B1C1C]" />
            ))}
            <StarIcon className="w-4 h-4 text-[#444]" />
          </div>
          <p className="text-[#888] text-sm">
            <span className="text-[#e0e0e0] font-semibold">4.0 / 5</span> on Google&nbsp;&nbsp;·&nbsp;&nbsp;151 reviews
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Trust Bar ─────────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    { value: 'RMI Registered', label: 'No. 4000076' },
    { value: 'Decades', label: 'Serving Pretoria West' },
    { value: '4.0 / 5', label: '151 Google Reviews' },
    { value: '24 Hours', label: 'Turnaround on Most Jobs' },
  ]

  return (
    <section className="bg-[#9B1C1C]" aria-label="Trust indicators">
      <div className="max-w-[1180px] mx-auto px-8 py-14 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {items.map(item => (
            <motion.div key={item.label} variants={fadeUp} className="text-center">
              <p
                className="text-white text-2xl md:text-3xl font-black leading-none mb-2"
                style={{ fontFamily: "'Stack', sans-serif" }}
              >
                {item.value}
              </p>
              <p className="text-white/75 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICE_CARDS = [
  {
    num: '01',
    title: 'Alternators and Starters',
    desc: 'New, reconditioned, and quality second-hand units. Bring your alternator or starter in for reconditioning, or leave with a tested replacement the same day. Cars, bakkies, light commercials, and golf carts.',
    bgImage: 'images/alternator.webp',
  },
  {
    num: '02',
    title: 'Electrical Fault Finding',
    desc: 'From mystery warning lights to rat-chewed wiring looms, engine management faults, central locking, lights, and every electrical problem in between. Diagnosed accurately and fixed.',
    bgImage: 'images/engine-injectors.webp',
  },
  {
    num: '03',
    title: 'Parts Supply and Spares',
    desc: 'Batteries, globes, wiring accessories, caravan and trailer electrics, golf cart electrical components. If it is auto electrical, they stock it or can source it quickly.',
    bgImage: 'images/gears.webp',
  },
  {
    num: '04',
    title: 'Air Conditioning and Wiring',
    desc: 'AC diagnostics and repair, full wiring harness work, and complete auto electrical accessory fitment for cars, bakkies, and light commercial vehicles.',
    bgImage: 'images/engine-belt.webp',
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#111111] py-28 md:py-36" aria-labelledby="services-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">Services</p>
          <h2
            id="services-heading"
            className="text-white leading-tight"
            style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
          >
            Everything auto electrical. Nothing else.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]"
        >
          {SERVICE_CARDS.map(s => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="relative overflow-hidden group"
            >
              {/* Card bg image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${img(s.bgImage)})` }}
                aria-hidden="true"
              />
              {/* Dark base overlay + gradient fade for legibility at rest */}
              <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40" aria-hidden="true" />
              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-6">{s.num}</p>
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
                >
                  {s.title}
                </h3>
                <p className="text-[#b0b0b0] text-base leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#9B1C1C] text-white font-bold text-sm tracking-[0.18em] uppercase px-10 hover:bg-[#7d1616] transition-colors duration-150"
          >
            Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Why JLJ ───────────────────────────────────────────────────────────────────

function WhyJLJ() {
  const trustDetails = [
    { label: 'RMI Registered', detail: 'No. 4000076' },
    { label: 'Trading Hours', detail: 'Monday to Friday, 07:30 to 17:00' },
    { label: 'Location', detail: '443 Soutter St, Pretoria West, 0183' },
  ]

  return (
    <section id="why-jlj" className="bg-[#F5F5F5] py-28 md:py-36" aria-labelledby="why-jlj-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">
              Why JLJ Auto Electrical
            </motion.p>
            <motion.h2
              id="why-jlj-heading"
              variants={fadeUp}
              className="text-[#1A1A1A] leading-tight mb-8"
              style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Not just another workshop on Soutter Street.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed mb-6">
              JLJ Auto Electrical has been fixing electrical problems in Pretoria West for decades. It is run by a family that genuinely cares, and our customers drive from across Gauteng specifically for the alternator and starter expertise you won't find at a general mechanic.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed mb-6">
              Johan and the team have built their reputation one job at a time, not through advertising. Reviewers come back because the work gets done properly, the price is fair, and if a part fails after the job, it gets swapped without argument.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed mb-12">
              That is just how they do things.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-5">
              {trustDetails.map(t => (
                <motion.div key={t.label} variants={fadeUp} className="flex gap-4 items-start">
                  <span
                    className="bg-[#9B1C1C] shrink-0 mt-1"
                    style={{ width: '2px', minHeight: '22px', display: 'block' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[#1A1A1A] text-sm font-bold tracking-wide">{t.label}</p>
                    <p className="text-[#6b7280] text-sm mt-0.5">{t.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Real workshop/mechanic image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src={img('images/mechanic-hands.webp')}
                alt="Mechanic working on a vehicle engine at JLJ Auto Electrical workshop, Pretoria West"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Crimson corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#9B1C1C]" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Reviews ───────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    quote: 'Helped and sorted within 24 hours I had my car back. They are the best for alternators, starters or AC. They come highly recommended in the PTA and Gauteng area at affordable pricing.',
    author: 'Freddie',
    stars: 5,
  },
  {
    quote: 'Best place for starters and alternators. Replacement units or bring yours to recon. Fast, friendly, the best.',
    author: 'Cherise Bornman',
    stars: 5,
  },
  {
    quote: 'Such calm people. I see a bounded family there running business with such simplicity and professionalism. Satisfying customers is their ultimate goal.',
    author: 'Funmi Eso',
    stars: 5,
  },
  {
    quote: 'The level of service is fantastic. Turnaround time is great. Cost by comparison is really good.',
    author: 'John Smit',
    stars: 5,
  },
  {
    quote: 'Took my 2003 Jeep Cherokee to JLJ after rats chewed the wires. They sorted everything out quickly and professionally. Great workmanship, friendly service. These guys really know their stuff.',
    author: 'Brenda Swart',
    stars: 5,
  },
  {
    quote: 'Honest, reliable, and reasonably priced. My starter motor was sorted within a few hours and the car has been running perfectly since. Will definitely be back for any future auto electrical work.',
    author: 'Pieter de Wet',
    stars: 5,
  },
]

function Reviews() {
  return (
    <section id="reviews" className="bg-[#1A1A1A] py-28 md:py-36" aria-labelledby="reviews-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">Google Reviews</p>
          <h2
            id="reviews-heading"
            className="text-white leading-tight max-w-[680px]"
            style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            In their own words.
          </h2>
          <p className="text-[#666] text-base mt-4">
            4.0 / 5 on Google&nbsp;&nbsp;·&nbsp;&nbsp;151 reviews&nbsp;&nbsp;·&nbsp;&nbsp;
            <a
              href="https://www.google.com/maps/search/?api=1&query=JLJ+Auto+Electrical+Services+and+Spares+Pretoria+West"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9B1C1C] font-semibold hover:text-white transition-colors duration-200"
            >
              Read all reviews
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((r, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="bg-[#242424] border border-white/[0.06] p-8 flex flex-col gap-4"
            >
              <div className="flex gap-1" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-[#9B1C1C]" />
                ))}
              </div>
              <span
                className="text-[#9B1C1C] font-black leading-none"
                aria-hidden="true"
                style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', lineHeight: '0.65' }}
              >
                "
              </span>
              <p className="text-[#d8d8d8] text-base leading-relaxed flex-1">{r.quote}</p>
              <p className="text-[#777] text-sm font-medium">{r.author}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book',
      desc: (
        <>
          Call{' '}
          <a href="tel:0123270948" className="text-[#9B1C1C] font-semibold underline hover:text-[#7d1616] transition-colors duration-200">
            012 327 0948
          </a>{' '}
          or send a message using the{' '}
          <a href="#contact" className="text-[#9B1C1C] font-semibold underline hover:text-[#7d1616] transition-colors duration-200">
            form below
          </a>
          . Tell the team what your vehicle is doing and they will give you a clear idea of what to expect before you even arrive.
        </>
      ),
    },
    {
      num: '02',
      title: 'Drop In',
      desc: (
        <>
          Bring your vehicle to{' '}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=443+Soutter+Street+Pretoria+West+Pretoria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9B1C1C] font-semibold underline hover:text-[#7d1616] transition-colors duration-200"
          >
            443 Soutter St, Pretoria West
          </a>
          . Most diagnoses happen the same day. The team will keep you informed throughout. No mystery, no waiting in the dark.
        </>
      ),
    },
    {
      num: '03',
      title: 'Drive Away',
      desc: 'Your car back, properly sorted. Same day or within 24 hours on most jobs. No surprises on the bill. If a part fails after the job, it gets replaced without argument.',
    },
  ]

  return (
    <section className="bg-[#F5F5F5] py-28 md:py-36" aria-labelledby="how-it-works-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">How It Works</p>
          <h2
            id="how-it-works-heading"
            className="text-[#1A1A1A] leading-tight max-w-[580px]"
            style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Three steps from problem to sorted.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10"
        >
          {steps.map(s => (
            <motion.div key={s.num} variants={fadeUp} className="flex flex-col">
              <p
                className="text-[#9B1C1C] font-black leading-none mb-6"
                style={{ fontFamily: "'Stack', sans-serif", fontSize: '3.5rem' }}
                aria-hidden="true"
              >
                {s.num}
              </p>
              <div className="h-px bg-[#1A1A1A] w-10 mb-6" aria-hidden="true" />
              <h3
                className="text-[#1A1A1A] text-2xl mb-4"
                style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400 }}
              >
                {s.title}
              </h3>
              <p className="text-[#4a4a4a] text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#9B1C1C] text-white font-bold text-sm tracking-[0.18em] uppercase px-10 hover:bg-[#7d1616] transition-colors duration-150"
          >
            Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' })

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: Connect to Formspree, Brevo, or Netlify Forms
    setSubmitted(true)
  }

  const inputClass =
    'bg-[#242424] border border-white/10 text-white text-base px-4 h-12 focus:outline-none focus:border-[#9B1C1C] transition-colors duration-200 placeholder:text-[#484848] w-full'

  return (
    <section id="contact" className="bg-[#1A1A1A] py-28 md:py-36" aria-labelledby="contact-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">Contact</p>
          <h2
            id="contact-heading"
            className="text-white leading-tight max-w-[680px]"
            style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Get your vehicle sorted. Today.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[#666] text-xs font-bold tracking-[0.22em] uppercase mb-3">Call or WhatsApp</p>
              <a
                href="tel:0123270948"
                className="text-white font-black hover:text-[#9B1C1C] transition-colors duration-200 block"
                style={{ fontFamily: "'Stack', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                012 327 0948
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#666] text-xs font-bold tracking-[0.22em] uppercase mb-3">Trading Hours</p>
              <p className="text-white text-lg font-semibold">Monday to Friday</p>
              <p className="text-[#b0b0b0] text-base">07:30 to 17:00</p>
              <p className="text-[#666] text-sm mt-1">Closed weekends and public holidays</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#666] text-xs font-bold tracking-[0.22em] uppercase mb-3">Address</p>
              <address className="not-italic">
                <p className="text-white text-lg font-semibold">443 Soutter Street</p>
                <p className="text-[#b0b0b0] text-base">Pretoria West, Pretoria, 0183</p>
              </address>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=443+Soutter+Street+Pretoria+West+Pretoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#9B1C1C] text-sm font-bold tracking-wide hover:text-white transition-colors duration-200"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full h-52 overflow-hidden">
              <iframe
                title="JLJ Auto Electrical Services location map"
                src="https://maps.google.com/maps?q=443+Soutter+Street+Pretoria+West+Pretoria+0183&output=embed&z=15"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex flex-col gap-5 h-full justify-center py-16">
                <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.22em] uppercase">Message Sent</p>
                <p
                  className="text-white"
                  style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: '2rem' }}
                >
                  The team will be in touch shortly.
                </p>
                <p className="text-[#b0b0b0] text-base leading-relaxed">
                  For urgent matters, call directly on{' '}
                  <a href="tel:0123270948" className="text-white font-semibold hover:text-[#9B1C1C] transition-colors">
                    012 327 0948
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Service enquiry form">
                <p className="text-[#666] text-xs font-bold tracking-[0.22em] uppercase mb-1">Send an Enquiry</p>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[#b0b0b0] text-sm">Your Name</label>
                  <input id="name" type="text" required value={form.name} onChange={set('name')} className={inputClass} placeholder="Name Surname" autoComplete="name" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[#b0b0b0] text-sm">Phone / WhatsApp</label>
                  <input id="phone" type="tel" required value={form.phone} onChange={set('phone')} className={inputClass} placeholder="082 000 0000" autoComplete="tel" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="vehicle" className="text-[#b0b0b0] text-sm">Your Vehicle</label>
                  <input id="vehicle" type="text" value={form.vehicle} onChange={set('vehicle')} className={inputClass} placeholder="e.g. Toyota Hilux 2018" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#b0b0b0] text-sm">Describe the Problem</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    className="bg-[#242424] border border-white/10 text-white text-base px-4 py-3 focus:outline-none focus:border-[#9B1C1C] transition-colors duration-200 placeholder:text-[#484848] resize-none w-full"
                    placeholder="e.g. Car won't start, alternator warning light is on..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[52px] bg-[#9B1C1C] text-white font-bold text-sm tracking-[0.18em] uppercase px-8 hover:bg-[#7d1616] transition-colors duration-150 mt-2"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How long does an alternator replacement take at JLJ Auto Electrical?',
    a: 'Most alternator replacements and reconditions are completed the same day, often within a few hours of drop-off. Turnaround times depend on parts availability, but the team will keep you informed from the moment your vehicle is assessed.',
  },
  {
    q: 'Do you sell second-hand or reconditioned alternators and starters?',
    a: 'Yes. JLJ Auto Electrical stocks new, reconditioned, and quality second-hand alternators and starter motors. All units are tested before fitting, and if a part fails after the job, it gets replaced without argument.',
  },
  {
    q: 'What is the difference between a reconditioned and a second-hand alternator?',
    a: 'A reconditioned alternator has been stripped, cleaned, rebuilt with new internal components (brushes, bearings, rectifier), and tested to factory specification. A second-hand unit is a tested pull-out from another vehicle. JLJ Auto Electrical carries both and will advise which option makes sense for your vehicle and budget.',
  },
  {
    q: 'How do I know if my alternator is failing?',
    a: 'Common signs include a battery warning light on your dashboard, a battery that keeps going flat, dimming headlights or interior lights, a whining or grinding noise from the engine bay, and electrical accessories behaving erratically. If you notice any of these, have the system tested before the alternator fails completely and leaves you stranded.',
  },
  {
    q: 'Can a bad alternator damage other parts in my vehicle?',
    a: 'Yes. A failing alternator can cause your battery to discharge repeatedly, which shortens battery life. It can also cause voltage fluctuations that affect ECU modules, sensors, and other sensitive electronics. Getting a failing alternator replaced promptly avoids a more expensive chain of electrical faults.',
  },
  {
    q: 'Can you repair wiring damage caused by rats or rodents?',
    a: 'Yes. JLJ Auto Electrical has repaired many rat-damaged wiring looms and knows exactly what to look for. Rodent damage can be extensive and hidden, but the team will trace the full extent of the damage and repair it properly.',
  },
  {
    q: 'What vehicles do you service?',
    a: 'JLJ Auto Electrical services cars, bakkies, light commercial vehicles, caravans, trailers, and golf carts. They work on both petrol and diesel vehicles and are familiar with a wide range of makes and models across the Pretoria and Gauteng market.',
  },
  {
    q: 'Do you offer a warranty on parts and repairs?',
    a: 'JLJ Auto Electrical stands behind their work. If a part fitted by the team fails, it gets swapped without argument. Speak to the team directly on 012 327 0948 to confirm warranty terms for your specific repair or part.',
  },
  {
    q: 'Do you accept credit and debit cards?',
    a: 'Contact the team directly on 012 327 0948 to confirm current payment options before your visit.',
  },
  {
    q: 'Do you service vehicles from outside Pretoria West?',
    a: "Yes. Customers drive from across Pretoria and the wider Gauteng area specifically for JLJ Auto Electrical's alternator and starter expertise. If you can get your vehicle to 443 Soutter St, the team will sort it out.",
  },
  {
    q: 'Is JLJ Auto Electrical a member of a recognised industry body?',
    a: 'Yes. JLJ Auto Electrical is RMI-registered, registration number 4000076. RMI (Retail Motor Industry Organisation) membership is a standard for professionalism and ethical conduct in the South African motor trade, and most fly-by-night operators do not have it.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-[#F5F5F5] py-28 md:py-36" aria-labelledby="faq-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#9B1C1C] text-xs font-bold tracking-[0.28em] uppercase mb-5">FAQ</p>
          <h2
            id="faq-heading"
            className="text-[#1A1A1A] leading-tight max-w-[520px]"
            style={{ fontFamily: "'Stack', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Questions you probably have.
          </h2>
        </motion.div>

        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col divide-y divide-[#d8d8d8]"
        >
          {FAQS.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <dt>
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 focus:outline-none group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[#1A1A1A] text-base md:text-lg font-semibold leading-snug group-hover:text-[#9B1C1C] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#9B1C1C] shrink-0 mt-1 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd id={`faq-answer-${i}`}>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#4a4a4a] text-base leading-relaxed pb-6 max-w-[720px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] pt-20 pb-12" aria-label="Site footer">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="text-[#9B1C1C] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="tel:0123270948" className="text-[#b0b0b0] text-sm hover:text-white transition-colors">
                012 327 0948
              </a>
              <address className="not-italic text-[#777] text-sm leading-relaxed">
                443 Soutter St<br />
                Pretoria West<br />
                Pretoria, 0183
              </address>
            </div>
          </div>

          <div>
            <p className="text-[#9B1C1C] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">Hours</p>
            <div className="flex flex-col gap-1 mb-8">
              <p className="text-[#b0b0b0] text-sm">Monday to Friday</p>
              <p className="text-[#b0b0b0] text-sm">07:30 to 17:00</p>
              <p className="text-[#666] text-sm">Closed weekends</p>
            </div>
            <p className="text-[#9B1C1C] text-[10px] font-bold tracking-[0.22em] uppercase mb-4">Find Us</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.facebook.com/people/JLJ-Auto-Electrical/100091143390841"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777] text-sm hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://maps.google.com/?q=443+Soutter+Street+Pretoria+West"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777] text-sm hover:text-white transition-colors"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p
              className="text-white text-4xl font-black mb-1"
              style={{ fontFamily: "'Stack', sans-serif" }}
            >
              JLJ
            </p>
            <p className="text-[#9B1C1C] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">
              Auto Electrical Services and Spares
            </p>
            <p className="text-[#777] text-sm leading-relaxed max-w-[340px] mb-6">
              Alternator and starter motor specialists in Pretoria West. Family-run, RMI-registered, and trusted by customers from across Gauteng.
            </p>
            <div className="flex items-center gap-2" aria-label="Google rating: 4 out of 5">
              <div className="flex gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4].map(i => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-[#9B1C1C]" />
                ))}
              </div>
              <p className="text-[#666] text-xs">4.0 / 5 on Google&nbsp;·&nbsp;151 reviews</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#444] text-xs text-center md:text-left">
            RMI Registered&nbsp;·&nbsp;No. 4000076&nbsp;·&nbsp;443 Soutter St, Pretoria West, 0183&nbsp;·&nbsp;{new Date().getFullYear()} JLJ Auto Electrical Services and Spares
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCredit() {
  return (
    <div className="bg-[#0a0a0a] py-4 border-t border-white/[0.04]">
      <p className="text-center text-[#3a3a3a] text-xs">
        Website design by{' '}
        <a
          href="https://flintandfuel.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          Flint and Fuel Creative
        </a>
      </p>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <div className="pb-24">
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <WhyJLJ />
          <Reviews />
          <HowItWorks />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <FooterCredit />
      </div>
      <SalesBar />
    </>
  )
}
