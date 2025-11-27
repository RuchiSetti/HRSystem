import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const AdminDashboard = ({ user, onLogout }) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = {
        totalUsers: 1250,
        activeUsers: 1180,
        totalPatients: 980,
        totalDoctors: 45,
        recentUsers: [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'patient', date: 'Jan 15, 2024' },
          { id: 2, name: 'Dr. Jane Smith', email: 'dr.smith@example.com', role: 'doctor', date: 'Jan 14, 2024' },
          { id: 3, name: 'Mary Johnson', email: 'mary.johnson@example.com', role: 'patient', date: 'Jan 13, 2024' }
        ],
        systemAlerts: [
          { id: 1, type: 'warning', title: 'System Maintenance Scheduled', description: 'Scheduled for tomorrow at 2:00 AM' },
          { id: 2, type: 'success', title: 'All Systems Operational', description: 'No issues detected' }
        ]
      };
      setDashboardData(mockData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: true },
    { text: 'Users', icon: '👥' },
    { text: 'Patients', icon: '👤' },
    { text: 'Doctors', icon: '🩺' },
    { text: 'Settings', icon: '⚙️' },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Admin Dashboard</h1>

        {/* System Administration */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">System Administration</h2>
            <p className="welcome-subtitle">
              Monitor and manage the Health Record System.
            </p>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-number">{dashboardData?.totalUsers || 0}</div>
            <div className="admin-stat-label">Total Users</div>
            <div className="admin-stat-change trend-up">+12%</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-number">{dashboardData?.activeUsers || 0}</div>
            <div className="admin-stat-label">Active Users</div>
            <div className="admin-stat-change trend-up">+8%</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-number">{dashboardData?.totalPatients || 0}</div>
            <div className="admin-stat-label">Total Patients</div>
            <div className="admin-stat-change trend-up">+15%</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-number">{dashboardData?.totalDoctors || 0}</div>
            <div className="admin-stat-label">Total Doctors</div>
            <div className="admin-stat-change trend-up">+3</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-card">
            <div className="action-icon">👥</div>
            <div className="action-title">Manage Users</div>
          </div>
          <div className="action-card">
            <div className="action-icon">❤️</div>
            <div className="action-title">Manage Patients</div>
          </div>
          <div className="action-card">
            <div className="action-icon">🛡️</div>
            <div className="action-title">Manage Doctors</div>
          </div>
          <div className="action-card">
            <div className="action-icon">⚡</div>
            <div className="action-title">System Settings</div>
          </div>
        </div>

        <div className="grid grid-2">
          {/* Recent User Registrations */}
          <div className="user-list">
            <div className="records-header">
              <h3 className="records-title">Recent User Registrations</h3>
              <button className="view-all-link" onClick={() => window.location.href = '/admin/users'}>View all users</button>
            </div>
            <div className="user-list-content">
              {dashboardData?.recentUsers?.map((user) => (
                <div key={user.id} className="user-item">
                  <div className="user-avatar">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="user-info">
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                    <div className="user-date">{user.date}</div>
                  </div>
                  <div className="user-role">
                    <span className={`tag ${user.role === 'patient' ? 'tag-success' : 'tag-primary'}`}>
                      {user.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="system-alerts">
            <h3 className="health-title">System Alerts</h3>
            <div className="alerts-list">
              {dashboardData?.systemAlerts?.map((alert) => (
                <div key={alert.id} className="alert-item">
                  <div className={`alert-icon ${alert.type}`}>
                    {alert.type === 'warning' ? '⚠️' : '✅'}
                  </div>
                  <div className="alert-content">
                    <div className="alert-title">{alert.title}</div>
                    <div className="alert-description">{alert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
