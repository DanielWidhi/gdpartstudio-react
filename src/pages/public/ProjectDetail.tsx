import React, { useEffect, useState } from "react";
import PublicHeader from "../../components/PublicHeader";
import PublicFooter from "../../components/PublicFooter";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../api/posts";
import type { Post } from "../../data/posts";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const num = Number(id);
    if (!Number.isNaN(num)) {
      getPostById(num).then((p) => {
        if (mounted) {
          setPost(p ?? null);
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
    }
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-slate-600 mb-4">Project not found.</p>
        <Link to="/portfolio" className="text-sm text-emerald-600 underline">
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#1e293b] font-body antialiased selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <section className="pt-32 pb-10 sm:pt-40 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/portfolio" className="hover:text-slate-900 transition-colors">
                Portfolio
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-slate-900 font-medium">{post.category}</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <div className="max-w-2xl">
                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">{post.category}</span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                  {post.title}: <br />
                  <span className="text-slate-500 font-light italic">{post.subtitle ?? post.client}</span>
                </h1>
              </div>
              <div className="flex gap-12 lg:pb-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Date</span>
                  <span className="text-sm font-medium text-slate-900">{post.date ?? "—"}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Location</span>
                  <span className="text-sm font-medium text-slate-900">{post.location ?? "—"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl aspect-[16/9] sm:aspect-[21/9] shadow-lg">
              <img alt={post.title} className="absolute inset-0 h-full w-full object-cover" src={post.heroImage} />
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4 space-y-8">
                <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-100">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-6">Project Info</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Client</span>
                      <span className="block text-base text-slate-700 mt-1">{post.client ?? "—"}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Services</span>
                      <span className="block text-base text-slate-700 mt-1">{post.services ?? "—"}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Venue</span>
                      <span className="block text-base text-slate-700 mt-1">{post.location ?? "—"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">The Concept</h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">{post.content}</p>
                {post.excerpt && <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">{post.excerpt}</p>}
                <blockquote className="border-l-4 border-slate-900 pl-6 my-10 italic text-slate-700 text-xl font-display">"GDPARTSTUDIO understood the brief and delivered timeless imagery."</blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img alt="Primary image" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src={post.images?.[0] ?? post.heroImage} />
              </div>
              <div className="grid grid-cols-1 gap-8">
                {post.images?.slice(1, 3).map((img, i) => (
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100" key={i}>
                    <img alt={`detail-${i}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src={img} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">format_quote</span>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-slate-900 leading-normal mb-8">"{post.title} — a quiet, honest documentation that endures."</h3>
            <div className="flex items-center justify-center gap-4">
              <div className="size-12 rounded-full bg-slate-100 overflow-hidden">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold">{(post.client || "C").charAt(0)}</div>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900">{post.client ?? "Client"}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{post.client ? "The Client" : ""}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
};

export default ProjectDetail;
