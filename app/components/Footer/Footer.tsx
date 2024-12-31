"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, Dribbble } from 'lucide-react'
import { socialMedia } from '@/app/constants/constants';
import Image from 'next/image';
import logo from "@/public/Logo/whitetextlogo.png"
import Button from '@/app/components/ui/Button/Button';
import { NavbarMenu } from '../Header/NavbarMenu';
import { ServiesCategories } from '../Header/ServiesCategories';
import { getLink } from '@/app/services/getLink';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this value for when the button should appear
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <footer className=''>
            <div className="bg-gradient">
                {/* Call to Action Section */}
                <div className=" flex flex-col justify-between items-center gap-y-5 flex-wrap py-[120px] px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-[64px] leading-none font-semibold  text-white">
                        Ready To Work, <span className="border-b-4 italic">Let&apos;s Chat</span>
                    </h2>
                    <p className="text-gray-300 lg:mt-[20px] text-center md:mb-0 text-[20px]">Let&apos;s take your project to new heights, reach out and see how we can help you.</p>
                    <Button href="/contact" value="Book a Call" />
                </div>
            </div>
            <div className="bg-[#010915] text-white py-16">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 ">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Let&apos;s Get in Touch</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-blue-400">Email:</p>
                                    <Link href="mailto:connect@axiomsolic.com" className="hover:text-blue-400 transition-colors">
                                        {socialMedia.email}
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-blue-400">Phone:</p>
                                    <Link href="tel:+19095598113" className="hover:text-blue-400 transition-colors">
                                        {socialMedia.phone}
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-blue-400">Location:</p>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: socialMedia.address,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {NavbarMenu.map((item, key) => (
                                    <li key={key}>
                                        <Link href={item.link} className="hover:text-blue-400 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div className="sm:col-span-2">
                            <h3 className="text-xl font-semibold mb-6">Services</h3>
                            <ul className="gap-3 grid sm:grid-cols-2">
                                {ServiesCategories.map((service, key) => (
                                    <li key={key}>
                                        <Link href={getLink(service.title)} className="hover:text-blue-400 transition-colors">
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex justify-center md:justify-between flex-wrap items-center gap-4 border-y border-gray-800 py-8">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold">
                            <Image src={logo} width={191} height={56} alt="Axiom White Logo"></Image>
                        </Link>

                        {/* Social Media Icons */}
                        <div className="flex justify-center items-center gap-6 ">
                            <Link href={socialMedia.facebook} aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                                <Facebook size={26} />
                            </Link>
                            <Link href={socialMedia.instagram} aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                                <Instagram size={26} />
                            </Link>
                            <Link href={socialMedia.linkedin} aria-label="Linkedin" className="hover:text-blue-400 transition-colors">
                                <Linkedin size={26} />
                            </Link>
                            <Link href={socialMedia.youtube} aria-label="Youtube" className="hover:text-blue-400 transition-colors">
                                <Youtube size={26} />
                            </Link>
                            <Link href={socialMedia.facebook} aria-label="Dribbble" className="hover:text-blue-400 transition-colors">
                                <Dribbble size={26} />
                            </Link>
                        </div>
                    </div>

                    {/* Copyright and Links */}
                    <div className="mt-8 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
                        <div className="flex gap-4 mt-4 lg:mt-0">
                            <p>Copyright© 2024 Axiom, All Rights Reserved.</p>
                            {[
                                { label: "Terms", link: "/terms-and-conditions" },
                                { label: "Privacy Policy", link: "/privacy-policy" },
                            ].map((item, index) => (
                                <Link key={index} href={item.link} className="hover:text-white transition-colors underline  underline-offset-2">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <p className="mt-4 lg:mt-0">
                            Agency Partner Interactive | Web Design & Development Agency
                        </p>
                    </div>
                </div>

            </div>
            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-5 right-5 rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition-colors z-50"
                >
                    <ArrowUp className="h-5 w-5 text-white" />
                    <span className="sr-only">Back to top</span>
                </button>
            )}
        </footer>
    )
}

export default Footer
