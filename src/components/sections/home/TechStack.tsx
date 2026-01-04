import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom, SiCanva } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { projects } from '../../../data/projects';
import CountUp from '../../ui/CountUp';

interface TechStackProps { isDark?: boolean }
interface TechItem { name: string; icon: string | React.ReactNode; color?: string }

// Moved outside to prevent re-mounting on every render
const TechScroll = ({
  technologies,
  direction = 'left',
  isDark
}: { technologies: TechItem[]; direction?: 'left' | 'right'; isDark?: boolean }) => {
  const dup = useMemo(() => [...technologies, ...technologies], [technologies]);
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-2 sm:gap-3 items-center"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {dup.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className={`flex items-center gap-1.5 sm:gap-2 ${isDark ? 'bg-gray-800/30 border-gray-700/30' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border flex-shrink-0`}
            whileHover={{ scale: 1.05 }}
          >
            {typeof t.icon === 'string' ? (
              <img src={t.icon} alt={t.name} className="w-4 sm:w-5 h-4 sm:h-5" />
            ) : (
              t.icon
            )}
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Icons for cards
const AcademicIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
  </svg>
);

const BriefcaseIcon = () => (
  <MdOutlineWork className="w-5 h-5" />
);


const TechStack = ({ isDark }: TechStackProps) => {
  // Memoize data to ensure referential stability
  const frontendTech: TechItem[] = useMemo(() => [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Next.js', icon: isDark ? 'https://cdn.simpleicons.org/nextdotjs/ffffff' : 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap' },
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  ], [isDark]);

  const backendTech: TechItem[] = useMemo(() => [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Express.js', icon: isDark ? 'https://cdn.simpleicons.org/express/ffffff' : 'https://cdn.simpleicons.org/express' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'Java', icon: <FaJava className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus' },
    { name: 'Linux', icon: <FcLinux className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'GitHub', icon: isDark ? 'https://cdn.simpleicons.org/github/ffffff' : 'https://cdn.simpleicons.org/github' },
    { name: 'Bitbucket', icon: 'https://cdn.simpleicons.org/bitbucket' },
  ], [isDark]);

  const toolsTech: TechItem[] = useMemo(() => [
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify' },
    { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n' },
    { name: 'VS Code', icon: <VscVscode className="w-4 sm:w-5 h-4 sm:h-5 text-[#007ACC]" /> },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="w-4 sm:w-5 h-4 sm:h-5 text-[#31A8FF]" /> },
    { name: 'Lightroom', icon: <SiAdobelightroom className="w-4 sm:w-5 h-4 sm:h-5 text-[#31A8FF]" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF9A00]" /> },
    { name: 'Canva', icon: <SiCanva className="w-4 sm:w-5 h-4 sm:h-5 text-[#00C4CC]" /> },
    { name: 'Notion', icon: isDark ? 'https://cdn.simpleicons.org/notion/ffffff' : 'https://cdn.simpleicons.org/notion' },
    { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira' },
    { name: 'Confluence', icon: <img src="https://cdn.simpleicons.org/confluence" alt="Confluence" style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(99%) saturate(747%) hue-rotate(191deg) brightness(97%) contrast(101%)' }} className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello' },
    { name: 'Overleaf', icon: 'https://cdn.simpleicons.org/overleaf' },
  ], [isDark]);


  // helper colors
  const cardBase = 'rounded-3xl overflow-hidden border border-blue-200/60 dark:border-white/[0.08] bg-blue-50/30 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:-translate-y-1';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-blue-200/50';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-blue-50/40';

  // --- Reusable identical feature card (used for Card 1 and Card 4) ---
  const FeatureCard = ({
    to,
    badge,
    title,
    description,
    icon,
    cta = 'Explore'
  }: {
    to: string;
    badge: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    cta?: string;
  }) => (
    <Link to={to} className="block group focus-override">
      <div className={`${cardBase} p-4 sm:p-5 lg:p-8 h-full flex flex-col justify-center relative min-h-[180px] sm:min-h-[200px]`}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-500">{icon}</span>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{title}</h3>
              </div>
              <p className={`text-xs sm:text-sm mt-2 ${textMuted}`}>{description}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center justify-between min-h-[40px] sm:min-h-[44px]">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {cta}
            </span>
          </div>
          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div>
            <span className={`uppercase tracking-[0.2em] text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </span>
            <h2 className={`mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profile Overview
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-auto lg:h-[600px]">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="B22"
            title=" SBDKHL*22"
            description="D22"
            icon={<AcademicIcon />}
            cta="View Profile"
          />

          {/* Card 2 (Tech Stack) */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                C1 <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">T1</span>
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <TechScroll technologies={frontendTech} direction="right" isDark={isDark} />
              <TechScroll technologies={backendTech} direction="left" isDark={isDark} />
              <TechScroll technologies={toolsTech} direction="right" isDark={isDark} />
            </div>
          </div>

          {/* Card 3: Key Highlights — unchanged */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h3>
            </div>

            {/* Mobile: 3 in first row, 2 in second row. Desktop: original grid. */}
            <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
              {/* Publications */}
              <a href="https://scholar.google.co.uk/k" target="_blank" rel="noopener noreferrer" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={1} duration={1.5} delay={0.2} />
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Paper Published</div>
                </div>
              </a>
              {/* Total Automation */}
              <Link to="/projects?tab=automation" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={projects.filter(p => p.category === 'automation').length} duration={1.5} delay={0.2} />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Automation</div>
                </div>
              </Link>
              {/* Projects */}
              <Link to="/projects" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={projects.length} duration={1.5} delay={0.2} />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Projects</div>
                </div>
              </Link>
              {/* LeetCode */}
              <a href="https://leetcode.com/u/" target="_blank" rel="noopener noreferrer" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={500} duration={0.5} delay={0.2} separator="," />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Solved Leetcode</div>
                </div>
              </a>
              {/* Countries */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={2} duration={1.2} delay={1} />
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">visited Country</div>
                </div>
              </a>
            </div>
            {/* Mobile: only 3 highlights in a single row */}
            <div className="block sm:hidden mb-4">
              <div className="grid grid-cols-3 gap-3">
                {/* First row: 3 items */}
                <a href="https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH" target="_blank" rel="noopener noreferrer" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={1} duration={1.5} delay={0.2} />
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Paper Published</div>
                  </div>
                </a>
                <Link to="/projects?tab=automation" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={projects.filter(p => p.category === 'automation').length} duration={1.5} delay={0.2} />+
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Automation</div>
                  </div>
                </Link>
                <Link to="/projects" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={projects.length} duration={1.5} delay={0.2} />+
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Projects</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="B23"
            title=" T23"
            description="D23"
            icon={<BriefcaseIcon />}
            cta="View Recent Work"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
