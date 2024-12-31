"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const CompanyStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger animation once
    threshold: 0.1, // Trigger when 10% of component is visible
  });

  const stats = [
    {
      value: 70,
      suffix: "K+",
      label: "Years of Experience",
    },
    {
      value: 140,
      suffix: "K+",
      label: "Satisfied Clients",
    },
    {
      value: 98.9,
      suffix: "%",
      label: "Satisfaction Rate",
    },
    {
      value: 900,
      suffix: "M+",
      label: "Candidate Database",
    },
  ];

  return (
    <motion.div
      // className="w-full lg:w-auto bg-red-300"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      // viewport={{ once: true }}
      ref={ref}
      className="grid grid-cols-2 lg:w-[40%] bg-[#E5EBF8] py-6 px-1 rounded-3xl shadow-md gap-5 relative"
    >
      {stats.map((stat, index) => {
        // Extract the part of the suffix that is a letter (e.g., 'K', 'M') and the symbols (e.g., '+', '%')
        const letters = stat.suffix.replace(/[^a-zA-Z]/g, ""); // Extracts "K" or "M"
        const symbols = stat.suffix.replace(/[a-zA-Z\d]/g, ""); // Extracts "+" or "%"

        return (
          <div key={index} className="flex flex-col text-center justify-center items-center" >
            <p className="text-4xl md:text-5xl xl:text-[56px] font-bold text-black flex items-center py-5 lg:py-0">
              {inView ? (
                <div className="">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                  <span className="">{letters}</span>
                  <span className="text-[var(--Blue-Color)]">{symbols}</span>
                </div>
              ) : (
                <>
                  {stat.value}
                  <span className="">{letters}</span>
                  <span className="text-[var(--Blue-Color)]">{symbols}</span>
                </>
              )}
            </p>
            <p className="text-base xl:text-lg text-black font-medium md:mt-2">
              {stat.label}
            </p>
          </div>
        );
      })}

      {/* Vertical divider */}
      <div className="absolute inset-0 flex justify-center py-8">
        <div className="w-[1px] h-full stats-grandient-line"></div>
      </div>

      {/* Horizontal divider */}
      <div className="absolute inset-0 flex items-center px-4">
        <div className="w-full h-[1px] stats-grandient-line"></div>
      </div>
    </motion.div>
  );
};

export default CompanyStats;
