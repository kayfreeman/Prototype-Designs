
import React, { useState } from 'react';
import { 
  ArrowLeft, History, ShieldCheck, Download, ExternalLink, 
  Bot, Clock, User, Landmark, FileText, ChevronRight, 
  AlertTriangle, Network, Fingerprint, Lock, Database
} from 'lucide-react';

interface PropertyDetailViewProps {
  propertyId: string;
  onBack: () => void;
}

const PropertyDetailView: React.FC<PropertyDetailViewProps> = ({ propertyId, onBack }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'ubo' | 'vault' | 'analysis'>('timeline');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm group"
          >
            <ArrowLeft className="text-slate-500 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
               <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-md">Property Memory Record</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Retention: 8.4 Years</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">42 Mayfair Square, London</h2>
            <p className="text-slate-500 font-medium text-sm">Forensic ID: PCM-LONDON-7284-912837</p>
          </div>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
              <Download size={16} /> Export Forensic Pack
           </button>
           <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" /> Defensible Status
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-3 space-y-2">
          <TabButton active={activeTab === 'timeline'} icon={<History size={18} />} label="Forensic Timeline" onClick={() => setActiveTab('timeline')} />
          <TabButton active={activeTab === 'ubo'} icon={<Network size={18} />} label="UBO Lineage" onClick={() => setActiveTab('ubo')} />
          <TabButton active={activeTab === 'vault'} icon={<Database size={18} />} label="Evidence Vault" onClick={() => setActiveTab('vault')} />
          <TabButton active={activeTab === 'analysis'} icon={<Bot size={18} />} label="Reasonable Steps" onClick={() => setActiveTab('analysis')} />
          
          <div className="mt-8 p-6 bg-slate-900 rounded-[32px] text-white relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Integrity Hash</p>
               <p className="text-[10px] font-mono text-blue-400 break-all leading-relaxed">sha256:728491..91283</p>
               <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500">Last Verified</span>
                  <span className="text-[10px] font-bold text-emerald-400">Just Now</span>
               </div>
             </div>
             <Lock size={100} className="absolute -bottom-4 -right-4 text-white/5" />
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 bg-white border border-slate-200 rounded-[40px] shadow-sm overflow-hidden min-h-[600px] flex flex-col">
          {activeTab === 'timeline' && <TimelineContent />}
          {activeTab === 'ubo' && <UBOContent />}
          {activeTab === 'vault' && <VaultContent />}
          {activeTab === 'analysis' && <AnalysisContent />}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:bg-white hover:text-slate-900'
    }`}
  >
    {icon} {label}
  </button>
);

const TimelineContent = () => (
  <div className="p-10 space-y-10">
    <div className="flex items-center justify-between">
       <h3 className="text-xl font-black text-slate-900">Longitudinal Memory</h3>
       <button className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline">Reconstruct Years 1-5</button>
    </div>
    
    <div className="relative space-y-12 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
       <TimelineItem 
         date="12 Jul 2024" 
         title="Biometric Verification Passed" 
         actor="James Dixon (Compliance Head)"
         desc=" Alexander Volkov (Buyer) verified using automated PCM engine. Match score: 99.4%."
         type="verification"
       />
       <TimelineItem 
         date="02 May 2023" 
         title="Ownership Transfer: Inherited Risk" 
         actor="System Automator"
         desc="Property record transferred from Knight Frank South to Mayfair Hub. All 7 years of memory preserved."
         type="transfer"
       />
       <TimelineItem 
         date="15 Jan 2021" 
         title="SAR Disclosure Filed" 
         actor="Compliance Agent #04"
         desc="Suspicious Activity Report filed regarding UBO complexity. Regulator ACK received."
         type="alert"
       />
       <TimelineItem 
         date="10 Dec 2018" 
         title="Initial Onboarding" 
         actor="Legacy System Import"
         desc="Record established. Historical title deeds ingested from HM Land Registry."
         type="record"
       />
    </div>
  </div>
);

const TimelineItem = ({ date, title, actor, desc, type }: any) => {
  const icons: any = {
    verification: <ShieldCheck className="text-emerald-500" size={14} />,
    transfer: <History className="text-blue-500" size={14} />,
    alert: <AlertTriangle className="text-rose-500" size={14} />,
    record: <FileText className="text-slate-500" size={14} />,
  };

  return (
    <div className="relative pl-12">
      <div className={`absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ring-2 ring-slate-100 ${
        type === 'alert' ? 'bg-rose-500' : 'bg-slate-300'
      }`}></div>
      <div className="space-y-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{date}</p>
        <div className="flex items-center gap-2">
           <h4 className="text-base font-bold text-slate-900">{title}</h4>
           <div className="p-1 bg-slate-50 rounded-md">{icons[type]}</div>
        </div>
        <p className="text-xs font-bold text-blue-600 flex items-center gap-1">
           <User size={12} /> {actor}
        </p>
        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">{desc}</p>
      </div>
    </div>
  );
};

const UBOContent = () => (
  <div className="p-10 space-y-10">
     <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
        <div className="flex items-center gap-4 mb-8">
           <Network className="text-blue-600" size={24} />
           <h3 className="text-xl font-black">Complexity: High (Tier 4)</h3>
        </div>
        
        <div className="space-y-4">
           <UBONode label="42 Mayfair Square (Asset)" level={0} />
           <UBONode label="Mayfair HoldCo Ltd (UK SPV)" level={1} />
           <UBONode label="Channel Is. Investments (Jersey Trust)" level={2} />
           <UBONode label="Global Wealth Fund (Cayman)" level={3} highlight />
           <UBONode label="UBO: Alexander Volkov (Individual)" level={4} verified />
        </div>
     </div>
  </div>
);

const UBONode = ({ label, level, highlight, verified }: any) => (
  <div className={`flex items-center gap-4`} style={{ marginLeft: `${level * 40}px` }}>
     <div className="w-8 h-8 flex items-center justify-center text-slate-300">
        <ChevronRight size={20} />
     </div>
     <div className={`flex-1 p-4 rounded-2xl border flex items-center justify-between transition-all ${
       highlight ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg' : verified ? 'bg-emerald-50 text-emerald-800 border-emerald-100' : 'bg-white border-slate-100 text-slate-700'
     }`}>
        <span className="text-sm font-bold">{label}</span>
        {verified && <Fingerprint size={16} />}
        {highlight && <Landmark size={16} />}
     </div>
  </div>
);

const VaultContent = () => (
  <div className="p-10 space-y-6">
     <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black">Forensic Artifacts</h3>
        <p className="text-xs font-bold text-slate-400">Total Size: 45MB</p>
     </div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArtifactCard name="Passport_Volkov_A.pdf" size="2.4MB" date="12 Jul 2024" type="pdf" />
        <ArtifactCard name="Title_Deed_Mayfair_42.pdf" size="1.2MB" date="10 Dec 2018" type="pdf" />
        <ArtifactCard name="Source_of_Wealth_Recon.xlsx" size="4.8MB" date="15 Jan 2021" type="sheet" />
        <ArtifactCard name="Corporate_Structure_Map.png" size="12.0MB" date="02 May 2023" type="img" />
     </div>
  </div>
);

const ArtifactCard = ({ name, size, date, type }: any) => (
  <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between group hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
     <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600">
           <FileText size={20} />
        </div>
        <div>
           <p className="text-sm font-bold text-slate-900 truncate max-w-[150px]">{name}</p>
           <p className="text-[10px] font-bold text-slate-400">{date} • {size}</p>
        </div>
     </div>
     <Download size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
  </div>
);

const AnalysisContent = () => (
  <div className="p-10 space-y-10">
     <div className="flex items-center gap-4">
        <Bot className="text-blue-600" size={24} />
        <h3 className="text-xl font-black">Reasonable Steps Summary</h3>
     </div>
     
     <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
           <p className="text-lg font-medium leading-relaxed italic opacity-90">
             "Based on 8 years of persistent memory, this asset represents a standard risk. 
             While the ownership chain involves offshore entities (Cayman), the UBO has been 
             forensically verified through longitudinal biometric logs and direct bank-verified 
             source of wealth documentation. No active sanction flags found in last 24-hour sync."
           </p>
           <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Defensibility Rating</p>
                 <p className="text-xl font-black">Tier 1: High Assurance</p>
              </div>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                 Generate Narrative PDF
              </button>
           </div>
        </div>
        <Bot size={150} className="absolute -bottom-10 -right-10 text-white/5" />
     </div>
  </div>
);

export default PropertyDetailView;
