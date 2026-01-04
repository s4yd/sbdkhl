import { TbLocationFilled } from "react-icons/tb";
import { motion } from 'framer-motion';

interface VolunteerProps {
  isDark?: boolean;
}

interface VolunteerExperience {
  id: number;
  organization: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  type: 'Leadership' | 'Education' | 'Social Impact';
}

const Volunteer = ({ isDark = false }: VolunteerProps) => {
  const experiences: VolunteerExperience[] = [
    {
      id: 1,
      organization: "m177",
      position: "m1p77",
      duration: "m1d77",
      location: "m1l77",
      type: "Leadership",
      description: "madd77"
    },
    {
      id: 2,
      organization: "m277",
      position: "m2p77",
      duration: "m2d77",
      location: "m2l77",
      type: "m2t77",
      description: "m2dd77"
    },
    {
      id: 3,
      organization: "m377",
      position: "m3p77",
      duration: "m3d77",
      location: "m3l77",
      type: "m3t77",
      description: "m3dd77"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return isDark ? 'from-purple-400 to-indigo-500' : 'from-purple-500 to-indigo-600';
      case 'Education':
        return isDark ? 'from-blue-400 to-cyan-500' : 'from-blue-500 to-cyan-600';
      case 'Social Impact':
        return isDark ? 'from-green-400 to-teal-500' : 'from-green-500 to-teal-600';
      default:
        return isDark ? 'from-gray-400 to-gray-500' : 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case 'Leadership':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v4h2v2H2v-2h2zm4.5-3c1.38 0 2.5-1.12 2.5-2.5S9.88 10 8.5 10 6 11.12 6 12.5 7.12 15 8.5 15zm-1-1.5c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm10.5 0c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zm-2-7c-1.38 0-2.5 1.12-2.5 2.5S15.12 10 16.5 10 19 8.88 19 7.5 17.88 6 16.5 6z"/>
          </svg>
        );
      case 'Education':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        );
      case 'Social Impact':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
    }
  };

  return (
    <section 
      id="volunteer" 
          className="py-10 sm:py-12 lg:py-20 transition-colors duration-300"
    >
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
              n77
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              m77
            </h2>
            
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block ${
            isDark ? 'bg-orange-500/30' : 'bg-orange-500/20'
          }`}></div>

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className={`absolute left-2 top-0 bottom-0 w-1 lg:hidden ${
            isDark ? 'bg-orange-500/30' : 'bg-orange-500/20'
          }`}></div>

          {/* Volunteer Items */}
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
                    className="absolute left-[0.375rem] top-9 w-2 h-2 bg-orange-500 rounded-full z-10 shadow-lg -translate-x-1/2"
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
                    
                    {/* Organization Name */}
                    <h3 className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.organization}
                    </h3>
                    
                    {/* Location */}
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    
                    {/* Position */}
                    <h4 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                      {exp.position}
                    </h4>
                    
                    {/* Description */}
                    <p className={`text-sm leading-relaxed mt-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Keep existing desktop layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-center gap-4 lg:gap-8">
                  {/* Left Side Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:text-left lg:pl-12'}`}>
                    <div className={`text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.duration}
                    </div>
                    <h4 className={`text-lg lg:text-xl font-bold mb-3 ${
                        isDark ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                      {exp.position}
                    </h4>
                    <h3 className={`text-lg lg:text-xl font-semibold mb-1 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {exp.organization}
                    </h3>
                    <div className={`flex items-center gap-2 mb-4 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className={`absolute left-[calc(50%-6px)] -translate-y-2 ${index === 0 ? 'top-20' : 'top-16'} w-3 h-3 bg-orange-500 rounded-full z-10 shadow-lg hidden lg:block`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                  </motion.div>

                  {/* Right Side - Impact Badge */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'} flex ${
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  } items-center`}>
                    <div className={`px-5 py-4 rounded-2xl ${
                      isDark 
                        ? 'bg-gray-800/50 border border-gray-700 text-gray-200' 
                        : 'bg-white border border-gray-200 text-gray-700 shadow-lg'
                    } hover:shadow-xl transition-all duration-300`}>
                      {/* 2 Column Layout */}
                      <div className="flex items-center gap-3">
                        {/* First Column - Icon */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${getTypeColor(exp.type)} text-white`}>
                          {getTypeIcon(exp.type)}
                        </div>
                        
                        {/* Second Column - Impact Description */}
                        <div className="flex-1">
                          {/* Row 1 - Label */}
                          <div className={`text-xs font-medium ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          } mb-1`}>
                            w77
                          </div>
                          {/* Row 2 - Description */}
                          <p className={`text-sm leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Volunteer;
