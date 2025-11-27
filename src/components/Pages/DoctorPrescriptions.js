import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const DoctorPrescriptions = ({ user, onLogout }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      // Mock data - replace with actual API call
      const mockPrescriptions = [
        {
          id: 1,
          patientName: 'Jane Doe',
          patientId: 'PAT-001',
          date: '2024-01-15',
          medication: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          duration: '30 days',
          condition: 'Diabetes Type 2',
          status: 'Active',
          refills: 2
        },
        {
          id: 2,
          patientName: 'John Smith',
          patientId: 'PAT-002',
          date: '2024-01-14',
          medication: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '30 days',
          condition: 'Hypertension',
          status: 'Active',
          refills: 1
        },
        {
          id: 3,
          patientName: 'Mary Johnson',
          patientId: 'PAT-003',
          date: '2024-01-13',
          medication: 'Amoxicillin',
          dosage: '500mg',
          frequency: 'Three times daily',
          duration: '7 days',
          condition: 'Bacterial Infection',
          status: 'Completed',
          refills: 0
        }
      ];
      setPrescriptions(mockPrescriptions);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Patients', icon: '👥', active: false },
    { text: 'Medical Records', icon: '📄', active: false },
    { text: 'Prescriptions', icon: '💊', active: true },
    { text: 'Lab Reports', icon: '📊', active: false },
    { text: 'Profile', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Prescriptions</h1>

        <div className="page-header">
          <h2>Prescription Management</h2>
          <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>Create New Prescription</button>
        </div>

        <div className="prescriptions-container">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="prescription-card">
              <div className="prescription-header">
                <div className="prescription-info">
                  <h3 className="prescription-medication">{prescription.medication}</h3>
                  <p className="prescription-patient">Patient: {prescription.patientName} ({prescription.patientId})</p>
                  <p className="prescription-date">Date: {prescription.date}</p>
                </div>
                <span className={`tag ${prescription.status === 'Active' ? 'tag-success' : 'tag-warning'}`}>
                  {prescription.status}
                </span>
              </div>
              
              <div className="prescription-content">
                <div className="prescription-details">
                  <div className="detail-item">
                    <span className="detail-label">Dosage:</span>
                    <span className="detail-value">{prescription.dosage}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Frequency:</span>
                    <span className="detail-value">{prescription.frequency}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{prescription.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Condition:</span>
                    <span className="detail-value">{prescription.condition}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Refills Remaining:</span>
                    <span className="detail-value">{prescription.refills}</span>
                  </div>
                </div>
              </div>
              
              <div className="prescription-actions">
                <button className="btn btn-secondary btn-small" onClick={() => alert('View Details clicked')}>View Details</button>
                <button className="btn btn-primary btn-small" onClick={() => alert('Edit Prescription clicked')}>Edit Prescription</button>
                {prescription.status === 'Active' && (
                  <button className="btn btn-success btn-small" onClick={() => alert('Refill approved!')}>Approve Refill</button>
                )}
                <button className="btn btn-secondary btn-small" onClick={() => alert('Printing prescription...')}>Print Prescription</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorPrescriptions;
