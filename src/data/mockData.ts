import { BlogPost, BlogCategory } from '../types/blog';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React TypeScript: A Complete Guide',
    excerpt: 'Learn how to build robust React applications with TypeScript. This comprehensive guide covers everything from setup to advanced patterns.',
    content: `
# Getting Started with React TypeScript

React and TypeScript make a powerful combination for building scalable web applications. In this guide, we'll explore how to set up and use TypeScript with React effectively.

## Why TypeScript with React?

TypeScript brings static typing to JavaScript, which helps catch errors early and provides better IDE support. When combined with React, it offers:

- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Enhanced code completion and navigation
- **Refactoring Support**: Safe and reliable code refactoring
- **Documentation**: Types serve as living documentation

## Setting Up Your Project

The easiest way to get started is using Vite with the React TypeScript template:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Essential TypeScript Patterns

### Component Props

Define your component props with interfaces:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};
\`\`\`

This approach ensures type safety and makes your components self-documenting.
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer with 8 years of experience in React and TypeScript.'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 12,
    tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Modern CSS Techniques: Grid, Flexbox, and Beyond',
    excerpt: 'Explore the latest CSS features that make creating responsive and beautiful layouts easier than ever before.',
    content: `
# Modern CSS Techniques

CSS has evolved tremendously in recent years. Let's explore some modern techniques that will revolutionize your web layouts.

## CSS Grid: The Layout Revolution

CSS Grid provides a two-dimensional layout system that makes complex layouts simple:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Flexbox: One-Dimensional Mastery

Perfect for component-level layouts:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

These modern CSS features provide incredible power and flexibility for creating responsive designs.
    `,
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'UI/UX Designer and CSS specialist with a passion for modern web standards.'
    },
    publishedAt: '2024-01-10T14:30:00Z',
    readingTime: 8,
    tags: ['CSS', 'Web Design', 'Responsive Design', 'Layout'],
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn best practices for creating robust, scalable backend APIs that can handle real-world traffic.',
    content: `
# Building Scalable APIs with Node.js

Creating APIs that can scale is crucial for modern web applications. Here's how to build them right from the start.

## Project Structure

A well-organized project structure is the foundation of scalable applications:

\`\`\`
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
└── utils/
\`\`\`

## Error Handling

Implement centralized error handling:

\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
\`\`\`

## Validation and Security

Always validate input and implement security best practices to protect your API.
    `,
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Backend engineer specializing in Node.js and distributed systems.'
    },
    publishedAt: '2024-01-05T09:15:00Z',
    readingTime: 15,
    tags: ['Node.js', 'API', 'Backend', 'Express', 'JavaScript'],
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the emerging technologies and trends that will shape web development in the coming year.',
    content: `
# The Future of Web Development

As we progress through 2024, several trends are reshaping how we build web applications.

## AI-Powered Development

Artificial intelligence is transforming how we write code:

- **Code Generation**: Tools like GitHub Copilot and ChatGPT
- **Automated Testing**: AI-driven test generation
- **Performance Optimization**: Intelligent bundling and optimization

## Edge Computing

Moving computation closer to users:

\`\`\`javascript
// Edge function example
export default async function handler(request) {
  const userLocation = request.geo.country;
  return new Response(\`Hello from \${userLocation}!\`);
}
\`\`\`

## Web Assembly (WASM)

Bringing near-native performance to the web:

- **Performance**: CPU-intensive tasks in the browser
- **Language Diversity**: Use Rust, C++, and other languages
- **Security**: Sandboxed execution environment

These trends are not just buzzwords—they're actively changing how we approach web development.
    `,
    author: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Technology researcher and web development evangelist.'
    },
    publishedAt: '2024-01-20T16:45:00Z',
    readingTime: 10,
    tags: ['Web Development', 'Technology Trends', 'AI', 'WebAssembly', 'Future Tech'],
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
  }
];

export const mockCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Frontend Development',
    slug: 'frontend',
    description: 'React, Vue, Angular, and modern frontend technologies',
    postCount: 25
  },
  {
    id: '2',
    name: 'Backend Development',
    slug: 'backend',
    description: 'Server-side technologies, APIs, and databases',
    postCount: 18
  },
  {
    id: '3',
    name: 'Web Design',
    slug: 'design',
    description: 'UI/UX design, CSS, and visual development',
    postCount: 12
  },
  {
    id: '4',
    name: 'DevOps',
    slug: 'devops',
    description: 'Deployment, CI/CD, and infrastructure',
    postCount: 8
  }
];