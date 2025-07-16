import React from 'react';
import ExplorePage from '@/components/ExplorePage';

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// This would be your page component in app/explore/page-details/[slug]/page.tsx
export default function ExplorePageDetails({ params, searchParams }: PageProps) {
  return <ExplorePage slug={params.slug} />;
}

// If you want to generate static paths (optional)
export async function generateStaticParams() {
  // You can fetch available slugs from your API
  const commonSlugs = [
    'All%20Destinations',
    'Adventure%20Travel',
    'Beach%20Destinations',
    'Mountain%20Destinations',
    'City%20Breaks',
  ];

  return commonSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Optional: Add metadata
export async function generateMetadata({ params }: PageProps) {
  const slug = params.slug;
  const decodedSlug = decodeURIComponent(slug);
  
  return {
    title: `${decodedSlug} - Holiday Tribe`,
    description: `Explore our curated collection of ${decodedSlug.toLowerCase()}`,
  };
}