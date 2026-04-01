import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Users, 
  Star, 
  BookOpen, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold mb-8">
            <Zap className="w-4 h-4 fill-current" />
            <span>The Future of Learning is Here</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-tight mb-8">
            Master New Skills with <span className="text-gradient">LuminEd LMS</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
            Access world-class courses from industry experts. Learn at your own pace with interactive content and animated lessons.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses" className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Browse Courses <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" /> Watch Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-slate-950"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="text-white font-bold">12k+ Students</p>
              <p className="text-slate-500">Joined this month</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 glass shadow-2xl">
            <img 
              src="https://picsum.photos/seed/learning/1200/800" 
              alt="Learning" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Next Lesson</span>
                  <span className="text-xs text-slate-400">12:40 mins left</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Advanced UI Motion Principles</h3>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-dark p-4 rounded-2xl border border-white/10 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Award className="text-accent w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Certificates</p>
                <p className="text-sm font-bold text-white">Verified Skills</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Active Students', value: '15k+', icon: Users },
    { label: 'Total Courses', value: '450+', icon: BookOpen },
    { label: 'Expert Mentors', value: '120+', icon: Star },
    { label: 'Success Rate', value: '98%', icon: Shield },
  ];

  return (
    <section className="py-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <stat.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Interactive Learning',
      desc: 'Engage with dynamic content, quizzes, and hands-on projects that make learning fun.',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Expert Instructors',
      desc: 'Learn from industry leaders who bring real-world experience to every lesson.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Flexible Schedule',
      desc: 'Study at your own pace, anytime, anywhere. Your education fits your lifestyle.',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Why Choose LuminEd?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide a comprehensive learning experience designed to help you succeed in the modern digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl border border-white/10 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      
      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden p-12 lg:p-20 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary -z-10" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10" />
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tighter">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of students and start mastering new skills today. Unlimited access to all premium courses.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/login" className="px-10 py-5 rounded-2xl bg-white text-primary font-bold hover:bg-slate-100 transition-all hover:scale-105 active:scale-95">
                Join for Free
              </Link>
              <Link to="/courses" className="px-10 py-5 rounded-2xl bg-black/20 text-white font-bold hover:bg-black/30 transition-all border border-white/20">
                View All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
