import React from 'react';
import { Link } from 'react-router-dom';

const AdminEditService: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-[#4c669a]">
                    <Link to="/admin/services" className="hover:text-primary">Services</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-[#0d121b] font-medium">Edit Service</span>
                </div>
                <h2 className="text-[#0d121b] text-[32px] font-bold leading-tight tracking-tight">Edit Service</h2>
                <p className="text-[#4c669a] text-sm font-normal mt-1">Update service details, pricing packages, and descriptions.</p>
            </div>
            
            <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                    <form className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-title">Judul Layanan</label>
                            <input className="block w-full rounded-lg border border-[#cfd7e7] bg-white px-4 py-2.5 text-[#0d121b] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none sm:text-sm shadow-sm" id="service-title" name="service-title" placeholder="Enter service title" type="text" defaultValue="Wedding Photography Premium" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-price">Harga (IDR)</label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">Rp</span>
                                </div>
                                <input className="block w-full rounded-lg border border-[#cfd7e7] bg-white pl-10 pr-4 py-2.5 text-[#0d121b] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none sm:text-sm" id="service-price" name="service-price" placeholder="0" type="text" defaultValue="15.000.000" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className="text-gray-500 sm:text-sm">/ Event</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[#0d121b]" htmlFor="service-description">Deskripsi</label>
                            <div className="relative">
                                <textarea className="block w-full rounded-lg border border-[#cfd7e7] bg-white px-4 py-3 text-[#0d121b] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none sm:text-sm shadow-sm resize-y" id="service-description" name="service-description" placeholder="Describe the service details..." rows={6} defaultValue={`Paket dokumentasi pernikahan lengkap mencakup sesi pre-wedding, liputan akad nikah, dan resepsi seharian penuh.\nTermasuk:\n- 2 Fotografer Profesional\n- 1 Videografer\n- Album Kolase Premium 20x30cm\n- Semua file foto resolusi tinggi dalam USB Drive\n- Video Cinematic Highlight (3-5 menit)`}></textarea>
                            </div>
                            <p className="text-xs text-[#64748b]">Jelaskan detail layanan, apa saja yang termasuk, dan informasi penting lainnya.</p>
                        </div>
                        <div className="pt-6 border-t border-[#e2e8f0] flex items-center gap-3">
                            <button className="inline-flex justify-center items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors" type="submit">
                                <span className="material-symbols-outlined text-[20px]">save</span>
                                Simpan Perubahan
                            </button>
                            <Link to="/admin/services" className="inline-flex justify-center items-center gap-2 rounded-lg border border-[#cfd7e7] bg-white px-5 py-2.5 text-sm font-medium text-[#4c669a] shadow-sm hover:bg-[#f8fafc] hover:text-[#0d121b] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                                Batal
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminEditService;