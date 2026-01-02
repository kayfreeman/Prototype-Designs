
import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${
        active 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/25' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
      } ${collapsed ? 'justify-center px-2' : ''}`}
    >
      <span className={`${active ? 'text-white scale-110' : 'group-hover:text-blue-400 group-hover:scale-110'} transition-all duration-300 shrink-0`}>
        {icon}
      </span>
      {!collapsed && <span className={`text-[14px] font-bold tracking-tight ${active ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>{label}</span>}
      
      {active && !collapsed && (
        <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full"></div>
      )}
    </button>
  );
};

export default SidebarItem;
