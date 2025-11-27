import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../utils/auth';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate inputs
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // Mock authentication - replace with actual API call
      const mockUsers = [
        { id: 1, email: 'admin@health.com', password: 'admin123', firstName: 'Admin', lastName: 'User', role: 'ADMIN' },
        { id: 2, email: 'dr.smith@health.com', password: 'doctor123', firstName: 'Dr. John', lastName: 'Smith', role: 'DOCTOR' },
        { id: 3, email: 'jane.doe@email.com', password: 'patient123', firstName: 'Jane', lastName: 'Doe', role: 'PATIENT' },
      ];

      const user = mockUsers.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        const userData = { ...user };
        delete userData.password; // Remove password from stored data
        
        setCurrentUser(userData);
        setUser(userData);
        
        // Show success message briefly
        setError('');
        
        // Redirect based on role
        setTimeout(() => {
          if (userData.role === 'ADMIN') {
            navigate('/admin/dashboard');
          } else if (userData.role === 'DOCTOR') {
            navigate('/doctor/dashboard');
          } else if (userData.role === 'PATIENT') {
            navigate('/patient/dashboard');
          }
        }, 500);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1 className="form-title">Sign In</h1>
        <p className="text-center mb-3" style={{ color: '#666' }}>
          Join our secure healthcare platform
        </p>
        
        {error && (
          <div className="alert alert-error mb-3">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div className="text-center mt-3">
          <p style={{ color: '#666' }}>
            Don't have an account? <Link to="/register" style={{ color: '#1976d2' }}>Sign up here</Link>
          </p>
        </div>
        
        <div className="demo-credentials mt-4">
          <h4 style={{ marginBottom: '15px', color: '#333' }}>Demo Credentials:</h4>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <p><strong>Admin:</strong> admin@health.com / admin123</p>
            <p><strong>Doctor:</strong> dr.smith@health.com / doctor123</p>
            <p><strong>Patient:</strong> jane.doe@email.com / patient123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
