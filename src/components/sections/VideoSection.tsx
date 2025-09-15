'use client';

import { useState } from 'react';
import { Play, Clock, Calendar, Filter } from 'lucide-react';
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

  // Load More functionality (2 rows = 8 videos initially)
  const initialVideosToShow = 8;
  const [videosToShow, setVideosToShow] = useState(initialVideosToShow);
  const displayedVideos = filteredVideos.slice(0, videosToShow);
  const hasMoreVideos = videosToShow < filteredVideos.length;

  const loadMore = () => {
    setVideosToShow(prev => Math.min(prev + 8, filteredVideos.length));
  };

  return (
    <div className="container-custom pb-16">
      {/* Page Title */}
      <div className="mb-10 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3">Educational Videos</h2>
        <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto">Browse curated videos by category to learn more about Head & Neck Oncology.</p>
      </div>

      {/* Categories Only */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <Filter className="text-gray-600 w-5 h-5" />
        <div className="flex flex-wrap gap-2 justify-center">
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

      {/* Video Grid - 2 x 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-primary-200">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                fill 
                className="object-cover" 
                onError={(e) => {
                  // Fallback to gradient background if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 text-primary-600 ml-0.5" />
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
              
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-3">
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
      {hasMoreVideos && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={loadMore}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
}
