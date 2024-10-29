
import Image from "next/image";
import Link from "next/link";

export default function AxiomCTASection() {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Div */}
                    <div>
                        <h2 className="text-[44px] font-semibold text-gray-900 mb-10 leading-[60px]">Discover Axiom: Your Gateway To Custom Software Solutions. Contact Us Today.</h2>
                        <p className="text-lg leading-[30px] text-[#454545] mb-10">Experience the innovation of Axiom, where ideas become reality. Our custom software solutions are tailored to your needs, driving efficiency and success. Ready to transform your business? Contact us now.</p>
                        <Link href="/contact" className="bg-blue-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                            Book a Call
                        </Link>
                    </div>
                    {/* Right Div */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730202299/representation-user-experience-interface-design_ixjxo0.png" alt="Axiom software dashboard" layout="fill" objectFit="cover" className="" />
                    </div>
                </div>
            </div>

            {/* <div className="container text-xl px-4 mt-10 mx-auto grid grid-cols-5 divide-x border-b border-x">
                <div className="font-semibold pl-4 space-y-5">
                    <h3 className="">Digital Solutions</h3>
                    <p className="">80%</p>
                </div>
                <div className="font-semibold pl-4 space-y-5">
                    <h3 className="">Digital Solutions</h3>
                    <p className="">80%</p>
                </div>
                <div className="font-semibold pl-4 space-y-5">
                    <h3 className="">Digital Solutions</h3>
                    <p className="">80%</p>
                </div>
                <div className="font-semibold pl-4 space-y-5">
                    <h3 className="">Digital Solutions</h3>
                    <p className="">80%</p>
                </div>
                <div className="font-semibold pl-4 space-y-5">
                    <h3 className="">Digital Solutions</h3>
                    <p className="">80%</p>
                </div>
                
                
            </div> */}
        </section>
    );
}