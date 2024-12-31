import Button from "@/app/components/ui/Button/Button"
import Head from "next/head"

export default function HeroSection() {
    return (
        <>
            <Head>
                <link rel="preload" href="/LandingPage/FutureContact.mp4" as="video" type="video/mp4" />
            </Head>

            <section className="relative h-[60svh] md:h-[80svh] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <video src="/LandingPage/FutureContact.mp4" loop autoPlay muted playsInline preload="auto" className="w-full h-full object-cover" ></video>

                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-4xl font-semibold text-white sm:text-5xl md:text-7xl ">
                        Shape The Future<br />With Axiom
                    </h3>
                    <p className="mx-auto max-w-2xl  md:text-lg text-white mt-[16px]">
                        We&apos;re not just building software; we&apos;re shaping the future of industries through cutting-edge technology and creative problem-solving.
                    </p>
                    <Button
                        href="/about"
                        value="Learn More"
                        className="mt-5"
                    />
                </div>
            </section>
        </>
    )
}
