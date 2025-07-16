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

// Comprehensive URL mapping for different card types
const urlMappingConfig = {
  blogs: {
    baseUrl: '/blogs',
    patterns: {
      withSlug: '/blogs/{slug}',
      withId: '/blogs/{id}',
      withCategory: '/blogs/category/{category}',
      default: '/blogs/article/{index}'
    }
  },
  offers: {
    baseUrl: '/offers',
    patterns: {
      withSlug: '/offers/{slug}',
      withId: '/offers/{id}',
      withType: '/offers/{type}',
      withDiscount: '/offers/discount/{discount}',
      default: '/offers/deal/{index}'
    }
  },
  packages: {
    baseUrl: '/destinations',
    patterns: {
      withSlug: '/destinations/packages/{slug}',
      withId: '/destinations/packages/{id}',
      withDestination: '/destinations/{destination}/packages',
      withDuration: '/destinations/packages/{duration}-days',
      default: '/destinations/packages/tour-{index}'
    }
  },
  destinations: {
    baseUrl: '/destinations',
    patterns: {
      withSlug: '/destinations/{slug}',
      withId: '/destinations/{id}',
      withCountry: '/destinations/{country}',
      withRegion: '/destinations/region/{region}',
      default: '/destinations/place-{index}'
    }
  },
  testimonials: {
    baseUrl: '/testimonials',
    patterns: {
      withSlug: '/testimonials/{slug}',
      withId: '/testimonials/{id}',
      withRating: '/testimonials/rating/{rating}-star',
      withCustomer: '/testimonials/customer/{customer}',
      default: '/testimonials/review-{index}'
    }
  },
  themes: {
    baseUrl: '/themes',
    patterns: {
      withSlug: '/themes/{slug}',
      withId: '/themes/{id}',
      withCategory: '/themes/{category}',
      withType: '/themes/type/{type}',
      default: '/themes/theme-{index}'
    }
  }
};

// Function to generate URLs using mapping
const generateMappedUrl = (sectionType: string, item: any, index: number): string => {
  const config = urlMappingConfig[sectionType];
  if (!config) return '/';

  const patterns = config.patterns;

  // Priority-based URL generation
  if (item.slug) {
    return patterns.withSlug.replace('{slug}', item.slug);
  }
  
  if (item.id) {
    return patterns.withId.replace('{id}', item.id);
  }

  // Section-specific mapping
  switch (sectionType) {
    case 'blogs':
      if (item.category) {
        return patterns.withCategory.replace('{category}', item.category);
      }
      break;
      
    case 'offers':
      if (item.discount) {
        return patterns.withDiscount.replace('{discount}', item.discount);
      }
      if (item.type) {
        return patterns.withType.replace('{type}', item.type);
      }
      break;
      
    case 'packages':
      if (item.destination) {
        return patterns.withDestination.replace('{destination}', item.destination);
      }
      if (item.duration) {
        return patterns.withDuration.replace('{duration}', item.duration);
      }
      break;
      
    case 'destinations':
      if (item.country) {
        return patterns.withCountry.replace('{country}', item.country);
      }
      if (item.region) {
        return patterns.withRegion.replace('{region}', item.region);
      }
      break;
      
    case 'testimonials':
      if (item.rating) {
        return patterns.withRating.replace('{rating}', item.rating);
      }
      if (item.customer) {
        return patterns.withCustomer.replace('{customer}', item.customer);
      }
      break;
      
    case 'themes':
      if (item.category) {
        return patterns.withCategory.replace('{category}', item.category);
      }
      if (item.type) {
        return patterns.withType.replace('{type}', item.type);
      }
      break;
  }

  // Default pattern
  return patterns.default.replace('{index}', (index + 1).toString());
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

  return (
    <div className="flex flex-col mt-1 mb-9">
      <div className="flex gap-4 mt-[10px] overflow-x-auto scrollbar-hide">
        {items.map((item: any, index) => {
          const itemUrl = generateMappedUrl(matchedSectionType, item, index);
          const customViewMoreText = viewMoreTextMapping[matchedSectionType] || viewMoreText;
          
          switch (matchedSectionType) {
            case 'blogs':
              return (
                <div key={index}>
                  <BlogCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'offers':
              return (
                <div key={index}>
                  <OfferCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'destinations':
              return (
                <div key={index}>
                  <DestinationCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'testimonials':
              return (
                <div key={index}>
                  <TestimonialCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
                </div>
              );
            case 'themes':
              return (
                <div key={index}>
                  <ThemeCardComponent data={item} />
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
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
                  <ViewMoreCTA viewMoreText={customViewMoreText} viewMoreUrl={itemUrl} />
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