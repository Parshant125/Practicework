'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import SectionWithoutTabs from '@/components/SectionWithoutTabs';
import { SectionContent } from '@/lib/types/explore.type';

interface ApiResponse {
  success: boolean;
  data: {
    id: string;
    name: string;
    slug: string;
    sections: {
      id: string;
      type: string;
      title: string;
      content: SectionContent;
      viewMoreText: string;
      order: number;
    }[];
  };
  message?: string;
}

interface ExplorePageProps {
  slug?: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || (params?.slug as string) || 'All%20Destinations';
  
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://dev-explore-cms.holidaytribe.ai/api/page-by-name?name=${slug}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: ApiResponse = await response.json();
        
        if (result.success) {
          setData(result);
        } else {
          setError(result.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500 text-center">
          <h2 className="text-2xl font-bold mb-4">No Data Found</h2>
          <p>No content available for this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {data.data.name}
        </h1>
        <p className="text-gray-600">
          Explore our curated collection of {data.data.name.toLowerCase()}
        </p>
      </header>

      <div className="space-y-8">
        {data.data.sections
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <section key={section.id} className="bg-white rounded-lg shadow-sm p-6">
              {section.title && (
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
              )}
              
              <SectionWithoutTabs
                content={section.content}
                viewMoreText={section.viewMoreText}
                slug={slug}
              />
            </section>
          ))}
      </div>
    </div>
  );
};

export default ExplorePage;