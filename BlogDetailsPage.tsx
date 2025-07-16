'use client';

import React, { useState } from 'react';
import { AllBlogsType, BlogType } from '@/lib/types/explore.type';
import BlogDetails from '../organisms/BlogDetails';
import BlogTabs from '../BlogTabs';

interface BlogDetailsPageProps {
    data: AllBlogsType[];
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<AllBlogsType>(data[0]);
    
    const handleTabClick = (selectedBlog: AllBlogsType): void => {
        setActiveTab(selectedBlog);
    };

    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-gray-500 text-center">
                    <h2 className="text-2xl font-bold mb-4">No Blogs Found</h2>
                    <p>No blog content available at this time.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4 p-4">
            <BlogTabs 
                blogtabsname={data} 
                onClick={handleTabClick}
                activeTabSlug={activeTab?.slug}
            />
            
            <div className="space-y-6">
                {activeTab?.blogs?.map((blog: BlogType) => (
                    <BlogDetails key={blog.slug} data={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogDetailsPage;