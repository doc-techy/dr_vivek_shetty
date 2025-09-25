'use client';

import { useState, useEffect } from 'react';
import { Play, Clock, Calendar, Filter, ChevronDown, Eye, ArrowRight, ArrowUp, FileText, BookOpen } from 'lucide-react';
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

interface Blog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  date: string;
  category: string;
  views: number;
  blogUrl: string;
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

const sampleBlogs: Blog[] = [
  {
    id: '1',
    title: 'Early Signs of Head & Neck Cancer: What You Need to Know',
    description: 'Learn about the warning signs and symptoms of head and neck cancer that should prompt immediate medical consultation.',
    thumbnail: 'https://picsum.photos/400/225?random=13',
    readTime: '5 min read',
    date: '2024-01-20',
    category: 'Education',
    views: 1850,
    blogUrl: '#'
  },
  {
    id: '2',
    title: 'Preparing for Head & Neck Surgery: A Complete Guide',
    description: 'Essential steps and preparations patients should take before undergoing head and neck surgical procedures.',
    thumbnail: 'https://picsum.photos/400/225?random=14',
    readTime: '8 min read',
    date: '2024-01-18',
    category: 'Surgery',
    views: 1200,
    blogUrl: '#'
  },
  {
    id: '3',
    title: 'Recovery Timeline: What to Expect After Surgery',
    description: 'A detailed timeline of the recovery process and milestones patients can expect after head and neck surgery.',
    thumbnail: 'https://picsum.photos/400/225?random=15',
    readTime: '6 min read',
    date: '2024-01-15',
    category: 'Patient Care',
    views: 2200,
    blogUrl: '#'
  },
  {
    id: '4',
    title: 'Advanced Reconstruction Techniques in Modern Surgery',
    description: 'Exploring the latest innovations in reconstructive surgery and their impact on patient outcomes.',
    thumbnail: 'https://picsum.photos/400/225?random=16',
    readTime: '10 min read',
    date: '2024-01-12',
    category: 'Reconstruction',
    views: 980,
    blogUrl: '#'
  },
  {
    id: '5',
    title: 'Nutrition Guidelines for Cancer Patients',
    description: 'Comprehensive dietary recommendations and nutritional support strategies for head and neck cancer patients.',
    thumbnail: 'https://picsum.photos/400/225?random=17',
    readTime: '7 min read',
    date: '2024-01-08',
    category: 'Lifestyle',
    views: 1650,
    blogUrl: '#'
  },
  {
    id: '6',
    title: 'Breakthrough Research in Head & Neck Oncology',
    description: 'Latest research findings and clinical trials that are shaping the future of head and neck cancer treatment.',
    thumbnail: 'https://picsum.photos/400/225?random=18',
    readTime: '12 min read',
    date: '2024-01-05',
    category: 'Research',
    views: 1400,
    blogUrl: '#'
  },
  {
    id: '7',
    title: 'Robotic Surgery: The Future of Precision Medicine',
    description: 'How robotic-assisted surgery is revolutionizing head and neck cancer treatment with improved precision.',
    thumbnail: 'https://picsum.photos/400/225?random=19',
    readTime: '9 min read',
    date: '2024-01-02',
    category: 'Surgery',
    views: 1750,
    blogUrl: '#'
  },
  {
    id: '8',
    title: 'Managing Side Effects of Cancer Treatment',
    description: 'Practical strategies for managing common side effects and maintaining quality of life during treatment.',
    thumbnail: 'https://picsum.photos/400/225?random=20',
    readTime: '6 min read',
    date: '2023-12-30',
    category: 'Patient Care',
    views: 1300,
    blogUrl: '#'
  }
];

const categories = [
  { id: 'all', label: 'All', icon: '🎯' },
  { id: 'Education', label: 'Education', icon: '📚' },
  { id: 'Surgery', label: 'Surgery', icon: '⚕️' },
  { id: 'Patient Care', label: 'Patient Care', icon: '❤️' },
  { id: 'Reconstruction', label: 'Reconstruction', icon: '🔧' }
];

