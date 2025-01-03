import Image from "next/image";
import Link from "next/link";
import AxiomValues from "../components/LandingPage/Hero/AxiomValues";
import Industries from "../components/LandingPage/Hero/Industries";
import Linkedin from "@/public/socialmedia/Linkedin.svg";
import Team from "@/public/about/Team.png"
import Jobs from "../components/Jobs/Jobs";
import axios from "axios";
import { backendUrl } from "../constants/constants";
import Cover from "@/app/components/ui/Cover";

interface TeamMember {
    teamMemberImage: string;
    teamMemberName: string;
    teamMemberTitle: string;
    teamMemberFacebookLink: string;
    teamMemberTwitterLink: string;
    teamMemberLinkedInLink: string;
    teamMemberEmail: string;
}

export default async function Page() {
    let teamMember: TeamMember[] | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/teamMembers`, {
            headers: {
                "Cache-Control": "public, max-age=10", // 60*5=300 Second This sets a 5-minute cache time
            },
        });
        if (response.data.data) {
            teamMember = response.data.data;
        } else {
            console.error("Failed to fetch team Members data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching Team Members:", error);
    }

    // const Team = [
    //     {
    //         name: "Sal Mahmood",
    //         role: "CEO",
    //         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725495/Sal-Mahmood-1_uusojr.jpg",
    //         linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
    //     },
    //     {
    //         name: "Akmal Ahmed",
    //         role: "COO",
    //         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725496/Akmal-Ahmed_ax3le8.jpg",
    //         linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
    //     },
    //     {
    //         name: "Ammara Chaudhry",
    //         role: "Customer Relationship Manager",
    //         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725499/Ammara-Chaudhry_mu3zzm.jpg",
    //         linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
    //     },
    //     {
    //         name: "Riz Abid",
    //         role: "Talent Acquisition Lead",
    //         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725498/Riz-Abid-1_ockdqo.jpg",
    //         linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
    //     },
    // ];

    return (
        <>
            {/* Hero Section */}
            <Cover coverImage="/about/cover.png" title="About Us" subtitle="Your Partner in Technology and Innovation" description="We are more than just a tech solutions provider we are your strategic partner in innovation." />


            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-10 container mx-auto px-4 py-[60px] xl:py-24">
                <div className="Left ">
                    <h3 className="text-[var(--Blue-Color)] uppercase font-medium ">Our Story</h3>
                    <h4 className="font-semibold text-[44px] text-[#1E1E1E] mt-1">Empowering Business Success</h4>
                    <h5 className="text-[26px] font-semibold text-[#1E1E1E] mt-2 max-w-xl">We aim to give businesses the best tools and resources to tackle unforeseen challenges and succeed in their industry.</h5>
                    <p className="text-[#454545] mt-3 mb-11 max-w-xl">Axiom Consulting launched in 2021 after the founding partners recognized a growing need for more effective management of large dispersed cross-functional teams to drive results for businesses and organizations. With Axiom by your side, you can feel confident in your ability to navigate any obstacle and come out on top.</p>
                    <div className="">
                        <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium  py-3 px-6 rounded-md hover:bg-[#011633] hover:text-white hover:border-red-500 transition-colors duration-300">
                            Work With Us
                        </Link>
                    </div>
                </div>
                <div className="Right w-full flex items-center ">
                    {/* <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730787467/About_Us_dzqwdx.png" alt="storyImage" width={600} height={600} className="mx-auto rounded-3xl border-[3px] border-white  "></Image> */}
                    <Image src={Team} alt="storyImage" width={600} height={600} className="mx-auto rounded-3xl border-[3px] border-white  "></Image>
                    {/* <img className=" object-cover rounded-3xl border-[3px] border-white" src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730787467/About_Us_dzqwdx.png" alt="storyImage" /> */}
                </div>
            </div>

            {/* Values */}
            <AxiomValues className="gray-gradient" />

            {/* industries */}
            <Industries />

            {/* Team */}
            <section className="custom-container py-24">
                <h2 className="text-center text-[44px] font-semibold text-[#1E1E1E]">Meet Our Team</h2>
                <p className="text-center text-lg">Alone we can do so little, together we can do so much.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px] mb-16">
                    {teamMember ? (
                        teamMember.map((member, index) => (
                            <div key={index} className="space-y-[30px]">
                                <div className="relative h-[300px] md:h-[350px] lg:[400px] xl:h-[432px]">
                                    {/* <img src={member.image} alt={member.name} className="rounded-3xl" /> */}
                                    <Image src={member.teamMemberImage} alt={member.teamMemberName} objectFit="cover" layout="fill" className="rounded-3xl " />
                                    <Link href={member.teamMemberLinkedInLink.includes("https://") ? member.teamMemberLinkedInLink : `https://${member.teamMemberLinkedInLink}`} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4">
                                        <Image src={Linkedin} alt="Right Arrow" className="" />
                                    </Link>

                                    {/* <Linkedin className="w-6 h-6 text-[#007EBB] mx-auto mt-2" /> */}
                                </div>
                                <div className="space-y-2 overflow-hidden">
                                    <h3 className="text-[#1E1E1E] font-semibold text-[26px]">{member.teamMemberName}</h3>
                                    <p className="text-[#007EBB] text-lg">{member.teamMemberTitle}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="">No Team Member Found!</p>
                    )}
                </div>
                <Jobs />
            </section>
        </>
    );
}
