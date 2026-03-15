import { BarChart } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><BarChart strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>Smart Watchlist</h3>
      <p>Screen stocks with geopolitical context.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
