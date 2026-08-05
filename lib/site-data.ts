/**
 * Centralized placeholder content for the Apex Kinetic prototype.
 * No state management — these are static placeholders, edited later as needed.
 */

export const clinic = {
  name: 'Apex Kinetic',
  tagline: 'Elite Sports Medicine & Recovery',
  phone: '(617) 555-0142',
  phoneHref: 'tel:+16175550142',
  email: 'hello@apexkinetic.com',
  address: {
    line1: '88 Seaport Boulevard, Suite 410',
    city: 'Boston',
    state: 'MA',
    zip: '02210',
  },
  hours: [
    { day: 'Mon – Thu', time: '7:00 AM – 7:00 PM' },
    { day: 'Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const

export const navLinks = [
  { label: 'Team', href: '/#team' },
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Results', href: '/#results' },
  { label: 'FAQ', href: '/#faq' },
] as const

export type Service = {
  id: string
  title: string
  provider: string
  description: string
  price: string
  duration: string
  bodyPart: string
}

export const services: Service[] = [
  {
    id: 'orthopedic-consult',
    title: 'Initial Orthopedic Consultation',
    provider: 'Dr. Marcus Vance, MD',
    description:
      'Comprehensive injury evaluation, diagnostic imaging review, and a custom non surgical recovery plan built around your goals.',
    price: '$250',
    duration: '60 min',
    bodyPart: 'Knee',
  },
  {
    id: 'sports-pt',
    title: 'Sports Physical Therapy Session',
    provider: 'Casey Thompson, PT, DPT',
    description:
      '60 minute 1 on 1 hands on therapy with corrective exercise programming and recovery modalities tailored to your sport.',
    price: '$150',
    duration: '60 min',
    bodyPart: 'Shoulder',
  },
  {
    id: 'hip-performance',
    title: 'Hip Performance & Mobility Session',
    provider: 'Casey Thompson, PT, DPT',
    description:
      'Targeted hip assessment and movement retraining to restore strength, reduce pain, and keep you moving through rotational sports.',
    price: '$155',
    duration: '60 min',
    bodyPart: 'Hip',
  },
  {
    id: 'running-analysis',
    title: 'Biomechanical Running Analysis',
    provider: 'Casey Thompson, PT, DPT',
    description:
      'Full body video gait analysis, pressure mapping, and personalized footwear and technique recommendations to run efficiently.',
    price: '$199',
    duration: '75 min',
    bodyPart: 'Ankle',
  },
  {
    id: 'concussion',
    title: 'Concussion Assessment & Return to Play',
    provider: 'Dr. Marcus Vance, MD',
    description:
      'Neurological screening, baseline comparisons, and a structured, medically supervised return to play progression.',
    price: '$175',
    duration: '45 min',
    bodyPart: 'Spine',
  },
]

export type BlogPost = {
  id: string
  title: string
  description: string
  category: string
  date: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'what-to-expect-in-your-first-visit',
    title: 'What to Expect in Your First Visit',
    description:
      'An easy guide to your first consultation, what we assess, and how we build your personalized plan.',
    category: 'Injury Care',
    date: 'June 12, 2026',
    content: [
      'Your first visit is all about understanding your history, pinpointing the source of pain, and defining the best path back to activity. We use hands-on assessment, movement screening, and targeted questions to build a care plan that fits your goals.',
      'During the appointment, expect a thorough review of your symptoms, a physical exam, and a discussion of how your injury affects your sport, work, or lifestyle. That lets us recommend the safest, most efficient next steps for recovery.',
      'We also review insurance and payment options, so your focus stays on healing and performance instead of paperwork.',
    ],
  },
  {
    id: 'recovery-strategies-for-runners',
    title: 'Recovery Strategies for Runners',
    description:
      'How to recover smarter after hard training and stay ahead of common running injuries.',
    category: 'Performance',
    date: 'May 27, 2026',
    content: [
      'Running volume, intensity, and recovery all need to work together. The right strategy helps your body adapt without adding unnecessary injury risk.',
      'We recommend combining active recovery days, mobility drills, and targeted strength work to support the posterior chain and reduce stress on the knee, hip, and ankle.',
      'Consistency is the most important part of recovery. Small, sustainable adjustments add up faster than one off “quick fixes.”',
    ],
  },
  {
    id: 'managing-sports-concussions',
    title: 'Managing Sports Concussions Safely',
    description:
      'A practical overview of concussion recovery, return to play, and how to stay safe while healing.',
    category: 'Concussion',
    date: 'April 18, 2026',
    content: [
      'Concussion care is not one size fits all. The safest return is guided by symptom resolution, balance testing, and a stepwise reintroduction to sport.',
      'At Apex Kinetic, we prioritize baseline comparison and gradual progression so you rebuild confidence without risking a second injury.',
      'If you suspect a concussion, it’s always better to get evaluated early and avoid pushing through symptoms on your own.',
    ],
  },
]

export type Provider = {
  id: string
  name: string
  credentials: string
  role: string
  bio: string
  image: string
  contactHref?: string
}

export const providers: Provider[] = [
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    credentials: 'MD',
    role: 'Non surgical Orthopedic Care & Concussion Management',
    bio: 'Board certified in sports medicine with over 15 years guiding athletes back to peak performance without the operating room.',
    image: '/images/dr-marcus-vance.png',
    contactHref: '/contact',
  },
  {
    id: 'casey-thompson',
    name: 'Casey Thompson',
    credentials: 'PT, DPT',
    role: 'Sports Physical Therapy & Biomechanical Running Analysis',
    bio: 'Doctor of Physical Therapy specializing in movement mechanics, helping runners and lifters move efficiently and pain free.',
    image: '/images/casey-thompson.png',
  },
]

export const stats = [
  { value: '94%', label: 'Return to Sport Rate', icon: 'ShieldCheck' },
  { value: '4.9', label: 'Rating', icon: 'Star' },
  { value: '1,200+', label: 'Athletes Treated', icon: 'Users' },
] as const

export const testimonials = [
  {
    quote:
      'They pinpointed a stride defect behind my Achilles flare and had me back to a new PR within four weeks. Genuinely game changing.',
    name: 'Sarah T.',
    detail: 'Boston Marathon Competitor',
    rating: 5,
    image: '/images/testimonial-sarah-t.png',
  },
  {
    quote:
      'The concussion protocol was precise and transparent at every step. As a parent, the peace of mind was everything.',
    name: 'David K.',
    detail: 'Parent of Varsity Football Player',
    rating: 5,
    image: '/images/testimonial-david-k.png',
  },
  {
    quote:
      'I was told I needed meniscus surgery. Apex Kinetic got me back to heavy lifting pain free, no operation required.',
    name: 'Marcus L.',
    detail: 'Competitive CrossFitter',
    rating: 4,
    image: '/images/testimonial-marcus-l.png',
  },
] as const

export const faqs = [
  {
    question: 'Do I need a referral to book an appointment?',
    answer:
      'No. Massachusetts is a direct-access state, so you can book an evaluation with our team without a physician referral.',
  },
  {
    question: 'How does Superbill reimbursement work?',
    answer:
      'We operate on transparent flat rate pricing and provide an itemized superbill after each visit, which you can submit to your insurer for out of network reimbursement.',
  },
  {
    question: "I'm not a pro athlete, is this right for me?",
    answer:
      'Absolutely. We treat all activity levels, from weekend warriors and recreational runners to active adults recovering from everyday injuries.',
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer:
      'You can modify or cancel your appointment up to 24 hours in advance with no penalty. We just ask for a heads-up so another athlete can take the slot.',
  },
] as const

export const program = {
  name: 'Apex Performance Program',
  tagline: 'Year-round, membership-based care for serious athletes.',
  description:
    'A structured membership that pairs you with our medical and physical therapy team for ongoing assessments, recovery sessions, and direct provider access, built to keep you performing all season long.',
} as const

export const programReasons = [
  {
    title: 'Priority Access',
    description:
      'Skip the waitlist with same week appointments and direct messaging access to your care team.',
  },
  {
    title: 'Proactive Care',
    description:
      'Quarterly biomechanical screenings catch issues before they sideline you, not after.',
  },
  {
    title: 'Personalized Programming',
    description:
      'Custom recovery and performance plans that adapt to your training cycle and competition calendar.',
  },
  {
    title: 'Member Pricing',
    description:
      'Reduced flat rates on every session, analysis, and follow up for the length of your membership.',
  },
] as const
