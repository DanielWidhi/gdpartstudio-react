import React from 'react';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';
import { Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
    return (
        <div className="bg-white text-[#1e293b] font-body antialiased selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden flex flex-col min-h-screen">
            <PublicHeader />
            <main className="flex-grow">
                <section className="pt-32 pb-10 sm:pt-40 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                            <Link to="/portfolio" className="hover:text-slate-900 transition-colors">Portfolio</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-slate-900 font-medium">Weddings</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                            <div className="max-w-2xl">
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Wedding Photography</span>
                                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                                    Intimate Vows: <br/>
                                    <span className="text-slate-500 font-light italic">Sarah & James</span>
                                </h1>
                            </div>
                            <div className="flex gap-12 lg:pb-2">
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Date</span>
                                    <span className="text-sm font-medium text-slate-900">November 14, 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Location</span>
                                    <span className="text-sm font-medium text-slate-900">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-3xl aspect-[16/9] sm:aspect-[21/9] shadow-lg">
                            <img alt="Intimate Vows Hero" className="absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtk0wGbbjfAOGWZnzUxuPGqfBwo3M7Ev2bZx6AayTNoDYQgrFEYNrQEXP74pvzJxAv4tEYF7PzkfdpsK20b5z8YeXMjPxtkilXNrqBqntQbP9ib60TceUj2EhBu55m318jwNgq0kV-ofAgWKwApSug47Q92sAUCCVWknekYDooFx3U-U0RBp69ZqxGFgo6JZ3PSpAmKEUIhXt0bMOEM3_5KZspWlLhfolly3LhWG-Eig2oyQzf-v6jRCay2i1-bMD7jdoDfZkcVC0"/>
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
                                            <span className="block text-base text-slate-700 mt-1">Sarah & James</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Services</span>
                                            <span className="block text-base text-slate-700 mt-1">Photography, Art Direction</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Venue</span>
                                            <span className="block text-base text-slate-700 mt-1">Private Garden Estate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-8">
                                <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">The Concept</h2>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                                    For Sarah and James, the focus was entirely on authenticity. They wanted a documentation style that felt less like a production and more like a memory unfolding in real-time. Our approach was to blend into the background, capturing the fleeting glances, the nervous laughter, and the overwhelming joy without interfering with the flow of their day.
                                </p>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                                    We utilized natural light throughout the ceremony to maintain the soft, romantic atmosphere of the garden setting. The post-processing reflects our signature minimalist style—clean tones, true-to-life colors, and a timeless finish that ensures these photos will look as beautiful in fifty years as they do today.
                                </p>
                                <blockquote className="border-l-4 border-slate-900 pl-6 my-10 italic text-slate-700 text-xl font-display">
                                    "We didn't want posed photos. We wanted to remember how we felt. GDPARTSTUDIO understood that perfectly."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-white">
                     <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                                <img alt="Couple Portrait" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtk0wGbbjfAOGWZnzUxuPGqfBwo3M7Ev2bZx6AayTNoDYQgrFEYNrQEXP74pvzJxAv4tEYF7PzkfdpsK20b5z8YeXMjPxtkilXNrqBqntQbP9ib60TceUj2EhBu55m318jwNgq0kV-ofAgWKwApSug47Q92sAUCCVWknekYDooFx3U-U0RBp69ZqxGFgo6JZ3PSpAmKEUIhXt0bMOEM3_5KZspWlLhfolly3LhWG-Eig2oyQzf-v6jRCay2i1-bMD7jdoDfZkcVC0"/>
                            </div>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                                    <img alt="Ring Details" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRBbm-9TGCiuGB9Tb_12c2EBw6BNBoFlyWg4nQMHjgKjae1SzeXaJmDbg6rtgJyTsbKfYDMdtj2h6YZdmsPZaRIViiiY2OQtlyFTEhqqDqudsm9UqHX-nencwyWNc3INeCyBi897x17_YxT38HP4jkI7kGX7jzuqaZhQgsKyz14rshcoJeBWB23OYps2tb2-heUv10u2pISiuCHCrWxtXwVZgREGBHGJe5kfjbZHOiFXEmMrHtoJ1F4dDCvf8xgXAj-37LF87PzE"/>
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                                    <img alt="Decor Details" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRBbm-9TGCiuGB9Tb_12c2EBw6BNBoFlyWg4nQMHjgKjae1SzeXaJmDbg6rtgJyTsbKfYDMdtj2h6YZdmsPZaRIViiiY2OQtlyFTEhqqDqudsm9UqHX-nencwyWNc3INeCyBi897x17_YxT38HP4jkI7kGX7jzuqaZhQgsKyz14rshcoJeBWB23OYps2tb2-heUv10u2pISiuCHCrWxtXwVZgREGBHGJe5kfjbZHOiFXEmMrHtoJ1F4dDCvf8xgXAj-37LF87PzE"/>
                                </div>
                            </div>
                        </div>
                     </div>
                </section>
                
                 <section className="py-24 bg-white">
                    <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">format_quote</span>
                        <h3 className="font-display text-2xl md:text-3xl font-medium text-slate-900 leading-normal mb-8">
                            "GDPARTSTUDIO was the best investment we made for our wedding. The team was professional, unobtrusive, and the final gallery brought tears to our eyes. They captured moments we didn't even know happened."
                        </h3>
                        <div className="flex items-center justify-center gap-4">
                            <div className="size-12 rounded-full bg-slate-100 overflow-hidden">
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold">S</div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900">Sarah Jenkins</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">The Bride</div>
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