import { Map } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Map strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Interactive World Map</h3>
      <p>Visualizing trade, sanctions, and conflicts.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
