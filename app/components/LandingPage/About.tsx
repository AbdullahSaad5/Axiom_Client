"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import image1 from "../../../public/image3.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image1.png";
import bulb from "../../../public/bulb.png";
import CompanyStats from "./CompanyStats";


const people = [
    {
        id: 1,
        name: "Sal Mahmood",
        designation: "",
        image: image1,
    },
    {
        id: 2,
        name: "Ammara Chaudhry",
        designation: "",
        image: image2,
    },
    {
        id: 3,
        name: "Akmal Ahmed",
        designation: "",
        image: image3,
    },
];

const About = () => {
    return (
        <section id="About" className=" flex items-center py-[60px] xl:py-[120px]">
            <div className="container mx-auto px-4 ">
                {/* Top title Desciption */}
                <h2 className="text-xl md:text-3xl lg:text-[44px] lg:leading-[58px] font-medium leading-relaxed text-center">
                    At Axiom, we are a team
                    <br className="block md:hidden" />
                    <span className="inline-flex mr-7 ml-3  items-center">
                        <AnimatedTooltip items={people} />
                    </span>
                    <br className="block md:hidden" />
                    of passionate <br />
                    innovators, dedicated to revolutionizing industries <br />
                    through cutting-edge software solutions
                    <span>
                        <Image src={bulb} alt="lightbulb" width={70} height={70} className="inline" />
                    </span>
                </h2>

                {/* Picture + Stats */}
                {/* flex flex-col lg:flex-row items-center justify-center mt-12 gap-5 */}

                <div className="lg:flex gap-x-5 space-y-5 lg:space-y-0 mt-8 overflow-hidden">
                    {/* Left side: Image */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        // viewport={{ once: true }}
                        className="relative lg:w-[60%] group overflow-hidden rounded-3xl">
                        <img
                            src="/Hero/about.png"
                            alt="Tech Image"
                            className=" w-full h-auto overflow-hidden  transition-transform duration-500 ease-in-out group-hover:scale-110 origin-center"
                        />
                        <div className="absolute bottom-4 left-4 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white/80 border border-gray-300 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg text-black">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold flex items-center gap-2">
                                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                Experience-Driven Solutions
                            </h3>
                            <p className="mt-2 text-xs sm:text-sm lg:text-base">
                                We leverage firsthand, insider experience <br /> for efficient, effective growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side: Stats */}
                    <CompanyStats />
                </div>



            </div>
        </section>
    );
};

export default About;
