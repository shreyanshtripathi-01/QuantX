import { LineChart } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><LineChart strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Economic Dashboard</h3>
      <p>Macro indicators across countries.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
