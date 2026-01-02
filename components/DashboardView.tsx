
import React from 'react';
import { 
  TrendingUp, UserCheck, AlertTriangle, FileText, CheckCircle2, 
  ArrowUpRight, ArrowDownRight, Activity, Map, Globe
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

const data = [
  { name: 'Mon', checks: 45, risk: 2 },
  { name: 'Tue', checks: 52, risk: 5 },
  { name: 'Wed', checks: 48, risk: 3 },
  { name: 'Thu', checks: 61, risk: 1 },
  { name: 'Fri', checks: 75, risk: 8 },
  { name: 'Sat', checks: 25, risk: 2 },
  { name: 'Sun', checks: 15, risk: 1 },
];

const branchData = [
  { name: 'Mayfair', high: 12, medium: 45, low: 120 },
  { name: 'Chelsea', high: 8, medium: 32, low: 95 },
  { name: 'Canary Wharf', high: 22, medium: 65, low: 180 },
  { name: 'Notting Hill', high: 5, medium: 21, low: 88 },
];

const riskData = [
  { name: 'Safe', value: 70 },
  { name: 'Moderate', value: 20 },
  { name: 'Elevated', value: 8 },
  { name: 'Critical', value: 2 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

interface DashboardProps {
  onVerifyClick: () => void;
}

const DashboardView: React.FC<DashboardProps> = ({ onVerifyClick }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Activity className="text-blue-500" size={20} />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Live Monitoring</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">System Status</h2>
          <p className="text-slate-500 mt-1 font-medium">Global compliance health across all 12 agency branches.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
             <FileText size={18} className="text-slate-400" />
             Annual Audit Log
           </button>
           <button 
             onClick={onVerifyClick}
             className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl text-sm font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-500/20"
            >
              Start Verification
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Verifications" 
          value="4,291" 
          trend="+14.2%" 
          positive={true}
          icon={<UserCheck className="text-blue-600" size={24} />} 
          color="bg-blue-50"
          sub="Last 30 days"
        />
        <StatCard 
          title="Critical Alerts" 
          value="12" 
          trend="-2.4%" 
          positive={true}
          icon={<AlertTriangle className="text-rose-600" size={24} />} 
          color="bg-rose-50"
          sub="Requires immediate SAR"
        />
        <StatCard 
          title="Verification Latency" 
          value="4.2s" 
          trend="Stable" 
          positive={null}
          icon={<Activity className="text-emerald-600" size={24} />} 
          color="bg-emerald-50"
          sub="PropComply Engine Speed"
        />
        <StatCard 
          title="Ground Rent/UBO Checks" 
          value="98.2%" 
          trend="+5%" 
          positive={true}
          icon={<Map className="text-indigo-600" size={24} />} 
          color="bg-indigo-50"
          sub="HMRC Compliance Grade"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-slate-900">Verification Throughput</h3>
              <p className="text-sm text-slate-500 font-medium">Weekly comparison of automated checks</p>
            </div>
            <select className="bg-slate-50 border-none rounded-xl text-xs font-bold px-4 py-2 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
              <option>Last 7 Days</option>
              <option>Last Month</option>
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
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                  itemStyle={{ fontWeight: 700 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="checks" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorPrimary)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Breakdown */}
        <div className="lg:col-span-4 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
          <h3 className="text-xl font-black text-slate-900 mb-2">Agency Risk Index</h3>
          <p className="text-sm text-slate-500 font-medium mb-8">Real-time risk allocation</p>
          
          <div className="h-56 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={4} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
               <span className="text-3xl font-black text-slate-900">70%</span>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safe Level</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {riskData.map((item, idx) => (
              <div key={item.name} className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">{item.name}</span>
                </div>
                <p className="text-lg font-black text-slate-900">{item.value}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Regional Performance */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
           <Globe size={24} className="text-blue-500" />
           <h3 className="text-xl font-black text-slate-900">Branch Performance Metrics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branchData.map(branch => (
            <div key={branch.name} className="space-y-4">
              <div className="flex justify-between items-end">
                <h4 className="text-sm font-bold text-slate-900">{branch.name}</h4>
                <span className="text-xs text-slate-400 font-medium">{branch.low + branch.medium + branch.high} total</span>
              </div>
              <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-100">
                <div className="h-full bg-rose-500" style={{ width: `${(branch.high / (branch.low + branch.medium + branch.high)) * 100}%` }}></div>
                <div className="h-full bg-blue-500" style={{ width: `${(branch.medium / (branch.low + branch.medium + branch.high)) * 100}%` }}></div>
                <div className="h-full bg-emerald-500" style={{ width: `${(branch.low / (branch.low + branch.medium + branch.high)) * 100}%` }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-rose-500">High: {branch.high}</span>
                <span className="text-blue-500">Med: {branch.medium}</span>
                <span className="text-emerald-500">Low: {branch.low}</span>
              </div>
            </div>
          ))}
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
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="flex items-start justify-between">
      <div className={`p-4 rounded-2xl ${color} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      {positive !== null && (
        <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full ${positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      )}
    </div>
    <div className="mt-6">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <span className="text-[10px] font-bold text-slate-400">{sub}</span>
      </div>
    </div>
  </div>
);

export default DashboardView;
