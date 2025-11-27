import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const PatientDashboard = ({ user, onLogout }) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = {
        recentVisits: 3,
        activePrescriptions: 2,
        labReports: 1,
        abnormalResults: 0,
        allergies: ['Penicillin', 'Shellfish'],
        chronicConditions: ['Diabetes Type 2', 'Hypertension'],
        latestRecords: [
          {
            id: 1,
            title: 'Routine checkup',
            description: 'Healthy patient',
            date: 'Jan 15, 2024',
            status: 'Completed'
          }
        ],
        latestPrescriptions: [
          {
            id: 1,
            condition: 'Diabetes Type 2',
            medication: 'Metformin - 500mg Twice daily',
            date: 'Jan 15, 2024',
            status: 'Active'
          }
        ],
        latestLabReports: [
          {
            id: 1,
            type: 'Blood Work',
            date: 'Jan 15, 2024',
            status: 'Normal'
          }
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
    { text: 'Medical Records', icon: '👤' },
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
        <h1 className="content-title">Patient Dashboard</h1>

        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome back, {user.firstName}!</h2>
            <p className="welcome-subtitle">
              Here's an overview of your health records and recent activity.
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-4 mb-4">
          <div className="dashboard-card stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-number">{dashboardData?.recentVisits || 0}</div>
            <div className="stat-label">Recent Visits</div>
          </div>
          <div className="dashboard-card stat-card">
            <div className="stat-icon">💊</div>
            <div className="stat-number">{dashboardData?.activePrescriptions || 0}</div>
            <div className="stat-label">Active Prescriptions</div>
          </div>
          <div className="dashboard-card stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-number">{dashboardData?.labReports || 0}</div>
            <div className="stat-label">Lab Reports</div>
          </div>
          <div className="dashboard-card stat-card">
            <div className="stat-icon">⚠️</div>
            <div className="stat-number">{dashboardData?.abnormalResults || 0}</div>
            <div className="stat-label">Abnormal Results</div>
          </div>
        </div>

        <div className="grid grid-2">
          {/* Health Information */}
          <div className="health-info">
            <h3 className="health-title">Health Information</h3>
            
            <div className="health-section">
              <h4 className="health-subtitle">Allergies:</h4>
              <div className="tags-container">
                {dashboardData?.allergies?.map((allergy, index) => (
                  <span key={index} className="tag tag-primary">{allergy}</span>
                ))}
              </div>
            </div>
            
            <div className="health-section">
              <h4 className="health-subtitle">Chronic Conditions:</h4>
              <div className="tags-container">
                {dashboardData?.chronicConditions?.map((condition, index) => (
                  <span key={index} className="tag tag-warning">{condition}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="recent-activity">
            <h3 className="health-title">Recent Activity</h3>
            <div className="activity-list">
              {dashboardData?.latestRecords?.map((record) => (
                <div key={record.id} className="activity-item">
                  <div className="activity-icon">📅</div>
                  <div className="activity-content">
                    <div className="activity-title">{record.title}</div>
                    <div className="activity-date">{record.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Medical Records */}
        <div className="medical-records mt-4">
          <div className="records-header">
            <h3 className="records-title">Latest Medical Records</h3>
            <button className="view-all-link" onClick={() => window.location.href = '/patient/medical-records'}>View all</button>
          </div>
          <div className="records-list">
            {dashboardData?.latestRecords?.map((record) => (
              <div key={record.id} className="record-item">
                <div className="record-icon">📄</div>
                <div className="record-content">
                  <div className="record-title">{record.title}</div>
                  <div className="record-description">{record.description}</div>
                  <div className="record-meta">{record.date} • Record ID: record-{record.id}</div>
                </div>
                <div className="record-status">
                  <span className="tag tag-success">{record.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Prescriptions */}
        <div className="medical-records mt-4">
          <div className="records-header">
            <h3 className="records-title">Active Prescriptions</h3>
            <button className="view-all-link" onClick={() => window.location.href = '/patient/prescriptions'}>View all</button>
          </div>
          <div className="records-list">
            {dashboardData?.latestPrescriptions?.map((prescription) => (
              <div key={prescription.id} className="record-item">
                <div className="record-icon">💊</div>
                <div className="record-content">
                  <div className="record-title">{prescription.condition}</div>
                  <div className="record-description">{prescription.medication}</div>
                  <div className="record-meta">Prescribed: {prescription.date}</div>
                </div>
                <div className="record-status">
                  <span className="tag tag-primary">{prescription.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientDashboard;
