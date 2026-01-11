import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PublicHeaderProps {
    transparent?: boolean;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ transparent = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Base classes
    const headerClasses = transparent
        ? "fixed top-0 left-0 right-0 z-50 w-full pt-8 pb-4 transition-all duration-300 bg-gradient-to-b from-black/20 to-transparent"
        : "fixed top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all duration-300";

    const textClass = transparent ? "text-white/90 hover:text-white" : "text-stone-500 hover:text-stone-900";
    const brandClass = transparent ? "text-white" : "text-slate-900";
    const logoFilter = transparent ? "brightness-200 contrast-100" : "";
    
    // For non-transparent header, simplify the structure slightly to match the "Services" or "About" design from input
    const isHome = location.pathname === '/';

    return (
        <header className={headerClasses}>
            <div className={`w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between ${!transparent ? 'py-4 max-w-7xl' : ''}`}>
                <Link to="/" className="flex items-center gap-2 cursor-pointer z-50">
                    <div className={`relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ${!transparent ? 'w-10 h-10 md:w-12 md:h-12' : ''}`}>
                         {/* Using a placeholder logo or hotlink */}
                         {transparent ? (
                            <img alt="GDPARTSTUDIO Logo" className={`object-contain w-full h-full drop-shadow-sm ${logoFilter}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebPki4L6VngLWiODTdEhDv2S5bsAjg6OsclE4sTexBzG2DZspIWSnB-U9hQoPMDWGY_Ac3ZyDElvICK0g5nL-fMRApF7cJOGl-L8Ik0V1Fkw6nk7Z7JFSJCIA8MtmYHOdyf20MGtYCfnHFBAaJe3gM5rn38FKFVRjueh7RaNj4LOu9mgw6Um16jR5lbNU_LziVICi88C-dGUZSZeELxtWm4fZN1vSAtCGNiWJVdxvLamUXrOeyhGxVXQAmGr4C0MydsywrW4hNyA"/>
                         ) : (
                             <div className="flex size-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md ring-1 ring-slate-900/5">
                                <span className="material-symbols-outlined text-[24px]">shutter_speed</span>
                            </div>
                         )}
                    </div>
                    {transparent ? (
                         <h1 className="hidden md:block text-white drop-shadow-md text-sm md:text-base font-display font-medium tracking-[0.25em] uppercase ml-2">GDPARTSTUDIO</h1>
                    ) : (
                        <div className="flex flex-col leading-none ml-2">
                            <span className="font-display text-lg font-bold tracking-tight text-slate-900 uppercase">GDPARTSTUDIO</span>
                             <span className="text-[10px] tracking-widest text-slate-500 uppercase font-medium">Visual Storytellers</span>
                        </div>
                    )}
                </Link>

                <div className="hidden md:flex items-center">
                    <nav className="flex items-center gap-12">
                        <Link to="/portfolio" className={`${textClass} drop-shadow-sm transition-all text-[10px] font-medium tracking-[0.25em] uppercase hover:tracking-[0.3em] duration-300`}>Portfolio</Link>
                        <Link to="/services" className={`${textClass} drop-shadow-sm transition-all text-[10px] font-medium tracking-[0.25em] uppercase hover:tracking-[0.3em] duration-300`}>Services</Link>
                        <Link to="/about" className={`${textClass} drop-shadow-sm transition-all text-[10px] font-medium tracking-[0.25em] uppercase hover:tracking-[0.3em] duration-300`}>About</Link>
                        <Link to="/contact" className={`${textClass} drop-shadow-sm transition-all text-[10px] font-medium tracking-[0.25em] uppercase hover:tracking-[0.3em] duration-300`}>Contact</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                     {!transparent && (
                        <Link to="/contact" className="hidden sm:flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-sm hover:shadow-md">
                            Get Quote
                        </Link>
                     )}
                     <button 
                        className={`md:hidden ${transparent ? 'text-white' : 'text-slate-900'} drop-shadow-md p-2 hover:bg-white/10 rounded-full transition-colors`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined font-light text-2xl">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 md:hidden">
                    <Link to="/portfolio" className="text-stone-900 text-sm font-medium tracking-widest uppercase" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                    <Link to="/services" className="text-stone-900 text-sm font-medium tracking-widest uppercase" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/about" className="text-stone-900 text-sm font-medium tracking-widest uppercase" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" className="text-stone-900 text-sm font-medium tracking-widest uppercase" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default PublicHeader;