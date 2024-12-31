
import axios from "axios";
import { backendUrl } from "../../constants/constants";
import { getLink } from "@/app/services/getLink";
import LearnMore from "../ui/Learn More/LearnMore";


interface Service {
    title: string;
    shortDescription: string;
    description: string;
    homeImage: string;
    coverImage: string;
    link?: string;
}
export default async function Services() {
    let services: Service[] | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/service`, {
            headers: {
                "Cache-Control": "public, max-age=60", // This sets a 5-minute cache time
            },
        });
        if (response.data.data) {
            services = response.data.data;
        } else {
            console.error("Failed to fetch Services data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching Services Data:", error);
    }

    if (!services) {
        return <div className="text-center text-white text-2xl py-10 bg-red-300">Loading...</div>;
    }
    // const services = [
    //     {
    //         title: "Digital Solutions",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Digital Consulting and Strategy: Tailored guidance and planning to maximize your digital presence.",
    //         image: digital,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "DevOps Solutions",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Streamlining development processes, enhancing collaboratio.",
    //         image: DevOps,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Mobile App Development",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Crafting engaging and user-friendly mobile applications seamlessly across platforms.",
    //         image: mobile,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Game Development (AR & VR)",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Immersive and captivating game development leveraging augmented reality and virtual reality technologies.",
    //         image: game,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Web Development",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
    //         image: cms,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Cybersecurity Service",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
    //         image: ssl,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Cloud Services",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Cloud Operations and Migration: Smooth transition and efficient management of cloud.",
    //         image: Cloud,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Staff Augmentation",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Staff Augmentation: Augmenting your workforce with skilled professionals to meet evolving.",
    //         image: avator,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    //     {
    //         title: "Custom Enterprise Solutions",
    //         id: "web",
    //         link: "/services/web-development",
    //         description: "Developing scalable and robust applications tailored to your business needs.",
    //         image: Bussiness,
    //         // icon: <Code className="h-10 w-10 text-primary" />,
    //     },
    // ];

    return (
        <section className="service-gradient">
            <div className="container mx-auto px-4 py-24">
                <h2 className="text-[var(--Blue-Color)] text-sm font-semibold tracking-wide uppercase mb-4 text-center ">SERVICES</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-semibold text-white text-center ">
                    Provides Custom Software For Optimized <br /> Processes, Innovation, and Growth.
                </h3>
                <div className="services">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden p-8 text-white rounded-[20px] shadow-lg min-h-[424px] box-gradient  group
                                ${[2, 5, 8].includes(index) ? "md:col-span-2" : ""} 
                                ${[2, 3, 8].includes(index) ? "lg:col-span-2" : ""} 
                                ${index === 5 ? "lg:col-span-1" : ""}`}>
                                <h4 className="text-2xl font-bold">{service.title}</h4>
                                <p className="text-[var(--Gray-Color)] text-base mt-7 ">{service.shortDescription}</p>

                                {/* Image container with fixed height */}
                                {/* <div className="absolute bottom-6 right-6 max-w-[calc(100%-3rem)] h-[180px] w-[275px]">
                                    <Image src={service.image} alt={service.title} fill={true} className="object-contain w-full h-full" priority={index < 4} quality={80} />
                                </div> */}
                                {/* absolute bottom-6 right-6  */}

                                <div className="absolute bottom-6 right-6 pl-6">
                                    {/* <img src={service.coverImage} alt={service.title} className="w-auto h-auto group-hover:scale-110 duration-300 " /> */}
                                    <img src={service.coverImage} alt={service.title} className="w-auto h-auto group-hover:scale-150 group-hover:translate-x-16 group-hover:translate-y-10 duration-300 " />
                                    {/* <Image src={service.coverImage} alt={service.title} className="absolute object-contain bottom-6 right-6 pl-12 sm:pl-0" /> */}
                                    {/* <Image src={service.coverImage} alt={service.title} className=" "   /> */}
                                    {/* <Image src={service.coverImage} alt={service.title} width={600} height={600} objectFit="contain" /> */}
                                </div>

                                {[2, 3, 8].includes(index) && (
                                    // <Link href={getLink(service.title)} className="absolute bottom-6 flex items-center">
                                    //     Learn more <ChevronRight size={16} className="text-[var(--Blue-Color)]" />
                                    // </Link>
                                    <LearnMore href={getLink(service.title)} value="Learn more" className="absolute bottom-6" borderClassName="bg-[var(--Blue-Color)]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
