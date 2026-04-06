import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div className="hidden lg:block">
          <h1 className="text-6xl font-bold text-white mb-8">
            Create Your Account
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="glass-dark p-10 rounded-[40px] border border-white/10">
          
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                required 
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="alex@example.com" 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                  required 
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button className="w-full py-5 rounded-2xl bg-primary text-white font-bold hover:scale-[1.02] transition">
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}