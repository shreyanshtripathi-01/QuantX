import Link from 'next/link';
import { 
  LayoutDashboard, 
  Briefcase, 
  Globe, 
  Map, 
  Activity, 
  Lightbulb, 
  LineChart, 
  History, 
  Newspaper, 
  BarChart, 
  PieChart, 
  Target,
  FileText
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          Quant<span>X</span>
        </div>
      </div>
      
      <div className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-label">Overview</div>
          <Link href="/" className="nav-item active">
            <div className="nav-icon"><LayoutDashboard size={18} /></div>
            <span>Dashboard</span>
          </Link>
          <Link href="/portfolio" className="nav-item">
            <div className="nav-icon"><Briefcase size={18} /></div>
            <span>Portfolio</span>
          </Link>
          <Link href="/market-pulse" className="nav-item">
            <div className="nav-icon"><Activity size={18} /></div>
            <span>Market Pulse</span>
          </Link>
          <Link href="/watchlist" className="nav-item">
            <div className="nav-icon"><BarChart size={18} /></div>
            <span>Watchlist</span>
          </Link>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Geopolitics & Macro</div>
          <Link href="/geo-risk" className="nav-item">
            <div className="nav-icon"><Globe size={18} /></div>
            <span>Risk Engine</span>
          </Link>
          <Link href="/world-map" className="nav-item">
            <div className="nav-icon"><Map size={18} /></div>
            <span>World Map</span>
          </Link>
          <Link href="/impact" className="nav-item">
            <div className="nav-icon"><Activity size={18} /></div>
            <span>Impact Analyzer</span>
          </Link>
          <Link href="/economic" className="nav-item">
            <div className="nav-icon"><LineChart size={18} /></div>
            <span>Economic Data</span>
          </Link>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Intelligence</div>
          <Link href="/insights" className="nav-item">
            <div className="nav-icon"><Lightbulb size={18} /></div>
            <span>AI Insights</span>
          </Link>
          <Link href="/sentiment" className="nav-item">
            <div className="nav-icon"><Newspaper size={18} /></div>
            <span>News Sentiment</span>
          </Link>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Tools</div>
          <Link href="/backtest" className="nav-item">
            <div className="nav-icon"><History size={18} /></div>
            <span>Backtesting</span>
          </Link>
          <Link href="/mutual-funds" className="nav-item">
            <div className="nav-icon"><PieChart size={18} /></div>
            <span>MF X-Ray</span>
          </Link>
          <Link href="/sip-planner" className="nav-item">
            <div className="nav-icon"><Target size={18} /></div>
            <span>SIP Planner</span>
          </Link>
          <Link href="/reports" className="nav-item">
            <div className="nav-icon"><FileText size={18} /></div>
            <span>Reports</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