export function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videosToShow, setVideosToShow] = useState(4); // Start with 4 videos (2x2 grid)
  const [showFilters, setShowFilters] = useState(false);
  const [contentType, setContentType] = useState<'videos' | 'blogs'>('videos');
  const [isMobile, setIsMobile] = useState(false);
  const [gridColumns, setGridColumns] = useState(4); // Track current grid columns

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      // Determine grid columns based on screen size
      let columns = 2; // Default for mobile
      if (width >= 768) columns = 4; // Desktop: 4 columns
      else columns = 2; // Mobile: 2 columns
      
      setGridColumns(columns);
      
      // Set videos to show: Always 2 rows (2 * columns)
      setVideosToShow(columns * 2); // 2 rows for both mobile and desktop
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const currentData = contentType === 'videos' ? sampleVideos : sampleBlogs;
  const filteredData = currentData.filter(item => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });


  const displayedItems = filteredData.slice(0, videosToShow);
  const initialVideos = gridColumns * 2; // Initial 2 rows
  const hasMoreItems = videosToShow < filteredData.length;

  const loadMore = () => {
    const increment = gridColumns * 2; // Load 2 rows worth
    setVideosToShow(prev => Math.min(prev + increment, filteredData.length));
  };

  const showLess = () => {
    const minVideos = gridColumns * 2; // Minimum 2 rows
    const decrement = gridColumns * 2; // Decrease by 2 rows
    setVideosToShow(prev => Math.max(prev - decrement, minVideos));
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

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const handleBlogClick = (blog: Blog) => {
    const slug = generateSlug(blog.title);
    const blogUrl = `/blogs/${slug}`;
    window.open(blogUrl, '_blank');
  };

  return (
    <div className="container-custom pt-4 md:pt-8 pb-8 md:pb-16">
      {/* Header */}
      <div className="text-center mb-4 relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
          Educational <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Videos and Blogs</span>
        </h2>
        
        {/* Content Type Toggle Switch and Filter - Mobile Same Line */}
        <div className="flex md:flex-col justify-center md:items-center items-center gap-3 mb-2 px-4">
          {/* Toggle Switch */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-1 flex border border-gray-200/50 shadow-md backdrop-blur-sm w-full max-w-[320px] md:min-w-[320px]">
            <button
              onClick={() => setContentType('videos')}
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-6 py-1.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all duration-700 ease-in-out transform relative overflow-hidden ${
                contentType === 'videos'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:scale-102 active:scale-98'
              }`}
              style={{
                flex: '1',
                position: 'relative',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-700 ${
                contentType === 'videos' ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <Play className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-700 ease-in-out relative z-10 ${
                contentType === 'videos' ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
              }`} />
              <span className="relative z-10">Videos</span>
            </button>
            <button
              onClick={() => setContentType('blogs')}
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-6 py-1.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all duration-700 ease-in-out transform relative overflow-hidden ${
                contentType === 'blogs'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/70 hover:scale-102 active:scale-98'
              }`}
              style={{
                flex: '1',
                position: 'relative',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-700 ${
                contentType === 'blogs' ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <BookOpen className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-700 ease-in-out relative z-10 ${
                contentType === 'blogs' ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
              }`} />
              <span className="relative z-10">Blogs</span>
            </button>
          </div>

          {/* Filter Icon - Mobile only - Same Line */}
          <div className="md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Filter className="w-5 h-5" />
              {selectedCategory !== 'all' && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  !
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showFilters && (
          <div className="md:hidden mb-4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mx-4">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <span className="text-base">{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modern Filter Section - Desktop only */}
      <div className="hidden md:block mb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Filter Toggle */}
          <div className="flex items-center gap-3">
            {/* <div className="text-sm text-gray-500">
              {filteredData.length} {contentType === 'videos' ? 'video' : 'blog'}{filteredData.length !== 1 ? 's' : ''} found
            </div> */}
          </div>
        </div>

        {/* Filter Options - Desktop only */}
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
                <span className="text-base">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Content Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-5">
        {displayedItems.map((item) => (
          <div key={item.id} className="group h-full">
            <div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 group-hover:border-blue-300/50 h-full min-h-[200px] md:min-h-[240px] flex flex-col backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/30 ${
                contentType === 'blogs' ? 'cursor-pointer' : ''
              }`}
              onClick={contentType === 'blogs' ? () => handleBlogClick(item as Blog) : undefined}
            >
              {/* Thumbnail */}
              <div className="relative h-20 md:h-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
                <Image 
                  src={item.thumbnail} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Play Button for Videos / Read Icon for Blogs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
                    {contentType === 'videos' ? (
                      <Play className="w-3 h-3 md:w-4 md:h-4 text-blue-600 ml-0.5" />
                    ) : (
                      <FileText className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                    )}
                  </div>
                </div>
                
                {/* Duration/Read Time Badge */}
                <div className="absolute bottom-1 right-1 bg-black/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                  {contentType === 'videos' ? (item as Video).duration : (item as Blog).readTime}
                </div>

                {/* Category Badge */}
                <div className="absolute top-1 left-1">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 md:p-3 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
                <h3 className={`text-xs font-bold text-gray-900 mb-1 line-clamp-2 transition-colors duration-200 min-h-[1.5rem] ${
                  contentType === 'videos' ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'
                }`}>
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-600 mb-1 line-clamp-1 flex-1 min-h-[1rem]">
                  {item.description}
                </p>
                
                {/* Metadata */}
                <div className="flex items-center justify-start text-xs text-gray-500 mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" />
                    <span className="text-xs">{formatDate(item.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons at Bottom */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
        {hasMoreItems && (
          <button 
            onClick={loadMore}
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            <span>Load More {contentType === 'videos' ? 'Videos' : 'Blogs'}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
        
        {videosToShow > initialVideos && (
          <button 
            onClick={showLess}
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            <span>Show Less</span>
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
      </div>

      {/* No Content Message */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No {contentType} found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more content.</p>
        </div>
      )}
    </div>
  );
}