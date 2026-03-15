import { TrendingUp, TrendingDown, AlertCircle, ShieldAlert } from 'lucide-react';
import { PortfolioChart } from '@/components/charts/PortfolioChart';

export default function Home() {
  return (
    <>
      <div className="page-header">
        <h1>Overview</h1>
        <p>Your portfolio performance and global market impact</p>
      </div>

      <div className="ticker-strip" style={{ margin: '-24px -24px 24px -24px' }}>
        <div className="ticker-item">
          <span className="ticker-name">NIFTY 50</span>
          <span className="ticker-value">22,453.30</span>
          <span className="ticker-change positive">+0.85%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-name">SENSEX</span>
          <span className="ticker-value">73,987.20</span>
          <span className="ticker-change positive">+0.72%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-name">BANKNIFTY</span>
          <span className="ticker-value">47,820.15</span>
          <span className="ticker-change negative">-0.42%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-name">INDIA VIX</span>
          <span className="ticker-value">13.24</span>
          <span className="ticker-change negative">-2.10%</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-name">USD/INR</span>
          <span className="ticker-value">83.12</span>
          <span className="ticker-change positive">+0.05%</span>
        </div>
      </div>

      <div className="grid-4">
        <div className="stat-card">
          <div className="stat-label">Total Portfolio Value</div>
          <div className="stat-value">₹12,45,230</div>
          <div className="stat-change positive">
            <TrendingUp size={14} />
            <span>+₹14,200 (1.15%) today</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Geopolitical Exposure Risk</div>
          <div className="stat-value" style={{ color: 'var(--yellow)' }}>Medium</div>
          <div className="stat-change negative">
            <AlertCircle size={14} />
            <span>2 holdings in high-risk zones</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Top Impacting Event</div>
          <div className="stat-value" style={{ fontSize: '18px' }}>US Fed Rate Hold</div>
          <div className="stat-change positive">
            <TrendingUp size={14} />
            <span>Benefitting IT Sector (+3.2%)</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Global Conflicts</div>
          <div className="stat-value">4</div>
          <div className="stat-change">
            <ShieldAlert size={14} />
            <span style={{ color: 'var(--red)' }}>High impact on Energy</span>
          </div>
        </div>
      </div>

      <div className="grid-3" style={{ marginTop: '24px' }}>
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="card-header">
            <div>
              <div className="card-title">Portfolio vs Benchmark (Nifty 50)</div>
              <div className="card-subtitle">Last 30 days performance with geopolitical overlays</div>
            </div>
            <div className="tabs" style={{ marginBottom: 0 }}>
              <div className="tab active">1M</div>
              <div className="tab">3M</div>
              <div className="tab">1Y</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <PortfolioChart />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Latest Intelligence</div>
              <div className="card-subtitle">AI-curated impact alerts</div>
            </div>
          </div>
          <div className="input-group" style={{ gap: '16px' }}>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ marginTop: '4px', color: 'var(--red)' }}><AlertCircle size={16} /></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500 }}>Red Sea Shipping Disruptions</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Freight costs up 15%. May impact auto components sector.</div>
                <div style={{ marginTop: '4px' }}><span className="badge badge-red">High Impact</span></div>
              </div>
            </div>
            
            <div className="separator" style={{ margin: '8px 0' }}></div>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ marginTop: '4px', color: 'var(--green)' }}><TrendingUp size={16} /></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500 }}>India-UAE Trade Pact</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Reduced tariffs. Positive for your holdings in Reliance and L&T.</div>
                <div style={{ marginTop: '4px' }}><span className="badge badge-green">Positive</span></div>
              </div>
            </div>
            
            <div className="separator" style={{ margin: '8px 0' }}></div>

            <button className="btn btn-secondary" style={{ width: '100%' }}>View Full Report</button>

          </div>
        </div>
      </div>
    </>
  );
}
