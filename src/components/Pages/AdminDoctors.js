import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const AdminDoctors = ({ user, onLogout }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      // Mock data - replace with actual API call
      const mockDoctors = [
        {
          id: 1,
          name: 'Dr. John Smith',
          email: 'dr.smith@health.com',
          phone: '+1234567890',
          specialization: 'Internal Medicine',
          licenseNumber: 'MD123456',
          department: 'Internal Medicine',
          yearsOfExperience: 10,
          status: 'Active',
          patientsCount: 156
        },
        {
          id: 2,
          name: 'Dr. Sarah Johnson',
          email: 'dr.johnson@health.com',
          phone: '+1234567891',
          specialization: 'Cardiology',
          licenseNumber: 'MD123457',
          department: 'Cardiology',
          yearsOfExperience: 8,
          status: 'Active',
          patientsCount: 89
        },
        {
          id: 3,
          name: 'Dr. Michael Brown',
          email: 'dr.brown@health.com',
          phone: '+1234567892',
          specialization: 'Pediatrics',
          licenseNumber: 'MD123458',
          department: 'Pediatrics',
          yearsOfExperience: 12,
          status: 'Inactive',
          patientsCount: 45
        }
      ];
      setDoctors(mockDoctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Users', icon: '👥', active: false },
    { text: 'Patients', icon: '👤', active: false },
    { text: 'Doctors', icon: '🩺', active: true },
    { text: 'Settings', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Doctor Management</h1>

        <div className="page-header">
          <h2>All Doctors</h2>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search doctors..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => alert('Add New Doctor clicked!')}>Add New Doctor</button>
          </div>
        </div>

        <div className="doctors-container">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-header">
                <div className="doctor-avatar">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-email">{doctor.email}</p>
                  <p className="doctor-phone">{doctor.phone}</p>
                </div>
                <span className={`tag ${doctor.status === 'Active' ? 'tag-success' : 'tag-warning'}`}>
                  {doctor.status}
                </span>
              </div>
              
              <div className="doctor-details">
                <div className="detail-row">
                  <span className="detail-label">Specialization:</span>
                  <span className="detail-value">{doctor.specialization}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">License Number:</span>
                  <span className="detail-value">{doctor.licenseNumber}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{doctor.department}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Experience:</span>
                  <span className="detail-value">{doctor.yearsOfExperience} years</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Patients:</span>
                  <span className="detail-value">{doctor.patientsCount} patients</span>
                </div>
              </div>
              
              <div className="doctor-actions">
                <button className="btn btn-secondary btn-small" onClick={() => alert('Viewing doctor profile...')}>View Profile</button>
                <button className="btn btn-primary btn-small" onClick={() => alert('Editing doctor...')}>Edit Doctor</button>
                <button className="btn btn-secondary btn-small" onClick={() => alert('Viewing doctor patients...')}>View Patients</button>
                <button className="btn btn-danger btn-small" onClick={() => alert('Doctor deactivated!')}>Deactivate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDoctors;
