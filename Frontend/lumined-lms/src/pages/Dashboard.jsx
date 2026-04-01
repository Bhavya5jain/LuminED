import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  ChevronRight, 
  Play, 
  CheckCircle2,
  Bell,
  Search,
  Settings,
  User
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', hours: 2.5 },
  { name: 'Tue', hours: 4.2 },
  { name: 'Wed', hours: 3.8 },
  { name: 'Thu', hours: 5.1 },
  { name: 'Fri', hours: 2.9 },
  { name: 'Sat', hours: 6.4 },
  { name: 'Sun', hours: 4.5 },
];

const StatCard = ({ label, value, icon: Icon, color, trend }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-dark p-6 rounded-3xl border border-white/5"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
        <Icon className="text-white w-6 h-6" />
      </div>
      {trend && (
        <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> {trend}
        </span>
      )}
    </div>
    <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
    <p className="text-slate-500 text-sm font-medium">{label}</p>
  </motion.div>
);

const CourseProgress = ({ title, progress, instructor, image }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white font-bold truncate group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-xs text-slate-500 mb-2">by {instructor}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-primary" 
          />
        </div>
        <span className="text-[10px] font-bold text-slate-400">{progress}%</span>
      </div>
    </div>
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-all">
      <Play className="w-4 h-4 fill-current" />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-slate-400">You've completed 85% of your weekly goal. Keep it up!</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Quick search..." 
              className="pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-all w-64"
            />
          </div>
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-slate-950" />
          </button>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
            <img src="https://picsum.photos/seed/alex/100/100" alt="Profile" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard label="Courses in Progress" value="12" icon={BookOpen} color="bg-primary" trend="+2 this week" />
        <StatCard label="Hours Learned" value="124.5" icon={Clock} color="bg-secondary" trend="+12.4%" />
        <StatCard label="Completed Courses" value="28" icon={CheckCircle2} color="bg-emerald-500" trend="+4" />
        <StatCard label="Achievements" value="15" icon={Award} color="bg-accent" trend="+1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart */}
        <div className="lg:col-span-2 glass-dark p-8 rounded-[32px] border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Learning Activity</h3>
            <select className="bg-white/5 border border-white/10 text-xs text-slate-400 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#8b5cf6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="glass-dark p-8 rounded-[32px] border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Continue Learning</h3>
            <button className="text-xs text-primary font-bold hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            <CourseProgress 
              title="Advanced UI Motion Principles" 
              progress={65} 
              instructor="Sarah Drasner" 
              image="https://picsum.photos/seed/motion/200/200" 
            />
            <CourseProgress 
              title="React Performance Optimization" 
              progress={42} 
              instructor="Kent C. Dodds" 
              image="https://picsum.photos/seed/react/200/200" 
            />
            <CourseProgress 
              title="Machine Learning Foundations" 
              progress={88} 
              instructor="Andrew Ng" 
              image="https://picsum.photos/seed/ml/200/200" 
            />
            <CourseProgress 
              title="Digital Marketing Strategy" 
              progress={15} 
              instructor="Neil Patel" 
              image="https://picsum.photos/seed/marketing/200/200" 
            />
          </div>
          
          <button className="w-full mt-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Explore More Courses <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
