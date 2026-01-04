import { motion } from 'framer-motion';
import { MdOutlineWork } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

interface ExperienceProps {
  isDark?: boolean;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  description: string[];
  technologies: string[]; // kept in data shape, not rendered
  current: boolean;
  companyUrl?: string; // Make company URL optional
}

const Experience = ({ isDark = false }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "u1c77",
      position: "u1p77",
      duration: "u1d77",
      location: "u1l77",
      type: "u1t77",
      current: true,
      companyUrl: "https://www.linkedin.com/",
      description: [
        "u1da77",
        "u1db77",
        "u1dc77",
        "u1dd77"
      ],
      technologies: ["TypeScript","Next.js","Sanity CMS","Contentful CMS","Tailwind CSS","Figma","Turborepo","Vercel AI SDK","Agile","Teamwork","Research","Problem-solving"]
    },
    {
      id: 2,
      company: "u277",
      position: "u2p77",
      duration: "u2d77",
      location: "u2l77",
      type: "u2t77",
      current: true,
      companyUrl: "https://www.linkedin.com/",
      description: [
        "u2da",
        "u2db",
        "Iu2dc",
        "u2dd"
      ],
      technologies: ["Python","Competitive Programming","Data Structures","Algorithms","AI Training","Machine Learning","Financial Analysis","Problem-solving"]
    },
    {
      id: 3,
      company: "u377",
      position: "u3p77",
      duration: "u3d77",
      location: "u3l77",
      type: "u3t77",
      current: false,
      companyUrl: "https://www.linkedin.com/",
      description: [
        "u3da77",
        "u3db77",
        "u3dc77",
        "u3dd77"
      ],
      technologies: ["Selenium","Jira","Bitbucket","Kotlin","MongoDB","Docker","Test Automation","Quality Assurance"]
    },
    {
      id: 4,
      company: "u477",
      position: "u4p77",
      duration: "u4d77",
      location: "u4l77",
      type: "u4t77",
      current: false,
      companyUrl: "https://www.linkedin.com/",
      description: [
        "u4da77",
        "u4db77",
        "u4dc77",
        "u4dd77"
      ],
      technologies: ["Front-End Development","Web Design","WordPress","SEO","Digital Marketing","UI/UX Design"]
    }
  ];;

  return (
    <section id="experience" className="py-10 sm:py-12 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
              l77
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              u77
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div
            className={`absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block ${
              isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
            }`}
          />

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className={`absolute left-2 top-0 bottom-0 w-1 lg:hidden ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="lg:hidden relative pl-8">
                  {/* Mobile Timeline Dot */}
                    <motion.div
                      className="absolute left-[0.375rem] top-9 w-2 h-2 bg-blue-500 rounded-full z-10 shadow-lg -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    />
                  
                  {/* Mobile Content */}
                  <div className="space-y-2">
                    {/* Duration */}
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.duration}
                    </div>
                    
                    {/* Company Name */}
                    <h3 className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    
                    {/* Location and Type */}
                    <div className="flex flex-col gap-1">
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <h4 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {exp.position}
                    </h4>
                    
                    {/* Description */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-2 mt-3 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Layout - Keep existing desktop layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-start gap-8">
                  {/* Left Side - Date and Company Info */}
                  <div className="lg:w-96 lg:text-right lg:pr-8 flex-shrink-0">
                    <div
                      className={`text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {exp.duration}
                    </div>
                                        <h3
                      className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <div
                      className={`flex flex-col lg:items-end gap-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 lg:justify-end">
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className="absolute lg:left-[25rem] top-2.5 w-3 h-3 bg-blue-500 rounded-full z-10 shadow-lg hidden lg:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - Job Details */}
                  <div className="flex-1 lg:pl-8">
                    <div className="mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mb-2">
                        <h4
                            className={`text-xl font-bold ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}
                        >
                          {exp.position}
                        </h4>
                      </div>
                    </div>

                    {/* Description - bullet list */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-3 mb-0 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm lg:text-base`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
