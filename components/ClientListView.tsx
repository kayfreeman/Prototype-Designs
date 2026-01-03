
import React from 'react';
import { ComplianceStatus, RiskLevel } from '../types';
import { MoreHorizontal, ShieldCheck, ShieldAlert, ShieldMinus, Clock, History, FileSearch, Search, ChevronRight } from 'lucide-react';

const properties = [
  { id: '1', address: '42 Mayfair Square, London', status: ComplianceStatus.PASSED, memoryDepth: '5.2 Years', riskLevel: RiskLevel.LOW, lastReconstructed: '2 hours ago', UBO: 'Verified' },
  { id: '2', address: 'The Shard, Floor 32, London', status: ComplianceStatus.FLAGGED, memoryDepth: '8.4 Years', riskLevel: RiskLevel.HIGH, lastReconstructed: '1 day ago', UBO: 'Complex Chain' },
  { id: '3', address: 'Chelsea Waterfront Apt 402', status: ComplianceStatus.PASSED, memoryDepth: '3.1 Years', riskLevel: RiskLevel.LOW, lastReconstructed: '5 mins ago', UBO: 'Verified' },
  { id: '4', address: 'Commercial Estate B, Canary Wharf', status: ComplianceStatus.PENDING, memoryDepth: '0.5 Years', riskLevel: RiskLevel.MEDIUM, lastReconstructed: 'Just now', UBO: 'Awaiting Doc' },
  { id: '5', address: '12-14 Notting Hill Gate', status: ComplianceStatus.FAILED, memoryDepth: '10.0 Years', riskLevel: RiskLevel.CRITICAL, lastReconstructed: 'Yesterday', UBO: 'Sanctioned Link' },
];

interface ClientListViewProps {
  onInquiryClick?: () => void;
  onPropertySelect?: (id: string) => void;
}

const ClientListView: React.FC<ClientListViewProps> = ({ onInquiryClick, onPropertySelect }) => {
  return (
    <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-10 border-b border-slate-100 flex items-center justify-between">
        <div>
           <h3 className="text-2xl font-black text-slate-900">Property Memory Portfolio</h3>
           <p className="text-slate-500 font-medium mt-1">Persistent, regulator-defensible records across your property assets.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={onInquiryClick}
            className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2"
          >
             <FileSearch size={18} /> Inquiry Center
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
              <th className="px-10 py-5">Property Asset</th>
              <th className="px-6 py-5">Memory Status</th>
              <th className="px-6 py-5">Retention Depth</th>
              <th className="px-6 py-5">UBO Defensibility</th>
              <th className="px-6 py-5">Last Reconstruction</th>
              <th className="px-10 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {properties.map((prop) => (
              <tr 
                key={prop.id} 
                onClick={() => onPropertySelect?.(prop.id)}
                className="hover:bg-slate-50/80 transition-all group cursor-pointer"
              >
                <td className="px-10 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <History size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{prop.address}</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ID: PR-{prop.id}9283</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={prop.status} />
                </td>
                <td className="px-6 py-4">
                   <div className="flex flex-col">
                      <span className="font-bold text-slate-700">{prop.memoryDepth}</span>
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(parseInt(prop.memoryDepth)*10, 100)}%` }}></div>
                      </div>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] px-2.5 py-1 rounded-md font-black uppercase tracking-widest ${prop.UBO.includes('Verified') ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                    {prop.UBO}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 font-bold">
                  {prop.lastReconstructed}
                </td>
                <td className="px-10 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
                      title="View Memory Detail"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <button 
                      className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition-all"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-10 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-black text-slate-400 uppercase tracking-widest">
        <p>Managed Memory: 1,452 Property Assets</p>
        <p>UK Forensic Standard Compliance Active</p>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: ComplianceStatus }> = ({ status }) => {
  switch (status) {
    case ComplianceStatus.PASSED:
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
          <ShieldCheck size={12} /> Defensible
        </span>
      );
    case ComplianceStatus.FLAGGED:
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-100">
          <ShieldAlert size={12} /> Scrutiny
        </span>
      );
    case ComplianceStatus.FAILED:
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
          <ShieldMinus size={12} /> Breached
        </span>
      );
    case ComplianceStatus.PENDING:
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
          <Clock size={12} /> Syncing
        </span>
      );
  }
};

export default ClientListView;
