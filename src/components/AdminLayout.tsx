import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AdminLayout: React.FC = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/admin' && location.pathname === '/admin') return true;
        if (path !== '/admin' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0d121b] flex h-screen overflow-hidden font-display">
            <aside className={`w-64 bg-white border-r border-[#cfd7e7] flex flex-col h-full shrink-0 z-20 md:flex ${mobileMenuOpen ? 'fixed inset-y-0 left-0' : 'hidden'}`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[20px]">camera</span>
                    </div>
                    <h1 className="text-[#0d121b] text-base font-bold tracking-tight">GDPARTSTUDIO</h1>
                    <button className="md:hidden ml-auto" onClick={() => setMobileMenuOpen(false)}>
                         <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <nav className="flex flex-col gap-1 px-3 mt-2 flex-1">
                    <Link to="/admin" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/admin') && location.pathname === '/admin' ? 'bg-primary/10 text-primary' : 'hover:bg-[#f3f4f6]'}`}>
                        <span className={`material-symbols-outlined ${isActive('/admin') && location.pathname === '/admin' ? 'text-primary fill' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>dashboard</span>
                        <span className={`text-sm font-medium ${isActive('/admin') && location.pathname === '/admin' ? 'text-primary font-bold' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>Dashboard</span>
                    </Link>
                    <Link to="/admin/portfolio" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/admin/portfolio') ? 'bg-primary/10 text-primary' : 'hover:bg-[#f3f4f6]'}`}>
                         <span className={`material-symbols-outlined ${isActive('/admin/portfolio') ? 'text-primary fill' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>inventory_2</span>
                        <span className={`text-sm font-medium ${isActive('/admin/portfolio') ? 'text-primary font-bold' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>Portfolio</span>
                    </Link>
                    <Link to="/admin/services" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/admin/services') ? 'bg-primary/10 text-primary' : 'hover:bg-[#f3f4f6]'}`}>
                         <span className={`material-symbols-outlined ${isActive('/admin/services') ? 'text-primary fill' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>handshake</span>
                        <span className={`text-sm font-medium ${isActive('/admin/services') ? 'text-primary font-bold' : 'text-[#4c669a] group-hover:text-[#0d121b]'}`}>Services</span>
                    </Link>
                    <Link to="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f3f4f6] group transition-colors">
                        <span className="material-symbols-outlined text-[#4c669a] group-hover:text-[#0d121b]">settings</span>
                        <span className="text-[#4c669a] text-sm font-medium group-hover:text-[#0d121b]">Settings</span>
                    </Link>
                </nav>
                <div className="p-3 mt-auto border-t border-[#cfd7e7]">
                    <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#fee2e2] group transition-colors">
                        <span className="material-symbols-outlined text-[#4c669a] group-hover:text-red-600">logout</span>
                        <span className="text-[#4c669a] text-sm font-medium group-hover:text-red-600">Logout</span>
                    </Link>
                </div>
            </aside>

             {/* Mobile Header */}
             <div className="md:hidden fixed top-0 w-full bg-white z-30 border-b border-[#cfd7e7] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[20px]">camera</span>
                    </div>
                    <h1 className="text-[#0d121b] text-base font-bold">GDPARTSTUDIO</h1>
                </div>
                <button className="text-[#0d121b]" onClick={() => setMobileMenuOpen(true)}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            <main className="flex-1 flex flex-col h-full overflow-hidden relative md:ml-0 mt-14 md:mt-0">
                 <header className="h-16 bg-white border-b border-[#cfd7e7] flex items-center justify-end px-8 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-[#0d121b]">Admin User</p>
                            <p className="text-xs text-[#4c669a]">admin@gdpartstudio.com</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center border border-gray-300" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDR9Ho4Txm62Eu7R1R2cLmczYM6rFF5wFfX9817CNyLvUayIyMjssGW746qtzWzuwJf3HzApF0N-c-EyMiHRDIVG1U2FYlKt-HtU3Z-W4z5Q8i_GEAJGqwhb5wY41NJP_WHAp5RiW5bENQhPJ6Gt-LXvR86Zw0OzIUWTC-JcEtswLCTkHZjku5YnTaldOS5zqbRw0AXQLPqmha4nx0N1MV5YiC0CR5iomegIoFPisZ-8p90_uq08xYdrjpoLODXYmYv2jse0c1sCe4')" }}></div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto bg-background-light p-4 md:p-8">
                     <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;