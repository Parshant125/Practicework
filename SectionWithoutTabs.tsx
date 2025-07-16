'use client';

import React from 'react';
import PackageCardComponent from '@/components/cards/package_card';
import BlogCardComponent from '@/components/cards/blog_card';
import OfferCardComponent from '@/components/cards/offer_card';
import TestimonialCardComponent from '@/components/cards/testimonial_card';
import ThemeCardComponent from '@/components/cards/theme_card';
import DestinationCardComponent from '@/components/cards/destination_card';
import ViewMoreCTA from '@/components/organisms/Explore/ViewMoreCTA';
import { SectionContent } from '@/lib/types/explore.type';

const sectionUrlMap: Record<string, string> = {
  blogs: '/blogs',
  offers: '/offers',
  packages: '/destinations',
  destinations: '/destinations',
  testimonials: '/testimonials',
  themes: '/themes',
};

// Function to generate individual URLs for each item
const generateItemUrl = (sectionType: string, item: any): string => {
  const baseUrl = sectionUrlMap[sectionType] || '/';
  
  // Generate URL based on item properties
  if (item.slug) {
    return `${baseUrl}/${item.slug}`;
  } else if (item.id) {
    return `${baseUrl}/${item.id}`;
  } else if (item.title) {
    // Create slug from title
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${baseUrl}/${slug}`;
  }
  
  return baseUrl;
};

const SectionWithoutTabs: React.FC<any> = ({
  content,
  viewMoreText,
}: {
  content: SectionContent[];
  viewMoreText: string;
}) => {
  const sectionTypes = ['themes', 'destinations', 'testimonials', 'offers', 'blogs', 'packages'];
  const keys: string[] = Object.keys(content);
  const matchedSectionType = keys.find(key => sectionTypes.includes(key));
  const items = matchedSectionType ? content[matchedSectionType] : [];

  if (!matchedSectionType || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col mt-1 mb-9">
      <div className="flex gap-4 mt-[10px] overflow-x-auto scrollbar-hide">
        {items.map((item: any, index) => {
          const itemUrl = generateItemUrl(matchedSectionType, item);
          
          switch (matchedSectionType) {
            case 'blogs':
              return (
                <div key={index}>
                  <BlogCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={`Read More`} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'offers':
              return (
                <div key={index}>
                  <OfferCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={`View Offer`} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'destinations':
              return (
                <div key={index}>
                  <DestinationCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={`Explore Destination`} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'testimonials':
              return (
                <div key={index}>
                  <TestimonialCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={`Read Testimonial`} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'themes':
              return (
                <div key={index}>
                  <ThemeCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={`View Theme`} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'packages':
              return (
                <div key={index}>
                  <PackageCardComponent
                    data={{
                      ...item,
                      description: Array.isArray(item.description)
                        ? item.description
                        : [item.description],
                    }}
                  />
                  <ViewMoreCTA viewMoreText={`View Package`} viewMoreUrl={itemUrl} />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default SectionWithoutTabs;