import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const DoctorMedicalRecords = ({ user, onLogout }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState('all');

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      // Mock data - replace with actual API call
      const mockRecords = [
        {
          id: 1,
          patientName: 'Jane Doe',
          patientId: 'PAT-001',
          date: '2024-01-15',
          diagnosis: 'Routine Checkup',
          description: 'General health checkup. Patient is in good health. Blood pressure normal, weight stable.',
          treatment: 'Continue current medication, follow up in 3 months.',
          status: 'Completed',
          attachments: ['blood_test.pdf', 'vital_signs.pdf']
        },
        {
          id: 2,
          patientName: 'John Smith',
          patientId: 'PAT-002',
          date: '2024-01-14',
          diagnosis: 'Diabetes Management',
          description: 'Follow-up appointment for diabetes management. Blood sugar levels are stable with current medication.',
          treatment: 'Continue Metformin 500mg twice daily. Monitor blood sugar levels.',
          status: 'Completed',
          attachments: ['lab_results.pdf']
        },
        {
          id: 3,
          patientName: 'Mary Johnson',
          patientId: 'PAT-003',
          date: '2024-01-13',
          diagnosis: 'Hypertension Check',
          description: 'Blood pressure monitoring. Patient reports feeling well, no side effects from medication.',
          treatment: 'Continue Lisinopril 10mg daily. Follow up in 1 month.',
          status: 'Completed',
          attachments: []
        }
      ];
      setRecords(mockRecords);
    } catch (error) {
      console.error('Error fetching records:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRecords = selectedPatient === 'all' 
    ? records 
    : records.filter(record => record.patientId === selectedPatient);

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Patients', icon: '👥', active: false },
    { text: 'Medical Records', icon: '📄', active: true },
    { text: 'Prescriptions', icon: '💊', active: false },
    { text: 'Lab Reports', icon: '📊', active: false },
    { text: 'Profile', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Medical Records</h1>

        <div className="page-header">
          <h2>Patient Medical Records</h2>
          <div className="header-actions">
            <select
              className="form-input"
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              style={{ width: '200px' }}
            >
              <option value="all">All Patients</option>
              <option value="PAT-001">Jane Doe</option>
              <option value="PAT-002">John Smith</option>
              <option value="PAT-003">Mary Johnson</option>
            </select>
            <button className="btn btn-primary">Create New Record</button>
          </div>
        </div>

        <div className="records-container">
          {filteredRecords.map((record) => (
            <div key={record.id} className="record-card">
              <div className="record-header">
                <div className="record-info">
                  <h3 className="record-diagnosis">{record.diagnosis}</h3>
                  <p className="record-patient">Patient: {record.patientName} ({record.patientId})</p>
                  <p className="record-date">Date: {record.date}</p>
                </div>
                <span className={`tag ${record.status === 'Completed' ? 'tag-success' : 'tag-warning'}`}>
                  {record.status}
                </span>
              </div>
              
              <div className="record-content">
                <div className="record-section">
                  <h4>Description:</h4>
                  <p>{record.description}</p>
                </div>
                
                <div className="record-section">
                  <h4>Treatment:</h4>
                  <p>{record.treatment}</p>
                </div>
                
                {record.attachments.length > 0 && (
                  <div className="record-section">
                    <h4>Attachments:</h4>
                    <div className="attachment-list">
                      {record.attachments.map((attachment, index) => (
                        <div key={index} className="attachment-item">
                          <span className="attachment-icon">📄</span>
                          <span className="attachment-name">{attachment}</span>
                          <button className="btn btn-secondary btn-small">View</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="record-actions">
                <button className="btn btn-secondary btn-small">Edit Record</button>
                <button className="btn btn-primary btn-small">Add Prescription</button>
                <button className="btn btn-secondary btn-small">Print Record</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorMedicalRecords;
