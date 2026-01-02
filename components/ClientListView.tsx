
import React from 'react';
import { ComplianceStatus, RiskLevel, Client } from '../types';
import { MoreHorizontal, ShieldCheck, ShieldAlert, ShieldMinus, Clock } from 'lucide-react';

const clients: Client[] = [
  { id: '1', name: 'Global Assets Holdings Ltd', type: 'Company', status: ComplianceStatus.FLAGGED, riskScore: 82, riskLevel: RiskLevel.HIGH, lastChecked: '2 hours ago', verificationSource: 'Companies House' },
  { id: '2', name: 'Dr. Sarah Henderson', type: 'Individual', status: ComplianceStatus.PASSED, riskScore: 14, riskLevel: RiskLevel.LOW, lastChecked: '1 day ago', verificationSource: 'Passport/Onfido' },
  { id: '3', name: 'Artem Volkov', type: 'Individual', status: ComplianceStatus.PENDING, riskScore: 45, riskLevel: RiskLevel.MEDIUM, lastChecked: '5 mins ago', verificationSource: 'International Sanctions' },
  { id: '4', name: 'East London Property Group', type: 'Company', status: ComplianceStatus.PASSED, riskScore: 22, riskLevel: RiskLevel.LOW, lastChecked: '3 days ago', verificationSource: 'HMRC Registry' },
  { id: '5', name: 'Marina Petrova', type: 'Individual', status: ComplianceStatus.FAILED, riskScore: 94, riskLevel: RiskLevel.CRITICAL, lastChecked: 'Just now', verificationSource: 'OFAC/HM Treasury' },
];

const ClientListView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-xl font-bold">Client Verifications</h3>
        <div className="flex gap-2">
          <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium outline-none">
            <option>All Risk Levels</option>
            <option>High Risk</option>
            <option>Critical</option>
          </select>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold">Add New Entity</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
              <th className="px-6 py-4">Entity Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Risk Score</th>
              <th className="px-6 py-4">Last Verification</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${client.type === 'Company' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{client.name}</p>
                      <p className="text-xs text-slate-500">{client.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={client.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${getRiskColor(client.riskLevel)}`} 
                        style={{ width: `${client.riskScore}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-700">{client.riskScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock size={14} />
                    {client.lastChecked}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 rounded-md font-medium text-slate-600">{client.verificationSource}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
        <p>Showing 5 of 1,284 clients</p>
        <div className="flex items-center gap-2 font-bold">
          <button className="px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm opacity-50 cursor-not-allowed">Prev</button>
          <button className="px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: ComplianceStatus }> = ({ status }) => {
  switch (status) {
    case ComplianceStatus.PASSED:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-bold">
          <ShieldCheck size={12} /> Passed
        </span>
      );
    case ComplianceStatus.FLAGGED:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[11px] font-bold">
          <ShieldAlert size={12} /> Flagged
        </span>
      );
    case ComplianceStatus.FAILED:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-700 rounded-full text-[11px] font-bold">
          <ShieldMinus size={12} /> Failed
        </span>
      );
    case ComplianceStatus.PENDING:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-[11px] font-bold animate-pulse">
          <Clock size={12} /> Pending
        </span>
      );
  }
};

const getRiskColor = (level: RiskLevel) => {
  switch (level) {
    case RiskLevel.LOW: return 'bg-emerald-500';
    case RiskLevel.MEDIUM: return 'bg-amber-500';
    case RiskLevel.HIGH: return 'bg-orange-500';
    case RiskLevel.CRITICAL: return 'bg-red-600';
  }
};

export default ClientListView;
