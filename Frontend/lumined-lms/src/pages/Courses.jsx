import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Clock, 
  ChevronRight,
  BookOpen,
  LayoutGrid,
  List
} from 'lucide-react';
import axios from 'axios';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-dark rounded-3xl overflow-hidden border border-white/5 group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
          {course.category}
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold">
          ${course.price}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">{course.rating} ({course.students} students)</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6 font-medium">by {course.instructor}</p>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 12h 30m</span>
            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> 24 Lessons</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group-hover:scale-110">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Business', 'Marketing'];
  
  const filteredCourses = courses.filter(c => 
    (filter === 'All' || c.category === filter) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-bold text-white tracking-tighter mb-4">Explore Courses</h1>
          <p className="text-slate-400 max-w-md">Discover top-rated courses from world-class instructors and start learning today.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-80 pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all"
            />
          </div>
          <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-4 overflow-x-auto pb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              filter === cat 
                ? 'bg-primary text-white neon-glow' 
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[450px] rounded-3xl bg-white/5 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {!loading && filteredCourses.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32"
        >
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="text-slate-500 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
          <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
        </motion.div>
      )}
    </div>
  );
}
