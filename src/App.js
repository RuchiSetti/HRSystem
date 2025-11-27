import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



// Components
import HomePage from './components/Pages/HomePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import NotFound from './components/Pages/NotFound';
import { getCurrentUser } from './utils/auth';

// Import page components for navigation
import AdminUsers from './components/Pages/AdminUsers';
import AdminSettings from './components/Pages/AdminSettings';
import AdminPatients from './components/Pages/AdminPatients';
import AdminDoctors from './components/Pages/AdminDoctors';
import PatientMedicalRecords from './components/Pages/PatientMedicalRecords';
import PatientPrescriptions from './components/Pages/PatientPrescriptions';
import PatientLabReports from './components/Pages/PatientLabReports';
import PatientProfile from './components/Pages/PatientProfile';
import DoctorPatients from './components/Pages/DoctorPatients';
import DoctorMedicalRecords from './components/Pages/DoctorMedicalRecords';
import DoctorPrescriptions from './components/Pages/DoctorPrescriptions';
import DoctorLabReports from './components/Pages/DoctorLabReports';
import DoctorProfile from './components/Pages/DoctorProfile';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleUserLogin = (userData) => {
    setUser(userData);
  };

  const handleUserLogout = () => {
    setUser(null);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Health Records System...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setUser={handleUserLogin} />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={user?.role === 'ADMIN' ? <AdminDashboard user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/users" 
            element={user?.role === 'ADMIN' ? <AdminUsers user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/settings" 
            element={user?.role === 'ADMIN' ? <AdminSettings user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/patients" 
            element={user?.role === 'ADMIN' ? <AdminPatients user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/doctors" 
            element={user?.role === 'ADMIN' ? <AdminDoctors user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          
          {/* Patient Routes */}
          <Route 
            path="/patient/dashboard" 
            element={user?.role === 'PATIENT' ? <PatientDashboard user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/patient/medical-records" 
            element={user?.role === 'PATIENT' ? <PatientMedicalRecords user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/patient/prescriptions" 
            element={user?.role === 'PATIENT' ? <PatientPrescriptions user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/patient/lab-reports" 
            element={user?.role === 'PATIENT' ? <PatientLabReports user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/patient/profile" 
            element={user?.role === 'PATIENT' ? <PatientProfile user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          
          {/* Doctor Routes */}
          <Route 
            path="/doctor/dashboard" 
            element={user?.role === 'DOCTOR' ? <DoctorDashboard user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/doctor/patients" 
            element={user?.role === 'DOCTOR' ? <DoctorPatients user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/doctor/medical-records" 
            element={user?.role === 'DOCTOR' ? <DoctorMedicalRecords user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/doctor/prescriptions" 
            element={user?.role === 'DOCTOR' ? <DoctorPrescriptions user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/doctor/lab-reports" 
            element={user?.role === 'DOCTOR' ? <DoctorLabReports user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/doctor/profile" 
            element={user?.role === 'DOCTOR' ? <DoctorProfile user={user} onLogout={handleUserLogout} /> : <Navigate to="/login" />} 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
