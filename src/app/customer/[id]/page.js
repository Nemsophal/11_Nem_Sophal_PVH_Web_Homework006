import Link from "next/link";
import { User, Calendar, CreditCard, Trash2, Edit3 } from "lucide-react";

export default async function CustomerDetail({ params }) {
  const user = { name: "Kok Daro", birthdate: "2000-03-21", spent: 75, id: params.id };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 p-12 max-w-3xl w-full flex flex-col md:flex-row gap-12 items-center">
  
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 bg-slate-50 rounded-full border-8 border-white shadow-inner flex items-center justify-center relative overflow-hidden">
            <User size={80} className="text-slate-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 italic">{user.name}</h2>
        </div>

        <div className="flex-1 space-y-8">
          <Link href="/customer" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            BACK TO CUSTOMER TABLE
          </Link>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Full Name</p>
              <div className="flex items-center gap-2 font-bold text-slate-800"><User size={14} className="text-amber-400" /> {user.name}</div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Total Spent</p>
              <div className="flex items-center gap-2 font-black text-slate-900 text-xl"><CreditCard size={18} className="text-green-500" /> ${user.spent}</div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Birthdate</p>
              <div className="flex items-center gap-2 font-bold text-slate-800"><Calendar size={14} className="text-amber-400" /> {user.birthdate}</div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Account ID</p>
              <div className="bg-slate-50 p-2 rounded-lg text-[10px] font-mono text-slate-400 break-all border border-slate-100">{user.id}</div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-[#0f172a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <Edit3 size={16} /> Edit Profile
            </button>
            <button className="flex-1 bg-red-50 text-red-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-all">
              <Trash2 size={16} /> Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}