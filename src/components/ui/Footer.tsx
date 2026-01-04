import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: <FaLinkedinIn className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/', icon: <FaGithub className="w-5 h-5" /> },
  { name: 'Gmail', href: 'mailto:@gmail.com', icon: <SiGmail className="w-5 h-5" /> },
  { name: 'Google Scholar', href: 'https://scholar.google.co.uk', icon: <FaGoogleScholar className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: <FaInstagram className="w-5 h-5" /> },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
      aria-label="Site Footer"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1.5 md:gap-2">
          <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">SBDKHL</span>
          <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400">&copy; {__LAST_UPDATE_YEAR__} | All rights reserved</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 md:gap-5 py-2 md:py-0 -mr-2.5 md:-mr-3">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={
                `p-2.5 md:p-3 rounded-lg transition duration-300 hover:scale-110 text-gray-500 dark:text-gray-400 min-h-[40px] min-w-[40px] md:min-h-[48px] md:min-w-[48px] flex items-center justify-center focus-override ` +
                (link.name === 'GitHub' ? 'hover:text-gray-900 dark:hover:text-white ' : '') +
                (link.name === 'LinkedIn' ? 'hover:text-blue-600 dark:hover:text-blue-400 ' : '') +
                (link.name === 'Instagram' ? 'hover:text-pink-500 dark:hover:text-pink-400 ' : '') +
                (link.name === 'Google Scholar' ? 'hover:text-blue-600 dark:hover:text-blue-500 ' : '') +
                (link.name === 'Gmail' ? 'hover:text-red-500 dark:hover:text-red-400 ' : '')
              }
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
