import { Lightbulb } from 'lucide-react';

export default function Page() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><Lightbulb strokeWidth={1} style={{ width: '40px', height: '40px' }} /></div>
      <h3>AI Insights</h3>
      <p>Daily digest and what-if scenarios.</p>
      <p style={{ marginTop: '16px', fontSize: '12px' }}>This module is currently under construction for Phase 2.</p>
    </div>
  );
}
