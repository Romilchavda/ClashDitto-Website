import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldAlert } from 'lucide-react';

const ToS = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 p-6 md:p-20 font-sans selection:bg-[#EE6A70]">
      <Link to="/" className="flex items-center gap-2 text-[#EE6A70] mb-12 font-bold group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
      </Link>
      
      <h1 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">Terms of <span className="text-[#EE6A70]">Service</span></h1>
      <p className="text-slate-500 mb-12 uppercase tracking-widest text-sm font-bold">Last Updated: March 2026</p>

      <div className="max-w-4xl space-y-12 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><CheckCircle2 className="text-[#EE6A70]"/> 1. Acceptance of Terms</h2>
          <p>By adding ClashDitto to your Discord server or using its commands, you agree to be bound by these Terms of Service, all applicable laws, and regulations. You also agree that you are responsible for compliance with any local laws and Discord's own Terms of Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><ShieldAlert className="text-[#EE6A70]"/> 2. Use License & Restrictions</h2>
          <p>The bot is provided for entertainment and management purposes related to Clash of Clans. You agree NOT to:</p>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-slate-400">
            <li>Attempt to reverse engineer or "scrape" the bot's code or data.</li>
            <li>Use the bot to harass, spam, or initiate malicious attacks on Discord servers.</li>
            <li>Self-bot or automate bot commands in a way that bypasses intended usage.</li>
            <li>Abuse the Supercell API through our bot for commercial purposes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><AlertTriangle className="text-[#EE6A70]"/> 3. Disclaimer & Affiliation</h2>
          <p>ClashDitto is NOT an official product of Supercell. We are an independent service using the official Clash of Clans API. Supercell is not responsible for any issues arising from the use of this bot. The data provided is "as-is" and we do not guarantee 100% uptime of the game API.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4"><CheckCircle2 className="text-[#EE6A70]"/> 4. Limitations</h2>
          <p>In no event shall the developers of ClashDitto be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the bot, even if we have been notified of the possibility of such damage.</p>
        </section>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 text-slate-500 text-sm italic">
        If you have questions about these terms, please join our Support Server.
      </div>
    </div>
  );
};

export default ToS;