import React from 'react';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const About: React.FC = () => {
    return (
        <div className="font-display bg-surface text-text-main antialiased overflow-x-hidden selection:bg-slate-200 selection:text-slate-900 flex flex-col min-h-screen">
            <PublicHeader />
            <main className="flex-grow flex flex-col w-full pt-32 md:pt-40">
                <section className="px-6 pb-16 md:pb-24">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 animate-fade-in-up">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 max-w-4xl">
                                Tentang Kami
                            </h1>
                            <p className="text-slate-500 text-lg font-light max-w-sm leading-relaxed mb-2 md:mb-4">
                                Mengejar esensi cerita melalui lensa kejujuran dan estetika minimalis.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="px-6 pb-24 md:pb-32">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            <div className="relative animate-fade-in-up order-2 lg:order-1" style={{ animationDelay: '0.2s' }}>
                                <div className="w-full aspect-[4/5] overflow-hidden bg-slate-100 relative shadow-lg shadow-slate-100/50">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCamLpwrRI4uFLLpIgNO6QcDgwb9LRheuQow2JKY1NpbAqHLAHv7vQCFmN9Kn4T7AIMpWbcxgtjYavU6erRL2DGPLD9bhepfaFOvghuiztjlNtGwBxjhEj1raJ0zQKLaAY_cnK5uMV7CCK7VNDvLBAMh8uJPQaLwa6iMHoC8SNC1mt9WnsvtIfnmMe6vItnJBUMEmUoXb3nbeOcpCL59j5ZGDih3t6RL6yg7lJ-ZxQbWSJR_9iZf12wppf3N9Zk-sckC0eTp50d46A')" }}></div>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-medium tracking-widest uppercase border-t border-slate-100 pt-4">
                                    <span>Established 2019</span>
                                    <span>Jakarta, ID</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16 lg:pt-0 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">Kisah Kami</span>
                                    <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">Bermula dari sebuah <br/><span className="italic font-serif">Kejujuran.</span></h2>
                                    <p className="text-slate-600 leading-loose text-lg font-light font-body">
                                        GDPARTSTUDIO didirikan pada tahun 2019 di Jakarta Selatan dengan satu keyakinan sederhana: momen terbaik adalah momen yang tidak direkayasa. Dari pernikahan intim hingga perayaan besar, kami hadir untuk menangkap emosi yang tulus, bukan sekadar pose. Kami percaya bahwa keindahan sejati terletak pada ketidaksempurnaan yang jujur.
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">Visi</span>
                                    <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">Warisan Visual <br/><span className="italic font-serif">Abadi.</span></h2>
                                    <p className="text-slate-600 leading-loose text-lg font-light font-body">
                                        Kami tidak hanya membuat foto, kami menciptakan warisan. Visi kami adalah menghadirkan karya visual yang "timeless"—yang tetap indah dilihat 10, 20, hingga 50 tahun mendatang. Sebuah kapsul waktu yang akan membawa Anda kembali merasakan detak jantung yang sama.
                                    </p>
                                </div>
                                <div className="pt-8 border-t border-slate-100">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 block">Nilai Inti</span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                                        <div className="group">
                                            <h4 className="text-slate-900 font-medium mb-2 text-lg group-hover:pl-2 transition-all duration-300">Authenticity</h4>
                                            <p className="text-slate-500 font-light text-sm leading-relaxed">Keaslian di atas kesempurnaan. Kami menangkap apa adanya.</p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-slate-900 font-medium mb-2 text-lg group-hover:pl-2 transition-all duration-300">Minimalism</h4>
                                            <p className="text-slate-500 font-light text-sm leading-relaxed">Fokus pada subjek dan emosi, menghilangkan gangguan visual.</p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-slate-900 font-medium mb-2 text-lg group-hover:pl-2 transition-all duration-300">Empathy</h4>
                                            <p className="text-slate-500 font-light text-sm leading-relaxed">Merasa sebelum memotret. Kami memahami cerita Anda.</p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-slate-900 font-medium mb-2 text-lg group-hover:pl-2 transition-all duration-300">Quality</h4>
                                            <p className="text-slate-500 font-light text-sm leading-relaxed">Standar teknis dan artistik tanpa kompromi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-32 px-6 bg-surface-alt">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up border-b border-slate-200 pb-8">
                            <div>
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 block">Tim Kami</span>
                                <h2 className="text-4xl md:text-5xl font-medium text-slate-900">Wajah di Balik Lensa</h2>
                            </div>
                            <p className="text-slate-500 text-right md:text-left mt-4 md:mt-0 max-w-xs font-light text-sm">
                                Para profesional berdedikasi yang siap mengabadikan momen berharga Anda.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {/* Team Member 1 */}
                            <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] overflow-hidden mb-5 bg-slate-200">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6ODPCAQM-WZPIX1KPxaL7tJ8HheHCj9_hFqYcH8fdThT6iOiivSMU4g8msx9LW2lHbTvZFtcf0wkLrt2Yjc_LOt3JCXHAvAvSb0u_TY4Ome9HeoDXXl2VTqzGG34l3h1KmHv8yIXSFEhtMjc61kwODnwulo5rcxygs__C1H68dTyeSDrVfLd782beMQk_sLaDAAb4NRi_tKNEH7tIL0fqSRT5tA_vQCsYjWkIjMshWdJ-QKJEhZp500hjkf7fEDSKYb2Jdd6_QCk')" }}></div>
                                </div>
                                <div className="border-l-2 border-transparent group-hover:border-slate-900 pl-0 group-hover:pl-4 transition-all duration-300">
                                    <h4 className="text-slate-900 text-lg font-medium mb-1">Andi Pratama</h4>
                                    <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Lead Photographer</p>
                                </div>
                            </div>
                            {/* Team Member 2 */}
                            <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] overflow-hidden mb-5 bg-slate-200">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVQ4ut-MzzNu9QTihwRemVbK4R5qzxYGUg83ak5IwpJBvHi9LL3u1B2aLPQbN_PcB6YVvuIz5QA5IOg6WiqRh6AHfMh_sdRMLVbuJEdAhJ5fwaGJmE6N443VN1PuehNKDh14Ct1PS5uUJ37E-4uKfhtNwJFzZ1ItC7ob0zxrGVbLJREgEm7jSrjVcJo3T5VvEAX7q3bmbans0kz9WjHDOaki9dCHR2gng44b1yERfraj9Y4KQvWTwJ_LwQvRvWv-9flTKKNiNJa5M')" }}></div>
                                </div>
                                <div className="border-l-2 border-transparent group-hover:border-slate-900 pl-0 group-hover:pl-4 transition-all duration-300">
                                    <h4 className="text-slate-900 text-lg font-medium mb-1">Sarah Wijaya</h4>
                                    <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Creative Director</p>
                                </div>
                            </div>
                             {/* Team Member 3 */}
                             <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] overflow-hidden mb-5 bg-slate-200">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0kTBVwJW0GISTo7y7JO8rixkbbe-b_cdE34eRvaKT-Np3HfKvj4ESQnqYfcdKytxM77dFM9j6_xQL9TN2gkzSKVSoJdN4zcZuOZoGHq_9MzWj6HzHIKh-FrrT33Yk7aZ67P0Ukateq7OdfuT0ngfMS3xekrn7LYxBicGtFoONEEEUoGA7z0XJewi7oV9Jv9JLMBuTnX_tjXV6uraNX3dSGsayTG-wGZdtiGhKtQJSz6OYGujRrgSwAYENrSkhNl6MVeQtmik1uUU')" }}></div>
                                </div>
                                <div className="border-l-2 border-transparent group-hover:border-slate-900 pl-0 group-hover:pl-4 transition-all duration-300">
                                    <h4 className="text-slate-900 text-lg font-medium mb-1">Budi Santoso</h4>
                                    <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Senior Videographer</p>
                                </div>
                            </div>
                             {/* Team Member 4 */}
                             <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] overflow-hidden mb-5 bg-slate-200">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmYLK6euv5x9CCn8r1oU6dzyTPMq7xVQOQ22TsNKE1kP-eBJIxS-QnCrM41v4yz4wwdn-Ul8vq76PfDQzxx7rl9rCzE-p6WunYgCQKNIHDanW4-w8K3UqHrDkQCdLpaehygZS-OxHlArfd4e6EBOvlbDW3NH79geZsm974JIwgjsefr7PLf_fS5y9Tg0RLD7NDnw2qRHJRFx5RQoMq4NtFfEexOoGgw664SrEnb5FQ1dv4btMn5_loSBbgO2XufggwyVU5PnFeWjo')" }}></div>
                                </div>
                                <div className="border-l-2 border-transparent group-hover:border-slate-900 pl-0 group-hover:pl-4 transition-all duration-300">
                                    <h4 className="text-slate-900 text-lg font-medium mb-1">Jessica Tan</h4>
                                    <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Lead Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 bg-white flex items-center justify-center">
                    <div className="max-w-4xl text-center flex flex-col items-center gap-10 animate-fade-in-up">
                        <h2 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight leading-tight">
                            Siap Mengabadikan <br className="hidden md:block"/> Kisah Anda?
                        </h2>
                        <p className="text-slate-500 text-lg font-light max-w-xl">
                            Setiap cerita berhak untuk didengar dan dilihat. Mari berdiskusi tentang visi Anda dan wujudkan visual yang tak terlupakan.
                        </p>
                        <button className="mt-4 px-12 py-5 bg-slate-900 text-white font-medium rounded-none hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">
                            Hubungi Kami
                        </button>
                    </div>
                </section>
            </main>
            <PublicFooter />
        </div>
    );
};

export default About;