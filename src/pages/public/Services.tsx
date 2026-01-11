import React from 'react';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const Services: React.FC = () => {
    return (
        <div className="bg-background-light text-[#0f172a] font-body antialiased selection:bg-primary-public/20 selection:text-primary-public flex flex-col min-h-screen">
            <PublicHeader />
            <main className="flex flex-col min-h-screen">
                <header className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-white mt-16">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-public/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col gap-8 items-center">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary-public/10 bg-[#f0f9ff] shadow-sm mb-2 backdrop-blur-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-public opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-public"></span>
                            </span>
                            <span className="text-xs font-bold text-primary-public uppercase tracking-widest">Open Booking 2024-2025</span>
                        </div>
                        <h2 className="text-[#0f172a] text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-balance">
                            Abadikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-public to-blue-400">Momen Abadi</span> Anda
                        </h2>
                        <p className="text-[#64748b] text-lg md:text-xl max-w-2xl font-light leading-relaxed text-balance">
                            Layanan fotografi dan videografi profesional dengan sentuhan minimalis modern. Kami merangkai cerita visual yang elegan untuk setiap momen berharga Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
                            <a className="flex items-center justify-center rounded-full h-14 px-8 bg-[#0f172a] text-white text-base font-semibold hover:bg-primary-public hover:shadow-xl hover:shadow-primary-public/20 transition-all duration-300 hover:-translate-y-1" href="#weddings">
                                Lihat Paket
                            </a>
                        </div>
                    </div>
                </header>

                <div className="sticky top-[73px] z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 py-4 px-2">
                            <a className="px-6 py-2.5 rounded-full bg-[#f0f9ff] text-primary-public border border-primary-public/10 font-semibold whitespace-nowrap transition-colors shadow-sm ring-2 ring-transparent focus:ring-primary-public/20" href="#weddings">
                                Wedding
                            </a>
                            <a className="px-6 py-2.5 rounded-full bg-transparent hover:bg-gray-50 text-[#64748b] hover:text-[#0f172a] font-medium whitespace-nowrap transition-colors" href="#religious">
                                Upacara Keagamaan
                            </a>
                            <a className="px-6 py-2.5 rounded-full bg-transparent hover:bg-gray-50 text-[#64748b] hover:text-[#0f172a] font-medium whitespace-nowrap transition-colors" href="#events">
                                Dokumentasi Event
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-32">
                    {/* Weddings Section */}
                    <section id="weddings" className="scroll-mt-32">
                        <div className="text-center mb-16 space-y-4 relative">
                            <span className="text-primary-public font-bold tracking-widest uppercase text-xs bg-[#f0f9ff] px-3 py-1 rounded-md">Untuk Hari Spesial Anda</span>
                            <h3 className="text-[#0f172a] text-4xl font-display font-bold mt-4">Paket Wedding</h3>
                            <p className="text-[#64748b] max-w-2xl mx-auto text-lg">Pilih cakupan yang sempurna untuk pernikahan Anda. Transparan, tanpa biaya tersembunyi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                             {/* Silver */}
                            <div className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 hover:border-primary-public/40 transition-all duration-300 shadow-card hover:shadow-lg h-full">
                                <div className="mb-6">
                                    <h4 className="text-[#0f172a] text-2xl font-display font-bold mb-2">Silver</h4>
                                    <p className="text-[#64748b] text-sm leading-relaxed">Cakupan esensial untuk akad nikah atau resepsi intim.</p>
                                </div>
                                <div className="mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-[#0f172a] tracking-tight">IDR 3.000k</span>
                                        <span className="text-[#64748b] text-sm font-medium">/event</span>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-4 mb-8 flex-1">
                                     <li className="flex gap-3 text-[#64748b] text-sm items-center">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                        <span>4 Jam Liputan</span>
                                    </li>
                                     <li className="flex gap-3 text-[#64748b] text-sm items-center">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                        <span>1 Fotografer Profesional</span>
                                    </li>
                                </ul>
                                <button className="w-full py-4 rounded-xl bg-gray-50 hover:bg-white text-[#0f172a] font-semibold transition-all border border-gray-200 hover:border-primary-public hover:text-primary-public hover:shadow-lg hover:shadow-primary-public/10 mt-auto">
                                    Pilih Silver
                                </button>
                            </div>
                            
                            {/* Gold */}
                            <div className="group relative flex flex-col p-8 rounded-3xl bg-white border-2 border-primary-public shadow-xl shadow-primary-public/10 transform lg:-translate-y-4 z-10 h-full">
                                <div className="absolute top-0 right-0 p-6">
                                    <span className="bg-gradient-to-r from-primary-public to-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-blue-500/20">Paling Populer</span>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-[#0f172a] text-2xl font-display font-bold mb-2">Gold</h4>
                                    <p className="text-[#64748b] text-sm leading-relaxed">Pilihan standar untuk pernikahan lengkap, foto & video.</p>
                                </div>
                                <div className="mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-bold text-[#0f172a] tracking-tight">IDR 5.500k</span>
                                        <span className="text-[#64748b] text-sm font-medium">/event</span>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-4 mb-8 flex-1">
                                    <li className="flex gap-3 text-[#0f172a] text-sm font-medium items-center">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-public text-white flex items-center justify-center shadow-sm shadow-primary-public/30">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                        <span>8 Jam Liputan</span>
                                    </li>
                                     <li className="flex gap-3 text-[#0f172a] text-sm font-medium items-center">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-public text-white flex items-center justify-center shadow-sm shadow-primary-public/30">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                        <span>1 Fotografer + 1 Videografer</span>
                                    </li>
                                </ul>
                                <button className="w-full py-4 rounded-xl bg-primary-public hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-primary-public/30 hover:shadow-primary-public/50 hover:-translate-y-0.5 mt-auto">
                                    Pilih Gold
                                </button>
                            </div>
                            
                             {/* Platinum */}
                             <div className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 hover:border-primary-public/40 transition-all duration-300 shadow-card hover:shadow-lg h-full">
                                <div className="mb-6">
                                    <h4 className="text-[#0f172a] text-2xl font-display font-bold mb-2">Platinum</h4>
                                    <p className="text-[#64748b] text-sm leading-relaxed">Pengalaman sinematik seharian penuh dengan drone.</p>
                                </div>
                                <div className="mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-[#0f172a] tracking-tight">IDR 8.000k</span>
                                        <span className="text-[#64748b] text-sm font-medium">/event</span>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-4 mb-8 flex-1">
                                    <li className="flex gap-3 text-[#64748b] text-sm items-center">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                        <span>Seharian Penuh (12 Jam)</span>
                                    </li>
                                </ul>
                                <button className="w-full py-4 rounded-xl bg-gray-50 hover:bg-white text-[#0f172a] font-semibold transition-all border border-gray-200 hover:border-primary-public hover:text-primary-public hover:shadow-lg hover:shadow-primary-public/10 mt-auto">
                                    Pilih Platinum
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default Services;