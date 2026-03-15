import { Activity } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Activity strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>India Market Pulse</h3>
      <p>Live markets, VIX, and RBI dashboard.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
