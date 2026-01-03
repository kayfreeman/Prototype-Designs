
import React, { useState } from 'react';
import { 
  Building2, Users, CreditCard, Key, ShieldCheck, 
  ChevronRight, Save, Globe, Mail, Phone, 
  ShieldAlert, Database, History, ExternalLink,
  FileText
} from 'lucide-react';

const SettingsView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'general' | 'team' | 'billing' | 'api'>('general');

  const tabs = [
    { id: 'general', label: 'Agency Profile', icon: <Building2 size={18} /> },
    { id: 'team', label: 'Team Management', icon: <Users size={18} /> },
    { id: 'billing', label: 'PCMaaS Plan', icon: <CreditCard size={18} /> },
    { id: 'api', label: 'API & Integrations', icon: <Key size={18} /> },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h2>
        <p className="text-slate-500 font-medium mt-1">Configure your agency's compliance memory and operational parameters.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="lg:w-64 shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeSubTab === tab.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-slate-500 hover:bg-white hover:text-slate-900'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-sm p-8 min-h-[600px]">
          {activeSubTab === 'general' && <GeneralSettings />}
          {activeSubTab === 'team' && <TeamSettings />}
          {activeSubTab === 'billing' && <BillingSettings />}
          {activeSubTab === 'api' && <ApiSettings />}
        </div>
      </div>
    </div>
  );
};

const GeneralSettings = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-slate-900">Agency Profile</h3>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
        <Save size={16} /> Save Changes
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Agency Name</label>
        <div className="relative group">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="text" 
            defaultValue="Knight Frank Central London" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-600 transition-all font-medium text-slate-900" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Website URL</label>
        <div className="relative group">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="text" 
            defaultValue="https://knightfrank.com" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-600 transition-all font-medium text-slate-900" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Compliance Email</label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="email" 
            defaultValue="compliance@knightfrank.co.uk" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-600 transition-all font-medium text-slate-900" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Emergency Phone</label>
        <div className="relative group">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="tel" 
            defaultValue="+44 20 7861 5111" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-600 transition-all font-medium text-slate-900" 
          />
        </div>
      </div>
    </div>

    <div className="pt-8 border-t border-slate-100">
      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck className="text-emerald-500" size={24} />
        <h4 className="text-lg font-bold">Regulatory Registration</h4>
      </div>
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ICO Registration No</p>
            <p className="font-bold text-slate-900">ZA782192</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HMRC Supervision ID</p>
            <p className="font-bold text-slate-900">UK-AML-00129-KF</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification Status</p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-black uppercase tracking-widest">Active Standard</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamSettings = () => {
  const members = [
    { name: 'James Dixon', role: 'Compliance Head', status: 'Owner', email: 'j.dixon@agency.com' },
    { name: 'Sarah Miller', role: 'Senior Auditor', status: 'Admin', email: 's.miller@agency.com' },
    { name: 'Tom Roberts', role: 'Branch Manager', status: 'Agent', email: 't.roberts@agency.com' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">Team Management</h3>
        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">Invite Member</button>
      </div>

      <div className="border border-slate-100 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Level</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm font-medium">
            {members.map((member) => (
              <tr key={member.email} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://ui-avatars.com/api/?name=${member.name}&background=random`} className="w-8 h-8 rounded-lg" alt="" />
                    <div>
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500">{member.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${
                    member.status === 'Owner' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BillingSettings = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-slate-900">PCM Plan & Billing</h3>
      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Next Invoice: 12 Aug 2025</span>
    </div>

    <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <ShieldCheck size={120} className="text-white/5" />
      </div>
      <div className="relative z-10 space-y-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Current Active Tier</p>
          <h4 className="text-4xl font-black">PCM Forensic</h4>
          <p className="text-slate-400 text-sm font-medium mt-2">Enhanced defensibility with 7-10 year longitudinal risk memory.</p>
        </div>
        <div className="flex items-center gap-6 pt-4 border-t border-slate-700">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Memory Load</p>
            <p className="text-xl font-bold">1,452 Assets</p>
          </div>
          <div className="w-px h-8 bg-slate-700"></div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Annual Rate</p>
            <p className="text-xl font-bold">£75/prop</p>
          </div>
          <button className="ml-auto px-6 py-3 bg-white text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">Upgrade Plan</button>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Audit-Ready History</h4>
      <div className="space-y-2">
        {[
          { date: '12 Jul 2025', amount: '£108,900.00', id: 'INV-2025-00129' },
          { date: '12 Jun 2025', amount: '£108,900.00', id: 'INV-2025-00128' },
        ].map(inv => (
          <div key={inv.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              {/* Correctly imported and used FileText icon for forensic logs */}
              <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-all"><FileText size={18} className="text-slate-400" /></div>
              <div>
                <p className="text-sm font-bold text-slate-900">{inv.id}</p>
                <p className="text-[10px] text-slate-400 font-bold">{inv.date}</p>
              </div>
            </div>
            <p className="text-sm font-black text-slate-900">{inv.amount}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ApiSettings = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-slate-900">API & Integrations</h3>
      <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">Generate New Key</button>
    </div>

    <div className="space-y-6">
      <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-white rounded-lg shadow-sm"><Key size={20} className="text-blue-600" /></div>
             <h4 className="font-bold text-slate-900">Platform Secret Key</h4>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Secured</span>
        </div>
        <div className="flex gap-2">
          <input 
            type="password" 
            readOnly 
            value="prop_live_728491028374h9128374h19283" 
            className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-500" 
          />
          <button onClick={() => alert("Copied to clipboard")} className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Copy</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <IntegrationCard name="Reapit Foundations" status="Connected" icon="https://www.reapit.com/favicon.ico" />
        <IntegrationCard name="Alto CRM" status="Syncing" icon="https://www.altosoftware.co.uk/favicon.ico" />
        <IntegrationCard name="HM Land Registry" status="Connected" icon={<Database size={24} className="text-blue-600" />} />
        <IntegrationCard name="NCA SAR Gateway" status="Standby" icon={<ShieldAlert size={24} className="text-rose-500" />} />
      </div>
    </div>
  </div>
);

const IntegrationCard = ({ name, status, icon }: { name: string, status: string, icon: any }) => (
  <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between hover:shadow-md transition-all group cursor-pointer">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
        {typeof icon === 'string' ? <img src={icon} className="w-6 h-6 object-contain" alt="" /> : icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900">{name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
           <div className={`w-1.5 h-1.5 rounded-full ${status === 'Connected' ? 'bg-emerald-500' : 'bg-amber-400'}`}></div>
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{status}</p>
        </div>
      </div>
    </div>
    <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
  </div>
);

export default SettingsView;
