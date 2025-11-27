import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const PatientPrescriptions = ({ user, onLogout }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      // Mock data - replace with actual API call
      const mockPrescriptions = [
        {
          id: 1,
          date: '2024-01-15',
          doctor: 'Dr. John Smith',
          medication: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          duration: '30 days',
          status: 'Active',
          condition: 'Diabetes Type 2'
        },
        {
          id: 2,
          date: '2024-01-10',
          doctor: 'Dr. Sarah Johnson',
          medication: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '30 days',
          status: 'Active',
          condition: 'Hypertension'
        },
        {
          id: 3,
          date: '2023-12-20',
          doctor: 'Dr. Michael Brown',
          medication: 'Amoxicillin',
          dosage: '500mg',
          frequency: 'Three times daily',
          duration: '7 days',
          status: 'Completed',
          condition: 'Bacterial Infection'
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
    { text: 'Medical Records', icon: '👤', active: false },
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
          <h2>Your Prescription History</h2>
          <button className="btn btn-primary" onClick={() => alert('Refill request submitted!')}>Request Refill</button>
        </div>

        <div className="prescriptions-container">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="prescription-card">
              <div className="prescription-header">
                <div className="prescription-date">{prescription.date}</div>
                <span className={`tag ${prescription.status === 'Active' ? 'tag-success' : 'tag-warning'}`}>
                  {prescription.status}
                </span>
              </div>
              
              <div className="prescription-content">
                <h3 className="prescription-medication">{prescription.medication}</h3>
                <p className="prescription-doctor">Prescribed by: {prescription.doctor}</p>
                <p className="prescription-condition">For: {prescription.condition}</p>
                
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
                </div>
                
                <div className="prescription-actions">
                  <button className="btn btn-secondary btn-small" onClick={() => alert('Viewing prescription details...')}>View Details</button>
                  {prescription.status === 'Active' && (
                    <button className="btn btn-primary btn-small" onClick={() => alert('Refill request submitted!')}>Request Refill</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PatientPrescriptions;
