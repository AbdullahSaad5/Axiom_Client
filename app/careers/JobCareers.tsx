import { MapPin, Clock } from "lucide-react";
import RightArrow from "@/public/RightArrow.svg";
import Link from "next/link";
import Image from "next/image";

interface JobListing {
    title: string;
    location: string;
    type: string;
    applyLink: string;
}

const jobListings: JobListing[] = [
    {
        title: "Data Engineer",
        location: "Houston, New York",
        type: "Full-Time",
        applyLink: "/",
    },
    {
        title: "Business Analyst",
        location: "Houston, New York",
        type: "Full-Time",
        applyLink: "/",
    },
];
const JobCareer = () => {
    return (
        <>
            <section className="py-12 bg-[#EDF3FF] rounded-3xl mx-auto container">
                <div className="relative">
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727057/Vector_2_kn8ozn.png" alt="" className="absolute left-0" />
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727056/Vector_3_tepnz4.png" alt="" className="absolute right-0" />
                </div>
                <h3 className="text-[44px] font-semibold text-[#000915] text-center">Current Openings</h3>
                <p className="text-lg text-[#000915] text-center max-w-[946px] mx-auto mt-3">Explore our open positions and find the role that&apos;s right for you. Each opportunity at Axiom is a chance to make an impact and grow your career.</p>
                <div className=" lg:px-[124px] mt-14 divide-y-[1px] border-2">
                    {jobListings.map((job, index) => (
                        <div key={index} className=" hover:bg-white transition-colors duration-100 px-6 py-8 ">
                            {/* grid grid-cols-1 lg:grid-cols-3 */}
                            <div className="flex justify-between gap-6 lg:gap-8 flex-wrap">
                                {/* Job Title */}
                                <h3 className="text-2xl font-semibold text-[#000915] order-1">{job.title}</h3>

                                {/* Location and Job Type */}
                                <div className="order-3 flex flex-row items-center gap-4 lg:gap-8 mx-auto lg:mx-0 text-[#000915]">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#000915]" />
                                        <span className="text-lg font-semibold">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[#000915]" />
                                        <span className="text-lg font-semibold">{job.type}</span>
                                    </div>
                                </div>

                                {/* Apply Now Button */}
                                <Link href={job.applyLink} className="order-2 md:order-3 flex items-center gap-1 text-[var(--Blue-Color)] font-semibold text-lg underline underline-offset-4 hover:text-blue-600 transition-colors justify-self-end">
                                    Apply Now
                                    <Image src={RightArrow} alt="Right Arrow" className="w-4 h-4"></Image>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-[60px] text-center bg-gradient lg:mx-[124px] rounded-3xl space-y-5 pt-[75px] pb-[95px] px-4 md:px-0">
                    <h3 className="text-white text-4xl font-semibold">Can&apos;t see a position that interests you?</h3>
                    <p className="text-lg text-white max-w-3xl mx-auto">Didn&apos;t see the right opening for you? Send your resume and cover letter to <span className="font-bold underline underline-offset-2"> careers@axiom.com</span> and tell us what you&apos;re looking for.</p>
                </div>
            </section>
        </>
    );
};

export default JobCareer;