import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Github, 
  Chrome, 
  GraduationCap,
  Eye,
  EyeOff,
  CheckCircle2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 neon-glow">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
          <h1 className="text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
            Unlock Your <span className="text-gradient">Potential</span> Today.
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Join over 12,000+ students learning from the world's best instructors in a modern, interactive environment.
          </p>
          
          <div className="space-y-6">
            {[
              'Unlimited access to 450+ premium courses',
              'Verified certificates upon completion',
              'Interactive quizzes and hands-on projects',
              'Direct mentorship from industry experts'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-10 lg:p-12 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-slate-500">
              {isLogin ? 'Enter your credentials to access your account' : 'Join LuminEd and start your learning journey'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="alex@example.com" 
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-bold text-slate-400">Password</label>
                {isLogin && <button type="button" className="text-xs text-primary font-bold hover:underline">Forgot?</button>}
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-5 rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden"
            >
              {isLoading ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <span className="relative px-4 bg-[#1e293b] text-xs text-slate-500 font-bold uppercase tracking-widest">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                <Chrome className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" /> GitHub
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-500 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
