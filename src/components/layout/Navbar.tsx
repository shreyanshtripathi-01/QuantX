import { Search, Bell, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-title">Dashboard</div>
        <div className="navbar-breadcrumb">Overview / Today</div>
      </div>
      
      <div className="navbar-right">
        <div className="search-bar">
          <Search size={14} />
          <input type="text" placeholder="Search markets, stocks, news..." />
          <div className="search-kbd">⌘K</div>
        </div>
        
        <button className="icon-btn">
          <Bell size={18} />
          <span className="badge"></span>
        </button>
        
        <ThemeToggle />
        
        <button className="icon-btn">
          <Settings size={18} />
        </button>
        
        <div className="avatar">SJ</div>
      </div>
    </div>
  );
}
