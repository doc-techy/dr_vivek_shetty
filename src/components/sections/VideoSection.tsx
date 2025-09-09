'use client';

import { useState } from 'react';
import { Play, Clock, Calendar, Filter, Search } from 'lucide-react';
import Image from 'next/image';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  category: string;
  views: number;
  videoUrl: string;
}

const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Understanding Head & Neck Cancer: A Comprehensive Overview',
    description: 'Dr. Vivek Shetty explains the basics of head and neck cancer, including types, symptoms, and early detection methods.',
    thumbnail: '/images/video-thumbnail-1.jpg',
    duration: '12:45',
    date: '2024-01-15',
    category: 'Education',
    views: 1250,
    videoUrl: '#'
  },
  {
    id: '2',
    title: 'Surgical Techniques in Head & Neck Oncology',
    description: 'Advanced surgical procedures and techniques used in head and neck cancer treatment, with detailed explanations.',
    thumbnail: '/images/video-thumbnail-2.jpg',
    duration: '18:30',
    date: '2024-01-10',
    category: 'Surgery',
    views: 890,
    videoUrl: '#'
  },
  {
    id: '3',
    title: 'Post-Surgical Care and Recovery',
    description: 'Essential information for patients and families about post-surgical care, recovery process, and what to expect.',
    thumbnail: '/images/video-thumbnail-3.jpg',
    duration: '15:20',
    date: '2024-01-05',
    category: 'Patient Care',
    views: 2100,
    videoUrl: '#'
  },
  {
    id: '4',
    title: 'Reconstructive Surgery in Head & Neck Oncology',
    description: 'Understanding reconstructive procedures and their role in restoring function and appearance after cancer surgery.',
    thumbnail: '/images/video-thumbnail-4.jpg',
    duration: '22:15',
    date: '2023-12-28',
    category: 'Reconstruction',
    views: 1560,
    videoUrl: '#'
  },
  {
    id: '5',
    title: 'Nutrition and Lifestyle After Head & Neck Surgery',
    description: 'Dietary recommendations and lifestyle modifications for optimal recovery and long-term health.',
    thumbnail: '/images/video-thumbnail-5.jpg',
    duration: '14:40',
    date: '2023-12-20',
    category: 'Lifestyle',
    views: 980,
    videoUrl: '#'
  },
  {
    id: '6',
    title: 'Latest Advances in Head & Neck Oncology',
    description: 'Recent developments, new treatment modalities, and emerging technologies in head and neck cancer care.',
    thumbnail: '/images/video-thumbnail-6.jpg',
    duration: '20:10',
    date: '2023-12-15',
    category: 'Research',
    views: 1750,
    videoUrl: '#'
  }
];

const categories = ['All', 'Education', 'Surgery', 'Patient Care', 'Reconstruction', 'Lifestyle', 'Research'];

export function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = sampleVideos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="container mx-auto px-4 py-16">
      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <Filter className="text-gray-600 w-5 h-5" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
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

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
          Load More Videos
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Subscribe for More Educational Content
        </h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Stay updated with the latest educational videos on Head & Neck Oncology, 
          surgical techniques, and patient care from Dr. Vivek Shetty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
