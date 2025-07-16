# Holiday Tribe Explore Components

A comprehensive set of React components for building dynamic explore pages with API integration.

## 📁 File Structure

```
components/
├── SectionWithoutTabs.tsx      # Main section component for displaying content
├── BlogDetailsPage.tsx         # Blog details with tabs
├── BlogTabs.tsx               # Tabbed navigation for blogs
├── ExplorePage.tsx            # Main page component with API integration
├── ViewMoreCTA.tsx            # Call-to-action button component
└── organisms/
    └── Explore/
        └── ViewMoreCTA.tsx    # Alternative location for CTA component

pages/
└── page.tsx                   # Next.js page component for routing

lib/
└── types/
    └── explore.type.ts        # TypeScript type definitions
```

## 🚀 Quick Start

### 1. Setup your route structure

For Next.js 13+ with app router, create the following structure:

```
app/
└── explore/
    └── page-details/
        └── [slug]/
            └── page.tsx
```

### 2. Use the page component

```tsx
// app/explore/page-details/[slug]/page.tsx
import React from 'react';
import ExplorePage from '@/components/ExplorePage';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ExplorePageDetails({ params }: PageProps) {
  return <ExplorePage slug={params.slug} />;
}
```

### 3. API Integration

The components automatically fetch data from:
```
https://dev-explore-cms.holidaytribe.ai/api/page-by-name?name=${slug}
```

Expected API response format:
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "All Destinations",
    "slug": "All%20Destinations",
    "sections": [
      {
        "id": "section-1",
        "type": "destinations",
        "title": "Popular Destinations",
        "content": {
          "destinations": [
            {
              "id": "dest-1",
              "name": "Bali",
              "slug": "bali",
              "description": "Beautiful island paradise"
              // ... other properties
            }
          ]
        },
        "viewMoreText": "View More Destinations",
        "order": 1
      }
    ]
  }
}
```

## 🧩 Component Usage

### SectionWithoutTabs

The main component for displaying different types of content:

```tsx
import SectionWithoutTabs from '@/components/SectionWithoutTabs';

<SectionWithoutTabs
  content={{
    destinations: [
      // array of destinations
    ],
    blogs: [
      // array of blogs
    ],
    packages: [
      // array of packages
    ]
  }}
  viewMoreText="View More"
  slug="All%20Destinations"
/>
```

### BlogDetailsPage

For displaying blog content with tabs:

```tsx
import BlogDetailsPage from '@/components/BlogDetailsPage';

<BlogDetailsPage
  data={[
    {
      name: "Travel Tips",
      slug: "travel-tips",
      order: 1,
      blogs: [
        // array of blog posts
      ]
    }
  ]}
/>
```

### BlogTabs

Tabbed navigation component:

```tsx
import BlogTabs from '@/components/BlogTabs';

<BlogTabs
  blogtabsname={blogCategories}
  onClick={handleTabClick}
  activeTabSlug={activeTab?.slug}
/>
```

## 🎨 Styling

Components use Tailwind CSS with the following key classes:

- **Responsive scrolling**: `overflow-x-auto scrollbar-hide`
- **Card layouts**: `bg-white rounded-lg shadow-sm`
- **Hover effects**: `hover:shadow-md transition-all duration-200`
- **Loading states**: `animate-spin`

## 📱 Responsive Design

All components are fully responsive:

- **Mobile**: Cards scroll horizontally
- **Tablet**: Grid layout with appropriate spacing
- **Desktop**: Full grid layout with hover effects

## 🔧 Configuration

### URL Mapping

The `SectionWithoutTabs` component generates different URLs based on content type:

```tsx
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
```

### Dynamic Routing

For destinations, the URL dynamically includes the slug:
- Input: `All%20Destinations`
- Output: `explore/page-details/All%20Destinations`

## 🔍 Content Types

The system supports the following content types:

1. **Blogs** - Blog posts with full content
2. **Destinations** - Travel destinations with details
3. **Packages** - Travel packages with pricing
4. **Offers** - Special offers and deals
5. **Testimonials** - Customer reviews
6. **Themes** - Travel themes and categories

## 🛠️ TypeScript Support

All components are fully typed with comprehensive interfaces:

```tsx
interface SectionContent {
  blogs?: BlogType[];
  destinations?: DestinationType[];
  packages?: PackageType[];
  offers?: OfferType[];
  testimonials?: TestimonialType[];
  themes?: ThemeType[];
}
```

## 📦 Dependencies

Required packages:
- `next` (13+)
- `react` (18+)
- `typescript`
- `tailwindcss`
- `lucide-react` (for icons)

## 🚨 Error Handling

Components include comprehensive error handling:

- **Loading states** with spinners
- **Error boundaries** with user-friendly messages
- **Empty states** when no content is available
- **Fallback URLs** for broken links

## 🔄 State Management

Components use React hooks for state management:

- `useState` for local component state
- `useEffect` for side effects and API calls
- `useRef` for DOM manipulation (scrolling)

## 📈 Performance

Optimizations included:

- **Lazy loading** for images
- **Stable keys** for list items
- **Memoization** where appropriate
- **Efficient re-renders** with proper dependency arrays

## 🧪 Testing

Example test structure:

```tsx
describe('SectionWithoutTabs', () => {
  it('renders destinations correctly', () => {
    // Test implementation
  });
  
  it('generates correct view more URL', () => {
    // Test implementation
  });
});
```

## 🚀 Deployment

For production deployment:

1. Ensure all environment variables are set
2. Build the application: `npm run build`
3. Deploy to your hosting platform
4. Configure proper routing for dynamic slugs

## 📄 License

This project is licensed under the MIT License.
