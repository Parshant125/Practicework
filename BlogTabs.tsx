'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AllBlogsType } from '@/lib/types/blog.type';

interface BlogTabsProps {
  blogtabsname: AllBlogsType[];
  onClick: (blogtab: AllBlogsType) => void;
  activeTabSlug?: string;
}

export default function BlogTabs({ blogtabsname, onClick, activeTabSlug }: BlogTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    activeTabSlug || blogtabsname[0]?.slug || ''
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update local state when parent changes activeTabSlug
  useEffect(() => {
    if (activeTabSlug) {
      setActiveTab(activeTabSlug);
    }
  }, [activeTabSlug]);

  const handleClick = (data: AllBlogsType) => {
    setActiveTab(data.slug);
    onClick(data);
  };

  const scrollToActiveTab = (tabSlug: string) => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(
        `[data-tab-slug="${tabSlug}"]`
      ) as HTMLElement | null;

      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  };

  useEffect(() => {
    scrollToActiveTab(activeTab);
  }, [activeTab]);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-2 p-2 rounded-l-full scrollbar-hide"
      >
        {blogtabsname.map(item => (
          <Button
            key={item.slug}
            data-tab-slug={item.slug}
            onClick={() => handleClick(item)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
              activeTab === item.slug
                ? 'bg-gray-300 text-gray-900 hover:bg-gray-200 rounded-l-lg'
                : 'bg-transparent text-white hover:bg-gray-700/50'
            }`}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}