import { Newspaper } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Newspaper strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>News Sentiment Heatmap</h3>
      <p>Real-time sector sentiment analysis.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
