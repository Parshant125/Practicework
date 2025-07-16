'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ViewMoreCTAProps {
  viewMoreText: string;
  viewMoreUrl: string;
  className?: string;
}

const ViewMoreCTA: React.FC<ViewMoreCTAProps> = ({
  viewMoreText,
  viewMoreUrl,
  className = '',
}) => {
  return (
    <div className={`flex justify-center mt-6 ${className}`}>
      <Link href={viewMoreUrl} passHref>
        <Button
          variant="outline"
          size="lg"
          className="group bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {viewMoreText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </Link>
    </div>
  );
};

export default ViewMoreCTA;