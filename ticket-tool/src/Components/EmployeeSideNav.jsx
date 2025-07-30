




import React, { useState, useEffect } from 'react';
import {
  Ticket, GeoAlt, Eye, ChevronDown, Person, Gear, BoxArrowRight, List
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../Styles/SideNav.css';

const EmployeeSideNav = ({ collapsed, setCollapsed }) => {
  const [activeItem, setActiveItem] = useState('');
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showMonitoringSubmenu, setShowMonitoringSubmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setMobileMenuOpen(!mobileMenuOpen);
    else setCollapsed(!collapsed);
    setShowSettingsMenu(false);
    setShowMonitoringSubmenu(false);
  };

  const closeMobileMenu = () => { if (isMobile) setMobileMenuOpen(false); };

  return (
    <>
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleSidebar}>
          <List size={24} />
        </button>
      )}
      <div className={`sidebar-container${collapsed ? " collapsed" : ""}${mobileMenuOpen ? " mobile-open" : ""}`}>
        <div className="sidebar-header">
          {!collapsed && <h3>Employee Panel</h3>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {/* Tickets */}
            <li className={`nav-item${activeItem === 'Tickets' ? ' active' : ''}`}
              onClick={() => {
                setActiveItem('Tickets');
                setShowMonitoringSubmenu(false);
                closeMobileMenu();
              }}>
              <Link to="/employee-portal/tickets" className="nav-link">
                <span className="nav-icon"><Ticket size={18} /></span>
                {!collapsed && <span className="nav-text">Tickets</span>}
              </Link>
            </li>
            {/* Location Tracking */}
            <li className={`nav-item${activeItem === 'Location Tracking' ? ' active' : ''}`}
              onClick={() => {
                setActiveItem('Location Tracking');
                setShowMonitoringSubmenu(false);
                closeMobileMenu();
              }}>
              <Link to="/employee-portal/location-tracking" className="nav-link">
                <span className="nav-icon"><GeoAlt size={18} /></span>
                {!collapsed && <span className="nav-text">Location Tracking</span>}
              </Link>
            </li>
            {/* Ticket Monitoring */}
            <li className={`nav-item settings-item${activeItem === 'Ticket Monitoring' ? ' active' : ''}`}
              onClick={() => {
                setActiveItem('Ticket Monitoring');
                setShowMonitoringSubmenu(!showMonitoringSubmenu);
                setShowSettingsMenu(false);
              }}>
              <span className="nav-icon"><Eye size={18} /></span>
              {!collapsed && (
                <>
                  <span className="nav-text">Ticket Monitoring</span>
                  <span className={`chevron${showMonitoringSubmenu ? " open" : ""}`}><ChevronDown size={14} /></span>
                </>
              )}
            </li>
            {!collapsed && showMonitoringSubmenu && (
              <div className="settings-menu">
                <Link to="/employee-portal/ongoing" className="settings-menu-item" onClick={closeMobileMenu}><span>Ongoing</span></Link>
                <Link to="/employee-portal/ongoing" className="settings-menu-item" onClick={closeMobileMenu}><span>Pending</span></Link>
                <Link to="/employee-portal/ongoing" className="settings-menu-item" onClick={closeMobileMenu}><span>Completed</span></Link>
              </div>
            )}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className={`nav-item settings-item${activeItem === 'Settings' ? ' active' : ''}`}
            onClick={() => {
              setActiveItem('Settings');
              setShowSettingsMenu(!showSettingsMenu);
              setShowMonitoringSubmenu(false);
            }}>
            <span className="nav-icon"><Gear size={18} /></span>
            {!collapsed && (
              <>
                <span className="nav-text">Settings</span>
                <span className={`chevron${showSettingsMenu ? " open" : ""}`}><ChevronDown size={14} /></span>
              </>
            )}
          </div>
          {!collapsed && showSettingsMenu && (
            <div className="settings-menu">
              <Link to="/employee-portal/profile" className="settings-menu-item" onClick={closeMobileMenu}>
                <span className="settings-icon"><Person size={16} /></span>
                <span>Profile</span>
              </Link>
              <Link to="/login" className="settings-menu-item" onClick={closeMobileMenu}>
                <span className="settings-icon"><BoxArrowRight size={16} /></span>
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      {isMobile && mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </>
  );
};

export default EmployeeSideNav;
