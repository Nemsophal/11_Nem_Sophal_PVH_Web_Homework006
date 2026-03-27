import { Search, Eye, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";

export default async function CustomerListPage() {
  const res = await fetch('https://homework-api.noevchanmakara.site/api/v1/customers');
  const data = await res.json();
  const customers = data?.payload || [];

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-slate-900">List of All Customer</h1>
        <div className="relative w-96">
          <Search className="absolute left-4 top-3.5 size-4 text-slate-400" />
          <input type="text" placeholder="Search customers..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50">
              <th className="pb-6">Customer Name</th>
              <th className="pb-6">Birthdate</th>
              <th className="pb-6">Amount Spent</th>
              <th className="pb-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {customers.map((user) => (
              <tr key={user.id} className="group hover:bg-slate-50/50 transition-all">
                <td className="py-6">
                  <div className="flex flex-col">
                    <span className="font-black text-slate-900">{user.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 uppercase tracking-tighter">ID: {user.id}</span>
                  </div>
                </td>
                <td className="py-6">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Calendar size={14} className="text-slate-300" /> {user.birthdate}
                  </div>
                </td>
                <td className="py-6">
                  <span className="text-green-500 font-black text-lg">${user.spent}</span>
                </td>
                <td className="py-6 text-center">
                  <Link href={`/customer/${user.id}`}>
                    <button className="px-6 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2 mx-auto hover:bg-white hover:shadow-md transition-all">
                      <Eye size={14} /> View Profile
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}