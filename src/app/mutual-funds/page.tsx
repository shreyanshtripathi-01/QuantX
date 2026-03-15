import { PieChart } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><PieChart strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Mutual Fund X-Ray</h3>
      <p>Underlying exposure and risk score.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
