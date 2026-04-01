import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Clock, 
  Settings, 
  Edit3, 
  Camera,
  CheckCircle2,
  ChevronRight,
  Shield,
  CreditCard,
  Bell
} from 'lucide-react';

const ProfileStat = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-4 p-6 rounded-3xl glass-dark border border-white/5">
    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{label}</p>
    </div>
  </div>
);

const Achievement = ({ title, date, icon: Icon, color }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} shadow-lg`}>
      <Icon className="text-white w-6 h-6" />
    </div>
    <div className="flex-1">
      <h4 className="text-white font-bold group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-xs text-slate-500">Earned on {date}</p>
    </div>
    <ChevronRight className="text-slate-600 w-4 h-4 group-hover:text-white transition-colors" />
  </div>
);

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Profile Header */}
      <div className="relative mb-12">
        <div className="h-64 w-full rounded-[40px] overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/cover/1920/600" 
            alt="Cover" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          <button className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/10 flex items-center gap-2 hover:bg-black/70 transition-all">
            <Camera className="w-4 h-4" /> Change Cover
          </button>
        </div>
        
        <div className="absolute -bottom-12 left-12 flex items-end gap-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[32px] overflow-hidden border-4 border-slate-950 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/alex/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center border-4 border-slate-950 hover:scale-110 transition-transform">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          
          <div className="pb-4">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-4xl font-bold text-white tracking-tighter">Alex Thompson</h1>
              <div className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/30">
                Pro Member
              </div>
            </div>
            <p className="text-slate-400 font-medium flex items-center gap-4">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Joined March 2024</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24">
        {/* Left Column - Info */}
        <div className="space-y-8">
          <div className="glass-dark p-8 rounded-[32px] border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">About Me</h3>
              <button className="text-slate-500 hover:text-primary transition-colors"><Edit3 className="w-5 h-5" /></button>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Passionate learner and aspiring UI/UX designer. Currently mastering React and motion principles to build immersive digital experiences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <Mail className="text-slate-500 w-5 h-5" /> alex.thompson@example.com
              </div>
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <BookOpen className="text-slate-500 w-5 h-5" /> 12 Active Courses
              </div>
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <Award className="text-slate-500 w-5 h-5" /> 28 Certifications
              </div>
            </div>
          </div>

          <div className="glass-dark p-8 rounded-[32px] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Settings</h3>
            <div className="space-y-2">
              {[
                { label: 'Account Security', icon: Shield },
                { label: 'Billing & Subscription', icon: CreditCard },
                { label: 'Notification Settings', icon: Bell },
                { label: 'Privacy Preferences', icon: Settings },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                  <ChevronRight className="text-slate-700 w-4 h-4 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Achievements */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ProfileStat label="Completed" value="28" icon={CheckCircle2} />
            <ProfileStat label="Hours" value="124.5" icon={Clock} />
            <ProfileStat label="Points" value="12,450" icon={Award} />
          </div>

          <div className="glass-dark p-8 rounded-[32px] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-8">Recent Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Achievement 
                title="Motion Master" 
                date="Mar 12, 2024" 
                icon={Zap} 
                color="bg-purple-500" 
              />
              <Achievement 
                title="Quick Learner" 
                date="Mar 08, 2024" 
                icon={TrendingUp} 
                color="bg-blue-500" 
              />
              <Achievement 
                title="Top Performer" 
                date="Feb 28, 2024" 
                icon={Star} 
                color="bg-yellow-500" 
              />
              <Achievement 
                title="Community Hero" 
                date="Feb 15, 2024" 
                icon={CheckCircle2} 
                color="bg-emerald-500" 
              />
            </div>
            
            <button className="w-full mt-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all">
              View All Achievements
            </button>
          </div>

          <div className="glass-dark p-8 rounded-[32px] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-8">Learning Path</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/5" />
              
              {[
                { title: 'UI/UX Design Foundations', status: 'Completed', date: 'Feb 2024' },
                { title: 'Advanced React Patterns', status: 'In Progress', date: 'Current' },
                { title: 'Full-stack Development', status: 'Upcoming', date: 'Next' },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    step.status === 'Completed' ? 'bg-emerald-500' : 
                    step.status === 'In Progress' ? 'bg-primary animate-pulse' : 'bg-slate-800'
                  }`}>
                    {step.status === 'Completed' ? <CheckCircle2 className="text-white w-6 h-6" /> : <BookOpen className="text-white w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{step.status} • {step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
