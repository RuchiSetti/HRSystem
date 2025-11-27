import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ sidebarItems, isOpen, onClose, user }) => {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.path) {
      navigate(item.path);
    } else {
      // Handle different navigation based on user role and item
      switch (item.text.toLowerCase()) {
        case 'dashboard':
          if (user?.role === 'ADMIN') navigate('/admin/dashboard');
          else if (user?.role === 'DOCTOR') navigate('/doctor/dashboard');
          else if (user?.role === 'PATIENT') navigate('/patient/dashboard');
          break;
        case 'medical records':
          if (user?.role === 'PATIENT') navigate('/patient/medical-records');
          else if (user?.role === 'DOCTOR') navigate('/doctor/medical-records');
          break;
        case 'prescriptions':
          if (user?.role === 'PATIENT') navigate('/patient/prescriptions');
          else if (user?.role === 'DOCTOR') navigate('/doctor/prescriptions');
          break;
        case 'lab reports':
          if (user?.role === 'PATIENT') navigate('/patient/lab-reports');
          else if (user?.role === 'DOCTOR') navigate('/doctor/lab-reports');
          break;
        case 'patients':
          if (user?.role === 'ADMIN') navigate('/admin/patients');
          else if (user?.role === 'DOCTOR') navigate('/doctor/patients');
          break;
        case 'users':
          if (user?.role === 'ADMIN') navigate('/admin/users');
          break;
        case 'profile':
          if (user?.role === 'ADMIN') navigate('/admin/profile');
          else if (user?.role === 'DOCTOR') navigate('/doctor/profile');
          else if (user?.role === 'PATIENT') navigate('/patient/profile');
          break;
        case 'settings':
          if (user?.role === 'ADMIN') navigate('/admin/settings');
          break;
        case 'doctors':
          if (user?.role === 'ADMIN') navigate('/admin/doctors');
          break;
        default:
          console.log('Navigation not implemented for:', item.text);
      }
    }
    onClose(); // Close sidebar on mobile after navigation
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="logo-icon">❤️</span>
          <span className="logo-text">Health Records</span>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarItems?.map((item, index) => (
            <button
              key={index}
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNavigation(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.text}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
