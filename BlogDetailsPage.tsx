'use client';

import React, { useState } from 'react';
import { AllBlogsType, BlogType } from '@/lib/types/blog.type';
import BlogDetails from '../organisms/BlogDetails';
import BlogTabs from '../BlogTabs';

interface BlogDetailsPageProps {
    data: AllBlogsType[];
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<AllBlogsType>(data[0]);
    
    const handleTabClick = (blogtab: AllBlogsType) => {
        setActiveTab(blogtab);
    };

    return (
        <div className="space-y-4 p-4">
            <BlogTabs 
                blogtabsname={data} 
                onClick={handleTabClick}
                activeTabSlug={activeTab?.slug}
            />
            {activeTab?.blogs?.map((blog: BlogType) => (
                <BlogDetails key={blog.slug} data={blog} />
            ))}
        </div>
    );
};

export default BlogDetailsPage;