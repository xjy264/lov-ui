import React from 'react';
import { Search, History as HistoryIcon, Trash2, Share2, MoreHorizontal, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const historyItems = [
  { id: 1, type: 'GEMINI', title: 'Google Gemini', time: '2h ago', preview: '如何使用 Python 爬取动态网页的数据内容？', active: true },
  { id: 2, type: 'GPT', title: '中期报告撰写帮助', time: 'Yesterday', preview: '关于研究背景和意义的补充建议如下...', active: false },
  { id: 3, type: 'GEMINI', title: 'Google Gemini', time: 'Mar 09', preview: '帮我分析一下这段代码的逻辑问题...', active: false },
];

export const HistoryPage = () => {
  return (
    <div className="flex h-full -m-8 overflow-hidden bg-slate-50/50">
      {/* List Pane */}
      <section className="w-96 border-r border-slate-200 flex flex-col glass-card">
        <div className="p-4 border-b border-slate-100 space-y-3">
          <h2 className="text-xl font-bold text-slate-800">对话记录</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="搜索对话标题..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1 hide-scrollbar">
          {historyItems.map((item) => (
            <button 
              key={item.id}
              className={`w-full text-left p-4 rounded-xl flex gap-3 transition-all ${item.active ? 'bg-primary/5 border border-primary/10' : 'hover:bg-slate-100/80'}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${item.active ? 'bg-white border-primary/10' : 'bg-slate-100 border-slate-200'}`}>
                <span className={`font-bold text-[10px] ${item.type === 'GEMINI' ? 'text-primary' : 'text-emerald-600'}`}>{item.type}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className={`font-bold text-sm truncate ${item.active ? 'text-primary' : 'text-slate-700'}`}>{item.title}</h3>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{item.time}</span>
                </div>
                <p className={`text-xs truncate mt-0.5 ${item.active ? 'text-primary/70' : 'text-slate-400'}`}>{item.preview}</p>
              </div>
            </button>
          ))}
          <div className="pt-4 px-2">
            <button className="w-full py-2 text-[11px] text-slate-400 font-medium hover:text-primary transition-colors">加载更多记录...</button>
          </div>
        </div>
      </section>

      {/* Preview Pane */}
      <section className="flex-1 flex flex-col relative bg-white/40">
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/60 backdrop-blur shrink-0">
          <div className="flex flex-col">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              Google Gemini
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full uppercase font-bold tracking-wider">Active</span>
            </h2>
            <span className="text-[10px] text-slate-400">最后更新: 2026/03/11 11:56</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-primary/5 text-primary hover:bg-primary/10 rounded-xl transition-all shadow-sm border border-primary/10">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-all shadow-sm border border-red-100">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          <div className="flex justify-end">
            <div className="max-w-[75%] space-y-1">
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm leading-relaxed">
                如何使用 Python 爬取动态网页的数据内容？我需要处理 JavaScript 渲染的表格。
              </div>
              <div className="text-[10px] text-slate-400 text-right">11:54 AM</div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[85%] space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-[8px]">G</span>
                </div>
                <span className="text-xs font-bold text-slate-600">Gemini</span>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed text-slate-700">
                <p className="mb-3">爬取动态渲染的网页，推荐使用以下三种主要方案：</p>
                <ul className="list-decimal pl-4 space-y-2">
                  <li><strong>Playwright (推荐):</strong> 现代化的自动化库，速度快且 API 友好。</li>
                  <li><strong>Selenium:</strong> 行业标准，支持所有主流浏览器，适合复杂交互。</li>
                  <li><strong>分析 API:</strong> 查看网络面板，直接请求后端 JSON 数据（最高效）。</li>
                </ul>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 font-mono text-xs overflow-x-auto">
                  pip install playwright<br/>
                  playwright install chromium
                </div>
              </div>
              <div className="text-[10px] text-slate-400">11:55 AM</div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/40 backdrop-blur-sm border-t border-slate-200/50">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Connected to Gemini Pro</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3" /> 3 Messages</span>
            </div>
            <button className="hover:text-primary transition-colors">导出对话记录 (PDF/Markdown)</button>
          </div>
        </div>
      </section>
    </div>
  );
};
