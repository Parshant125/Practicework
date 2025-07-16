// Complete example of using all components together
// This would be your main application file

import React from 'react';
import { NextPage } from 'next';
import ExplorePage from '@/components/ExplorePage';
import BlogDetailsPage from '@/components/BlogDetailsPage';
import SectionWithoutTabs from '@/components/SectionWithoutTabs';
import { SectionContent, AllBlogsType } from '@/lib/types/explore.type';

// Example 1: Using ExplorePage with dynamic routing
// File: app/explore/page-details/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
}

export const DynamicExplorePage: NextPage<PageProps> = ({ params }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ExplorePage slug={params.slug} />
    </div>
  );
};

// Example 2: Using SectionWithoutTabs directly
export const DirectSectionExample: React.FC = () => {
  const sampleContent: SectionContent = {
    destinations: [
      {
        id: '1',
        name: 'Bali',
        slug: 'bali',
        description: 'Beautiful island paradise',
        image: '/images/bali.jpg',
        imageAlt: 'Bali landscape',
        country: 'Indonesia',
        region: 'Southeast Asia',
        featured: true,
        packageCount: 25,
        blogCount: 15,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-15',
      },
      {
        id: '2',
        name: 'Tokyo',
        slug: 'tokyo',
        description: 'Modern metropolis with rich culture',
        image: '/images/tokyo.jpg',
        imageAlt: 'Tokyo skyline',
        country: 'Japan',
        region: 'East Asia',
        featured: true,
        packageCount: 18,
        blogCount: 22,
        createdAt: '2024-01-02',
        updatedAt: '2024-01-16',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Popular Destinations</h1>
      <SectionWithoutTabs
        content={sampleContent}
        viewMoreText="View All Destinations"
        slug="All%20Destinations"
      />
    </div>
  );
};

// Example 3: Using BlogDetailsPage with sample data
export const BlogExample: React.FC = () => {
  const sampleBlogData: AllBlogsType[] = [
    {
      name: 'Travel Tips',
      slug: 'travel-tips',
      order: 1,
      blogs: [
        {
          id: '1',
          title: 'Essential Packing Guide for Southeast Asia',
          slug: 'packing-guide-southeast-asia',
          sourceId: 'ghost-1',
          sourceSlug: 'ghost-packing-guide',
          excerpt: 'Everything you need to know about packing for your Southeast Asian adventure.',
          status: 'PUBLISHED',
          authorId: 'author-1',
          featureImage: '/images/packing-guide.jpg',
          featureImageAlt: 'Travel packing essentials',
          metaDescription: 'Complete packing guide for Southeast Asia travel',
          metaTitle: 'Southeast Asia Packing Guide | Travel Tips',
          customTitle: null,
          keywords: ['packing', 'southeast asia', 'travel tips'],
          packageIds: ['package-1', 'package-2'],
          relatedBlogIds: ['blog-2', 'blog-3'],
          destinations: ['thailand', 'vietnam', 'indonesia'],
          themes: ['adventure', 'backpacking'],
          tableOfContents: null,
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-15T00:00:00Z',
          lastSynced: '2024-01-15T00:00:00Z',
          sourceUpdatedAt: '2024-01-14T00:00:00Z',
          readTime: 8,
          cardFeatureImage: '/images/packing-card.jpg',
          cardFeatureImageAlt: 'Packing guide thumbnail',
        },
        {
          id: '2',
          title: 'Budget Travel Tips for Asia',
          slug: 'budget-travel-asia',
          sourceId: 'ghost-2',
          sourceSlug: 'ghost-budget-travel',
          excerpt: 'How to travel through Asia on a budget without compromising on experience.',
          status: 'PUBLISHED',
          authorId: 'author-2',
          featureImage: '/images/budget-travel.jpg',
          featureImageAlt: 'Budget travel in Asia',
          metaDescription: 'Save money while traveling in Asia with these budget tips',
          metaTitle: 'Budget Travel Asia | Money-Saving Tips',
          customTitle: null,
          keywords: ['budget travel', 'asia', 'money saving'],
          packageIds: ['package-3', 'package-4'],
          relatedBlogIds: ['blog-1', 'blog-4'],
          destinations: ['thailand', 'vietnam', 'laos'],
          themes: ['budget', 'backpacking'],
          tableOfContents: null,
          createdAt: '2024-01-02T00:00:00Z',
          updatedAt: '2024-01-16T00:00:00Z',
          lastSynced: '2024-01-16T00:00:00Z',
          sourceUpdatedAt: '2024-01-15T00:00:00Z',
          readTime: 12,
          cardFeatureImage: '/images/budget-card.jpg',
          cardFeatureImageAlt: 'Budget travel thumbnail',
        },
      ],
    },
    {
      name: 'Destination Guides',
      slug: 'destination-guides',
      order: 2,
      blogs: [
        {
          id: '3',
          title: 'Complete Guide to Bali',
          slug: 'complete-guide-bali',
          sourceId: 'ghost-3',
          sourceSlug: 'ghost-bali-guide',
          excerpt: 'Your ultimate guide to exploring the beautiful island of Bali.',
          status: 'PUBLISHED',
          authorId: 'author-3',
          featureImage: '/images/bali-guide.jpg',
          featureImageAlt: 'Bali travel guide',
          metaDescription: 'Complete travel guide to Bali with tips and recommendations',
          metaTitle: 'Bali Travel Guide | Complete Guide',
          customTitle: null,
          keywords: ['bali', 'indonesia', 'travel guide'],
          packageIds: ['package-5', 'package-6'],
          relatedBlogIds: ['blog-1', 'blog-2'],
          destinations: ['bali', 'indonesia'],
          themes: ['culture', 'beach', 'adventure'],
          tableOfContents: null,
          createdAt: '2024-01-03T00:00:00Z',
          updatedAt: '2024-01-17T00:00:00Z',
          lastSynced: '2024-01-17T00:00:00Z',
          sourceUpdatedAt: '2024-01-16T00:00:00Z',
          readTime: 15,
          cardFeatureImage: '/images/bali-card.jpg',
          cardFeatureImageAlt: 'Bali guide thumbnail',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Travel Blog</h1>
        <BlogDetailsPage data={sampleBlogData} />
      </div>
    </div>
  );
};

// Example 4: Complete application with routing
export const CompleteAppExample: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<'explore' | 'blogs'>('explore');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Holiday Tribe</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentPage('explore')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === 'explore'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Explore
              </button>
              <button
                onClick={() => setCurrentPage('blogs')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === 'blogs'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Blogs
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'explore' ? (
          <ExplorePage slug="All%20Destinations" />
        ) : (
          <BlogExample />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Holiday Tribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Example 5: API integration with error handling
export const APIExamplePage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dev-explore-cms.holidaytribe.ai/api/page-by-name?name=All%20Destinations'
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!data) return <div className="text-center py-8">No data available</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{data.data.name}</h1>
      {data.data.sections.map((section: any) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <SectionWithoutTabs
            content={section.content}
            viewMoreText={section.viewMoreText}
            slug="All%20Destinations"
          />
        </div>
      ))}
    </div>
  );
};

// Export all examples for use in your application
export default {
  DynamicExplorePage,
  DirectSectionExample,
  BlogExample,
  CompleteAppExample,
  APIExamplePage,
};