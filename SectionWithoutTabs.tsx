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

// Simple URL mapping for each card type
const urlMapping = {
  blogs: '/blogs',
  offers: '/offers',
  packages: '/destinations/packages',
  destinations: '/destinations',
  testimonials: '/testimonials',
  themes: '/themes'
};

// Custom view more text mapping
const viewMoreTextMapping = {
  blogs: 'Read Full Article',
  offers: 'View Offer Details',
  packages: 'Explore Package',
  destinations: 'Discover Destination',
  testimonials: 'Read Full Review',
  themes: 'Explore Theme'
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

  // Get URL from mapping
  const viewMoreUrl = urlMapping[matchedSectionType] || '/';

  return (
    <div className="flex flex-col mt-1 mb-9">
      <div className="flex gap-4 mt-[10px] overflow-x-auto scrollbar-hide">
        {items.map((item: any, index) => {
          const customViewMoreText = viewMoreTextMapping[matchedSectionType] || viewMoreText;
          
          switch (matchedSectionType) {
            case 'blogs':
              return (
                <div key={index}>
                  <BlogCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
                </div>
              );
            case 'offers':
              return (
                <div key={index}>
                  <OfferCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
                </div>
              );
            case 'destinations':
              return (
                <div key={index}>
                  <DestinationCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
                </div>
              );
            case 'testimonials':
              return (
                <div key={index}>
                  <TestimonialCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
                </div>
              );
            case 'themes':
              return (
                <div key={index}>
                  <ThemeCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
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
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={viewMoreUrl} />
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