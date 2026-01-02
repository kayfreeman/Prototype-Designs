
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, ShieldAlert, Settings, Bell, Search, Bot, 
  Camera, Zap, HelpCircle, LogOut, Menu, X
} from 'lucide-react';
import DashboardView from './components/DashboardView';
import ClientListView from './components/ClientListView';
import RegulatoryIntelligence from './components/RegulatoryIntelligence';
import SidebarItem from './components/SidebarItem';
import IDVerificationFlow from './components/IDVerificationFlow';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clients' | 'intel' | 'verify'>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  if (!isLoggedIn) {
    return <LandingPage onSignIn={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-slate-900 text-white flex flex-col shrink-0 transition-all duration-300 ease-in-out z-30 shadow-2xl`}>
        <div className="p-6 h-20 flex items-center justify-between border-b border-slate-800">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'hidden'}`}>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
              <ShieldAlert size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">PropComply <span className="text-blue-400">AI</span></h1>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest leading-none mt-1">Agency Hub</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={<Users size={20} />} 
            label="Client Portfolio" 
            active={activeTab === 'clients'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('clients')} 
          />
          <SidebarItem 
            icon={<Camera size={20} />} 
            label="ID Verification" 
            active={activeTab === 'verify'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('verify')} 
          />
          <SidebarItem 
            icon={<Bot size={20} />} 
            label="Regulatory Copilot" 
            active={activeTab === 'intel'} 
            collapsed={!isSidebarOpen}
            onClick={() => setActiveTab('intel')} 
          />
          
          <div className="pt-6 mt-6 border-t border-slate-800">
             <p className={`px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ${!isSidebarOpen && 'hidden'}`}>Organization</p>
             <SidebarItem icon={<Settings size={20} />} label="Settings" active={false} collapsed={!isSidebarOpen} />
             <SidebarItem icon={<HelpCircle size={20} />} label="Support" active={false} collapsed={!isSidebarOpen} />
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className={`flex items-center gap-3 p-3 bg-slate-800/40 rounded-2xl border border-slate-700/50 ${!isSidebarOpen && 'justify-center p-2'}`}>
            <div className="relative shrink-0">
              <img src="https://ui-avatars.com/api/?name=James+Dixon&background=3b82f6&color=fff" className="w-10 h-10 rounded-xl object-cover" alt="Profile" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
            </div>
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate leading-tight">James Dixon</p>
                <p className="text-[11px] text-slate-400 truncate">AML Officer</p>
              </div>
            )}
            {isSidebarOpen && (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-20 sticky top-0">
          <div className="flex items-center gap-4">
             <div className="relative group w-96">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Universal Search (Cmd + K)" 
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-100 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 text-sm outline-none transition-all"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-[8px] font-bold text-blue-700">A{i}</div>
                ))}
              </div>
              <p className="text-[11px] font-semibold text-blue-700">3 Agents Online</p>
            </div>

            <button className="relative p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all hover:scale-105">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button 
              onClick={() => setActiveTab('verify')}
              className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg shadow-slate-900/10 active:scale-95"
            >
              <Zap size={18} className="text-yellow-400" />
              Quick Check
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          <div className="max-w-[1600px] mx-auto p-8">
            {activeTab === 'dashboard' && <DashboardView onVerifyClick={() => setActiveTab('verify')} />}
            {activeTab === 'clients' && <ClientListView />}
            {activeTab === 'intel' && <RegulatoryIntelligence />}
            {activeTab === 'verify' && <IDVerificationFlow />}
          </div>
        </div>
      </main>

      {/* Floating Copilot Trigger */}
      <button 
        onClick={() => setActiveTab('intel')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <Bot size={28} />
        <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Compliance Copilot
        </div>
      </button>
    </div>
  );
};

export default App;
