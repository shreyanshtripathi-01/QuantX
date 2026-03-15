import { Activity } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Activity strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Market Impact Analyzer</h3>
      <p>Stock-level correlation with world events.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
