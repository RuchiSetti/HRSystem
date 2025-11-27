import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const PatientProfile = ({ user, onLogout }) => {
  const [profile, setProfile] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    phone: '+1234567890',
    dateOfBirth: '1990-05-15',
    gender: 'Female',
    address: '123 Main St, City, State 12345',
    emergencyContact: {
      name: 'John Doe',
      relationship: 'Spouse',
      phone: '+1234567891'
    },
    allergies: ['Penicillin', 'Shellfish'],
    chronicConditions: ['Diabetes Type 2', 'Hypertension'],
    insurance: {
      provider: 'Health Insurance Co.',
      policyNumber: 'HI123456789',
      groupNumber: 'GRP001'
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Medical Records', icon: '👤', active: false },
    { text: 'Prescriptions', icon: '💊', active: false },
    { text: 'Lab Reports', icon: '📊', active: false },
    { text: 'Profile', icon: '⚙️', active: true },
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setProfile(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    // Mock save functionality
    console.log('Profile saved:', profile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Profile</h1>

        <div className="profile-container">
          <div className="card">
            <div className="profile-header">
              <div className="profile-avatar">
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
              </div>
              <div className="profile-info">
                <h2>{profile.firstName} {profile.lastName}</h2>
                <p>Patient ID: PAT-{user?.id || '001'}</p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="card">
            <h3>Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={profile.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-input"
                  value={profile.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  className="form-input"
                  value={profile.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  disabled={!isEditing}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Address</h3>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea
                className="form-input"
                value={profile.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                disabled={!isEditing}
                rows="3"
              />
            </div>
          </div>

          <div className="card">
            <h3>Emergency Contact</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.emergencyContact.name}
                  onChange={(e) => handleInputChange('emergencyContact.name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Relationship</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.emergencyContact.relationship}
                  onChange={(e) => handleInputChange('emergencyContact.relationship', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={profile.emergencyContact.phone}
                  onChange={(e) => handleInputChange('emergencyContact.phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Health Information</h3>
            <div className="form-group">
              <label className="form-label">Allergies</label>
              <div className="tags-container">
                {profile.allergies.map((allergy, index) => (
                  <span key={index} className="tag tag-warning">{allergy}</span>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Chronic Conditions</label>
              <div className="tags-container">
                {profile.chronicConditions.map((condition, index) => (
                  <span key={index} className="tag tag-primary">{condition}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Insurance Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Provider</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.insurance.provider}
                  onChange={(e) => handleInputChange('insurance.provider', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Policy Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.insurance.policyNumber}
                  onChange={(e) => handleInputChange('insurance.policyNumber', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Group Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.insurance.groupNumber}
                  onChange={(e) => handleInputChange('insurance.groupNumber', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="profile-actions">
              <button className="btn btn-primary" onClick={handleSave}>
                Save Changes
              </button>
              <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PatientProfile;
