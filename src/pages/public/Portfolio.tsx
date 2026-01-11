import React, { useEffect, useState } from "react";
import PublicHeader from "../../components/PublicHeader";
import PublicFooter from "../../components/PublicFooter";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../api/posts";
import type { Post } from "../../data/posts";

const Portfolio: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Works");

  useEffect(() => {
    let mounted = true;
    getAllPosts().then((data) => {
      if (mounted) setPosts(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="bg-white text-[#1e293b] font-body antialiased selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Available for 2024 Bookings
              </div>
              <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl md:text-8xl max-w-5xl leading-[1.1]">
                Timeless Moments, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 font-light italic">Artfully Curated</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-slate-600 font-light leading-relaxed">
                GDPARTSTUDIO specializes in minimalist documentation for weddings, religious ceremonies, and exclusive events. We craft visual legacies with elegance and clarity.
              </p>
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center overflow-x-auto no-scrollbar py-5">
              <div className="flex items-center p-1 bg-slate-100/50 rounded-full border border-slate-200/50">
                {["All Works", "Weddings", "Religious", "Events"].map((tab) => {
                  const isActive = tab === selectedCategory;
                  return (
                    <button
                      key={tab}
                      onClick={() => setSelectedCategory(tab)}
                      aria-pressed={isActive}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all focus:outline-none mr-0 ${
                        isActive ? "bg-white text-slate-900 font-semibold shadow-sm ring-1 ring-black/5" : "bg-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {posts.length === 0 &&
                // show 3 placeholders while loading
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5]"></div>
                    <div className="mt-5 h-5 w-3/4 bg-slate-100 rounded"></div>
                  </div>
                ))}

              {posts
                .filter((post) => {
                  if (selectedCategory === "All Works") return true;
                  if (selectedCategory === "Weddings") return /wedding/i.test(post.category);
                  if (selectedCategory === "Religious") return /religious/i.test(post.category);
                  if (selectedCategory === "Events") return /event/i.test(post.category);
                  return true;
                })
                .map((post) => (
                  <Link to={`/portfolio/${post.id}`} key={post.id} className="group block cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] isolate shadow-sm ring-1 ring-slate-900/5">
                      <img alt={post.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={post.heroImage} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                    <div className="mt-5 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors font-display">{post.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{post.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="mt-20 flex justify-center">
              <button className="group flex items-center gap-3 px-8 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 transition-all hover:bg-white hover:border-slate-300 hover:shadow-md">
                Load More Projects
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">expand_more</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
};

export default Portfolio;
