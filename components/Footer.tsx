"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, MailIcon } from "lucide-react";

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: MailIcon,
      url: "mailto:mnikunj2622@gmail.com",
      color: "#EA4335",
      name: "Email",
    },
    {
      icon: Github,
      url: "https://github.com/Nikuunj",
      color: "#333",
      name: "GitHub",
    },
    {
      icon: Twitter,
      url: "https://x.com/nikunj__makwana",
      color: "#1DA1F2",
      name: "Twitter",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/makwana-nikunj/",
      color: "#0077B5",
      name: "LinkedIn",
    },
  ];

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.2;
    if (distance === 2) return 1.1;
    return 1;
  };

  const getTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return -15;
    if (distance === 1) return -9;
    if (distance === 2) return -4;
    return 0;
  };

  return (
    <div className="flex justify-center mt-5 fixed bottom-3 w-full z-50">
      <motion.div
        className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-3 border border-black/10 dark:border-white/10 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-end space-x-2">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/80 dark:bg-white/90 text-white dark:text-black px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/10 dark:border-black/20"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: "none" }}
                >
                  {social.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/80 dark:border-t-white/90"></div>
                </motion.div>

                {/* Icon Container */}
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-12 h-12 sm:w-14 sm:h-14 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-black/10 dark:border-white/20 shadow-lg cursor-pointer overflow-hidden relative"
                  animate={{
                    scale: getScale(index),
                    y: getTranslateY(index),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: social.color }}
                    animate={{
                      opacity: hoveredIndex === index ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent
                      size={20}
                      className="text-black dark:text-white drop-shadow-lg"
                      style={{
                        color:
                          hoveredIndex === index ? social.color : undefined,
                      }}
                    />
                  </div>

                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-white/5 rounded-xl"></div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Dock Indicator */}
        <div className="flex justify-center mt-2 space-x-1">
          {socialLinks.map((_, index) => (
            <motion.div
              key={index}
              className="w-1 h-1 bg-black/40 dark:bg-white/40 rounded-full"
              animate={{
                scale: hoveredIndex === index ? 1.5 : 1,
                backgroundColor:
                  hoveredIndex === index
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
