import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'ruchi@gmail.com',
    phone: '+1234567890',
    password: '',
    confirmPassword: '',
    role: 'patient'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleSelect = (role) => {
    setFormData({
      ...formData,
      role: role
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate inputs
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      // Mock registration - replace with actual API call
      console.log('Registration data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setError('');
      setSuccess(true);
      
      // Redirect to login after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1 className="form-title">Create Account</h1>
        <p className="text-center mb-3" style={{ color: '#666' }}>
          Join our secure healthcare platform
        </p>
        
        {error && (
          <div className="alert alert-error mb-3">
            {error}
          </div>
        )}
        
        {success && (
          <div className="alert alert-success mb-3">
            ✅ Account created successfully! Redirecting to login...
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="role-selection">
            <div 
              className={`role-card ${formData.role === 'patient' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('patient')}
            >
              <div className="role-icon">👤</div>
              <div className="role-title">Patient</div>
              <div className="role-description">Access your health records</div>
            </div>
            <div 
              className={`role-card ${formData.role === 'doctor' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('doctor')}
            >
              <div className="role-icon">🩺</div>
              <div className="role-title">Doctor</div>
              <div className="role-description">Manage patient records</div>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
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
          
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>
          
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} required />
              I agree to the <Link to="#" style={{ color: '#1976d2', margin: '0 4px' }}>Terms of Service</Link> 
              and <Link to="#" style={{ color: '#1976d2', margin: '0 4px' }}>Privacy Policy</Link>
            </label>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <div className="text-center mt-3">
          <p style={{ color: '#666' }}>
            Already have an account? <Link to="/login" style={{ color: '#1976d2' }}>Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
