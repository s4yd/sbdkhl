import { motion } from 'framer-motion';
import { TbLocationFilled } from "react-icons/tb";

interface AcademicProps {
  isDark?: boolean;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade: string;
  field: string;
  achievements?: string[];
}

const Academic = ({ isDark = false }: AcademicProps) => {
  const education: Education[] = [
    {
      id: 1,
      degree: "ad77",
      institution: "ai77",
      duration: "add77",
      location: "al77",
      grade: "ag77",
      field: "af77"
    },
    {
      id: 2,
      degree: "bd77",
      institution: "bi77",
      duration: "bdd77",
      location: "bl77",
      grade: "bg77",
      field: "bf77"
    },
    {
      id: 3,
      degree: "cd77",
      institution: "ci77",
      duration: "cdd77",
      location: "cl77",
      grade: "cg77",
      field: "cf77"
    }
  ];

  return (
    <section
      id="academic"
      className="pt-8 pb-2 sm:py-12 lg:py-20 transition-colors duration-300"
      style={{ marginTop: '0.1rem' }}
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
              K77
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              h77
            </h2>
            
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block ${
            isDark ? 'bg-green-500/30' : 'bg-green-500/20'
          }`}></div>

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className={`absolute left-2 top-0 bottom-0 w-1 lg:hidden ${
            isDark ? 'bg-green-500/30' : 'bg-green-500/20'
          }`}></div>

          {/* Education Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                    className="absolute left-[0.375rem] top-9 w-2 h-2 bg-green-500 rounded-full z-10 shadow-lg -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Mobile Content - Simple Layout */}
                  <div className="space-y-2">
                    
                    {/* Duration */}
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {edu.duration}
                    </div>
                    
                    {/* Degree */}
                    <h4 className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h4>
                    
                    {/* Field Badge */}
                    {edu.field && (
                      <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-1 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {edu.field}
                      </div>
                    )}
                    
                    {/* Institution */}
                    <h3 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {edu.institution}
                    </h3>
                    
                    {/* Location */}
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    
                    {/* Grade with Cap Icon */}
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                      <span className="font-medium">{edu.grade.includes('CGPA') ? 'CGPA' : 'GPA'}:</span>
                      <span className={`font-bold ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        {edu.grade.replace('CGPA: ', '').replace('GPA: ', '')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Keep existing desktop layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-center gap-8">
                  {/* Left Side Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:text-left lg:pl-12'}`}>
                    <div className={`text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {edu.duration}
                    </div>
                    <h4 className={`text-lg lg:text-xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h4>
                    {edu.field && (
                      <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {edu.field}
                      </div>
                    )}
                    <h3 className={`text-lg lg:text-xl font-semibold mb-1 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {edu.institution}
                    </h3>
                    <div className={`flex items-center gap-2 mb-4 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className={`absolute left-[calc(50%-6px)] -translate-y-2 ${index === 0 ? 'top-20' : 'top-16'} w-3 h-3 bg-green-500 rounded-full z-10 shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - CGPA Badge */}
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
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isDark ? 'bg-green-500/20' : 'bg-green-50'
                        }`}>
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                          </svg>
                        </div>
                        
                        {/* Second Column - 2 Rows of Text */}
                        <div className="flex-1">
                          {/* Row 1 - Label */}
                          <div className={`text-xs font-medium ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {edu.grade.includes('CGPA') ? 'CGPA' : 'z77'}
                          </div>
                          {/* Row 2 - Score */}
                          <div className={`text-lg font-bold ${
                            isDark ? 'text-green-500' : 'text-green-700'
                          }`}>
                            {edu.grade.replace('CGPA: ', '').replace('GPA: ', '')}
                          </div>
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

export default Academic;
