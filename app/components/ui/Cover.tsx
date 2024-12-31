import React from "react";
import Image from "next/image";

interface CoverProps {
    coverImage: string;
    title: string;
    subtitle: string;
    description: string;
}

const Cover: React.FC<CoverProps> = ({ coverImage, title, subtitle, description,  }) => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div >
                <Image src={coverImage} alt={subtitle} width={1920} height={650} className="min-h-[450px] md:min-h-[650px] max-h-[650px] w-full object-fill" />
            </div>
            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-3">
                <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)]">
                    {title}
                </h1>
                <p className="text-center text-3xl md:text-6xl md:leading-[80px] font-semibold max-w-[884px] mt-[10px] mb-[20px]">
                    {subtitle}
                </p>
                <p className="text-center text-lg md:text-xl md:leading-[32px] max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Cover;
