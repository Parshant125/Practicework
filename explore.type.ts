// Base interfaces for different content types
export interface BlogType {
  id: string;
  title: string;
  slug: string;
  sourceId: string;
  sourceSlug: string;
  excerpt: string;
  status: 'DRAFT' | 'PUBLISHED' | string;
  authorId: string;
  featureImage: string;
  featureImageAlt: string;
  metaDescription: string;
  metaTitle: string;
  customTitle: string | null;
  keywords: string[] | null;
  packageIds: string[];
  relatedBlogIds: string[];
  destinations: string[];
  themes: string[];
  tableOfContents: string | null;
  createdAt: string;
  updatedAt?: string;
  lastSynced: string;
  sourceUpdatedAt: string;
  readTime: number;
  cardFeatureImage: string | null;
  cardFeatureImageAlt: string | null;
}

export interface AllBlogsType {
  name: string;
  slug: string;
  order: number;
  blogs: BlogType[];
}

export interface DestinationType {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  country: string;
  region: string;
  featured: boolean;
  packageCount: number;
  blogCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface PackageType {
  id: string;
  title: string;
  slug: string;
  description: string | string[];
  price: number;
  currency: string;
  duration: number;
  durationType: 'days' | 'weeks' | 'months';
  image: string;
  imageAlt: string;
  destinations: string[];
  themes: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  featured: boolean;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface OfferType {
  id: string;
  title: string;
  slug: string;
  description: string;
  discountPercentage: number;
  validFrom: string;
  validTo: string;
  image: string;
  imageAlt: string;
  packageIds: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  imageAlt: string;
  packageId: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ThemeType {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  packageCount: number;
  blogCount: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Section content interface that can contain different types of content
export interface SectionContent {
  blogs?: BlogType[];
  destinations?: DestinationType[];
  packages?: PackageType[];
  offers?: OfferType[];
  testimonials?: TestimonialType[];
  themes?: ThemeType[];
}

// API response interfaces
export interface ApiSection {
  id: string;
  type: string;
  title: string;
  content: SectionContent;
  viewMoreText: string;
  order: number;
}

export interface ApiPageData {
  id: string;
  name: string;
  slug: string;
  sections: ApiSection[];
}

export interface ApiResponse {
  success: boolean;
  data: ApiPageData;
  message?: string;
}

// Component prop interfaces
export interface SectionWithoutTabsProps {
  content: SectionContent;
  viewMoreText: string;
  slug?: string;
}

export interface BlogDetailsPageProps {
  data: AllBlogsType[];
}

export interface BlogTabsProps {
  blogtabsname: AllBlogsType[];
  onClick: (selectedBlog: AllBlogsType) => void;
  activeTabSlug?: string;
}

export interface ExplorePageProps {
  slug?: string;
}