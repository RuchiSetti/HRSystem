import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const AdminSettings = ({ user, onLogout }) => {
  const [settings, setSettings] = useState({
    systemName: 'Health Record System',
    maintenanceMode: false,
    emailNotifications: true,
    backupFrequency: 'daily',
    sessionTimeout: 30
  });

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Users', icon: '👥', active: false },
    { text: 'Patients', icon: '👤', active: false },
    { text: 'Doctors', icon: '🩺', active: false },
    { text: 'Settings', icon: '⚙️', active: true },
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Mock save functionality
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">System Settings</h1>

        <div className="settings-container">
          <div className="card">
            <h2>General Settings</h2>
            <div className="form-group">
              <label className="form-label">System Name</label>
              <input
                type="text"
                className="form-input"
                value={settings.systemName}
                onChange={(e) => handleSettingChange('systemName', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Session Timeout (minutes)</label>
              <input
                type="number"
                className="form-input"
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="card">
            <h2>System Configuration</h2>
            <div className="setting-item">
              <div className="setting-info">
                <h3>Maintenance Mode</h3>
                <p>Enable maintenance mode to restrict system access</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Email Notifications</h3>
                <p>Send email notifications for system events</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">Backup Frequency</label>
              <select
                className="form-input"
                value={settings.backupFrequency}
                onChange={(e) => handleSettingChange('backupFrequency', e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="card">
            <h2>Security Settings</h2>
            <div className="setting-item">
              <div className="setting-info">
                <h3>Two-Factor Authentication</h3>
                <p>Require 2FA for all admin accounts</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Password Policy</h3>
                <p>Enforce strong password requirements</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              Save Settings
            </button>
            <button className="btn btn-secondary">
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSettings;
