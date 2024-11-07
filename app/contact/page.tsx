"use client";

import { useState } from "react";
import { Facebook, Instagram, Linkedin, ChevronDown, Twitter } from "lucide-react";
// import Email from "@/public/socialmedia/email.svg";
// import Phone from "@/public/socialmedia/phone.svg";
// import Location from "@/public/socialmedia/location.svg";
import Image from "next/image";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        help: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <>
            <section className="bg-[#010b1d] text-white pt-48 px-4">
                {/* 1st Section Form + Details */}
                <div className="custom-container mx-auto grid lg:grid-cols-2 gap-x-12 xl:gap-x-[100px]  gap-y-10">
                    {/* Left Column */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-[90px] leading-[100px] font-semibold mb-5">
                            Lets Get in
                            <br />
                            Touch
                        </h2>
                        {/* Contact Details */}
                        <div className="">
                            <p className="text-[#7B8CA3] text-xl font-semibold mb-5">Meanwhile you can contact us at:</p>
                            <div className="space-y-10">
                                <a href="mailto:connect@axiomsolic.com" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                    {/* <Mail className="w-5 h-5" /> */}
                                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730818630/Email_xqv6jt.svg" width={24} height={24} alt="Email Icon"></Image>
                                    connect@axiomsolic.com
                                </a>

                                <a href="tel:+19095598113" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                    {/* <Phone className="w-5 h-5" /> */}
                                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730818630/Phone_gvqxiq.svg" width={24} height={24} alt="Phone Icon"></Image>
                                    +1 (909) 559-8113
                                </a>

                                <div className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300">
                                    {/* <MapPin className="w-5 h-5 flex-shrink-0" /> */}
                                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730818630/Location_dnix0g.svg" width={24} height={24} alt="Location"></Image>
                                    <span>
                                        2372 Morse Ave#968
                                        <br />
                                        Irvine, CA 92614
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className="space-y-4 mt-20">
                            <p className="text-[#7B8CA3] font-semibold text-xl">Follow us on:</p>
                            <div className="flex space-x-4">
                                <a href={"socialMedia.facebook"} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook className="text-gray-400 hover:text-[#1877F2] cursor-pointer" />
                                </a>
                                <a href={"socialMedia.twitter"} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <Twitter className="text-gray-400  hover:text-[#1C9BE9] cursor-pointer" />
                                </a>
                                <a href={"socialMedia.instagram"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="text-gray-400  hover:text-[#B430D7] cursor-pointer" />
                                </a>
                                <a href={"socialMedia.linkedin"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="text-gray-400 hover:text-[#0270AD] cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-[44px] leading-[60px] font-semibold">
                                We will be happy to tell you more about what <span className="text-[var(--Blue-Color)] italic">WE CAN DO</span> for you
                            </h2>
                            <p className="text-[#7B8CA3] text-lg max-w-xl mt-5">We&apos;d love to connect with you and learn more about what we can build together. Tell us a few details and we&apos;ll be in touch.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 border rounded-t-[20px] px-10 pt-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm">
                                        Your Name*
                                    </label>
                                    <input id="name" type="text" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm">
                                        Email*
                                    </label>
                                    <input id="email" type="email" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm">
                                        Phone*
                                    </label>
                                    <input id="phone" type="tel" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm">
                                        Company
                                    </label>
                                    <input id="company" type="text" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="help" className="text-sm">
                                    How Can we Help
                                </label>
                                <div className="relative">
                                    <select id="help" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.help} onChange={(e) => setFormData({ ...formData, help: e.target.value })}>
                                        <option value="">Select a service</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile Development</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="consulting">Consulting</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm">
                                    Your Message
                                </label>
                                <textarea id="message" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-colors duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* 2nd Section Map +  Calendar */}
            <section className="py-[120px]">
                <div className="custom-container mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="">
                        <div className="space-y-5">
                            <h2 className="text-[44px] leading-[60px] font-semibold max-w-md">Book Your Discovery Call Today</h2>
                            <p className="text-[#454545] text-lg max-w-lg">Take the first step toward innovative, tailored tech solutions with Axiom. Schedule a discovery call with our team to discuss your business needs, goals, and challenges.</p>
                        </div>

                        <div className="space-y-4 mt-12">
                            <h3 className="text-xl font-bold text-[#1E1E1E]">Where to Find Us?</h3>
                            <div className="rounded-lg overflow-hidden h-[300px] bg-gray-100 border">
                                {/* Replace with actual map implementation */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.9335074874345!2d-117.8491615!3d33.6814852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde8dfbdf5d1b%3A0x83c90b8312321f84!2s2372%20Morse%20Ave%20%23968%2C%20Irvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2sus!4v1698931200000!5m2!1sen!2sus" width="100%" height="100%" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Calendar */}
                    <div className="">Right Side</div>
                </div>
            </section>
        </>
    );
}