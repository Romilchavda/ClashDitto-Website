import React from 'react';
import { MessageSquare, Zap, Shield, Image as ImageIcon, PlusCircle } from 'lucide-react';

const App = () => {
  const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1286591275071574096&permissions=8&scope=bot%20applications.commands";
  const supportLink = "https://discord.gg/eawRBFkzFn";

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-[#EE6A70] selection:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 md:px-20 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#EE6A70] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-[#EE6A70]/20">C</div>
          <h1 className="text-xl font-bold tracking-tight">ClashDitto</h1>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-[#EE6A70] transition">Features</a>
          <a href={supportLink} className="hover:text-[#EE6A70] transition">Support</a>
        </div>
        <a href={inviteLink} className="bg-[#EE6A70] hover:bg-[#EE6A70]/90 px-5 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-[#EE6A70]/20">
          Invite Bot
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#EE6A70]/10 border border-[#EE6A70]/20 px-4 py-1.5 rounded-full text-[#EE6A70] text-xs font-bold mb-8 animate-pulse">
            <Zap size={14} /> NOW TRACKING RAID WEEKENDS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Track your <span className="text-[#EE6A70]">Clash of Clans</span> progress like a Pro.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Beautiful player cards, detailed clan stats, and real-time data. ClashDitto is the only Discord bot you need for your Clan.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href={inviteLink} className="flex items-center justify-center gap-2 bg-[#EE6A70] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all">
              <PlusCircle size={20} /> Add to Discord
            </a>
            <a href={supportLink} className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              <MessageSquare size={20} /> Support Server
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 -mt-16">
        {[
          { label: "Servers", value: "8,000+" },
          { label: "Users", value: "213K+" },
          { label: "Commands", value: "1.5M+" },
          { label: "Uptime", value: "99.9%" },
        ].map((s, i) => (
          <div key={i} className="bg-[#1e293b] border border-white/5 p-6 rounded-3xl text-center">
            <h3 className="text-3xl font-black text-white">{s.value}</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 text-white">Everything you need.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ImageIcon className="text-[#EE6A70]" />}
            title="Visual Profile Cards"
            desc="Show off your TH level, heroes, and trophies with high-quality generated images."
          />
          <FeatureCard 
            icon={<Zap className="text-yellow-400" />}
            title="Fast as Lightning"
            desc="Direct integration with official Supercell API ensures 100% data accuracy."
          />
          <FeatureCard 
            icon={<Shield className="text-blue-400" />}
            title="Clan Management"
            desc="Easy-to-use commands for clan leaders to track raid contributions and members."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <p className="text-sm text-gray-600">© 2026 ClashDitto. Developed with ❤️ by romil_chavda</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group bg-[#1e293b] border border-white/5 p-8 rounded-[2rem] hover:border-[#EE6A70]/30 transition-all duration-300">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default App;