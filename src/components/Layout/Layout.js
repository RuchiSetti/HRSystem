import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, user, sidebarItems, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">
      <Sidebar 
        sidebarItems={sidebarItems} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        user={user}
      />
      <div className="main-content">
        <Header user={user} onMenuClick={toggleSidebar} onLogout={onLogout} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
