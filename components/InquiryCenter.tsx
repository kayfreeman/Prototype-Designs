
import React, { useState, useEffect } from 'react';
import { 
  Search, ShieldAlert, History, FileCheck, CheckCircle2, 
  ArrowRight, Loader2, Bot, Download, Users, Briefcase, Landmark, Gavel, 
  Building, AlertTriangle
} from 'lucide-react';

type PersonaType = 'small_agent' | 'regional' | 'national' | 'landlord' | 'conveyancer' | 'regulator';

const InquiryCenter: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaType | null>(null);
  const [workflowStep, setWorkflowStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [query, setQuery] = useState('');

  const personas = [
    { id: 'small_agent', label: 'Small Agent', icon: <Building size={18} />, title: 'HMRC Retrospective Audit' },
    { id: 'regional', label: 'Regional Agency', icon: <Users size={18} />, title: 'Decision Explanation' },
    { id: 'national', label: 'National Chain', icon: <Landmark size={18} />, title: 'Brand Risk Isolation' },
    { id: 'landlord', label: 'Institutional Landlord', icon: <Briefcase size={18} />, title: 'LP Due Diligence Pack' },
    { id: 'conveyancer', label: 'Conveyancer', icon: <Gavel size={18} />, title: 'PI Liability Defense' },
    { id: 'regulator', label: 'Regulator', icon: <ShieldAlert size={18} />, title: 'Inquiry Reconstruction' },
  ];

  const workflows: Record<PersonaType, string[]> = {
    small_agent: ['Property Lookup', 'Evidence Rehydration', 'Context Reconstruction', 'Audit Pack Generation', 'Response Submission'],
    regional: ['Cross-Branch Timeline', 'Risk Evolution View', 'Forensic Narrative Assembly', 'Management Review'],
    national: ['Incident Scoping', 'Franchise Isolation', 'Narrative Control', 'Regulator Portal Access'],
    landlord: ['Asset Compliance Lineage', 'Cross-Agent Evidence Merge', 'ESG Narrative Output', 'LP Presentation'],
    conveyancer: ['Property-Centric Recall', 'Justification Review', 'Defence Pack Generation'],
    regulator: ['Targeted Evidence Access', 'Timeline Reconstruction', 'Enforcement Decision'],
  };

  const handleStartWorkflow = () => {
    if (!query || !selectedPersona) return;
    setWorkflowStep(0);
    nextStep();
  };

  const nextStep = () => {
    if (!selectedPersona) return;
    if (workflowStep < workflows[selectedPersona].length) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setWorkflowStep(prev => prev + 1);
      }, 1500);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Forensic Inquiry Center</h2>
        <p className="text-slate-500 font-medium mt-1">Simulate and execute longitudinal risk reconstruction workflows.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Workflow Selection */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Select Inquiry Profile</h3>
            <div className="grid grid-cols-2 gap-3">
              {personas.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPersona(p.id as PersonaType)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all text-center ${
                    selectedPersona === p.id 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  {p.icon}
                  <span className="text-[11px] font-bold leading-tight">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Target Inquiry</h3>
            <div className="space-y-4">
               <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search property or reference..." 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium" 
                  />
               </div>
               <button 
                 disabled={!selectedPersona || !query}
                 onClick={handleStartWorkflow}
                 className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black disabled:opacity-50 transition-all flex items-center justify-center gap-2"
               >
                 Execute Workflow <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </div>

        {/* Workflow Progress */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col">
          {!selectedPersona ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                <FileCheck size={40} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">No Workflow Active</h4>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">Select a persona and target to begin longitudinal risk reconstruction.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">Active Scenario</h4>
                  <h3 className="text-2xl font-black text-slate-900">{personas.find(p => p.id === selectedPersona)?.title}</h3>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                   <ShieldCheck size={14} className="fill-emerald-600" /> Integrity Verified
                </div>
              </div>

              <div className="space-y-4">
                {workflows[selectedPersona].map((step, idx) => (
                  <div 
                    key={step} 
                    className={`p-5 rounded-3xl border transition-all duration-500 flex items-center justify-between ${
                      workflowStep > idx 
                      ? 'bg-emerald-50/50 border-emerald-100' 
                      : workflowStep === idx 
                        ? 'bg-white border-blue-600 shadow-xl shadow-blue-600/5' 
                        : 'bg-slate-50 border-transparent opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm ${
                        workflowStep > idx ? 'bg-emerald-500 text-white' : workflowStep === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {workflowStep > idx ? <CheckCircle2 size={20} /> : idx + 1}
                      </div>
                      <span className={`font-black text-sm ${workflowStep === idx ? 'text-slate-900' : 'text-slate-500'}`}>{step}</span>
                    </div>
                    {workflowStep === idx && (
                      <div className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                        {isProcessing ? (
                          <><Loader2 size={14} className="animate-spin" /> Processing Memory</>
                        ) : (
                          <button onClick={nextStep} className="hover:underline">Proceed</button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {workflowStep >= workflows[selectedPersona].length && (
                <div className="pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4">
                  <div className="p-8 bg-slate-900 rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                       <Bot size={32} className="text-blue-400" />
                       <div>
                         <h5 className="font-bold">Narrative Reconstruction Complete</h5>
                         <p className="text-xs text-slate-400">Forensic evidence rehydrated from persistent PCM storage.</p>
                       </div>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2">
                       <Download size={16} /> Download Forensic Pack
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L3 7V12C3 17.5 7 22 12 23C17 22 21 17.5 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default InquiryCenter;
