import React from 'react';
import { Link } from 'react-router-dom';

const AdminCreateService: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col">
                 <div className="flex items-center gap-2 mb-2">
                     <Link to="/admin/services" className="text-[#4c669a] hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        Services
                    </Link>
                     <span className="material-symbols-outlined text-[16px] text-[#64748b]">chevron_right</span>
                     <span className="text-[#0d121b] font-medium text-sm">Create New</span>
                </div>
                <h2 className="text-[#0d121b] text-[28px] md:text-[32px] font-bold leading-tight tracking-tight">Buat Layanan Baru</h2>
                <p className="text-[#4c669a] text-sm font-normal mt-1">Tambahkan paket jasa fotografi atau videografi baru ke dalam portofolio layanan Anda.</p>
            </div>
            
            <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                    <form className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-title">Judul Layanan</label>
                            <input className="w-full rounded-lg border border-[#cfd7e7] bg-[#f8f9fc] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white px-4 py-2.5 transition-all outline-none" id="service-title" placeholder="Contoh: Paket Dokumentasi Wedding Gold" type="text" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-price">Harga</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] text-sm font-medium">Rp</span>
                                    <input className="w-full rounded-lg border border-[#cfd7e7] bg-[#f8f9fc] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white pl-10 pr-4 py-2.5 transition-all outline-none" id="service-price" placeholder="0" type="number" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-category">Kategori</label>
                                <select className="w-full rounded-lg border border-[#cfd7e7] bg-[#f8f9fc] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white px-4 py-2.5 transition-all outline-none text-[#0d121b]" id="service-category">
                                    <option disabled selected value="">Pilih Kategori</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="event">Event Documentation</option>
                                    <option value="ceremony">Upacara Keagamaan</option>
                                    <option value="portrait">Portrait</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-desc">Deskripsi</label>
                            <textarea className="w-full rounded-lg border border-[#cfd7e7] bg-[#f8f9fc] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white px-4 py-3 transition-all outline-none resize-y" id="service-desc" placeholder="Jelaskan detail layanan, apa saja yang termasuk, durasi, dll..." rows={6}></textarea>
                            <p className="text-xs text-[#64748b]">Tuliskan deskripsi yang menarik dan jelas untuk klien potensial.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]">Foto Sampul Layanan</label>
                            <div className="border-2 border-dashed border-[#cfd7e7] rounded-xl bg-[#f8f9fc] p-8 text-center hover:bg-[#f1f5f9] hover:border-primary/40 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center mx-auto mb-3 group-hover:border-primary/50 group-hover:text-primary transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-[#64748b] group-hover:text-primary transition-colors">cloud_upload</span>
                                </div>
                                <p className="text-sm font-medium text-[#0d121b] group-hover:text-primary transition-colors">Klik untuk upload atau drag and drop</p>
                                <p className="text-xs text-[#64748b] mt-1">SVG, PNG, JPG atau WEBP (max. 2MB)</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="px-6 md:px-8 py-4 bg-[#f8f9fc] border-t border-[#cfd7e7] flex items-center justify-end gap-3">
                    <Link to="/admin/services" className="px-5 py-2.5 rounded-lg border border-[#cfd7e7] bg-white text-[#4c669a] text-sm font-bold hover:bg-gray-50 hover:text-[#0d121b] hover:border-gray-300 transition-colors">
                        Batal
                    </Link>
                    <button className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-hover shadow-sm shadow-primary/30 transition-colors flex items-center gap-2" type="button">
                        <span className="material-symbols-outlined text-[20px]">check</span>
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminCreateService;