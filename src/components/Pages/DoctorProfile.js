import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const DoctorProfile = ({ user, onLogout }) => {
  const [profile, setProfile] = useState({
    firstName: 'Dr. John',
    lastName: 'Smith',
    email: 'dr.smith@health.com',
    phone: '+1234567890',
    specialization: 'Internal Medicine',
    licenseNumber: 'MD123456',
    department: 'Internal Medicine',
    yearsOfExperience: 10,
    qualifications: ['MD - Internal Medicine', 'Board Certified', 'Fellowship in Cardiology'],
    address: '456 Medical Center Dr, City, State 12345',
    bio: 'Experienced internal medicine physician with expertise in diabetes management and preventive care.',
    availability: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 3:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Patients', icon: '👥', active: false },
    { text: 'Medical Records', icon: '📄', active: false },
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
                <p>Doctor ID: DOC-{user?.id || '001'}</p>
                <p>License: {profile.licenseNumber}</p>
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
            <h3>Professional Information</h3>
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
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.specialization}
                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">License Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Years of Experience</label>
                <input
                  type="number"
                  className="form-input"
                  value={profile.yearsOfExperience}
                  onChange={(e) => handleInputChange('yearsOfExperience', parseInt(e.target.value))}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Qualifications</h3>
            <div className="form-group">
              <label className="form-label">Qualifications</label>
              <div className="tags-container">
                {profile.qualifications.map((qualification, index) => (
                  <span key={index} className="tag tag-primary">{qualification}</span>
                ))}
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
            <h3>Bio</h3>
            <div className="form-group">
              <label className="form-label">Professional Bio</label>
              <textarea
                className="form-input"
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                rows="4"
              />
            </div>
          </div>

          <div className="card">
            <h3>Availability</h3>
            <div className="availability-grid">
              {Object.entries(profile.availability).map(([day, time]) => (
                <div key={day} className="availability-item">
                  <label className="form-label">{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                  <input
                    type="text"
                    className="form-input"
                    value={time}
                    onChange={(e) => handleInputChange(`availability.${day}`, e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              ))}
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

export default DoctorProfile;
