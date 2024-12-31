import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/LandingPage/Hero/Hero"));
const About = dynamic(() => import("../components/LandingPage/About"));
const Services = dynamic(() => import("../components/Services/Services"));
const Industries = dynamic(() => import("../components/LandingPage/Hero/Industries"));
const AxiomValues = dynamic(() => import("../components/LandingPage/Hero/AxiomValues"));
const AxiomCTASection = dynamic(() => import("../components/LandingPage/Hero/CTASection"));
const FutureContact = dynamic(() => import("../components/LandingPage/Hero/FutureContact"));

const LandingPage = () => {
    return (
        <>
            
            <Hero />
            <About />
            <Services />
            <Industries />
            <AxiomValues />
            <AxiomCTASection />
            <FutureContact />
           
        </>
    );
};

export default LandingPage;
