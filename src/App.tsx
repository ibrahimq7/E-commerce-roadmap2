import { useEffect, useState, useRef } from 'react';
import {
  Globe,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Rocket,
  TrendingUp,
  Target,
  Palette,
  Database,
  Code,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
  Eye,
  Lightbulb,
  FileText,
  Compass,
  Layout,
  Lock,
  Server,
} from 'lucide-react';

const phases = [
  {
    number: 1,
    title: 'Discovery & Strategy',
    purpose: 'Understand the business vision and requirements.',
    activities: [
      { icon: FileText, text: 'Business analysis' },
      { icon: Lightbulb, text: 'Requirement gathering' },
      { icon: Target, text: 'Goal identification' },
      { icon: Sparkles, text: 'Feature planning' },
    ],
    deliverables: ['Requirement document', 'Feature specification', 'Business roadmap'],
    outcome: 'Clear project direction.',
    color: 'from-amber-500 to-yellow-600',
    icon: Compass,
  },
  {
    number: 2,
    title: 'UI/UX Design',
    purpose: 'Design an intuitive shopping experience.',
    activities: [
      { icon: MapPin, text: 'User flow planning' },
      { icon: Layout, text: 'Wireframes' },
      { icon: Palette, text: 'Interface design' },
      { icon: Eye, text: 'Experience optimization' },
    ],
    deliverables: ['Design system', 'User journey', 'Interactive prototypes'],
    outcome: 'Premium customer experience.',
    color: 'from-pink-500 to-rose-600',
    icon: Palette,
  },
  {
    number: 3,
    title: 'Architecture & Database Design',
    purpose: 'Build a strong technical foundation.',
    activities: [
      { icon: Database, text: 'Data modeling' },
      { icon: Layers, text: 'Platform architecture' },
      { icon: Lock, text: 'Security planning' },
      { icon: TrendingUp, text: 'Scalability planning' },
    ],
    deliverables: ['Architecture blueprint', 'Database structure', 'Security framework'],
    outcome: 'Reliable and scalable platform.',
    color: 'from-cyan-500 to-blue-600',
    icon: Database,
  },
  {
    number: 4,
    title: 'Development',
    purpose: 'Transform designs into a working platform.',
    activities: [
      { icon: Code, text: 'Frontend development' },
      { icon: Server, text: 'Backend development' },
      { icon: Layers, text: 'Product management system' },
      { icon: Zap, text: 'Admin dashboard' },
    ],
    deliverables: ['Customer platform', 'Admin system', 'Core functionality'],
    outcome: 'Functional e-commerce ecosystem.',
    color: 'from-emerald-500 to-teal-600',
    icon: Code,
  },
  {
    number: 5,
    title: 'Testing & Quality Assurance',
    purpose: 'Ensure reliability and performance.',
    activities: [
      { icon: CheckCircle, text: 'Functional testing' },
      { icon: TrendingUp, text: 'Performance testing' },
      { icon: Shield, text: 'Security testing' },
      { icon: Layers, text: 'Compatibility testing' },
    ],
    deliverables: ['QA reports', 'Bug fixes', 'Optimized platform'],
    outcome: 'Stable production-ready platform.',
    color: 'from-violet-500 to-purple-600',
    icon: CheckCircle,
  },
  {
    number: 6,
    title: 'Deployment & Launch',
    purpose: 'Prepare the platform for public access.',
    activities: [
      { icon: Server, text: 'Hosting setup' },
      { icon: Lock, text: 'Security configuration' },
      { icon: Rocket, text: 'Production deployment' },
    ],
    deliverables: ['Live website', 'Production environment'],
    outcome: 'Operational e-commerce platform.',
    color: 'from-orange-500 to-red-600',
    icon: Rocket,
  },
  {
    number: 7,
    title: 'Growth & Optimization',
    purpose: 'Support long-term success.',
    activities: [
      { icon: TrendingUp, text: 'Performance improvements' },
      { icon: Sparkles, text: 'Feature enhancements' },
      { icon: Zap, text: 'Business scaling' },
    ],
    deliverables: ['Optimization reports', 'Growth recommendations'],
    outcome: 'Continuous business growth.',
    color: 'from-yellow-500 to-amber-600',
    icon: TrendingUp,
  },
];

const visionSteps = [
  { text: 'Business Vision', highlight: true },
  { text: 'Discovery' },
  { text: 'Design' },
  { text: 'Architecture' },
  { text: 'Development' },
  { text: 'Testing' },
  { text: 'Launch' },
  { text: 'Growth' },
  { text: 'Premium GCC Commerce Platform', highlight: true, final: true },
];

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="particle"
      style={{
        ...style,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
      }}
    />
  );
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`floating-orb ${className}`}
      style={{
        filter: 'blur(80px)',
      }}
    />
  );
}

