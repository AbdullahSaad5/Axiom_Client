
import React from "react";
import Link from "next/link";

interface ButtonProps {
    href: string;
    value: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, value, className, ...props }) => {
    return (
        <Link
            href={href}
            className={`inline-block  bg-[var(--Blue-Color)] hover:bg-white  md:text-lg text-white hover:text-black font-medium py-3 md:py-4 px-6 md:px-8 rounded-md  transition-colors duration-300 ${className}`}
            {...props}
        >
            {value}
        </Link>
    );
};


export default Button;
