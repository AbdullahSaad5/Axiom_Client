import Image from "next/image";
import Link from "next/link";
import JobCareer from "./JobCareers";
import Competitive from "@/public/careers/Competitive Base Salary.svg";
import Flexible from "@/public/careers/Flexible Working Hours.svg";
import Remote from "@/public/careers/Remote Work.svg";
import Training from "@/public/careers/Trainings & Certifications.svg";
import Health from "@/public/careers/Health.svg";
import Loyalty from "@/public/careers/Loyalty Rewards.svg";
import careers from "@/public/careers/careers.png";
import Cover from "@/app/components/ui/Cover";
export default function Page() {
    const benefits = [
        {
            title: "Competitive Base Salary",
            description: "We understand that great work deserves great rewards. That's why we offer a highly competitive salary package that reflects your skills.",
            icon: Competitive,
        },
        {
            title: "Flexible Working Hours",
            description: "With flexible working hours, you can manage your professional and personal responsibilities with ease.",
            icon: Flexible,
        },
        {
            title: "Remote Work",
            description: "Wherever you are, you're part of the team. We offer remote work options that allow you to work from the location that inspires you.",
            icon: Remote,
        },
        {
            title: "Trainings & Certifications",
            description: "Technology and innovation never stand still, and neither do we. we're always committed to your professional development.",
            icon: Training,
        },
        {
            title: "Health Insurance",
            description: "Your health and wellness are essential to us. Our comprehensive health insurance plans provide coverage for you and your family.",
            icon: Health,
        },
        {
            title: "Loyalty Rewards",
            description: "We offer loyalty rewards that reflect our appreciation for your commitment to Axiom and your ongoing impact on our success.",
            icon: Loyalty,
        },
    ];
    return (
        <>
            {/* Hero Section */}
            <Cover
                coverImage="/about/cover.png"
                title="Careers" 
                subtitle="Advance Your Career and grow Alongside the Best Talent"
                description="We&apos;re committed to helping you expand your skills, achieve your goals, and unlock your full potential."
            />

            {/* Starting Content */}
            <div className=" text-center mt-[60px] xl:mt-[100px]">
                <h3 className="text-4xl xl:text-6xl text-[#1E1E1E] ">Join a Team Who Loves What They Do</h3>
                <p className="Text-[#454545] text-lg mt-[20px] mb-[50px] max-w-4xl mx-auto px-4">At Axiom, passion fuels our work. We&apos;re a team of thinkers creators and innovators who love what we do—and it shows. Here, you&apos;ll find a collaborative environment where creativity thrives, diverse perspectives are valued, and enthusiasm drives us forward.</p>
                <Link href="/" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-5 px-6 rounded-md hover:bg-[#011633] transition-colors duration-300">
                    Explore Opportunities
                </Link>
            </div>

            {/* Pictures */}
            <div className="mt-[60px] lg:mt-[120px] ">
                {/* <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730967494/Frame_34714_1_vopxqv.png" alt="" width={2400} height={1200} className="mx-auto" ></Image> */}
                <Image src={careers} alt="" width={2400} height={1200} className="mx-auto" ></Image>
            </div>
            {/* Offering */}
            <section className="py-16 px-4">
                <div className="custom-container mx-auto">
                    <h2 className="text-4xl xl:text-[44px] font-semibold text-center mb-12">Axiom: A Great Place to Grow</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white rounded-[20px] border border-[#E7EAF2] hover:shadow-2xl duration-200 transition-shadow">
                                <div className="flex gap-4">

                                    <div className="flex-shrink-0"><Image src={benefit.icon} alt={benefit.title} className=""></Image></div>
                                    <div>
                                        <h3 className="text-2xl text-[#1C2539] font-semibold mb-5">{benefit.title}</h3>
                                        <p className="text-[#304874] text-lg">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Careeers */}
            <JobCareer />
        </>
    );
}