function GlassCard({
  children,
  className = '',
  large = false,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`${large ? 'glass-card-large' : 'glass-card'} rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}

function PhaseCard({
  phase,
  isLeft,
}: {
  phase: (typeof phases)[0];
  isLeft: boolean;
}) {
  const Icon = phase.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`phase-node ${isLeft ? 'left' : 'right'} relative`}>
      <GlassCard
        className={`p-8 ${isLeft ? 'mr-16' : 'ml-16'} transition-all duration-500 hover:scale-[1.02]`}
      >
        {/* Phase Number Badge */}
        <div
          className={`absolute -top-4 ${isLeft ? 'right-8' : 'left-8'} px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white font-bold text-sm shadow-lg`}
        >
          Phase {phase.number}
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pt-2">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${phase.color} bg-opacity-20`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
        </div>

        {/* Purpose */}
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{phase.purpose}</p>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-4"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'View Details'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Activities */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Activities
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {phase.activities.map((activity, idx) => {
                const ActivityIcon = activity.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <ActivityIcon className="w-4 h-4 text-cyan-400" />
                    <span>{activity.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Deliverables
            </h4>
            <div className="flex flex-wrap gap-2">
              {phase.deliverables.map((deliverable, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm"
                >
                  {deliverable}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-400">Outcome</span>
            </div>
            <p className="text-white font-medium mt-1">{phase.outcome}</p>
          </div>
        </div>
      </GlassCard>

      {/* Connecting Line to Center */}
      <div
        className={`connecting-line ${isLeft ? 'right' : 'left'}`}
        style={{
          width: '60px',
        }}
      />
    </div>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="bg-animated" />

      {/* Floating Orbs */}
      <FloatingOrb className="fixed top-[10%] left-[10%] w-96 h-96 bg-cyan-500/20" />
      <FloatingOrb className="fixed top-[40%] right-[5%] w-80 h-80 bg-blue-500/20" />
      <FloatingOrb className="fixed bottom-[20%] left-[20%] w-64 h-64 bg-emerald-500/15" />
      <FloatingOrb className="fixed bottom-[10%] right-[30%] w-72 h-72 bg-cyan-400/15" />

      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <Particle key={p.id} style={{ left: p.left }} />
        ))}
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Globe Animation */}
          <div className="globe-container flex justify-center mb-12">
            <div className="relative">
              <div className="globe" />
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-[rotate_15s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 w-3 h-3 rounded-full bg-cyan-400 glow-cyan" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16 w-2 h-2 rounded-full bg-blue-400" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-3 h-3 rounded-full bg-yellow-400" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Building the Future</span>
            <br />
            <span className="text-white">of GCC Commerce</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up">
            Premium Enterprise E-Commerce Platform Vision
          </p>

          {/* Countries */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up">
            {['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Bahrain'].map((country) => (
              <div key={country} className="country-badge">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{country}</span>
              </div>
            ))}
          </div>

          {/* Floating Glass Elements Preview */}
          <div className="flex justify-center gap-6 mb-20">
            <div className="w-20 h-20 glass rounded-2xl animate-float flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="w-24 h-24 glass rounded-3xl animate-float-delayed flex items-center justify-center">
              <Layers className="w-10 h-10 text-yellow-400" />
            </div>
            <div className="w-20 h-20 glass rounded-2xl animate-float-slow flex items-center justify-center">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Project Overview</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Cards */}
            {[
              {
                title: '2000+ Products',
                subtitle: 'Structured Product Catalog',
                icon: Layers,
                gradient: 'from-cyan-500/20 to-blue-500/20',
              },
              {
                title: 'Multi-Country Expansion',
                subtitle: 'Saudi Arabia, UAE, Qatar, Oman, Bahrain',
                icon: Globe,
                gradient: 'from-emerald-500/20 to-teal-500/20',
              },
              {
                title: 'Enterprise Commerce',
                subtitle: 'Modern Shopping Experience',
                icon: Zap,
                gradient: 'from-amber-500/20 to-yellow-500/20',
              },
              {
                title: 'Future Ready',
                subtitle: 'Designed for Growth',
                icon: Rocket,
                gradient: 'from-violet-500/20 to-purple-500/20',
              },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <GlassCard key={idx} large className={`p-8 ${card.gradient}`}>
                  <CardIcon className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.subtitle}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section - Main Hero */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            <span className="gradient-text">Project Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-24 max-w-2xl mx-auto">
            A comprehensive journey from vision to reality
          </p>

          {/* Roadmap Container */}
          <div className="relative">
            {/* Center Path */}
            <div className="roadmap-path hidden lg:block" />

            {/* Phases */}
            <div className="space-y-16 relative z-10">
              {phases.map((phase, idx) => (
                <div
                  key={phase.number}
                  className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="w-full lg:w-[calc(50%-80px)]">
                    <PhaseCard phase={phase} isLeft={idx % 2 === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Flow Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text-gold">End Vision</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Vision Flow */}
            <div className="flex flex-col items-center">
              {visionSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`px-6 py-4 rounded-xl transition-all duration-300 ${
                      step.highlight
                        ? step.final
                          ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30'
                          : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        step.highlight
                          ? step.final
                            ? 'gradient-text-gold text-xl'
                            : 'gradient-text-cyan text-lg'
                          : 'text-gray-300 text-base'
                      }`}
                    >
                      {step.text}
                    </span>
                  </div>
                  {idx < visionSteps.length - 1 && (
                    <div className="w-1 h-12 vision-flow-line my-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Destination Card */}
            <div className="destination-card glass rounded-3xl p-12 max-w-lg">
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center glow-cyan">
                  <Star className="w-10 h-10 text-dark-900" />
                </div>
                <h3 className="text-3xl font-bold gradient-text-gold mb-4">
                  Premium GCC Commerce Platform
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A world-class enterprise e-commerce platform serving the Gulf Cooperation Council region with excellence, innovation, and premium customer experiences.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {['Scalable', 'Secure', 'Modern', 'Premium'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Building Tomorrow's Commerce Today
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Designed with precision, built for scale, crafted for the premium market of the Gulf region.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            {['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Bahrain'].map((country) => (
              <span key={country} className="text-gray-500 text-sm">
                {country}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
