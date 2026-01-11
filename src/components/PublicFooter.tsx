import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter: React.FC = () => {
    return (
        <footer className="bg-stone-50 py-20 border-t border-stone-100">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-stone-900 font-display font-bold tracking-[0.2em] text-xs uppercase mb-3">GDPARTSTUDIO</h4>
                    <p className="text-stone-400 text-[10px] tracking-wide">Copyright © 2024. All rights reserved.</p>
                </div>
                <div className="flex gap-10 md:gap-16">
                    <a className="text-stone-400 hover:text-stone-900 transition-colors text-[10px] uppercase tracking-[0.2em] font-medium" href="#">Instagram</a>
                    <a className="text-stone-400 hover:text-stone-900 transition-colors text-[10px] uppercase tracking-[0.2em] font-medium" href="#">Facebook</a>
                    <a className="text-stone-400 hover:text-stone-900 transition-colors text-[10px] uppercase tracking-[0.2em] font-medium" href="#">Email</a>
                </div>
                 <div className="hidden md:block">
                     <Link to="/login" className="text-stone-300 hover:text-stone-500 transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">Admin</Link>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;