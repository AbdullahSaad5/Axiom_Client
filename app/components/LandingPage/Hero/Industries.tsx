"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const industries = [
    { name: "Healthcare", icon: "/LandingPage/industries/Healthcare.png" },
    { name: "Finance", icon: "/LandingPage/industries/Finance.png" },
    { name: "Restaurant", icon: "/LandingPage/industries/Restaurant.png" },
    { name: "Ecommerce", icon: "/LandingPage/industries/Ecommerce.png" },
    { name: "Logistic", icon: "/LandingPage/industries/Logistic.png" },
    { name: "Game & Sport", icon: "/LandingPage/industries/Game.png" },
    { name: "Travel", icon: "/LandingPage/industries/Travel.png" },
    { name: "Real Estate", icon: "/LandingPage/industries/Estate.png" },
    { name: "Education", icon: "/LandingPage/industries/Education.png" },
    { name: "Social Networking", icon: "/LandingPage/industries/Social.png" },
    { name: "Agriculture", icon: "/LandingPage/industries/Agriculture.png" },
    { name: "Entertainment", icon: "/LandingPage/industries/Entertainment.png" },

];

export default function Industries() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth;
            const animationDuration = scrollWidth / 100; // Adjust speed here

            scrollElement.style.setProperty("--scroll-width", `${scrollWidth}px`);
            scrollElement.style.setProperty("--animation-duration", `${animationDuration}s`);
        }
    }, []);

    return (
        <div className="bg-[#EDF1FA] ">
            <div className="custom-container mx-auto px-4 py-16 md:py-24 border-b border-[#BDCEF2] space-y-10">
                <div className="text-2xl font-semibold text-center text-[var(--Dark-Gray-Color)] ">We are Partnering with Businesses Across Diverse Sectors</div>
                <div className="relative overflow-hidden  flex items-center  ">
                    {/* Fade Effect on both Sides */}
                    <div className="absolute top-0 left-0 h-full w-16  bg-gradient-to-r from-[#EDF1FA] to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#EDF1FA] to-transparent pointer-events-none z-10"></div>

                    <div
                        ref={scrollRef}
                        className="whitespace-nowrap  animate-scroll space-x-8 "
                        style={{
                            animationDuration: "var(--animation-duration)",
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                        }}>
                        {[...industries, ...industries].map((industry, index) => (
                            <span key={index} className="inline-flex items-center">
                                {/* <span className="text-blue-400 text-3xl mx-2">{industry.icon}</span> */}
                                <Image src={industry.icon} width={36} height={36} alt={industry.name} className="mx-4 w-[36px] h-[36px] object-contain" />
                                <span className="text-[var(--Dark-Gray-Color])] text-xl font-semibold">{industry.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


