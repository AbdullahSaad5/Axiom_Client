import React from "react";
import Link from "next/link";
import RightArrow from "@/public/RightArrow.svg"
import Image from "next/image";

interface ButtonProps {
    href: string;
    value: string;
    className?: string;
    borderClassName?: string;
}

const LearnMore: React.FC<ButtonProps> = ({ href, value, className,borderClassName, ...props }) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <Link
                href={href}
                className={` font-medium group relative  `}
                {...props}
            >
                {value}

            {/* Line animation */}
            <span className={`absolute  left-0 -bottom-1 h-[1px] w-0 bg-[var(--Blue-Color)] transition-all duration-300 group-hover:w-full ${borderClassName}`}></span>
            </Link>
            {/* <ChevronRight size={20} className={`text-[var(--Blue-Color)]`} /> */}
            <Image src={RightArrow} alt="Right Arrow"></Image>
        </div>
    );
};

export default LearnMore;
