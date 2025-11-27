import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const AdminUsers = ({ user, onLogout }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'patient',
    password: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Mock data - replace with actual API call
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'patient', status: 'active', joinDate: '2024-01-15' },
        { id: 2, name: 'Dr. Jane Smith', email: 'dr.smith@example.com', role: 'doctor', status: 'active', joinDate: '2024-01-14' },
        { id: 3, name: 'Mary Johnson', email: 'mary.johnson@example.com', role: 'patient', status: 'active', joinDate: '2024-01-13' },
        { id: 4, name: 'Dr. Michael Brown', email: 'dr.brown@example.com', role: 'doctor', status: 'inactive', joinDate: '2024-01-12' },
        { id: 5, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'patient', status: 'active', joinDate: '2024-01-11' }
      ];
      setUsers(mockUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    setShowAddUserModal(true);
  };

  const handleInputChange = (field, value) => {
    setNewUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitNewUser = (e) => {
    e.preventDefault();
    
    // Create new user object
    const userToAdd = {
      id: users.length + 1,
      name: `${newUser.firstName} ${newUser.lastName}`,
      email: newUser.email,
      role: newUser.role,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0]
    };

    // Add to users list
    setUsers(prev => [userToAdd, ...prev]);
    
    // Reset form and close modal
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'patient',
      password: ''
    });
    setShowAddUserModal(false);
    
    alert('User added successfully!');
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Users', icon: '👥', active: true },
    { text: 'Patients', icon: '👤', active: false },
    { text: 'Doctors', icon: '🩺', active: false },
    { text: 'Settings', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">User Management</h1>

        <div className="card">
        <div className="page-header">
          <h2>All Users</h2>
          <button className="btn btn-primary" onClick={handleAddUser}>Add New User</button>
        </div>
          
          <div className="users-table">
            <div className="table-header">
              <div className="table-cell">Name</div>
              <div className="table-cell">Email</div>
              <div className="table-cell">Role</div>
              <div className="table-cell">Status</div>
              <div className="table-cell">Join Date</div>
              <div className="table-cell">Actions</div>
            </div>
            
            {users.map((user) => (
              <div key={user.id} className="table-row">
                <div className="table-cell">
                  <div className="user-info">
                    <div className="user-avatar-small">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </div>
                <div className="table-cell">{user.email}</div>
                <div className="table-cell">
                  <span className={`tag ${user.role === 'patient' ? 'tag-success' : 'tag-primary'}`}>
                    {user.role}
                  </span>
                </div>
                <div className="table-cell">
                  <span className={`tag ${user.status === 'active' ? 'tag-success' : 'tag-warning'}`}>
                    {user.status}
                  </span>
                </div>
                <div className="table-cell">{user.joinDate}</div>
                <div className="table-cell">
                  <button className="btn btn-secondary btn-small">Edit</button>
                  <button className="btn btn-danger btn-small">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="modal-overlay" onClick={() => setShowAddUserModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Add New User</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowAddUserModal(false)}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmitNewUser} className="modal-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={newUser.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={newUser.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-input"
                      value={newUser.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={newUser.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Role</label>
                    <select
                      className="form-input"
                      value={newUser.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-input"
                      value={newUser.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    Add User
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowAddUserModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminUsers;
