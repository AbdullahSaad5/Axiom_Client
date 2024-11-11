import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { backendUrl } from '@/app/constants/constants';
import location from '@/public/careers/job/location.svg'
import time from '@/public/careers/job/time.svg'

interface Params {
    params: Promise<{
        slug: string;
    }>;
}
export default async function page({ params } : Params) {
    const { slug } = await params;

    // let post: Post | null = null;
    interface Job {
        title: string;
        location: string;
        type: string;
    }
    let job: Job | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/jobs/${slug}`);
        if (response.data.data) {
            job = response.data.data;
        } else {
            console.error("Failed to fetch Current Job data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching Job data:", error);
    }

    if (!job) {
        return <div className="mt[167px]">Loading</div>;
    }
    return (
        <main className="container mx-auto py-5 px-5 mt-[167px]">
            <div className="">
                <Link href="/careers" className="text-[var(--Blue-Color)] flex items-center gap-x-2">
                    <span className="">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.3125 15.6208L2.73364 7.8104L8.3125 0L5.57886 4.77965e-07L1.36561e-06 7.8104L5.57886 15.6208L8.3125 15.6208Z" fill="#1C85FF" />
                        </svg>
                    </span>
                    Back to Careers
                </Link>
                <h2 className="text-[#1E1E1E] text-[44px] leading-[60px] font-semibold my-5"> {job.title} </h2>
                <div className="">
                    <Image src={location} alt='hhy'></Image>
                    <Image src={time} alt='hhy'></Image>
                </div>
            </div>
            <div className=""></div>
        </main>
    );
}
