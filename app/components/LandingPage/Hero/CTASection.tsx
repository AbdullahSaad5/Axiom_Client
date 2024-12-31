"use client";
import Image from "next/image";
import Link from "next/link";
import pic from "@/public/CTA/representation.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/app/components/ui/Button/Button";

export default function AxiomCTASection() {
    interface Stat {
        name: string;
        percentage: number;
    }

    const stats: Stat[] = [
        { name: "Digital Solutions", percentage: 87 },
        { name: "Web & App Development", percentage: 91 },
        { name: "DevOps Solutions", percentage: 90 },
        { name: "Cyber Security Solutions", percentage: 89 },
        { name: "Business Process Outsourcing", percentage: 95 },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px 0px -200px 0px" });

    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Div */}
                    <div>
                        <h2 className="text-4xl xl:text-[44px] xl:leading-[60px] font-semibold text-gray-900 mb-10 md:pr-5">
                            Discover Axiom: Your Gateway To Custom Software Solutions. Contact Us Today.
                        </h2>
                        <p className="text-lg leading-[30px] text-[#454545] mb-10 md:pr-7">
                            Experience the innovation of Axiom, where ideas become reality. Our custom software solutions are tailored to your needs, driving efficiency and success. Ready to transform your business? Contact us now.
                        </p>
                        <Link href="/contact" className="bg-blue-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                            Book a Call
                        </Link>
                    </div>
                    {/* Right Div */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image src={pic} alt="Axiom software dashboard" layout="fill" objectFit="cover" className=" " />
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white" ref={ref}>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Stats */}
                        <div className="bg-blue-50/50 p-8 rounded-3xl space-y-4">
                            {stats.map((stat, index) => (
                                <div key={stat.name} className="relative">
                                    <div className="h-12 bg-[var(--Gray-Color)] rounded-full">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-blue-500 rounded-r-full"
                                            initial={{ width: 200 }}
                                            animate={isInView ? { width: `${stat.percentage}%` } : { width: 200 }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-between px-4">
                                                <span className="text-gray-800 font-semibold z-10">
                                                    {stat.name}
                                                </span>
                                                <span className="bg-white text-sm font-semibold text-blue-600 rounded-full px-3 py-1 shadow-sm z-10">
                                                    {stat.percentage}%
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="space-y-6 md:px-5">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Axiom: Driving Excellence Across Solutions
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Axiom delivers top-tier services with proven expertise: Digital Solutions (87%), Web & App Development (91%), DevOps (90%), Cyber Security (89%), and Business Process Outsourcing (95%). Simplifying challenges, empowering growth.
                            </p>

                            <Button
                                href="/contact"
                                value="Book a Call"
                                className=" hover:text-white hover:!bg-[var(--Dark-Gray-Color)]"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
