import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">❤️</span>
            Health Record System
          </div>
          <div className="header-actions">
            <Link to="/login" className="btn btn-secondary">Sign In</Link>
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Secure <span className="hero-highlight">Healthcare Records</span> Management
            </h1>
            <p className="hero-description">
              Streamline healthcare operations with our comprehensive digital health record system. 
              Secure, efficient, and designed for modern healthcare needs.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary btn-large">Get Started</Link>
              <Link to="/login" className="btn btn-secondary btn-large">Sign In</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2>Why Choose Our Platform?</h2>
            <p>Built with healthcare professionals and patients in mind.</p>
          </div>
          <div className="grid grid-4">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Secure Records</h3>
              <p className="feature-description">
                Your medical data is protected with enterprise-grade security and encryption.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Multi-Role Access</h3>
              <p className="feature-description">
                Seamless access for patients, doctors, and administrators with role-based permissions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Real-time Updates</h3>
              <p className="feature-description">
                Instant access to the latest medical records, prescriptions, and lab results.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3 className="feature-title">Comprehensive Care</h3>
              <p className="feature-description">
                Complete health management with medical records, prescriptions, and lab reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Healthcare Experience?</h2>
            <p>
              Join thousands of healthcare professionals and patients who trust our platform 
              for secure, efficient health record management.
            </p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary btn-large">Start Your Journey</Link>
              <Link to="/login" className="btn btn-secondary btn-large">Access Your Records</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">❤️</span>
              Health Record System
            </div>
            <p>Secure healthcare records management for the modern world</p>
            <p className="footer-copyright">© 2024 Health Record System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
