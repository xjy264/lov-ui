import React from 'react';
import { PlusCircle, Terminal, Beaker, Monitor, Globe, Settings, Bot, Link2Off, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const stats = [
  { label: 'Total', value: '128', icon: <Monitor className="w-5 h-5" />, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Active', value: '115', icon: <PlusCircle className="w-5 h-5" />, color: 'text-green-600', bg: 'bg-green-500/10' },
  { label: 'Expiring', value: '3', icon: <Settings className="w-5 h-5" />, color: 'text-red-600', bg: 'bg-red-500/10' },
  { label: 'Credits', value: '$1,240', icon: <PlusCircle className="w-5 h-5" />, color: 'text-primary', bg: 'bg-primary/10' },
];

const envs = [
  { id: 1, name: 'Production_Env_01', status: 'Active', proxy: '192.168.1.1:8080', expiration: '2024-12-31', linked: 'gpt-4-account-01', icon: <Terminal className="w-4 h-4" /> },
  { id: 2, name: 'Testing_Beta_Nodes', status: 'Inactive', proxy: '10.0.0.5:1080', expiration: '2024-11-15', linked: null, icon: <Beaker className="w-4 h-4" />, warning: true },
  { id: 3, name: 'Development_Local', status: 'Active', proxy: 'localhost:7890', expiration: '2025-01-20', linked: 'claude-3-opus', icon: <Monitor className="w-4 h-4" /> },
  { id: 4, name: 'Overseas_Market_A', status: 'Configuring', proxy: '45.23.1.22:3128', expiration: '2025-05-12', linked: 'marketing-bot-02', icon: <Globe className="w-4 h-4" /> },
];

export const Environments = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">我的环境 <span className="text-primary font-normal text-lg ml-2">My Environments</span></h1>
          <p className="text-slate-500 mt-1">Manage and monitor your browser automation instances</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
          <PlusCircle className="w-5 h-5" />
          购买环境 (Buy Environment)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className={`${stat.bg} p-3 rounded-lg ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl shadow-xl overflow-hidden border border-primary/10 bg-gradient-to-br from-white to-blue-50/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="border-b border-primary/10 bg-blue-50/80">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">序号 (Index)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">环境名称 (Name)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">状态 (Status)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">代理 (Proxy)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">到期时间 (Expiration)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">绑定AI账号 (Linked AI)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {envs.map((env) => (
                <tr key={env.id} className="hover:bg-primary/5 transition-colors bg-white even:bg-blue-50/30">
                  <td className="px-6 py-5 text-sm text-slate-500">{env.id}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                        {env.icon}
                      </div>
                      <span className="font-bold text-slate-900">{env.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold",
                      env.status === 'Active' ? "bg-green-100 text-green-700" : 
                      env.status === 'Configuring' ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-700"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", env.status === 'Active' ? "bg-green-500" : env.status === 'Configuring' ? "bg-primary" : "bg-slate-400")}></span>
                      {env.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-slate-600">{env.proxy}</td>
                  <td className={cn("px-6 py-5 text-sm", env.warning ? "text-red-500 font-bold" : "text-slate-600")}>{env.expiration}</td>
                  <td className="px-6 py-5">
                    {env.linked ? (
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-sm">{env.linked}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-400">
                        <Link2Off className="w-4 h-4" />
                        <span className="text-sm italic">Unlinked</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-slate-400 hover:text-primary p-1">
                      <Settings className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-primary/10 flex items-center justify-between bg-blue-50/50">
          <p className="text-xs text-slate-500">Showing 1 to 4 of 128 results</p>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-white rounded-lg text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-medium">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-medium">32</button>
            <button className="p-2 hover:bg-white rounded-lg text-slate-400 rotate-180"><ChevronLeft className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
