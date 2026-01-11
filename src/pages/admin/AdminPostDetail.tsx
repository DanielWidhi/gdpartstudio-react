import React from 'react';
import { Link } from 'react-router-dom';

const AdminPostDetail: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <div className="flex items-center gap-2 text-sm text-[#64748b]">
                    <Link to="/admin/portfolio" className="hover:text-primary transition-colors flex items-center gap-1">
                         <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Portfolio
                    </Link>
                    <span>/</span>
                    <span className="text-[#0d121b] font-medium">Post Details</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-medium text-sm transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Hapus Postingan
                    </button>
                    <Link to="/admin/portfolio/edit/1" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium text-sm shadow-md shadow-primary/20 transition-all transform active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">edit_document</span>
                        Edit Postingan
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white p-3 rounded-xl border border-[#cfd7e7] shadow-sm">
                         <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 relative group border border-gray-100">
                            <img alt="Wedding couple holding hands" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP15uT8-LRfsnEHGMBzUrQdWnZo70Yqr22XC69HrpasGc9Go74iWF4hUkHB7hTqPvpzRLLrpvJ3QIfy8Pl4Ll4ZrPQUzNseRI-V30NXM2arYHSZJtlr92FIiB3rT2qlyFIyLgxNulcoz9l8yIUjmHUYbiXrvGiYAnUHEJaIxOBcPkV9VAgFlmWRw25hydbYB9nfTaEdNYybprmyOdAu11wK4RQ1VC6ck7cKLCkE3Fi6SEZaRlnLo3TIjpZgcvxQQV5itL-IMlRFY0" />
                             <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5 font-medium">
                                <span className="material-symbols-outlined text-[14px]">image</span> Featured Image
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-3 mt-3">
                            <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 relative group cursor-pointer hover:ring-2 ring-primary ring-offset-1 transition-all">
                                <img alt="Gallery item 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvx9793rPEm77KZZbwDP566EGzn8O6Pq3IW_51pd4ywiK4VmEN84_HUqYS9abyA3VupdKlalbWEv_TkOkwhRrLIVh4QXIlqhv4jh2_OZUvnu9bZKEmguLsLMKwLGhscd82JB6_pSZxe82lvsTpfVmhovTzGUcWaGjo4yjcB7Bb69mFv7llPAxvhpduqwocTC0i1Uo4idK_NBURglv6xOKS0NEnJ8JwCyeF2okeHLZcqLnTejfDvE5x7kcLyVKrpHE1O7HiuJf-XCc" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 relative group cursor-pointer hover:ring-2 ring-primary ring-offset-1 transition-all">
                                <img alt="Gallery item 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNrc1Nc6riI37_tTb2fFiCZ7WbjrXo4qRC62l0mPp4dzhY7_3vz5YniBQTay6uIL3sKeRumc0bNoPctJzd-AAmVs7cHOW2XC87kKYv2idLbOdhCDRAmlMobC5My_f7-t7wNxL9UQa-JiTR-qNDgf5nvpi52uxeG1ue6bczIGSYafsUjRH4seW3TXsqn5VmxqNTPVKCuqDqUDjwnF73jrFht1AZwwXTpNwN9EW5KmwlixPhZSRlvkYdpBXUWzFTuWylI93BpsNZ5J0" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 relative group cursor-pointer hover:ring-2 ring-primary ring-offset-1 transition-all">
                                <img alt="Gallery item 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_CmTt6gNreVor97Yh3XS3h6tlvB1tx5DQt1aehFURaBOkvei9HOxaPICpdNJ7LcV5bFAU2BkT8JesBwNMTixepJxLy-ycbXjWEHcytbGjttyuvWB8TvlIZ0KI78uViDwpQ6Lt1ygtmHlI-7PfMsQ1j1mft8-tnSwFaG1t9LLz7c2eLkJFQ4iLnX2Fg-S83XMH41KAXT9LkDbexCVM7CUq8COGacHDLmVNHWIzfbjs9V0T5gxrlDHcIlowAdHwhPZLgEhnLnnftE" />
                            </div>
                             <div className="aspect-square rounded-lg border-2 border-dashed border-[#cfd7e7] flex flex-col items-center justify-center text-[#64748b] bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">add</span>
                                <span className="text-xs font-medium mt-1">Add Media</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#f1f5f9]">
                            <h3 className="text-lg font-bold text-[#0d121b]">Description</h3>
                        </div>
                         <div className="space-y-4 text-[#4c669a] text-sm leading-relaxed">
                            <p>Capturing the beautiful union of Rina & Dika in a modern minimalist wedding theme. The event was filled with heartfelt moments, from the intimate morning vows to the joyous reception in the evening. Our team focused on candid shots that reflect the genuine emotions of the couple and their loved ones.</p>
                            <p>We utilized natural lighting for the outdoor sessions and a warm ambient setup for the indoor reception. The color palette of the wedding was predominantly white and sage green, which we emphasized in the post-processing to maintain a cohesive and airy look throughout the album.</p>
                            <p><strong>Deliverables:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>150 Edited High-Resolution Photos</li>
                                <li>1 Cinematic Highlight Video (3 minutes)</li>
                                <li>1 Full Documentation Video (45 minutes)</li>
                                <li>1 Premium Photo Album (20x30cm)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-xl border border-[#cfd7e7] shadow-sm overflow-hidden">
                        <div className="p-6 pb-0">
                            <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block mb-2">Project Title</span>
                            <h1 className="text-xl font-bold text-[#0d121b] leading-tight">Rina & Dika Wedding</h1>
                            <p className="text-xs text-[#64748b] mt-2">ID: #GD-2023-001</p>
                        </div>
                        <div className="p-6 space-y-5">
                            <div className="pt-5 border-t border-[#f1f5f9]">
                                <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block mb-2">Category</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                    Wedding
                                </span>
                            </div>
                             <div className="pt-5 border-t border-[#f1f5f9]">
                                <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block mb-2">Status</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                    Published
                                </span>
                            </div>
                            <div className="pt-5 border-t border-[#f1f5f9]">
                                <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block mb-2">Publication Info</span>
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="material-symbols-outlined text-[#94a3b8] text-[20px] mt-0.5">calendar_today</span>
                                    <div>
                                        <p className="text-sm font-medium text-[#0d121b]">Oct 24, 2023</p>
                                        <p className="text-xs text-[#64748b]">Created at 10:45 AM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-[#94a3b8] text-[20px] mt-0.5">update</span>
                                    <div>
                                        <p className="text-sm font-medium text-[#0d121b]">Oct 25, 2023</p>
                                        <p className="text-xs text-[#64748b]">Last updated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-[#cfd7e7] shadow-sm">
                        <h3 className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] text-xs font-medium border border-[#e2e8f0]">#wedding</span>
                            <span className="px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] text-xs font-medium border border-[#e2e8f0]">#photography</span>
                            <span className="px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] text-xs font-medium border border-[#e2e8f0]">#minimalist</span>
                            <span className="px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] text-xs font-medium border border-[#e2e8f0]">#couple</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPostDetail;