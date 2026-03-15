import { Globe } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Globe strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Geopolitical Risk Engine</h3>
      <p>Global events and regional risk scoring.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
