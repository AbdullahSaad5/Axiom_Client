
"use client";
import Image from "next/image";
import x from "@/public/Logo/x.png";
import Ring from "@/public/LandingPage/values/Ring.png";
import Mission from "@/public/LandingPage/values/Mission.png";
import Vision from "@/public/LandingPage/values/Vision.png";
import { motion } from "framer-motion";

export default function AxiomValues({ className = "" }) {
    return (
        <section className={`bg-[#EDF1FA] pt-[60px] pb-[80px] lg:pt-[100px] lg:pb-[140px] ${className}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-[var(--Blue-Color)] text-lg font-semibold tracking-wide uppercase text-center mb-4">AXIOM&apos;S VALUES</h2>
                <h3 className="text-3xl sm:text-[44px] sm:leading-[60px] font-semibold text-center mb-4 max-w-4xl mx-auto text-black">Provides Custom Software For Optimized Processes, Innovation, and Growth.</h3>
                <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-lg leading-[30px]">At the heart of our mission lies a dedication to excellence, integrity, and collaboration. By upholding the highest standards in all our endeavors, we foster a culture of trust and innovation. Our relentless pursuit of customer satisfaction drives us to deliver transformative solutions, while our commitment to teamwork ensures seamless collaboration both internally and with our valued clients.</p>

                {/* Card Box */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
                    {/* Left Card */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        // viewport={{ once: true }}
                        className={`group p-9 max-w-[460px] text-white relative overflow-hidden rounded-3xl `}>
                        <div className="absolute inset-0">
                            <Image
                                src={Vision}
                                alt="Vision transformation"
                                fill
                                className="object-cover transition-all duration-500 ease-in-out group-hover:blur-sm rounded-3xl group-hover:scale-105"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10">
                            <h4 className="text-4xl font-bold mt-[89px] translate-y-32 group-hover:translate-y-0 transition  duration-300">Axiom&apos;s Vision</h4>
                            <p className="font-semibold text-[22px] leading-[34px] mt-5   translate-y-32 group-hover:translate-y-0 transition  duration-300">Transforming businesses with digital solutions.</p>
                            <p className="text-[#E7E7E7] text-[18px] leading-[30px] mt-[18px]  translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition  duration-300">To be the foremost innovator, revolutionizing industries with groundbreaking software solutions that drive efficiency, agility, and sustainable growth on a global scale.</p>
                        </div>
                    </motion.div>


                    {/* Center Rotating Arrows + Logo */}
                    <div className="relative w-full max-w-lg mx-auto">
                        <div className="relative mx-auto">
                            <Image src={Ring} width={300} height={300} className="rotate-90 lg:rotate-0 duration-300 mx-auto" alt="" />
                            <Image src={x} width={100} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
                        </div>
                    </div>

                    {/* Right Card bg-gradient*/}

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        // viewport={{ once: true }}
                        className={`group p-9  max-w-[460px] text-white relative overflow-hidden rounded-3xl`}>
                        {/* Background Image and Gradient */}
                        <div className="absolute inset-0">
                            <Image
                                src={Mission}
                                alt="Mission transformation"
                                fill
                                className="object-cover transition-all duration-500 ease-in-out group-hover:blur-sm rounded-3xl group-hover:scale-105"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10 ">
                            {/* Headline */}
                            <h4 className="text-4xl font-bold mt-[89px] translate-y-32 group-hover:translate-y-0 transition duration-300">Axiom&apos;s Mission</h4>

                            {/* Subheading */}
                            <p className="font-semibold text-[22px] leading-[34px] mt-5 translate-y-32 group-hover:translate-y-0 transition duration-300"> Driving digital innovation for thriving businesses </p>

                            {/* Description */}
                            <p className="text-[var(--Gray-Color)] text-[18px] leading-[30px] mt-[18px] translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition  duration-300">
                                To engineer innovative software solutions that redefine industry standards, empower businesses to thrive, and drive sustainable growth in a dynamic digital world.
                            </p>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
