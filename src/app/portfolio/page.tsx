import { Briefcase } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Briefcase strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Portfolio Manager</h3>
      <p>Track your holdings and P&L.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
