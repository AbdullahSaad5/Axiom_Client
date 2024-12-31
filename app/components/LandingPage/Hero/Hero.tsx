"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scroll from "@/public/Hero/scroll.png"
import Button from "../../ui/Button/Button";
import { motion,  } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <section className="relative min-h-[650px] h-svh flex items-center justify-center overflow-hidden ">
                {/* Particle effect background */}
                <div className="absolute top-0 left-0 w-full h-full ">
                    {/* <video src="/Hero/Cover_Video.mov" loop autoPlay muted className="w-full h-full object-cover"></video> */}
                    <video src="/Hero/Cover_Video.mov" loop autoPlay muted playsInline preload="auto" className="w-full h-full object-cover" ></video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-85"></div>
                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="text-3xl sm:text-5xl md:text-[86px] md:leading-[92px] font-semibold text-white mb-10 ">
                        Revolutionize Your
                        <br />
                        Operations with Axiom
                    </motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                        className="text-[22px] leading-[36px] text-gray-300 max-w-3xl mb-10  mx-auto">Axiom is your strategic partner, delivering tailored tech solutions to boost efficiency, foster innovation, and drive long-term success.</motion.p>

                    <motion.div 
                     initial={{ y: 100, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                     className="">
                        
                        <Button
                            href="/contact"
                            value="Book a Call"
                        // className="mt-5"
                        />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-sm mb-5">Scroll to Explore</p>
                    <Link href="#About">
                        {/* <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730135026/Group_4_1_fpbhf3.png" width={72} height={72} alt="Axiom Logo" className="mx-auto"></Image> */}
                        <Image src={scroll} width={72} height={72} alt="Axiom Logo" className="mx-auto animate-slowBounce"></Image>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Hero;
