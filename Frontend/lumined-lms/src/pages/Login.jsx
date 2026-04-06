import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        
        {/* LEFT */}
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
            Join over 12,000+ students learning from the world's best instructors.
          </p>

          <div className="space-y-6">
            {[
              'Unlimited access to 450+ premium courses',
              'Verified certificates',
              'Interactive quizzes',
              'Expert mentorship'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-10 lg:p-12 rounded-[40px] border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Enter your credentials
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
  
  {/* EMAIL */}
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
    <div className="relative group">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
      <input 
        type="email" 
        placeholder="alex@example.com" 
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all"
        required 
      />
    </div>
  </div>

  {/* PASSWORD */}
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-400 ml-1">Password</label>
    <div className="relative group">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
      
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

  <button className="w-full py-5 rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all hover:scale-[1.02] active:scale-[0.98]">
    {isLoading ? 'Loading...' : 'Sign In'}
  </button>
</form>


          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary font-bold">
              Sign Up
            </Link>
          </p>

          {/* SOCIAL */}
          {/* <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="btn-secondary"><Chrome /> Google</button>
            <button className="btn-secondary"><Github /> GitHub</button>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}