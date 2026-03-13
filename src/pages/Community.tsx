import React from 'react';
import { Search, Share2, Eye, Heart, Zap, Play, Plus } from 'lucide-react';

const prompts = [
  { id: 1, title: 'Advanced React Architecture Consultant', model: 'Gemini 1.5', color: 'bg-purple-100 text-purple-600', views: '1.2k', likes: '428', author: 'DevArchitect', desc: 'Explain complex React design patterns like Compound Components, Render Props, and HOCs. Provide detailed code examples and performance optimization tips...' },
  { id: 2, title: 'UX/UI Design Critic', model: 'GPT-4o', color: 'bg-green-100 text-green-600', views: '850', likes: '195', author: 'PixelPerfect', desc: "Upload your design screenshots and get professional feedback based on Nielsen's 10 Usability Heuristics. Focus on accessibility, color contrast, and hierarchy..." },
  { id: 3, title: 'Creative Story Weaver', model: 'Claude 3.5', color: 'bg-blue-100 text-blue-600', views: '3.4k', likes: '921', author: 'LoreMaster', desc: 'Write immersive fantasy stories with complex branching paths. The AI acts as a Dungeon Master, tracking inventory and character stats while maintaining a consistent lore...' },
];

export const Community = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">社区广场</h1>
          <p className="text-slate-500">发现、复用并学习社区中最热门的 AI 提示词与创意</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center">
            <span>Trending</span>
            <Search className="w-4 h-4 ml-2" />
          </button>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
            + Share Prompt
          </button>
        </div>
      </div>

      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search prompts, descriptions, or tags..." 
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map((prompt) => (
          <article key={prompt.id} className="glass-card rounded-3xl p-6 flex flex-col h-[360px]">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{prompt.title}</h3>
                <span className={`px-3 py-1 ${prompt.color} text-xs font-bold rounded-full uppercase tracking-wider`}>{prompt.model}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">{prompt.desc}</p>
            </div>
            <div className="space-y-4 pt-4 border-t border-gray-100/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img 
                    src={`https://picsum.photos/seed/${prompt.author}/100/100`} 
                    alt="Avatar" 
                    className="w-8 h-8 rounded-full border border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-semibold text-gray-700">{prompt.author}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-xs">
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {prompt.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-400" /> {prompt.likes}</span>
                </div>
              </div>
              <button className="w-full py-2.5 bg-blue-50 border border-blue-100 text-primary text-sm font-bold rounded-xl hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                One-click Reuse
              </button>
            </div>
          </article>
        ))}
        
        <article className="bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center h-[360px] group cursor-pointer hover:border-primary transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
            <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
          </div>
          <span className="text-sm font-medium text-slate-500">Share your prompt</span>
        </article>
      </div>
    </div>
  );
};
