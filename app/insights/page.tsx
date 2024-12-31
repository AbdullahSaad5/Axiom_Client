
import axios from "axios";
import { backendUrl } from "../constants/constants";
import BlogPosts from "../insights/BlogPost";
import Loading from "../loading";
import Cover from "../components/ui/Cover";

export default async function Page() {
    // Blog post Data Fatching
    let post = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/blogs`, {
            headers: {
                "Cache-Control": "public, max-age=10", // 60*5=300 Second This sets a 5-minute cache time
            },
        });
        if (response.data.data) {
            post = response.data.data.reverse();
        } else {
            console.error("Failed to fetch blog data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching blog data:", error);
    }
    // Category Fatching
    let category = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/services`, {
            headers: {
                "Cache-Control": "public, max-age=10", // 60*5=300 Second This sets a 5-minute cache time
            },
        });
        if (response.data.data) {
            interface CategoryItem {
                title: string; // Add other properties if needed
            }
            category = response.data.data.map((item: CategoryItem) => item.title);
        } else {
            console.error("Failed to fetch category data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching category data:", error);
    }

    if (!post) {
        return <Loading />;
    }
    return (
        <>
            {/* Hero Section */}
            <Cover
                coverImage="/about/cover.png"
                title="Insights"
                subtitle="Updates, Insights and Tips"
                description="Stay ahead with Axiom as we bring you the latest updates, insightful perspectives, and practical tips."
            />

            <BlogPosts post={post || []} category={category} />
        </>
    );
}
