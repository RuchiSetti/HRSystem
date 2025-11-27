import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const DoctorDashboard = ({ user, onLogout }) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = {
        medicalRecords: 156,
        prescriptions: 89,
        labReports: 45,
        recentActivity: 12,
        recentRecords: [
          { id: 1, title: 'Routine checkup', date: 'Jan 15, 2024' }
        ],
        recentPrescriptions: [
          { id: 1, condition: 'Diabetes Type 2', date: 'Jan 15, 2024' }
        ],
        recentLabReports: [
          { id: 1, type: 'Blood Work', date: 'Jan 15, 2024' }
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
    { text: 'Patients', icon: '👥' },
    { text: 'Medical Records', icon: '📄' },
    { text: 'Prescriptions', icon: '💊' },
    { text: 'Lab Reports', icon: '📊' },
    { text: 'Profile', icon: '⚙️' },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Doctor Dashboard</h1>

        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome back, Dr. Smith!</h2>
            <p className="welcome-subtitle">
              Internal Medicine • Internal Medicine
            </p>
            <p className="welcome-subtitle">
              10 years of experience
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="doctor-stats">
          <div className="doctor-stat-card">
            <div className="doctor-stat-icon primary">📄</div>
            <div className="doctor-stat-number">{dashboardData?.medicalRecords || 0}</div>
            <div className="doctor-stat-label">Medical Records</div>
            <div className="doctor-stat-trend trend-up">+12%</div>
          </div>
          <div className="doctor-stat-card">
            <div className="doctor-stat-icon success">💊</div>
            <div className="doctor-stat-number">{dashboardData?.prescriptions || 0}</div>
            <div className="doctor-stat-label">Prescriptions</div>
            <div className="doctor-stat-trend trend-up">+8%</div>
          </div>
          <div className="doctor-stat-card">
            <div className="doctor-stat-icon warning">📊</div>
            <div className="doctor-stat-number">{dashboardData?.labReports || 0}</div>
            <div className="doctor-stat-label">Lab Reports</div>
            <div className="doctor-stat-trend trend-up">+15%</div>
          </div>
          <div className="doctor-stat-card">
            <div className="doctor-stat-icon info">📈</div>
            <div className="doctor-stat-number">{dashboardData?.recentActivity || 0}</div>
            <div className="doctor-stat-label">Recent Activity</div>
            <div className="doctor-stat-trend trend-up">+5</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-card">
            <div className="action-icon">👥</div>
            <div className="action-title">View Patients</div>
          </div>
          <div className="action-card">
            <div className="action-icon">📄</div>
            <div className="action-title">Medical Records</div>
          </div>
          <div className="action-card">
            <div className="action-icon">💊</div>
            <div className="action-title">Prescriptions</div>
          </div>
          <div className="action-card">
            <div className="action-icon">📊</div>
            <div className="action-title">Lab Reports</div>
          </div>
        </div>

        {/* Recent Sections */}
        <div className="recent-sections">
          <div className="recent-section">
            <div className="recent-section-header">
              <h3 className="recent-section-title">Recent Records</h3>
              <button className="view-all-link" onClick={() => window.location.href = '/doctor/medical-records'}>View all</button>
            </div>
            {dashboardData?.recentRecords?.map((record) => (
              <div key={record.id} className="recent-item">
                <div className="recent-icon">📄</div>
                <div className="recent-content">
                  <div className="recent-title">{record.title}</div>
                  <div className="recent-date">{record.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="recent-section">
            <div className="recent-section-header">
              <h3 className="recent-section-title">Recent Prescriptions</h3>
              <button className="view-all-link" onClick={() => window.location.href = '/doctor/prescriptions'}>View all</button>
            </div>
            {dashboardData?.recentPrescriptions?.map((prescription) => (
              <div key={prescription.id} className="recent-item">
                <div className="recent-icon">💊</div>
                <div className="recent-content">
                  <div className="recent-title">{prescription.condition}</div>
                  <div className="recent-date">{prescription.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="recent-section">
            <div className="recent-section-header">
              <h3 className="recent-section-title">Recent Lab Reports</h3>
              <button className="view-all-link" onClick={() => window.location.href = '/doctor/lab-reports'}>View all</button>
            </div>
            {dashboardData?.recentLabReports?.map((report) => (
              <div key={report.id} className="recent-item">
                <div className="recent-icon">📊</div>
                <div className="recent-content">
                  <div className="recent-title">{report.type}</div>
                  <div className="recent-date">{report.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Overview */}
        <div className="system-overview">
          <h3 className="health-title">System Overview</h3>
          <div className="overview-stats">
            <div className="overview-stat">
              <div className="overview-number">5</div>
              <div className="overview-label">Recent System Activity</div>
            </div>
            <div className="overview-stat">
              <div className="overview-number">98%</div>
              <div className="overview-label">System Uptime</div>
            </div>
            <div className="overview-stat">
              <div className="overview-number">24/7</div>
              <div className="overview-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;
