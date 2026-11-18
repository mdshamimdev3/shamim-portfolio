import { useState } from "react";
import {
  LayoutDashboard, FolderKanban, FileText, MessageSquare,
  Star, Image, BarChart3, Settings, ExternalLink,
  Menu, Search, Bell, Plus, ArrowUpRight, Eye,
  TrendingUp, Users, Mail, MoreHorizontal, Sun, Moon
} from "lucide-react";
import "./admin.css";

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "Blog Posts", icon: FileText },
  { label: "Messages", icon: MessageSquare },
  { label: "Reviews", icon: Star },
  { label: "Media Library", icon: Image },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const projects = [
  { name: "NOOR", type: "Food Delivery Platform", status: "Featured", updated: "Nov 18, 2026" },
  { name: "STYLEZO", type: "Fashion E-commerce", status: "Published", updated: "Nov 17, 2026" },
  { name: "E-DISH", type: "Laravel E-commerce", status: "Published", updated: "Nov 12, 2026" },
];

export default function AdminApp() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  return (
    <div className={`admin-root ${dark ? "admin-dark" : "admin-light"}`}>
      <aside className={`admin-sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="admin-brand">
          <div className="brand-mark">S.</div>
          <div><strong>SHAMIM</strong><span>PORTFOLIO CMS</span></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>×</button>
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="admin-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.label}
                className={`nav-item ${active === item.label ? "nav-active" : ""}`}
                onClick={() => { setActive(item.label); setMobileOpen(false); }}>
                <Icon size={18} /><span>{item.label}</span>
                {item.label === "Messages" && <i className="nav-count">3</i>}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-profile">
            <div className="profile-avatar">MS</div>
            <div><strong>MD Shamim</strong><span>Administrator</span></div>
            <MoreHorizontal size={18} />
          </div>
          <a href="/" className="back-site"><ExternalLink size={16} /> View website</a>
        </div>
      </aside>

      {mobileOpen && <button className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-left">
            <button className="mobile-menu" onClick={() => setMobileOpen(true)}><Menu /></button>
            <div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div>
          </div>
          <div className="topbar-actions">
            <button className="icon-btn" onClick={() => setDark(!dark)} title="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-btn notification-btn"><Bell size={18} /><i /></button>
            <div className="topbar-avatar">MS</div>
          </div>
        </header>

        <div className="admin-content">
          {active === "Overview" ? (
            <>
              <section className="welcome-row">
                <div>
                  <div className="eyebrow">MONDAY, NOVEMBER 18, 2026</div>
                  <h1>Good morning, Shamim <span>✦</span></h1>
                  <p>Here’s what’s happening with your portfolio today.</p>
                </div>
                <button className="primary-btn" onClick={() => setActive("Projects")}><Plus size={17} /> Manage projects</button>
              </section>

              <section className="stats-grid">
                <Stat icon={Eye} label="Portfolio views" value="2,840" change="+18.6%" note="vs. last month" />
                <Stat icon={FolderKanban} label="Total projects" value="03" change="+1" note="this month" />
                <Stat icon={MessageSquare} label="Messages" value="12" change="+4" note="unread messages" />
                <Stat icon={Star} label="Client reviews" value="08" change="+2" note="this month" />
              </section>

              <section className="dashboard-grid">
                <div className="panel traffic-panel">
                  <div className="panel-heading">
                    <div><span className="eyebrow">PERFORMANCE</span><h2>Portfolio traffic</h2></div>
                    <select defaultValue="7 days"><option>7 days</option><option>30 days</option><option>90 days</option></select>
                  </div>
                  <div className="traffic-summary"><strong>2,840</strong><span><TrendingUp size={15} /> 18.6%</span><small>Visitors this month</small></div>
                  <div className="chart">
                    <div className="chart-y"><span>800</span><span>600</span><span>400</span><span>200</span><span>0</span></div>
                    <svg viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label="Portfolio traffic chart">
                      <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c9a46a" stopOpacity=".3"/><stop offset="100%" stopColor="#c9a46a" stopOpacity="0"/></linearGradient></defs>
                      {[20,60,100,140,180].map(y => <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="currentColor" opacity=".1" strokeDasharray="4 5" />)}
                      <path d="M0 145 C35 130 45 145 80 120 S135 125 175 100 S230 118 270 82 S325 100 365 75 S420 95 455 58 S510 80 545 45 S610 70 650 30 L700 20 L700 190 L0 190Z" fill="url(#areaFill)"/>
                      <path d="M0 145 C35 130 45 145 80 120 S135 125 175 100 S230 118 270 82 S325 100 365 75 S420 95 455 58 S510 80 545 45 S610 70 650 30 L700 20" fill="none" stroke="#c9a46a" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="chart-labels"><span>Nov 12</span><span>Nov 13</span><span>Nov 14</span><span>Nov 15</span><span>Nov 16</span><span>Nov 17</span><span>Nov 18</span></div>
                </div>

                <div className="panel activity-panel">
                  <div className="panel-heading"><div><span className="eyebrow">LATEST UPDATES</span><h2>Recent activity</h2></div><button className="text-btn">View all</button></div>
                  <Activity icon={MessageSquare} title="New contact message" desc="Someone sent you a message" time="10 min ago" />
                  <Activity icon={Star} title="New review submitted" desc="A visitor left a review" time="2 hours ago" />
                  <Activity icon={FolderKanban} title="Project updated" desc="NOOR project details changed" time="Yesterday" />
                  <Activity icon={Eye} title="Traffic milestone" desc="You reached 2,000+ views" time="Yesterday" />
                </div>
              </section>

              <section className="panel projects-panel">
                <div className="panel-heading">
                  <div><span className="eyebrow">YOUR WORK</span><h2>Recent projects</h2></div>
                  <button className="text-btn" onClick={() => setActive("Projects")}>View all projects <ArrowUpRight size={15}/></button>
                </div>
                <div className="project-table">
                  <div className="table-head"><span>PROJECT</span><span>TYPE</span><span>STATUS</span><span>LAST UPDATED</span><span /></div>
                  {projects.map(p => <div className="table-row" key={p.name}><strong>{p.name}</strong><span>{p.type}</span><span><i className="status-dot"/> {p.status}</span><span>{p.updated}</span><button className="icon-btn"><MoreHorizontal size={18}/></button></div>)}
                </div>
              </section>
            </>
          ) : (
            <section className="section-placeholder">
              <div className="placeholder-icon">{(() => { const item = navItems.find(n => n.label === active); const Icon = item?.icon || LayoutDashboard; return <Icon size={28}/>; })()}</div>
              <span className="eyebrow">ADMIN WORKSPACE</span>
              <h1>{active}</h1>
              <p>This section is ready for its management interface. The dashboard navigation is working.</p>
              <button className="primary-btn" onClick={() => setActive("Overview")}>Back to overview</button>
            </section>
          )}
          <footer className="admin-footer"><span>© 2026 MD Shamim</span><span>Portfolio Admin · UI Preview</span></footer>
        </div>
      </main>
    </div>
  );
}

function Stat({ icon: Icon, label, value, change, note }) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><div className="stat-icon"><Icon size={18}/></div></div><div className="stat-value">{value}</div><div className="stat-bottom"><span className="stat-change">{change}</span><span>{note}</span></div></div>;
}

function Activity({ icon: Icon, title, desc, time }) {
  return <div className="activity-item"><div className="activity-icon"><Icon size={17}/></div><div className="activity-copy"><strong>{title}</strong><span>{desc}</span></div><time>{time}</time></div>;
}
