import React from 'react';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const Contact: React.FC = () => {
    return (
        <div className="bg-[#fbfcfe] text-slate-800 overflow-x-hidden antialiased flex flex-col min-h-screen font-body">
            <PublicHeader />
            <main className="flex-grow pt-24">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                        <div className="lg:col-span-5 flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <span className="inline-flex items-center gap-2 py-1 px-3 w-fit rounded-full bg-blue-50/80 text-primary-public text-xs font-bold tracking-wide uppercase">
                                    <span className="size-2 rounded-full bg-primary-public"></span>
                                    Hubungi Kami
                                </span>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] font-display">
                                    Ceritakan <br/>
                                    <span className="text-primary-public">Momen Anda</span>
                                </h1>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    Kami siap mendengarkan cerita dan ide acara Anda. Jangan ragu untuk menghubungi kami untuk konsultasi gratis.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-5 group items-start">
                                    <div className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-public shrink-0 group-hover:bg-primary-public group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <span className="material-symbols-outlined text-[24px]">location_on</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-slate-900 font-bold text-base mb-1 font-display">Studio Kami</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">Jl. Fotografi No. 12, Kebayoran Baru<br/>Jakarta Selatan, Indonesia 12160</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group items-start">
                                    <div className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-public shrink-0 group-hover:bg-primary-public group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <span className="material-symbols-outlined text-[24px]">mail</span>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-slate-900 font-bold text-base mb-1 font-display">Email</h3>
                                        <a className="text-slate-500 text-sm hover:text-primary-public transition-colors" href="mailto:hello@gdpartstudio.com">hello@gdpartstudio.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft border border-slate-100/50 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2 font-display">Kirim Pesan</h2>
                                    <p className="text-slate-500 mb-8 font-light">Lengkapi formulir di bawah ini, kami akan merespons secepatnya.</p>
                                    <form className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <label className="flex flex-col gap-1.5">
                                                <span className="text-slate-700 text-sm font-medium ml-1">Nama Lengkap</span>
                                                <input className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-5 h-12 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary-public/10 focus:border-primary-public transition-all" placeholder="Nama Anda" type="text"/>
                                            </label>
                                            <label className="flex flex-col gap-1.5">
                                                <span className="text-slate-700 text-sm font-medium ml-1">Email</span>
                                                <input className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-5 h-12 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary-public/10 focus:border-primary-public transition-all" placeholder="Alamat Email" type="email"/>
                                            </label>
                                        </div>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-slate-700 text-sm font-medium ml-1">Subjek</span>
                                            <input className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-5 h-12 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary-public/10 focus:border-primary-public transition-all" placeholder="Misal: Tanya Jasa Wedding" type="text"/>
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-slate-700 text-sm font-medium ml-1">Pesan</span>
                                            <textarea className="w-full rounded-xl border-slate-200 bg-slate-50/50 p-5 h-40 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary-public/10 focus:border-primary-public resize-none transition-all" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                                        </label>
                                        <button className="mt-2 w-full h-14 bg-slate-900 hover:bg-primary-public text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-slate-900/10 hover:shadow-blue-500/20" type="button">
                                            <span>Kirim Pesan</span>
                                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default Contact;