import React from 'react';
import { Copy, Wallet, Plus, MoreHorizontal, Network, TrendingUp } from 'lucide-react';

export const APIConfig = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900">LovAPI</h1>
        <p className="text-slate-500 text-sm">Manage your API endpoints, keys, and account balance in one central place.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-900 font-semibold text-sm">API Endpoint</p>
            <code className="text-primary font-mono text-sm">https://llmapi.lovbrowser.com</code>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
          <Copy className="w-4 h-4" />
          Copy URL
        </button>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            Account Information <span className="text-slate-400 font-normal text-sm">(余额信息)</span>
          </h3>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <Wallet className="w-5 h-5" />
            Recharge (充值)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-light p-6 rounded-xl border border-blue-100/50 shadow-sm">
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">Total Balance</p>
            <p className="text-3xl font-bold text-slate-900">$1,240.50</p>
            <div className="mt-3 flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 w-fit px-2 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% vs last month
            </div>
          </div>
          <div className="bg-primary-light p-6 rounded-xl border border-blue-100/50 shadow-sm">
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">Available Balance</p>
            <p className="text-3xl font-bold text-slate-900">$892.40</p>
            <p className="mt-3 text-[10px] text-slate-500 font-bold uppercase">Ready to use</p>
          </div>
          <div className="bg-primary-light p-6 rounded-xl border border-blue-100/50 shadow-sm">
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">Used Balance</p>
            <p className="text-3xl font-bold text-slate-900">$348.10</p>
            <p className="mt-3 text-[10px] text-slate-500 font-bold uppercase">Lifetime usage</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            API Data <span className="text-slate-400 font-normal text-sm">(数据管理)</span>
          </h3>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Plus className="w-4 h-4" />
            Create Key
          </button>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="flex border-b border-slate-100 px-2">
            <button className="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary">API Keys</button>
            <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Model List (模型列表)</button>
            <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Config Guide (配置指南)</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Key</th>
                  <th className="px-6 py-4">Created At</th>
                  <th className="px-6 py-4">Usage</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors text-sm">
                  <td className="px-6 py-4 font-semibold text-slate-800">Production App</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-mono text-xs bg-slate-100 px-2 py-1 rounded w-fit text-slate-500">
                      sk-lov-••••••••4f2a
                      <MoreHorizontal className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Oct 12, 2023</td>
                  <td className="px-6 py-4 text-slate-500">$124.50</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase">Active</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
