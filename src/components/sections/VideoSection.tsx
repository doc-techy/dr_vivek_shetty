'use client';

import { useState } from 'react';
import { Play, Clock, Calendar, Filter, ChevronDown, Eye, ArrowRight, ArrowUp } from 'lucide-react';
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
    thumbnail: 'https://picsum.photos/400/225?random=1',
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
    thumbnail: 'https://picsum.photos/400/225?random=2',
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
    thumbnail: 'https://picsum.photos/400/225?random=3',
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
    thumbnail: 'https://picsum.photos/400/225?random=4',
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
    thumbnail: 'https://picsum.photos/400/225?random=5',
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
    thumbnail: 'https://picsum.photos/400/225?random=6',
    duration: '20:10',
    date: '2023-12-15',
    category: 'Research',
    views: 1750,
    videoUrl: '#'
  },
  {
    id: '7',
    title: 'Minimally Invasive Surgery Techniques',
    description: 'Exploring the latest minimally invasive approaches in head and neck surgical oncology for better patient outcomes.',
    thumbnail: 'https://picsum.photos/400/225?random=7',
    duration: '16:30',
    date: '2023-12-10',
    category: 'Surgery',
    views: 1420,
    videoUrl: '#'
  },
  {
    id: '8',
    title: 'Patient Communication and Counseling',
    description: 'Effective communication strategies for discussing treatment options and managing patient expectations.',
    thumbnail: 'https://picsum.photos/400/225?random=8',
    duration: '13:45',
    date: '2023-12-05',
    category: 'Patient Care',
    views: 980,
    videoUrl: '#'
  },
  {
    id: '9',
    title: 'Advanced Imaging in Head & Neck Cancer',
    description: 'Understanding the role of modern imaging techniques in diagnosis and treatment planning.',
    thumbnail: 'https://picsum.photos/400/225?random=9',
    duration: '19:20',
    date: '2023-11-28',
    category: 'Education',
    views: 1650,
    videoUrl: '#'
  },
  {
    id: '10',
    title: 'Multidisciplinary Team Approach',
    description: 'The importance of collaborative care in head and neck oncology treatment.',
    thumbnail: 'https://picsum.photos/400/225?random=10',
    duration: '14:15',
    date: '2023-11-20',
    category: 'Education',
    views: 1200,
    videoUrl: '#'
  },
  {
    id: '11',
    title: 'Quality of Life After Treatment',
    description: 'Supporting patients in maintaining quality of life during and after head and neck cancer treatment.',
    thumbnail: 'https://picsum.photos/400/225?random=11',
    duration: '17:50',
    date: '2023-11-15',
    category: 'Lifestyle',
    views: 1350,
    videoUrl: '#'
  },
  {
    id: '12',
    title: 'Innovative Reconstructive Techniques',
    description: 'Latest advances in reconstructive surgery for head and neck cancer patients.',
    thumbnail: 'https://picsum.photos/400/225?random=12',
    duration: '21:30',
    date: '2023-11-10',
    category: 'Reconstruction',
    views: 1100,
    videoUrl: '#'
  }
];

const categories = [
  { id: 'all', label: 'All Videos', icon: '🎥' },
  { id: 'Education', label: 'Education', icon: '📚' },
  { id: 'Surgery', label: 'Surgery', icon: '⚕️' },
  { id: 'Patient Care', label: 'Patient Care', icon: '❤️' },
  { id: 'Reconstruction', label: 'Reconstruction', icon: '🔧' }
];

export function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videosToShow, setVideosToShow] = useState(4); // Start with 4 videos (1 row)
  const [showFilters, setShowFilters] = useState(false);

  const filteredVideos = sampleVideos.filter(video => {
    return selectedCategory === 'all' || video.category === selectedCategory;
  });

  const displayedVideos = filteredVideos.slice(0, videosToShow);
  const hasMoreVideos = videosToShow < filteredVideos.length;

  const loadMore = () => {
    setVideosToShow(prev => Math.min(prev + 4, filteredVideos.length));
  };

  const showLess = () => {
    setVideosToShow(prev => Math.max(prev - 4, 4));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return `${views}`;
  };

  return (
    <div className="container-custom pb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Educational <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Videos</span>
        </h2>
      </div>

      {/* Modern Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500">
              {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Filter Options - Always Visible */}
        <div className="mt-4 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Single Row Video Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayedVideos.map((video) => (
          <div key={video.id} className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-transparent">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group-hover:bg-white">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm font-medium">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {video.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Video Metadata */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(video.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{formatViews(video.views)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons at Bottom */}
      <div className="flex justify-center gap-4">
        {hasMoreVideos && (
          <button 
            onClick={loadMore}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Load More Videos</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
        
        {videosToShow > 4 && (
          <button 
            onClick={showLess}
            className="flex items-center gap-2 px-8 py-4 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Show Less</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* No Videos Message */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more content.</p>
        </div>
      )}
    </div>
  );
}