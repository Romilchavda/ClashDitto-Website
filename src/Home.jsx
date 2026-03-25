import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Zap, Shield, PlusCircle, ChevronRight, Users, BarChart3, Sword, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1286591275071574096&permissions=8&scope=bot%20applications.commands";
  const [activeTab, setActiveTab] = useState('player');

  const commands = {
    player: { cmd: "/player", desc: "Generate beautiful visual profile cards with real-time stats.", icon: <Users size={20}/> },
    clan: { cmd: "/clan", desc: "Check clan war performance and member management logs.", icon: <Shield size={20}/> },
    about: { cmd: "/about", desc: "View real-time bot statistics and development information.", icon: <BarChart3 size={20}/> }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-[#EE6A70]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-20 bg-[#020617]/40 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#EE6A70] rounded-xl flex items-center justify-center font-black text-white shadow-lg">C</div>
          <h1 className="text-xl font-black text-white tracking-tighter uppercase">ClashDitto</h1>
        </Link>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link to="/tos" className="hover:text-[#EE6A70]">Terms</Link>
            <Link to="/privacy" className="hover:text-[#EE6A70]">Privacy</Link>
        </div>
        <a href={inviteLink} className="bg-[#EE6A70] px-6 py-2 rounded-full font-bold text-sm text-white">Invite</a>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-10 px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6">DOMINATE THE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6A70] to-orange-400">BATTLEFIELD.</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10">Advanced Clash of Clans tracking for Discord. Get stunning visual stats in seconds.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={inviteLink} className="bg-[#EE6A70] px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:scale-105 transition shadow-xl shadow-[#EE6A70]/20 text-white">
            <PlusCircle size={20}/> ADD TO DISCORD
          </a>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-3">
            {Object.keys(commands).map(key => (
              <button key={key} onClick={() => setActiveTab(key)} className={`w-full p-5 rounded-2xl text-left border transition ${activeTab === key ? 'bg-[#EE6A70] border-[#EE6A70] text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                <div className="flex items-center gap-3 font-bold">{commands[key].icon} {commands[key].cmd}</div>
              </button>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center">
            <h3 className="text-2xl font-black text-[#EE6A70] mb-4 uppercase">{commands[activeTab].cmd}</h3>
            <p className="text-slate-300 text-lg leading-relaxed">{commands[activeTab].desc}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-6 text-sm font-bold text-slate-500">
          <Link to="/tos" className="hover:text-[#EE6A70]">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-[#EE6A70]">Privacy Policy</Link>
        </div>
        <p className="text-[10px] text-slate-700 tracking-[0.3em] uppercase">© 2026 Developed by romil_chavda</p>
      </footer>
    </div>
  );
};

export default Home;