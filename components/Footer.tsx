"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A0A0A] border-t border-neutral-900 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center border-t border-neutral-900 pt-8">
          
          <p className="text-neutral-600 text-xs font-mono">
            © {currentYear} ANKIT_SHARMA
          </p>
          
          <div className="flex gap-6 items-center">
            <motion.a 
              whileHover={{ y: -3, color: "#ffffff" }}
              href="https://github.com/ankitsharma9823" 
              target="_blank" 
              className="text-neutral-500 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -3, color: "#0A66C2" }}
              href="http://linkedin.com/in/ankit-sharma-1aa523386/" 
              target="_blank" 
              className="text-neutral-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;