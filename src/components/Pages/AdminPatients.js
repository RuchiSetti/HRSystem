import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const AdminPatients = ({ user, onLogout }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      // Mock data - replace with actual API call
      const mockPatients = [
        {
          id: 1,
          name: 'Jane Doe',
          email: 'jane.doe@email.com',
          phone: '+1234567890',
          age: 34,
          lastVisit: '2024-01-15',
          nextAppointment: '2024-02-15',
          conditions: ['Diabetes Type 2', 'Hypertension'],
          status: 'Active'
        },
        {
          id: 2,
          name: 'John Smith',
          email: 'john.smith@email.com',
          phone: '+1234567891',
          age: 45,
          lastVisit: '2024-01-10',
          nextAppointment: '2024-02-10',
          conditions: ['High Cholesterol'],
          status: 'Active'
        },
        {
          id: 3,
          name: 'Mary Johnson',
          email: 'mary.johnson@email.com',
          phone: '+1234567892',
          age: 28,
          lastVisit: '2024-01-05',
          nextAppointment: null,
          conditions: ['Asthma'],
          status: 'Inactive'
        }
      ];
      setPatients(mockPatients);
    } catch (error) {
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Users', icon: '👥', active: false },
    { text: 'Patients', icon: '👤', active: true },
    { text: 'Doctors', icon: '🩺', active: false },
    { text: 'Settings', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Patient Management</h1>

        <div className="page-header">
          <h2>All Patients</h2>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search patients..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => alert('Add New Patient clicked!')}>Add New Patient</button>
          </div>
        </div>

        <div className="patients-container">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="patient-card">
              <div className="patient-header">
                <div className="patient-avatar">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="patient-info">
                  <h3 className="patient-name">{patient.name}</h3>
                  <p className="patient-email">{patient.email}</p>
                  <p className="patient-phone">{patient.phone}</p>
                </div>
                <span className={`tag ${patient.status === 'Active' ? 'tag-success' : 'tag-warning'}`}>
                  {patient.status}
                </span>
              </div>
              
              <div className="patient-details">
                <div className="detail-row">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{patient.age} years</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Last Visit:</span>
                  <span className="detail-value">{patient.lastVisit}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Next Appointment:</span>
                  <span className="detail-value">
                    {patient.nextAppointment || 'Not scheduled'}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Conditions:</span>
                  <div className="tags-container">
                    {patient.conditions.map((condition, index) => (
                      <span key={index} className="tag tag-primary">{condition}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="patient-actions">
                <button className="btn btn-secondary btn-small" onClick={() => alert('Viewing patient records...')}>View Records</button>
                <button className="btn btn-primary btn-small" onClick={() => alert('Editing patient...')}>Edit Patient</button>
                <button className="btn btn-secondary btn-small" onClick={() => alert('Scheduling appointment...')}>Schedule Appointment</button>
                <button className="btn btn-danger btn-small" onClick={() => alert('Patient deactivated!')}>Deactivate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminPatients;
