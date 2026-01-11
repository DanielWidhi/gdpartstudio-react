import React from 'react';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col font-body">
            <PublicHeader transparent={true} />
            
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-stone-200">
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none"></div>
                    <div className="w-full h-full bg-cover bg-center animate-[pulse_15s_ease-in-out_infinite]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP66-4wr2ROM6I1aRWj8fe4HA0A0VY7BJkKA4FWqQbqeOuNX7rNWZGf-ZzisRVIFFr_J-meud2Z4Pj40sgCjUk0YyqhRXVckeo593EwnrFwABdBkcPBUZ7w9_9n3oIuyjmabFHSj3rDAz3a39MKF-gSvOYWhNxRshIMR0cEV5ZaiHr2iBwlEUR1chldYOFGrBZdXaD7F1yrRWaYEbVjWeXlbn3-LNpteF1U9DLC686osT7a_NL1WdFedgcDGyWnwCiIfrS2ESBSXc')", animationDirection: 'alternate', animationDuration: '20s' }}></div>
                </div>
                <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group cursor-pointer hidden md:flex items-center justify-center p-4">
                    <span className="material-symbols-outlined text-white/70 group-hover:text-white text-4xl font-thin transition-all duration-300 group-hover:-translate-x-1">west</span>
                </button>
                <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group cursor-pointer hidden md:flex items-center justify-center p-4">
                    <span className="material-symbols-outlined text-white/70 group-hover:text-white text-4xl font-thin transition-all duration-300 group-hover:translate-x-1">east</span>
                </button>
                <div className="absolute bottom-12 right-6 z-30 flex gap-6 md:hidden">
                    <button className="text-white/80 active:text-white">
                        <span className="material-symbols-outlined text-3xl font-light">west</span>
                    </button>
                    <button className="text-white/80 active:text-white">
                        <span className="material-symbols-outlined text-3xl font-light">east</span>
                    </button>
                </div>
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-4">
                    <div className="h-[1px] w-16 bg-white shadow-sm transition-all duration-300"></div>
                    <div className="h-[1px] w-16 bg-white/30 shadow-sm hover:bg-white/60 cursor-pointer transition-all duration-300"></div>
                    <div className="h-[1px] w-16 bg-white/30 shadow-sm hover:bg-white/60 cursor-pointer transition-all duration-300"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white relative z-20">
                <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36 flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
                        <div className="max-w-3xl">
                            <span className="block text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-8 font-medium pl-1 border-l border-stone-300 h-3 flex items-center">Selected Works</span>
                            <h2 className="text-stone-900 font-display text-4xl md:text-6xl font-extralight leading-[1.15] tracking-tight">
                                Visualizing emotions through <br/> <span className="font-normal text-stone-600 italic font-serif">modern storytelling</span>.
                            </h2>
                        </div>
                        <div className="hidden md:block pb-2">
                            <Link to="/portfolio" className="group flex items-center gap-3 text-stone-400 hover:text-stone-900 transition-colors py-2">
                                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">View Portfolio</span>
                                <span className="material-symbols-outlined text-lg font-light group-hover:translate-x-2 transition-transform duration-300">arrow_right_alt</span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-10 w-full">
                        <Link to="/portfolio/1" className="group block cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden bg-stone-50 relative mb-8">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-700"></div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHCIRsrqXQKbbqNsB8xHMub0KapqSB9eQUFUcnBOypiOqyufSgK8KiEYBAv8aRaPEdWYpioN6bV5H_YOg2uKWaL3LVUePYkIWAL6f8mvSPYfiRCUZEU6ANmVFgv80hQFSXRP6L62_ImfMwOv-2k-4DnbShbc-di9Yh4QTiNOAR6Lzmpruz485jNhRDsnGeZ6mX9COyMomzF2Q_XAfpGs07fRNZMLKKT0H3JrkAJRVcNX1JyLDHzVQy92OI1GLxIALMekQPu5YbuBQ')" }}></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-stone-900 font-display text-xl md:text-2xl font-light">Sarah & James</h3>
                                <p className="text-stone-400 text-[10px] mt-3 font-medium tracking-[0.2em] uppercase">Wedding — Bali</p>
                            </div>
                        </Link>
                        
                        <Link to="/portfolio/2" className="group block cursor-pointer md:mt-24">
                            <div className="aspect-[4/5] overflow-hidden bg-stone-50 relative mb-8">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-700"></div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbkQBrb1FYPoHlBcMiUBnwyeyhvbSF1goHbzfsQeqEGSxB0zpUbQ330kFw6Acig29b5E7ZJ-48YJlqHbUtrpJfT8jVRVuCTItQlhojJXj6ASc_kGLjMUfoUYj7GnrfzsQ7z7tJZzaOX5NX0oBSFGTcMUEkFNjwv4a6JExO9xUd3hn-VY1OkARnWul6Ld7DwwpEUt5CKrxC1a37EiQSyECZrKxS3E-mXgBDFyT0Teia4e6JMGjZq7iD7n1nYaPntzXIdDr_6bf9Q2g')" }}></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-stone-900 font-display text-xl md:text-2xl font-light">The Sacred Vows</h3>
                                <p className="text-stone-400 text-[10px] mt-3 font-medium tracking-[0.2em] uppercase">Cultural — Jakarta</p>
                            </div>
                        </Link>
                        
                        <Link to="/portfolio/3" className="group block cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden bg-stone-50 relative mb-8">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-700"></div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvPgH4zT4Ilf5AuyIpic0zNYypDNhcartHEHBD903rxIx9HIaWbshE9K6RxVnNhwuE9juhypt-3AlxrcketRStWMyW4SBZW4joWdOTzpeTM1cj-IRtWb0PLlAUtHBTjmtCzb6C3nP40N_39YVXgrlgHC7g0N_AZbsMdGhycehVV7n-mZ6UcC2mNl-0PszJMfVDF6ZCagrIOPdHCBvyooK2-O4b53Xw6NmyaPIfWmkHkOVcI0IkMELW8YPXc4FNX3r0U3nOwz6rG_o')" }}></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-stone-900 font-display text-xl md:text-2xl font-light">Neon Nights</h3>
                                <p className="text-stone-400 text-[10px] mt-3 font-medium tracking-[0.2em] uppercase">Event — Surabaya</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-36 md:mt-56 flex flex-col items-center justify-center">
                        <div className="h-16 w-[1px] bg-stone-200 mb-8"></div>
                        <p className="text-stone-500 font-light text-center max-w-lg mb-12 leading-relaxed text-sm md:text-lg">
                            We believe in the beauty of simplicity and the power of a captured moment. Let us tell your story.
                        </p>
                        <Link to="/contact" className="group relative px-12 py-5 overflow-hidden bg-stone-900 text-white transition-all hover:bg-stone-800 duration-500">
                            <span className="relative z-10 text-[10px] font-bold tracking-[0.25em] uppercase">Start Your Project</span>
                        </Link>
                    </div>
                </div>
            </section>
            
            <PublicFooter />
        </div>
    );
};

export default Home;