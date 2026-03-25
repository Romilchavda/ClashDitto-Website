import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 p-6 md:p-20 font-sans">
      <Link to="/" className="flex items-center gap-2 text-[#EE6A70] mb-12 font-bold group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
      </Link>
      <h1 className="text-5xl font-black text-white mb-10 uppercase tracking-tighter">Privacy <span className="text-[#EE6A70]">Policy</span></h1>
      <div className="max-w-3xl space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3"><Lock size={20} className="text-[#EE6A70]"/> 1. Data Collected</h2>
          <p>We only store Discord IDs, Server IDs, and player tags you provide to us. We do NOT collect personal emails or passwords.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3"><Lock size={20} className="text-[#EE6A70]"/> 2. Data Usage</h2>
          <p>Your data is only used to fetch game stats from Supercell. We never sell or share your data with third parties.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;