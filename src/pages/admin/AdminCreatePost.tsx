import React from 'react';
import { Link } from 'react-router-dom';

const AdminCreatePost: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                         <Link to="/admin/portfolio" className="text-[#4c669a] hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            Back to Portfolio
                        </Link>
                    </div>
                    <h2 className="text-[#0d121b] text-[32px] font-bold leading-tight tracking-tight">Buat Postingan Baru</h2>
                    <p className="text-[#4c669a] text-sm font-normal mt-1">Isi formulir di bawah ini untuk menambahkan proyek baru ke portofolio Anda.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/admin/portfolio" className="px-5 py-2.5 rounded-lg border border-[#cfd7e7] bg-white text-[#4c669a] font-semibold text-sm hover:bg-[#f3f4f6] hover:text-[#0d121b] transition-colors shadow-sm">
                        Batal
                    </Link>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-sm shadow-primary/30 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">save</span>
                        Simpan & Publish
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <h3 className="text-base font-semibold text-[#0d121b] mb-4">Informasi Proyek</h3>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="project-title">Judul Proyek</label>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] placeholder-[#94a3b8] focus:border-primary focus:ring-primary focus:bg-white transition-all sm:text-sm p-2.5 shadow-sm" id="project-title" name="project-title" placeholder="Contoh: Rina & Dika Wedding" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="description">Deskripsi</label>
                                <textarea className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] placeholder-[#94a3b8] focus:border-primary focus:ring-primary focus:bg-white transition-all sm:text-sm p-2.5 shadow-sm resize-none" id="description" name="description" placeholder="Tulis deskripsi detail tentang proyek ini..." rows={12}></textarea>
                                <p className="mt-1.5 text-xs text-[#64748b]">Jelaskan detail acara, lokasi, dan momen spesial yang diabadikan.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <h3 className="text-base font-semibold text-[#0d121b] mb-4">Detail Tambahan</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="client-name">Nama Klien</label>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] placeholder-[#94a3b8] focus:border-primary focus:ring-primary focus:bg-white transition-all sm:text-sm p-2.5 shadow-sm" id="client-name" name="client-name" placeholder="Nama Klien" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="location">Lokasi</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#94a3b8]">
                                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    </span>
                                    <input className="block w-full pl-9 rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] placeholder-[#94a3b8] focus:border-primary focus:ring-primary focus:bg-white transition-all sm:text-sm p-2.5 shadow-sm" id="location" name="location" placeholder="Contoh: Bali, Indonesia" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <h3 className="text-base font-semibold text-[#0d121b] mb-4">Pengaturan Post</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="status">Status</label>
                                <select className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="status" name="status">
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="category">Kategori</label>
                                <select className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="category" name="category">
                                    <option disabled selected value="">Pilih Kategori</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="ceremony">Ceremony</option>
                                    <option value="event">Event</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="date">Tanggal Acara</label>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8fafc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="date" name="date" type="date" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <h3 className="text-base font-semibold text-[#0d121b] mb-4">Media</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#0d121b] mb-1.5">Gambar Utama (Thumbnail)</label>
                            <div className="border-2 border-dashed border-[#cfd7e7] rounded-xl p-6 flex flex-col items-center justify-center text-center bg-[#f8fafc] hover:bg-[#f1f5f9] hover:border-[#94a3b8] transition-all cursor-pointer group h-48">
                                <div className="w-12 h-12 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-[24px]">cloud_upload</span>
                                </div>
                                <p className="text-sm font-medium text-[#0d121b]">Klik untuk upload</p>
                                <p className="text-xs text-[#64748b] mt-1">atau drag and drop</p>
                                <p className="text-[10px] text-[#94a3b8] mt-2 uppercase">PNG, JPG, WEBP (Max 5MB)</p>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#0d121b] mb-1.5">Galeri Foto</label>
                            <button className="w-full py-2 px-3 rounded-lg border border-[#cfd7e7] text-[#4c669a] text-sm font-medium hover:bg-[#f3f4f6] hover:text-[#0d121b] transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
                                Tambah Foto Galeri
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCreatePost;