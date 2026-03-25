import React, { useState } from 'react';
import { 
  MessageSquare, Zap, Shield, Image as ImageIcon, 
  PlusCircle, ChevronRight, BarChart3, Sword, 
  Trophy, Users, CheckCircle2 
} from 'lucide-react';

const App = () => {
  const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1286591275071574096&permissions=8&scope=bot%20applications.commands";
  const supportLink = "https://discord.gg/eawRBFkzFn";

  const [activeTab, setActiveTab] = useState('player');

  const commands = {
    player: { cmd: "/player", desc: "Get detailed player stats with a beautiful visual card.", icon: <Users size={20}/> },
    clan: { cmd: "/clan", desc: "Check clan performance, war logs and member lists instantly.", icon: <Shield size={20}/> },
    about: { cmd: "/about", desc: "View real-time bot statistics, uptime, and development info.", icon: <BarChart3 size={20}/> },
    raid: { cmd: "/raid", desc: "Track Raid Weekend results and capital contributions.", icon: <Sword size={20}/> }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans overflow-x-hidden">
      
      {/* Background Decorative Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-20 bg-[#020617]/40 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#EE6A70] to-[#ff8e93] rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-brand/20">C</div>
          <h1 className="text-xl font-black tracking-tighter text-white">CLASH<span className="text-brand">DITTO</span></h1>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-slate-400">
          <a href="#features" className="hover:text-brand transition-colors">Features</a>
          <a href="#commands" className="hover:text-brand transition-colors">Commands</a>
          <a href={supportLink} className="hover:text-brand transition-colors">Community</a>
        </div>
        <a href={inviteLink} className="bg-white text-black hover:bg-brand hover:text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl">
          Invite Bot
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-brand text-xs font-bold mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          POWERING 8,000+ CLANS
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-white leading-[0.9]">
          DOMINATE THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-pink-500 to-orange-400">BATTLEFIELD.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          The most advanced Clash of Clans bot for Discord. Track players, manage clans, and get stunning visual stats in seconds.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a href={inviteLink} className="group flex items-center justify-center gap-3 bg-brand px-10 py-5 rounded-2xl font-black text-lg text-white hover:bg-brand/90 transition-all shadow-2xl shadow-brand/30 transform hover:-translate-y-1">
            <PlusCircle size={22} /> ADD TO DISCORD
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={supportLink} className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black text-lg text-white hover:bg-white/10 transition-all backdrop-blur-md transform hover:-translate-y-1">
            <MessageSquare size={22} /> GET SUPPORT
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        {[
          { label: "Servers", value: "8K+", icon: <Shield size={16}/> },
          { label: "Players", value: "213K+", icon: <Users size={16}/> },
          { label: "Commands", value: "1.5M+", icon: <Zap size={16}/> },
          { label: "Ranking", value: "#1", icon: <Trophy size={16}/> },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm group hover:border-brand/50 transition-colors">
            <div className="text-brand mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{s.icon}</div>
            <h3 className="text-3xl font-black text-white">{s.value}</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Interactive Commands Showcase */}
      <section id="commands" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight text-left">
              Commands that <br /><span className="text-brand">pack a punch.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 text-left leading-relaxed">
              No more boring text lists. ClashDitto provides clear, visual, and accurate data for your entire clan.
            </p>
            
            <div className="space-y-4">
              {Object.keys(commands).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all border ${activeTab === key ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
                >
                  {commands[key].icon}
                  <span className="font-bold text-lg">{commands[key].cmd}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Command Preview Box */}
          <div className="relative group">
            <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-full group-hover:bg-brand/30 transition-colors"></div>
            <div className="relative bg-[#0f172a] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center">
               <div className="flex gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
               <h3 className="text-3xl font-black text-brand mb-4 uppercase">{commands[activeTab].cmd}</h3>
               <p className="text-slate-300 text-xl leading-relaxed">
                 {commands[activeTab].desc}
               </p>
               <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3 text-slate-500 font-mono text-sm">
                 <CheckCircle2 size={16} className="text-green-500"/>
                 Ready to use in any server
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center px-6 bg-black/20">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Trusted by thousands of Chiefs.</h3>
        <p className="text-slate-500 text-sm mb-10">ClashDitto is not affiliated with Supercell.</p>
        <div className="flex justify-center gap-6 text-sm font-bold text-slate-400 mb-10">
          <a href={inviteLink} className="hover:text-brand transition-colors">Invite</a>
          <a href={supportLink} className="hover:text-brand transition-colors">Support</a>
          <a href="#" className="hover:text-brand transition-colors">Terms</a>
        </div>
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.3em]">© 2026 Developed by romil_chavda</p>
      </footer>

    </div>
  );
};

export default App;

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:border-brand/40 transition-all duration-500 backdrop-blur-md">
    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand transition-all duration-500 text-brand group-hover:text-white">
      {icon}
    </div>
    <h4 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{title}</h4>
    <p className="text-slate-400 leading-relaxed text-lg">{desc}</p>
  </div>
);