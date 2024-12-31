"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import { getLink } from "@/app/services/getLink";
import { ServiesCategories } from "@/app/components/Header/ServiesCategories";
import servicespic from "@/public/services/services.jpg"
import LearnMore from "@/app/components/ui/Learn More/LearnMore";
import { NavbarMenu } from "./NavbarMenu";

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [ServicesMenu, setServicesMenu] = useState<boolean>(false)
    const ServicesMenuRef = useRef<HTMLDivElement>(null);
    const ServicesMenuLiRef = useRef<HTMLLIElement>(null);


    // Close the "ServicesMenu" dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ServicesMenuRef.current && !ServicesMenuRef.current.contains(event.target as Node) &&
                ServicesMenuLiRef.current && !ServicesMenuLiRef.current.contains(event.target as Node)
            ) {
                setServicesMenu(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const pathname = usePathname(); // Get current route

    // Define allowed routes, including the '/services' base route
    const allowedRoutes = [
        // "/services",
        "/about",
        "/careers",
        "/insights",
        "/",
        "/contact",
        "/",
        // '/privacy-policy',
        // '/terms-and-conditions',
    ];

    // Check if the current route is allowed or starts with '/services'
    const Light = allowedRoutes.includes(pathname) || pathname.startsWith("/services");





    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);


    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="absolute top-0 left-0 right-0 bg-transparent text-white z-10">
                <div className="flex items-center justify-between container px-5 mx-auto h-20">
                    <Link href="/" className="text-2xl font-bold">
                        <Image src={Light ? "/Logo/whitetextlogo.png" : "/Logo/blacktextlogo.png"} width={155} height={38} alt="Axiom Logo" />
                    </Link>
                    <ul className={`lg:flex items-center justify-between gap-x-7 hidden text-lg font-medium ${Light ? "text-white" : "text-black"}`}>
                        <li onClick={() => { setServicesMenu(!ServicesMenu); }} ref={ServicesMenuLiRef} className="hover:hover:text-[var(--Blue-Color)] cursor-pointer py-2 flex items-center">Services <ChevronDown className={`ml-1 w-4 h-4 cursor-pointer transition-transform duration-300 ${ServicesMenu ? 'rotate-180' : ''}`} /></li>
                        {NavbarMenu.slice(1).map((item, index) => (
                            <li key={index} className=" ">
                                <Link href={item.link} className={`hover:hover:text-[var(--Blue-Color)] py-2 ${pathname === item.link ? "border-b-2 border-[#1C85FF]" : ""}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <div className="md:flex items-center space-x-4 hidden">
                            <Link href="/contact" className={`py-2 px-6 text-lg font-medium ${Light ? "animated-border bg-transparent" : " bg-[var(--Blue-Color)] rounded-[6px] hover:bg-[#011633] duration-300"}`}>
                                Book a Call
                            </Link>
                        </div>
                        <button aria-label="Mobile Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden transition duration-300 ${Light ? "text-white" : "text-black"}`}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Desktop "ServicesMenu" dropdown */}
            <div ref={ServicesMenuRef}
                className={`absolute top-20 left-0 right-0 bg-white overflow-hidden transition-all duration-300 ease-in-out z-20 ${ServicesMenu ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
                <div className="container mx-auto px-4 py-8 grid grid-cols-10 gap-8">
                    {/* Column 1 */}
                    <div className="px-5 col-span-3 ">
                        <div className="flex justify-between items-center mb-7">
                            <h3 className="text-lg font-bold ">Services</h3>
                            <LearnMore href="/services" value="View All" borderClassName="bg-[var(--Dark-Gray-Color)]" />
                        </div>
                        <Link href="/services" className="inline-block space-y-2 group mb-2">
                            <div className="rounded-3xl overflow-hidden"> <Image src={servicespic} alt="Services" className=" group-hover:scale-110 duration-300"></Image></div>
                            <p className="font-semibold text-xl">Explore All The Servics</p>
                        </Link>
                        <LearnMore href="/services" value="Learn More" borderClassName="bg-[var(--Dark-Gray-Color)]" />
                    </div>

                    {/* Column 2 */}
                    <div className="grid grid-cols-3 gap-8 col-span-7">
                        {ServiesCategories.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-bold mb-2 hover:text-[var(--Blue-Color)]"><Link href={getLink(category.title)}>{category.title}</Link></h3>
                                <ul className="space-y-2">
                                    {category.links.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href} className="hover:text-[var(--Blue-Color)]">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            // <CategoryCard key={index} title={category.title} links={category.links} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isMobileMenuOpen && (
                <div ref={navRef} className={`lg:hidden flex flex-col justify-between ${Light ? "bg-white" : "bg-gradient"} absolute top-20 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out z-20 ${isMobileMenuOpen ? "screen-minus-80 opacity-100 visible" : "h-0 opacity-0 invisible"}`}>
                    <nav className={`container mx-auto  py-4 flex flex-col ${Light ? "text-black" : "text-white"} divide-y-[1px]`}>
                        {NavbarMenu.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.link}
                                    onClick={() => {
                                        if (item.subNavbar) {
                                            toggleSubMenu(index);
                                        } else {
                                            setIsMobileMenuOpen(false);
                                        }
                                    }}
                                    className="hover:bg-gray-100 py-4 text-xl font-medium flex justify-between items-center px-5">
                                    {item.name}
                                    {item.subNavbar && <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSubMenuIndex === index ? "rotate-180" : ""}`} />}
                                </Link>
                                {item.subNavbar && openSubMenuIndex === index && (
                                    <div className="w-full  hover:text-gray-300 pb-4 text-base  ">
                                        {item.subNavbar.map((subItem, subIndex) => (
                                            <Link href={getLink(subItem)} key={subIndex} onClick={() => setIsMobileMenuOpen(false)} className="inline-block   w-full pl-8 pr-4 py-4 text-left hover:bg-gray-100 text-gray-700">
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex items-center px-4 justify-between py-4 border-t">
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className={`w-full text-xl font-medium text-center px-6 py-5 ${Light ? "rounded-lg hover:bg-[#011633] bg-[var(--Blue-Color)] text-white" : "rounded-lg text-black bg-white hover:bg-[var(--Blue-Color)] hover:text-white"} hover:border border transition-colors duration-300`}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
