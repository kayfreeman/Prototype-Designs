
import React from 'react';
import { 
  Building2, History, ShieldCheck, FileText, 
  Activity, Search, Bot, ArrowRight
} from 'lucide-react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Jan', memory: 120, risk: 2 },
  { name: 'Feb', memory: 240, risk: 5 },
  { name: 'Mar', memory: 410, risk: 3 },
  { name: 'Apr', memory: 580, risk: 1 },
  { name: 'May', memory: 890, risk: 8 },
  { name: 'Jun', memory: 1200, risk: 2 },
  { name: 'Jul', memory: 1450, risk: 1 },
];

const riskData = [
  { name: 'Clean History', value: 85 },
  { name: 'Gaps Found', value: 10 },
  { name: 'Inquiry Pending', value: 5 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

interface DashboardProps {
  onVerifyClick: () => void;
  onAlertsClick?: () => void;
  onInquiryClick?: () => void;
}

const DashboardView: React.FC<DashboardProps> = ({ onVerifyClick, onAlertsClick, onInquiryClick }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Bot className="text-blue-500" size={20} />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Forensic Narrative Engine Active</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Portfolio Health</h2>
          <p className="text-slate-500 mt-1 font-medium text-lg">Monitoring longitudinal risk memory for your regional assets.</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={onInquiryClick}
             className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
           >
             <Search size={18} className="text-slate-400" />
             Inquiry Support
           </button>
           <button 
             onClick={onVerifyClick}
             className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl text-sm font-bold hover:scale-[1.02] shadow-xl shadow-blue-500/20"
            >
              Sync New Property
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Assets Under Memory" 
          value="1,452" 
          trend="+12%" 
          positive={true}
          icon={<Building2 className="text-blue-600" size={24} />} 
          color="bg-blue-50"
          sub="Persistent Records"
        />
        <div onClick={onAlertsClick} className="cursor-pointer">
          <StatCard 
            title="Audit Defensibility" 
            value="98.4%" 
            trend="High" 
            positive={true}
            icon={<ShieldCheck className="text-emerald-600" size={24} />} 
            color="bg-emerald-50"
            sub="Regulator-Ready"
          />
        </div>
        <StatCard 
          title="Retention Depth" 
          value="10 Yrs" 
          trend="Tier Max" 
          positive={null}
          icon={<History className="text-indigo-600" size={24} />} 
          color="bg-indigo-50"
          sub="Forensic Vault"
        />
        <StatCard 
          title="Inquiry Support" 
          value="24/7" 
          trend="SLA Active" 
          positive={true}
          icon={<Activity className="text-rose-600" size={24} />} 
          color="bg-rose-50"
          sub="Incident Response"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-slate-900">Compliance Continuity</h3>
              <p className="text-sm text-slate-500 font-medium">Memory accumulation per regional branch</p>
            </div>
            <select className="bg-slate-50 border-none rounded-xl text-[10px] font-black uppercase tracking-widest px-4 py-2 outline-none">
              <option>London South Hub</option>
              <option>Midlands Central</option>
              <option>North West Regional</option>
            </select>
          </div>
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} />
                <Tooltip />
                <Area type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorPrimary)" animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audit Readiness Card */}
        <div className="lg:col-span-4 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl font-black text-slate-900 mb-2">Audit Readiness</h3>
          <p className="text-sm text-slate-500 font-medium mb-8">Overall portfolio defensibility index</p>
          
          <div className="h-56 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={riskData} cx="50%" cy="50%" innerRadius={70} outerRadius={95} paddingAngle={8} dataKey="value" stroke="none">
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={4} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
               <span className="text-3xl font-black text-slate-900">95%</span>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safe Posture</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-8 flex-1">
            {riskData.map((item, idx) => (
              <div key={item.name} className="p-3 bg-slate-50 rounded-2xl flex justify-between items-center group hover:bg-white transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">{item.name}</span>
                </div>
                <p className="text-sm font-black text-slate-900">{item.value}%</p>
              </div>
            ))}
          </div>

          <button 
            onClick={onInquiryClick}
            className="mt-6 w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2"
          >
             Open Inquiry Center <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  positive: boolean | null;
  icon: React.ReactNode;
  color: string;
  sub: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, positive, icon, color, sub }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm group hover:shadow-xl transition-all">
    <div className="flex items-start justify-between">
      <div className={`p-4 rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}>{icon}</div>
      {positive !== null && (
        <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${positive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {trend}
        </div>
      )}
    </div>
    <div className="mt-6">
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <span className="text-[10px] font-bold text-slate-400">{sub}</span>
      </div>
    </div>
  </div>
);

export default DashboardView;
