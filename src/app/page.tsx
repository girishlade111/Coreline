'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Hash,
  ArrowRight,
  BarChart2,
  FileText,
  Users,
  MessageCircle,
  TrendingUp,
  ChevronRight,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

function FadeInDown({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </motion.div>
  )
}

function StaggerChild({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Header / Navbar                                                 */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <FadeInDown>
      <header className="w-full px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Hash className="w-6 h-6 text-[#111827]" strokeWidth={3} />
            <span className="text-lg font-semibold text-[#111827] tracking-tight">Coreline</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-12">
            {['Companies', 'Community', 'Articles'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200">
            Login
          </button>
        </div>
      </header>
    </FadeInDown>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Hero Section                                                    */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111827] leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Where ambitious founders build enduring companies.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A community focused on building a better tomorrow, where founders find the support, network, and resources they need to grow from idea to impact.
        </motion.p>

        {/* Center Portrait with Geometric Effect */}
        <motion.div
          className="relative mt-16 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          {/* Geometric background */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-blue-200/30 blur-2xl" />
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-300/20 blur-xl -translate-x-12 -translate-y-8" />
          <div className="absolute w-32 h-32 rounded-full border border-blue-200/40 translate-x-20 translate-y-10" />
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-100/30 -translate-x-16 -translate-y-4" />

          {/* Photo */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael Carter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating name tag - left */}
          <div className="absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg z-20">
            <p className="text-sm font-semibold text-[#111827]">Michael Carter</p>
            <p className="text-xs text-[#6B7280]">Founder, Nexite Labs</p>
          </div>

          {/* Floating testimonial - right */}
          <div className="absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-lg z-20 max-w-xs">
            <p className="text-xs text-[#6B7280] italic">
              &ldquo;Coreline gave me the network and confidence to take the leap from idea to product.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Companies We've Backed                                          */
/* ------------------------------------------------------------------ */

const companyNames = [
  'Luminary', 'Vestro', 'Arcana', 'Pollen',
  'Meld', 'Onboard', 'Cipher', 'Nexus',
  'Forge', 'Helix', 'Prism', 'Vox',
]

function CompaniesSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeInUp>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              Companies We&apos;ve Backed On Their Journey Forward
            </h2>
            <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-full px-4 py-2 transition-colors">
              All companies <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeInUp>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companyNames.map((name, i) => (
            <motion.div
              key={name}
              className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-1.5 text-[#6B7280]">
                <div className="w-6 h-6 rounded bg-gray-300" />
                <span className="text-sm font-medium tracking-wide">{name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Feature Grid (4 cards)                                          */
/* ------------------------------------------------------------------ */

function ChatBubbles() {
  return (
    <div className="mt-6 space-y-3">
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">JK</div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs text-[#374151] max-w-[200px]">
          Has anyone used Notion for sprint planning?
        </div>
      </div>
      <div className="flex items-start gap-2 flex-row-reverse">
        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">MR</div>
        <div className="bg-blue-50 rounded-2xl rounded-tr-sm px-3.5 py-2 text-xs text-[#374151] max-w-[200px]">
          Yes! We switched from Jira last month.
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">SL</div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs text-[#374151] max-w-[200px]">
          Would love to hear how that went!
        </div>
      </div>
    </div>
  )
}

function FundraiseChart() {
  return (
    <div className="mt-6 flex items-end gap-2 relative">
      {/* Dashed line */}
      <div className="absolute top-2 left-0 right-0 border-t-2 border-dashed border-blue-200" />

      <div className="flex items-end gap-3 w-full">
        {[
          { height: 'h-12', label: 'Pre', color: 'bg-gray-200' },
          { height: 'h-20', label: 'Seed', color: 'bg-blue-400' },
          { height: 'h-28', label: 'Series A', color: 'bg-blue-500' },
          { height: 'h-16', label: 'Next', color: 'bg-gray-100 border-2 border-dashed border-blue-300' },
        ].map((bar) => (
          <div key={bar.label} className="flex flex-col items-center gap-1.5 flex-1">
            <div className={`w-full ${bar.height} ${bar.color} rounded-t-md`} />
            <span className="text-[10px] text-[#6B7280]">{bar.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute right-2 top-8">
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-0.5">
          The Next 1 <ArrowRight className="w-2.5 h-2.5" />
        </span>
      </div>
      <div className="absolute right-2 bottom-8">
        <span className="inline-flex items-center text-[10px] font-medium text-green-600 bg-green-50 rounded-full px-2 py-0.5">
          Done!
        </span>
      </div>
    </div>
  )
}

function CofounderCard() {
  return (
    <div className="mt-6 flex items-start gap-4">
      <div className="relative">
        <div className="w-16 h-20 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
          Team
        </span>
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-28 bg-gray-200 rounded" />
        <div className="h-2 w-20 bg-gray-100 rounded" />
        <div className="h-2 w-24 bg-gray-100 rounded" />
        <div className="flex gap-1.5 mt-2">
          <div className="w-6 h-6 rounded-full bg-blue-100" />
          <div className="w-6 h-6 rounded-full bg-purple-100" />
          <div className="w-6 h-6 rounded-full bg-green-100" />
        </div>
      </div>
    </div>
  )
}

function CustomerChart() {
  return (
    <div className="mt-6">
      <div className="flex items-end gap-3 h-32">
        {[60, 40, 80, 35, 95, 50, 70].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md ${i === 4 ? 'bg-blue-400' : 'bg-gray-200'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-[#6B7280]">Mon</span>
        <span className="text-[10px] text-[#6B7280]">Sun</span>
      </div>
    </div>
  )
}

const features = [
  {
    icon: <MessageCircle className="w-5 h-5 text-blue-500" />,
    title: 'Be part of a real community.',
    description: 'Connect with founders who understand your journey. Share insights, get feedback, and grow together.',
    visual: <ChatBubbles />,
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    title: 'A better way to fundraise.',
    description: 'Streamline your fundraising process with tools and networks that connect you to the right investors.',
    visual: <FundraiseChart />,
  },
  {
    icon: <Users className="w-5 h-5 text-blue-500" />,
    title: 'Find your co-founders.',
    description: 'Meet potential co-founders who complement your skills and share your vision for the future.',
    visual: <CofounderCard />,
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-blue-500" />,
    title: 'Access your first real customers.',
    description: 'Get introduced to early adopters and your first customers through our curated network.',
    visual: <CustomerChart />,
  },
]

function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeInUp>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] text-center mb-14">
            Everything founders need to build, early on
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <StaggerChild key={f.title}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  {f.icon}
                  <h3 className="text-lg font-semibold text-[#111827]">{f.title}</h3>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{f.description}</p>
                {f.visual}
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Learn from people who've been there                             */
/* ------------------------------------------------------------------ */

function LearnSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeInUp>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              Learn from people who&apos;ve been there
            </h2>
            <p className="mt-3 text-sm text-[#6B7280] max-w-lg mx-auto">
              Get insights from founders, operators, and investors who have navigated the path before you.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          {/* Mock leaderboard UI */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-[#6B7280] font-medium">Leaderboard</span>
              <div className="w-16" />
            </div>

            {/* Content */}
            <div className="divide-y divide-gray-100">
              {[
                { name: 'Samantha', role: 'CEO, Luminary', score: '2,847', color: 'bg-blue-100 text-blue-600' },
                { name: 'Jessie', role: 'CTO, Arcana', score: '2,613', color: 'bg-purple-100 text-purple-600' },
                { name: 'Mark', role: 'Founder, Forge', score: '2,401', color: 'bg-green-100 text-green-600' },
                { name: 'Petra', role: 'COO, Nexus', score: '2,198', color: 'bg-orange-100 text-orange-600' },
                { name: 'Alex', role: 'VP, Helix', score: '2,054', color: 'bg-pink-100 text-pink-600' },
              ].map((person, i) => (
                <div key={person.name} className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#6B7280] w-5 font-medium">{i + 1}</span>
                    <div className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-xs font-bold`}>
                      {person.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111827]">{person.name}</p>
                      <p className="text-xs text-[#6B7280]">{person.role}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#111827]">{person.score}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. Members stories (Testimonial)                                   */
/* ------------------------------------------------------------------ */

const members = [
  { name: 'James Anderson', active: true },
  { name: 'Michael Carter', active: false },
  { name: 'Sarah Mitchell', active: false },
  { name: 'David Kim', active: false },
  { name: 'Elena Rodriguez', active: false },
]

function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeInUp>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              Members stories from the Community
            </h2>
            <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-full px-4 py-2 transition-colors">
              Meet all members <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Sidebar - Member List */}
            <div className="md:w-1/3 border-r border-gray-200">
              {members.map((m) => (
                <div
                  key={m.name}
                  className={`px-6 py-4 text-sm font-medium transition-colors cursor-pointer ${
                    m.active
                      ? 'bg-gray-800 text-white'
                      : 'text-[#6B7280] hover:bg-gray-50'
                  }`}
                >
                  {m.name}
                </div>
              ))}
            </div>

            {/* Right - Photo & Story */}
            <div className="md:w-2/3 relative">
              {/* Photo with blue monochromatic filter */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="James Anderson"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0) brightness(1.2) contrast(1.1)' }}
                />
                {/* Blue overlay tint */}
                <div className="absolute inset-0 bg-blue-500/15" />
              </div>

              {/* Story text box */}
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#111827]">
                  How they bootstrapped an MVP in 3 months
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                  James and his team leveraged the Coreline community to find their technical co-founder, validate their idea with early users, and iterate to a $82M valuation within 18 months.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#2563EB] hover:underline"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7. Blog / Articles Section                                         */
/* ------------------------------------------------------------------ */

const articles = [
  {
    title: 'What is 0 to 1? And Why It\u2019s Important for Startups',
    tag: 'Research',
    gradient: 'from-blue-200 via-blue-100 to-white',
    shape: (
      <svg viewBox="0 0 200 120" className="w-full h-32 opacity-60">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="60" rx="80" ry="40" fill="url(#g1)" />
        <ellipse cx="60" cy="50" rx="40" ry="25" fill="#BFDBFE" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Coreline Founder Fellowship Spring 2026',
    tag: 'Updates',
    gradient: 'from-blue-300 via-blue-100 to-white',
    shape: (
      <svg viewBox="0 0 200 120" className="w-full h-32 opacity-60">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#EFF6FF" />
          </linearGradient>
        </defs>
        <rect x="10" y="40" width="180" height="40" rx="20" fill="url(#g2)" />
        <rect x="30" y="20" width="60" height="80" rx="30" fill="#93C5FD" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Finding the Right Product for the Market',
    tag: 'Perspective',
    gradient: 'from-blue-100 via-white to-blue-50',
    shape: (
      <svg viewBox="0 0 200 120" className="w-full h-32 opacity-60">
        <line x1="60" y1="20" x2="60" y2="100" stroke="#93C5FD" strokeWidth="6" />
        <line x1="140" y1="20" x2="140" y2="100" stroke="#93C5FD" strokeWidth="6" />
        <line x1="20" y1="60" x2="180" y2="60" stroke="#BFDBFE" strokeWidth="6" />
        <circle cx="60" cy="60" r="12" fill="#60A5FA" opacity="0.4" />
        <circle cx="140" cy="60" r="12" fill="#60A5FA" opacity="0.4" />
      </svg>
    ),
  },
]

function BlogSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeInUp>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              From the fund, research, updates, and perspective
            </h2>
            <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-full px-4 py-2 transition-colors">
              All articles <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <StaggerChild key={a.title}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                {/* Abstract image */}
                <div className={`bg-gradient-to-br ${a.gradient} p-0 flex items-center justify-center overflow-hidden`}>
                  {a.shape}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">{a.tag}</span>
                  <h3 className="mt-2 text-base font-semibold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                    {a.title}
                  </h3>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  8. Footer                                                          */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-neutral-900 text-[#F9FAFB] mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Mailing list */}
        <FadeInUp>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-[#F9FAFB] placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </FadeInUp>

        {/* Middle row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="w-5 h-5 text-white" strokeWidth={3} />
              <span className="text-lg font-semibold tracking-tight">Coreline</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Get the best stories from the Sea community. Building a better tomorrow, together.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Products</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Fellowship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fund</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Network</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Coreline Venture. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CompaniesSection />
        <FeatureGrid />
        <LearnSection />
        <TestimonialSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
