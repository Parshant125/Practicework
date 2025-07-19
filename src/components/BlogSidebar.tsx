import React from 'react';
import { TrendingUp, Mail, Users, BookOpen } from 'lucide-react';
import { mockCategories, mockBlogPosts } from '../data/mockData';

const BlogSidebar: React.FC = () => {
  const popularPosts = mockBlogPosts.slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-primary-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Get the latest articles and insights delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-4">
          <BookOpen className="h-5 w-5 text-gray-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
        </div>
        <div className="space-y-3">
          {mockCategories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
            >
              <div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                  {category.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {category.description}
                </p>
              </div>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.postCount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-gray-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Popular Posts</h3>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex space-x-3 group cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <span>{post.readingTime} min read</span>
                  <span className="mx-1">•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-lg font-bold text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Blog Stats</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm text-gray-600">Total Articles</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">127</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm text-gray-600">Subscribers</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">2.4k</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm text-gray-600">Monthly Views</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">45k</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;