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

interface SectionWithoutTabsProps {
  content: SectionContent;
  viewMoreText: string;
  slug?: string;
}

const SectionWithoutTabs: React.FC<SectionWithoutTabsProps> = ({
  content,
  viewMoreText,
  slug,
}) => {
  const sectionTypes = ['themes', 'destinations', 'testimonials', 'offers', 'blogs', 'packages'];
  const keys: string[] = Object.keys(content);
  const matchedSectionType = keys.find(key => sectionTypes.includes(key));
  
  if (!matchedSectionType) {
    return null;
  }

  const items = content[matchedSectionType as keyof SectionContent];
  
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  // Create URL mapping with dynamic slug for destinations
  const getViewMoreUrl = (sectionType: string): string => {
    switch (sectionType) {
      case 'blogs':
        return '/blogs';
      case 'offers':
        return '/offers';
      case 'packages':
        return '/destinations';
      case 'destinations':
        return slug ? `explore/page-details/${slug}` : '/destinations';
      case 'testimonials':
        return '/testimonials';
      case 'themes':
        return '/themes';
      default:
        return '/';
    }
  };

  const viewMoreUrl = getViewMoreUrl(matchedSectionType);

  const renderItem = (item: any, index: number) => {
    // Use item.id or item.slug as key if available, otherwise fall back to index
    const key = item.id || item.slug || `${matchedSectionType}-${index}`;
    
    switch (matchedSectionType) {
      case 'blogs':
        return (
          <div key={key}>
            <BlogCardComponent data={item} />
          </div>
        );
      case 'offers':
        return (
          <div key={key}>
            <OfferCardComponent data={item} />
          </div>
        );
      case 'destinations':
        return (
          <div key={key}>
            <DestinationCardComponent data={item} />
          </div>
        );
      case 'testimonials':
        return (
          <div key={key}>
            <TestimonialCardComponent data={item} />
          </div>
        );
      case 'themes':
        return (
          <div key={key}>
            <ThemeCardComponent data={item} />
          </div>
        );
      case 'packages':
        return (
          <div key={key}>
            <PackageCardComponent
              data={{
                ...item,
                description: Array.isArray(item.description)
                  ? item.description
                  : [item.description],
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mt-1 mb-9">
      <div className="flex gap-4 mt-[10px] overflow-x-auto scrollbar-hide">
        {items.map((item, index) => renderItem(item, index))}
      </div>

      {viewMoreText && (
        <div className="flex">
          <ViewMoreCTA viewMoreText={viewMoreText} viewMoreUrl={viewMoreUrl} />
        </div>
      )}
    </div>
  );
};

export default SectionWithoutTabs;