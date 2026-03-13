import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Desktop } from './pages/Desktop';
import { HistoryPage } from './pages/History';
import { Environments } from './pages/Environments';
import { APIConfig } from './pages/APIConfig';
import { Community } from './pages/Community';

import { Subscription } from './pages/Subscription';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/environments" element={<Environments />} />
        <Route path="/api-config" element={<APIConfig />} />
        <Route path="/community" element={<Community />} />
        <Route path="/my-shares" element={<Community />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/my-accounts" element={<div className="p-8 text-center text-slate-500">我的AI账号页面 (My AI Accounts Page)</div>} />
        <Route path="/tooling-center" element={<div className="p-8 text-center text-slate-500">Tooling Center 页面 (Tooling Center Page)</div>} />
      </Routes>
    </Layout>
  );
}
