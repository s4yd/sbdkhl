import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2 } from 'lucide-react';
import { projects, categories, categoryMeta } from '../../../data/projects';

interface ProjectsProps {
  initialCategory?: string | null;
}

const Projects = ({ initialCategory }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState<'all' | string>(initialCategory && ['all','development','app','automation'].includes(initialCategory) ? initialCategory : 'all');
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    if (sessionStorage.getItem('projectsLoaded') === 'true') {
      setProjectsLoaded(true);
      setVisibleCount(projects.length);
    }
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!projectsLoaded) {
      setVisibleCount(6);
    } else {
      setVisibleCount(projects.length);
    }
  }, [activeCategory, projectsLoaded]);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="relative pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-12 lg:pb-8 overflow-hidden bg-white dark:bg-gray-900">
      {/* Simplified background - no grid pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none dark:block hidden">
        {/* Soft gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.08), transparent 50%), radial-gradient(circle at 70% 80%, rgba(99,102,241,0.06), transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-10">
          <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
            c99
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white text-center">
            a99
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-6 sm:mb-7 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative inline-flex items-center gap-0.5 sm:gap-1 rounded-full p-0.5 sm:p-1 border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
          >
            {(['all', ...categories.map((c) => c.key)] as const).map((key) => {
              const isActive = activeCategory === key;
              const label = key === 'all' ? 'All' : categories.find((c) => c.key === key)?.label;
              const Icon = key === 'all' ? Layers : categories.find((c) => c.key === key)?.icon || Code2;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative z-10 px-3 sm:px-3.5 py-1.5 sm:py-1.5 rounded-full text-sm sm:text-sm font-medium inline-flex items-center gap-1.5 sm:gap-1.5 transition-all focus-override
                    ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300'}`}
                >
                  {isActive ? (
                    mounted ? (
                      <>
                        <motion.span
                          layoutId="activePillBg"
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background: 'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <motion.span
                          layoutId="activePillGlow"
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background: 'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <span
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          style={{
                            background: 'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <span
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          style={{
                            background: 'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    )
                  ) : null}

                  <motion.span
                    initial={false}
                    animate={{ scale: isActive ? 1 : 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="inline-flex items-center gap-1.5 sm:gap-1.5"
                  >
                    <Icon className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                    {label}
                  </motion.span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const meta = categoryMeta[project.category] || { label: project.category, Icon: Layers };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
                className="group"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white dark:bg-slate-950 shadow-sm hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-colors duration-500
                             hover:border-blue-300/50 dark:hover:border-sky-400/20 focus-override"
                >
                  {/* Image Area */}
                    <div 
                    className="relative w-full aspect-[2/1] sm:aspect-[1.82/1] overflow-hidden isolate transform-gpu"
                    style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-[50%_60%] transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Global Blend Gradient */}
                    <div 
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-slate-950 dark:via-slate-950/50 dark:to-transparent z-10 pointer-events-none" 
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 inline-flex items-center gap-1.5 shadow-sm">
                        <meta.Icon className="w-3.5 h-3.5 opacity-80" />
                        {meta.label}
                      </span>
                    </div>
                  </div>

                  {/* Content - Solid Background with Overlap Fix */}
                  <div className="relative z-20 flex-1 bg-white dark:bg-slate-950 p-4 sm:p-5 lg:p-6 flex flex-col justify-between -mt-[1px]">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-4 min-h-[32px] sm:min-h-[40px] line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <span className="text-slate-500 dark:text-slate-400">{tag.icon}</span>
                          {tag.name}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-xl border border-blue-200/70 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 bg-blue-50/80 dark:bg-sky-900/20 backdrop-blur-sm">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        {/* Load More */}
        {filteredProjects.length > visibleCount && !projectsLoaded && (
          <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
            <button
              onClick={() => {
                setVisibleCount(filteredProjects.length);
                setProjectsLoaded(true);
                sessionStorage.setItem('projectsLoaded', 'true');
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 text-white hover:from-blue-600 hover:to-blue-700 dark:hover:from-sky-600 dark:hover:to-sky-700 shadow-lg shadow-blue-500/25 dark:shadow-sky-500/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] focus-override"
            >
              Load more
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-8 sm:mt-9 lg:mt-10 text-center text-slate-600 dark:text-slate-400 text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
