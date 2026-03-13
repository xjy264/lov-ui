import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  History, 
  FolderTree, 
  UserCircle, 
  Zap, 
  ChevronDown, 
  ChevronLeft, 
  ShoppingCart, 
  Bell, 
  Sun, 
  Menu,
  Navigation,
  Users,
  Share2,
  Grid,
  Wrench,
  UserCheck,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Subscription } from '../pages/Subscription';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  hasSubmenu?: boolean;
  expanded?: boolean;
  suffix?: React.ReactNode;
}

const SidebarItem = ({ icon, label, href, active, collapsed, onClick, hasSubmenu, expanded, suffix }: SidebarItemProps) => {
  const content = (
    <div 
      className={cn(
        "flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all group",
        active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-600 hover:bg-primary/5 hover:text-primary"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-[24px] flex justify-center">{icon}</div>
        {!collapsed && <span className="whitespace-nowrap font-medium">{label}</span>}
      </div>
      <div className="flex items-center gap-2">
        {suffix && !collapsed && suffix}
        {hasSubmenu && !collapsed && (
          <ChevronDown className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")} />
        )}
      </div>
    </div>
  );

  if (href && !hasSubmenu) {
    return <Link to={href}>{content}</Link>;
  }

  return <button className="w-full text-left">{content}</button>;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    ai: true,
    custom: false,
    api: false,
    community: false
  });
  const location = useLocation();

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#fcfaf8]">
      {/* Subscription Modal */}
      {showSubscription && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8 custom-scrollbar">
            <button 
              onClick={() => setShowSubscription(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <Subscription />
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-white border-r border-primary/10 transition-all duration-300 flex flex-col shadow-xl",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="bg-primary p-1.5 rounded-lg text-white shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            {!collapsed && <h2 className="text-slate-900 text-xl font-bold tracking-tight whitespace-nowrap">LovBrowser</h2>}
          </div>

          {/* Nav Items */}
          <div className="flex-1 space-y-2 overflow-y-auto hide-scrollbar">
            <div>
              <SidebarItem 
                icon={<LayoutDashboard className="w-5 h-5" />} 
                label="AI环境" 
                active={location.pathname === '/'} 
                collapsed={collapsed}
                hasSubmenu
                expanded={expandedMenus.ai}
                onClick={() => toggleMenu('ai')}
                suffix={
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSubscription(true);
                    }}
                    className="px-2 py-0.5 bg-slate-200 text-slate-500 text-[10px] font-bold rounded hover:bg-primary hover:text-white transition-all"
                  >
                    购买
                  </button>
                }
              />
              {!collapsed && expandedMenus.ai && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link to="/" className={cn("flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors", location.pathname === '/' ? "text-primary font-bold bg-primary/5" : "text-slate-500 hover:text-primary hover:bg-primary/5")}>
                    <Zap className="w-4 h-4" />
                    <span>AI启动台</span>
                  </Link>
                  <Link to="/history" className={cn("flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors", location.pathname === '/history' ? "text-primary font-bold bg-primary/5" : "text-slate-500 hover:text-primary hover:bg-primary/5")}>
                    <History className="w-4 h-4" />
                    <span>历史对话</span>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <SidebarItem 
                icon={<Settings className="w-5 h-5" />} 
                label="自定义环境" 
                active={location.pathname.startsWith('/env')} 
                collapsed={collapsed}
                hasSubmenu
                expanded={expandedMenus.custom}
                onClick={() => toggleMenu('custom')}
              />
              {!collapsed && expandedMenus.custom && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link to="/environments" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <FolderTree className="w-4 h-4" />
                    <span>我的环境</span>
                  </Link>
                  <Link to="/my-accounts" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <UserCheck className="w-4 h-4" />
                    <span>我的AI账号</span>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <SidebarItem 
                icon={<Zap className="w-5 h-5" />} 
                label="LovAPI" 
                active={location.pathname.startsWith('/api')} 
                collapsed={collapsed}
                hasSubmenu
                expanded={expandedMenus.api}
                onClick={() => toggleMenu('api')}
              />
              {!collapsed && expandedMenus.api && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link to="/api-config" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>API配置</span>
                  </Link>
                  <Link to="/tooling-center" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Wrench className="w-4 h-4" />
                    <span>Tooling Center</span>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <SidebarItem 
                icon={<Users className="w-5 h-5" />} 
                label="社区互动" 
                active={location.pathname.startsWith('/community')} 
                collapsed={collapsed}
                hasSubmenu
                expanded={expandedMenus.community}
                onClick={() => toggleMenu('community')}
              />
              {!collapsed && expandedMenus.community && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link to="/community" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Grid className="w-4 h-4" />
                    <span>社区广场</span>
                  </Link>
                  <Link to="/my-shares" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>我的分享</span>
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link to="/subscription" className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                location.pathname === '/subscription' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-600 hover:bg-primary/5 hover:text-primary"
              )}>
                <div className="min-w-[24px] flex justify-center"><ShoppingCart className="w-5 h-5" /></div>
                {!collapsed && <span className="whitespace-nowrap font-bold">订阅计划</span>}
              </Link>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all overflow-hidden"
            >
              <ChevronLeft className={cn("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")} />
              {!collapsed && <span>Collapse</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={cn("flex-1 flex flex-col transition-all duration-300", collapsed ? "ml-20" : "ml-64")}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-8 py-3 shadow-sm h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 gap-2 border border-primary/5">
              <Settings className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search AI tools..." 
                className="bg-transparent border-none text-sm focus:ring-0 w-64 p-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <div className="h-9 w-9 rounded-full border border-slate-200 p-0.5 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="User" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};
