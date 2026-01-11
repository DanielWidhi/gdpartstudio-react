import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validate credentials and receive token
    // For now store a simple flag to indicate authenticated admin
    localStorage.setItem("isAdmin", "1");
    const from = (location.state as any)?.from?.pathname || "/admin";
    navigate(from, { replace: true });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-white dark:bg-[#1a202c] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 dark:border-gray-800 transition-all">
        {/* Header Image Area */}
        <div className="relative h-32 bg-primary/5 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb0GTy5B4zH7fH6D1zeSRs-VKmtWx9V4sg4eiMTAWT7AfuZQ1pdkoSn-d-bBZgLfLWlJLF3ciZ5FAbaWEIWG6bapFWs8k_J7T_m53aWxQG2-Zaqv6smz8hMz8XEaHcDJw4loZORm9D90IUoiRbPBNDO33hzk-bil0zlHvrz4DoibL2QOi_4EXsDWzV_9CSfE6yX2jkiqaMWv1i-4JnXIYSFjpoxWjWM4GhZ389N1l7s0jgSfFKbVaxtmimkFJCcq_rKZ6jmt3wNsY')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-[#1a202c]/10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-12 w-12 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg mb-2">
              <span className="material-symbols-outlined text-3xl">camera_video</span>
            </div>
          </div>
        </div>
        <div className="p-8 pt-6">
          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Admin Portal</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Please sign in to manage your portfolio</p>
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-900 dark:text-white text-sm font-semibold leading-normal" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-slate-400 transition-colors"
                  id="email"
                  placeholder="admin@gdpartstudio.com"
                  type="email"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-slate-900 dark:text-white text-sm font-semibold leading-normal" htmlFor="password">
                  Password
                </label>
                <a className="text-primary hover:text-primary/80 text-xs font-semibold" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <input
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pr-12 text-base placeholder:text-slate-400 transition-colors"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center justify-center transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            <button className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 active:bg-primary/95 text-white text-base font-bold tracking-wide transition-all shadow-md shadow-primary/20">
              Sign In
            </button>
          </form>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-t border-slate-100 dark:border-slate-700 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">© 2024 GDPARTSTUDIO. All rights reserved.</p>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/" className="text-slate-500 hover:text-primary text-sm font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
