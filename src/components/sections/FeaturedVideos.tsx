'use client';

import { Play, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  category: string;
  views: number;
}

const featuredVideos: Video[] = [
  {
    id: '1',
    title: 'Understanding Head & Neck Cancer: A Comprehensive Overview',
    description: 'Dr. Vivek Shetty explains the basics of head and neck cancer, including types, symptoms, and early detection methods.',
    duration: '12:45',
    date: '2024-01-15',
    category: 'Education',
    views: 1250
  },
  {
    id: '2',
    title: 'Surgical Techniques in Head & Neck Oncology',
    description: 'Advanced surgical procedures and techniques used in head and neck cancer treatment, with detailed explanations.',
    duration: '18:30',
    date: '2024-01-10',
    category: 'Surgery',
    views: 890
  },
  {
    id: '3',
    title: 'Post-Surgical Care and Recovery',
    description: 'Essential information for patients and families about post-surgical care, recovery process, and what to expect.',
    duration: '15:20',
    date: '2024-01-05',
    category: 'Patient Care',
    views: 2100
  }
];

export function FeaturedVideos() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from Dr. Vivek Shetty&apos;s expertise through comprehensive educational videos 
            covering Head & Neck Oncology, surgical procedures, and patient care.
          </p>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary-200 to-primary-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </div>
                    <p className="text-primary-700 font-medium">Click to Play</p>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {video.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                {/* Video Metadata */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(video.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatViews(video.views)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Videos Button */}
        <div className="text-center">
          <Link
            href="/videos"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            View All Educational Videos
            <Play className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
