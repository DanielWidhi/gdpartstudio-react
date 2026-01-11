import React from 'react';
import { Link } from 'react-router-dom';

const AdminServicesList: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-[#0d121b] text-[32px] font-bold leading-tight tracking-tight">Services Management</h2>
                    <p className="text-[#4c669a] text-sm font-normal mt-1">Manage photography and videography packages, prices, and service details.</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-[#cfd7e7] shadow-sm">
                <div className="w-full sm:w-96 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-[#9ca3af] group-focus-within:text-primary transition-colors">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-[#f3f4f6] text-sm placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="Search by service name or category..." type="text" />
                </div>
                <Link to="/admin/services/create" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg transition-colors shadow-sm shadow-primary/30">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    <span className="text-sm font-bold tracking-wide">Add New Service</span>
                </Link>
            </div>

            <div className="bg-white border border-[#cfd7e7] rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider w-20">Image</th>
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider min-w-[200px]">Service Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Base Price</th>
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider text-center">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e2e8f0]">
                            <tr className="group hover:bg-[#f8fafc] transition-colors">
                                <td className="px-6 py-4 align-middle">
                                    <div className="h-12 w-16 bg-gray-100 rounded-md overflow-hidden bg-cover bg-center border border-gray-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP15uT8-LRfsnEHGMBzUrQdWnZo70Yqr22XC69HrpasGc9Go74iWF4hUkHB7hTqPvpzRLLrpvJ3QIfy8Pl4Ll4ZrPQUzNseRI-V30NXM2arYHSZJtlr92FIiB3rT2qlyFIyLgxNulcoz9l8yIUjmHUYbiXrvGiYAnUHEJaIxOBcPkV9VAgFlmWRw25hydbYB9nfTaEdNYybprmyOdAu11wK4RQ1VC6ck7cKLCkE3Fi6SEZaRlnLo3TIjpZgcvxQQV5itL-IMlRFY0')" }}></div>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <p className="text-[#0d121b] text-sm font-medium">Wedding Photography Full Day</p>
                                    <p className="text-[#64748b] text-xs">SKU: #SRV-WED-001</p>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        Photography
                                    </span>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <p className="text-[#0d121b] text-sm font-medium">IDR 8.500.000</p>
                                    <p className="text-[#64748b] text-xs">Per Day</p>
                                </td>
                                <td className="px-6 py-4 align-middle text-center">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">Active</span>
                                </td>
                                <td className="px-6 py-4 align-middle text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/admin/services/edit/1" className="p-1.5 rounded-md text-[#64748b] hover:text-amber-600 hover:bg-amber-50 transition-colors" title="Edit">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </Link>
                                        <button className="p-1.5 rounded-md text-[#64748b] hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                             {/* Row 2 */}
                             <tr className="group hover:bg-[#f8fafc] transition-colors">
                                <td className="px-6 py-4 align-middle">
                                    <div className="h-12 w-16 bg-gray-100 rounded-md overflow-hidden bg-cover bg-center border border-gray-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvx9793rPEm77KZZbwDP566EGzn8O6Pq3IW_51pd4ywiK4VmEN84_HUqYS9abyA3VupdKlalbWEv_TkOkwhRrLIVh4QXIlqhv4jh2_OZUvnu9bZKEmguLsLMKwLGhscd82JB6_pSZxe82lvsTpfVmhovTzGUcWaGjo4yjcB7Bb69mFv7llPAxvhpduqwocTC0i1Uo4idK_NBURglv6xOKS0NEnJ8JwCyeF2okeHLZcqLnTejfDvE5x7kcLyVKrpHE1O7HiuJf-XCc')" }}></div>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <p className="text-[#0d121b] text-sm font-medium">Religious Ceremony Package</p>
                                    <p className="text-[#64748b] text-xs">SKU: #SRV-CER-002</p>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        Documentary
                                    </span>
                                </td>
                                <td className="px-6 py-4 align-middle">
                                    <p className="text-[#0d121b] text-sm font-medium">IDR 4.000.000</p>
                                    <p className="text-[#64748b] text-xs">Per Event</p>
                                </td>
                                <td className="px-6 py-4 align-middle text-center">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Hidden</span>
                                </td>
                                <td className="px-6 py-4 align-middle text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/admin/services/edit/2" className="p-1.5 rounded-md text-[#64748b] hover:text-amber-600 hover:bg-amber-50 transition-colors" title="Edit">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </Link>
                                        <button className="p-1.5 rounded-md text-[#64748b] hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminServicesList;