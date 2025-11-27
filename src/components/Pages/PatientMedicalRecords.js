import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const PatientMedicalRecords = ({ user, onLogout }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      // Mock data - replace with actual API call
      const mockRecords = [
        {
          id: 1,
          date: '2024-01-15',
          doctor: 'Dr. John Smith',
          diagnosis: 'Routine Checkup',
          description: 'General health checkup. Patient is in good health.',
          status: 'Completed',
          attachments: ['blood_test.pdf', 'xray.jpg']
        },
        {
          id: 2,
          date: '2024-01-10',
          doctor: 'Dr. Sarah Johnson',
          diagnosis: 'Diabetes Management',
          description: 'Follow-up appointment for diabetes management. Blood sugar levels are stable.',
          status: 'Completed',
          attachments: ['lab_results.pdf']
        },
        {
          id: 3,
          date: '2024-01-05',
          doctor: 'Dr. Michael Brown',
          diagnosis: 'Hypertension Check',
          description: 'Blood pressure monitoring. Medication adjusted.',
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

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Medical Records', icon: '👤', active: true },
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
          <h2>Your Medical History</h2>
          <button className="btn btn-primary" onClick={() => alert('New record request submitted!')}>Request New Record</button>
        </div>

        <div className="records-container">
          {records.map((record) => (
            <div key={record.id} className="record-card">
              <div className="record-header">
                <div className="record-date">{record.date}</div>
                <span className={`tag ${record.status === 'Completed' ? 'tag-success' : 'tag-warning'}`}>
                  {record.status}
                </span>
              </div>
              
              <div className="record-content">
                <h3 className="record-diagnosis">{record.diagnosis}</h3>
                <p className="record-doctor">Doctor: {record.doctor}</p>
                <p className="record-description">{record.description}</p>
                
                {record.attachments.length > 0 && (
                  <div className="record-attachments">
                    <h4>Attachments:</h4>
                    <div className="attachment-list">
                      {record.attachments.map((attachment, index) => (
                        <div key={index} className="attachment-item">
                          <span className="attachment-icon">📄</span>
                          <span className="attachment-name">{attachment}</span>
                          <button className="btn btn-secondary btn-small" onClick={() => alert('Downloading file...')}>Download</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PatientMedicalRecords;
