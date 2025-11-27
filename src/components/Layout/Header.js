import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, onMenuClick, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
    navigate('/login');
  };

  const getPageTitle = (user) => {
    if (user?.role === 'ADMIN') return 'Admin Dashboard';
    if (user?.role === 'DOCTOR') return 'Doctor Dashboard';
    if (user?.role === 'PATIENT') return 'Patient Dashboard';
    return 'Dashboard';
  };

  return (
    <div className="content-header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          ☰
        </button>
        <h1 className="page-title">{getPageTitle(user)}</h1>
      </div>
      
      <div className="header-right">
        <button className="notification-button">
          🔔
        </button>
        
        <div className="user-menu">
          <button 
            className="user-button"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="user-avatar">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
            <div className="user-info">
              <div className="user-name">{user?.firstName} {user?.lastName}</div>
              <div className="user-role">{user?.role}</div>
            </div>
          </button>
          
          {showUserMenu && (
            <div className="user-dropdown">
              <button onClick={handleLogout} className="dropdown-item">
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
