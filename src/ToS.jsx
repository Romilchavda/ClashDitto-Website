import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ToS = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 p-6 md:p-20 font-sans">
      <Link to="/" className="flex items-center gap-2 text-[#EE6A70] mb-12 font-bold group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
      </Link>
      <h1 className="text-5xl font-black text-white mb-10 uppercase tracking-tighter">Terms of <span className="text-[#EE6A70]">Service</span></h1>
      <div className="max-w-3xl space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3"><CheckCircle2 size={20} className="text-[#EE6A70]"/> 1. Agreement</h2>
          <p>By using ClashDitto, you agree to these terms. We reserve the right to ban users who abuse the bot's features or spam commands.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3"><CheckCircle2 size={20} className="text-[#EE6A70]"/> 2. Disclaimer</h2>
          <p>ClashDitto is not an official Supercell product. We provide data from the official API "as-is" and are not responsible for game-related issues.</p>
        </section>
      </div>
    </div>
  );
};

export default ToS;