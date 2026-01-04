import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { photos } from '../../../data/photos';

const Photography = () => {
  const prefersReducedMotion = useReducedMotion();

  // Decorative background elements
  const bgElements = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        left: `${15 + i * 12}%`,
        top: `${25 + i * 6}%`,
        size: 6 + (i % 3) * 2,
        opacity: 0.03 + (i % 4) * 0.015,
        duration: 8 + i * 0.5,
        delay: i * 0.7,
      })),
    []
  );

  return (
    <section id="photography" className="relative py-12 sm:py-14 lg:py-16 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft mesh glows */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              'radial-gradient(900px 500px at 80% -10%, rgba(168,85,247,0.04), transparent 65%), radial-gradient(800px 500px at 10% 110%, rgba(99,102,241,0.03), transparent 70%)',
          }}
        />
        {/* Purple orbs */}
        <motion.div
          className="absolute -top-24 right-1/4 w-[22rem] h-[22rem] rounded-full blur-3xl bg-gradient-to-tr from-purple-500/6 via-violet-500/4 to-pink-500/4 dark:from-purple-500/10 dark:via-violet-500/8 dark:to-pink-500/8"
          animate={
            prefersReducedMotion ? {} : { y: [0, 18, 0], x: [0, -22, 0], scale: [1, 1.05, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/5 w-[20rem] h-[20rem] rounded-full blur-3xl bg-gradient-to-tl from-indigo-400/4 via-purple-500/3 to-violet-600/3 dark:from-indigo-400/8 dark:via-purple-500/6 dark:to-violet-600/6"
          animate={
            prefersReducedMotion ? {} : { y: [0, -15, 0], x: [0, 18, 0], scale: [1, 1.04, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Floating elements */}
        {bgElements.map((el, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-purple-400/20 dark:bg-violet-300/30"
            style={{
              left: el.left,
              top: el.top,
              width: el.size,
              height: el.size,
              filter: 'blur(1px)',
              opacity: el.opacity,
            }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={
              prefersReducedMotion ? {} : { duration: el.duration, delay: el.delay, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="uppercase tracking-[0.2em] text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 inline-flex items-center gap-2">
              Photography
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Event Photos
            </h2>
          </motion.div>
        </div>

        {/* Photo Grid */}
  <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group"
            >
              <a
                href={photo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-purple-500/[0.08] dark:hover:shadow-violet-500/[0.05] transition-all duration-500
                           hover:border-purple-300/50 dark:hover:border-violet-400/20 hover:-translate-y-1 cursor-pointer min-h-[180px] focus-override"
                aria-label={`View ${photo.location} photography on Instagram`}
              >
                {/* Image */}
                <div className="relative aspect-[5/6] overflow-hidden min-h-[180px]">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Permanent Location indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-900/90 backdrop-blur-sm rounded-full">
                      <MapPin className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-slate-300" />
                      <span className="text-[9px] sm:text-xs font-medium text-slate-300">
                        {photo.location}
                      </span>
                    </div>
                  </div>

                  {/* Instagram button on hover */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-black/20 rounded-full backdrop-blur-md">
                      <FaInstagram className="w-4 sm:w-6 h-4 sm:h-6 text-pink-500" />
                    </div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.08] dark:ring-white/[0.08] rounded-3xl" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold rounded-2xl border border-blue-200/80 dark:border-white/[0.08] bg-blue-50/60 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/70 dark:hover:border-sky-400/20 hover:-translate-y-1 group min-h-[48px] sm:min-h-[56px] focus-override"
              aria-label="Follow on Instagram for more photography"
            >
              <div className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6">
                <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5 text-pink-500" />
              </div>
              <span>Follow for More</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Photography;


