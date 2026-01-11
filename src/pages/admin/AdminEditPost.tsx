import React from 'react';
import { Link } from 'react-router-dom';

const AdminEditPost: React.FC = () => {
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
                    <h2 className="text-[#0d121b] text-[32px] font-bold leading-tight tracking-tight">Edit Postingan</h2>
                    <p className="text-[#4c669a] text-sm font-normal mt-1">Perbarui detail, gambar, dan status postingan portofolio.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/admin/portfolio" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#cfd7e7] bg-white text-[#4c669a] text-sm font-medium hover:bg-[#f3f4f6] hover:text-[#0d121b] transition-colors">
                        Batal
                    </Link>
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg transition-colors shadow-sm shadow-primary/30">
                        <span className="material-symbols-outlined text-[20px]">save</span>
                        <span className="text-sm font-bold tracking-wide">Simpan Perubahan</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                        <div className="border-b border-[#cfd7e7] px-6 py-4 bg-[#f8fafc]">
                            <h3 className="text-[#0d121b] text-base font-bold">Informasi Proyek</h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="project-title">Judul Proyek</label>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-2.5 placeholder-[#9ca3af] transition-shadow" id="project-title" name="project-title" type="text" defaultValue="Rina & Dika Wedding" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#4c669a] mb-1.5">ID Postingan</label>
                                    <input className="block w-full rounded-lg border-[#e2e8f0] bg-gray-50 text-[#64748b] text-sm px-4 py-2.5 cursor-not-allowed" readOnly type="text" defaultValue="#GD-2023-001" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="slug">Slug URL</label>
                                    <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-2.5" id="slug" type="text" defaultValue="rina-dika-wedding-2023" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="description">Deskripsi</label>
                                <textarea className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-2.5 resize-y" id="description" rows={6} defaultValue="Dokumentasi momen sakral pernikahan Rina dan Dika yang mengusung tema Outdoor Garden Party yang elegan. Kami menangkap setiap emosi dan detail acara, mulai dari persiapan hingga resepsi malam hari yang meriah. Penggunaan cahaya alami pada sesi pagi memberikan nuansa hangat dan romantis pada hasil foto."></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                        <div className="border-b border-[#cfd7e7] px-6 py-4 bg-[#f8fafc] flex justify-between items-center">
                            <h3 className="text-[#0d121b] text-base font-bold">Galeri Foto & Video</h3>
                            <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
                                Tambah Media
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                <div className="relative group aspect-square rounded-lg overflow-hidden border border-[#e2e8f0]">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP15uT8-LRfsnEHGMBzUrQdWnZo70Yqr22XC69HrpasGc9Go74iWF4hUkHB7hTqPvpzRLLrpvJ3QIfy8Pl4Ll4ZrPQUzNseRI-V30NXM2arYHSZJtlr92FIiB3rT2qlyFIyLgxNulcoz9l8yIUjmHUYbiXrvGiYAnUHEJaIxOBcPkV9VAgFlmWRw25hydbYB9nfTaEdNYybprmyOdAu11wK4RQ1VC6ck7cKLCkE3Fi6SEZaRlnLo3TIjpZgcvxQQV5itL-IMlRFY0')" }}></div>
                                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button className="p-1.5 bg-white/90 rounded-full hover:bg-white text-red-600 shadow-sm">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                                {/* More grid items would go here... simplified for example */}
                                <button className="flex flex-col items-center justify-center gap-2 aspect-square rounded-lg border-2 border-dashed border-[#cbd5e1] hover:border-primary hover:bg-blue-50/50 transition-colors group">
                                    <span className="material-symbols-outlined text-[#94a3b8] group-hover:text-primary transition-colors">cloud_upload</span>
                                    <span className="text-xs font-medium text-[#64748b] group-hover:text-primary">Upload</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                        <div className="border-b border-[#cfd7e7] px-6 py-4 bg-[#f8fafc]">
                            <h3 className="text-[#0d121b] text-base font-bold">Status Publikasi</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="status">Status</label>
                                <select className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="status" name="status" defaultValue="published">
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="date">Tanggal Acara</label>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="date" type="date" defaultValue="2023-10-24" />
                            </div>
                             <div className="pt-2 flex items-center justify-between text-xs text-[#64748b]">
                                <span>Created: Oct 24, 2023</span>
                                <span>By: Admin</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                        <div className="border-b border-[#cfd7e7] px-6 py-4 bg-[#f8fafc]">
                            <h3 className="text-[#0d121b] text-base font-bold">Kategori & Tag</h3>
                        </div>
                        <div className="p-6 space-y-4">
                             <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5" htmlFor="category">Kategori</label>
                                <select className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] focus:border-primary focus:ring-primary focus:bg-white sm:text-sm p-2.5 shadow-sm" id="category" name="category" defaultValue="wedding">
                                    <option value="wedding">Wedding</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="ceremony">Ceremony</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0d121b] mb-1.5">Tag</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-100">
                                        Outdoor
                                        <button className="hover:text-blue-900"><span className="material-symbols-outlined text-[14px]">close</span></button>
                                    </span>
                                </div>
                                <input className="block w-full rounded-lg border-[#cfd7e7] bg-[#f8f9fc] text-[#0d121b] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-2.5" placeholder="Tambah tag baru..." type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 border border-red-100 rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-red-800 text-sm font-bold mb-2">Hapus Postingan</h3>
                            <p className="text-red-600/80 text-xs mb-4">Tindakan ini tidak dapat dibatalkan. Postingan akan dihapus permanen dari database.</p>
                            <button className="w-full flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2.5 rounded-lg transition-colors font-medium text-sm">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                Hapus Postingan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminEditPost;