import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const PatientLabReports = ({ user, onLogout }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // Mock data - replace with actual API call
      const mockReports = [
        {
          id: 1,
          date: '2024-01-15',
          type: 'Blood Work',
          doctor: 'Dr. John Smith',
          status: 'Normal',
          results: [
            { test: 'Glucose', value: '95 mg/dL', normal: '70-100 mg/dL', status: 'Normal' },
            { test: 'Cholesterol', value: '180 mg/dL', normal: '<200 mg/dL', status: 'Normal' },
            { test: 'Hemoglobin', value: '14.2 g/dL', normal: '12-16 g/dL', status: 'Normal' }
          ]
        },
        {
          id: 2,
          date: '2024-01-10',
          type: 'Urine Analysis',
          doctor: 'Dr. Sarah Johnson',
          status: 'Normal',
          results: [
            { test: 'Protein', value: 'Negative', normal: 'Negative', status: 'Normal' },
            { test: 'Glucose', value: 'Negative', normal: 'Negative', status: 'Normal' },
            { test: 'pH', value: '6.5', normal: '5.0-8.0', status: 'Normal' }
          ]
        },
        {
          id: 3,
          date: '2023-12-20',
          type: 'X-Ray Chest',
          doctor: 'Dr. Michael Brown',
          status: 'Normal',
          results: [
            { test: 'Lungs', value: 'Clear', normal: 'Clear', status: 'Normal' },
            { test: 'Heart', value: 'Normal size', normal: 'Normal', status: 'Normal' }
          ]
        }
      ];
      setReports(mockReports);
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: '❤️', active: false },
    { text: 'Medical Records', icon: '👤', active: false },
    { text: 'Prescriptions', icon: '💊', active: false },
    { text: 'Lab Reports', icon: '📊', active: true },
    { text: 'Profile', icon: '⚙️', active: false },
  ];

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Layout user={user} sidebarItems={sidebarItems} onLogout={onLogout}>
      <div className="content-body">
        <h1 className="content-title">Lab Reports</h1>

        <div className="page-header">
          <h2>Your Lab Results</h2>
          <button className="btn btn-primary" onClick={() => alert('New test request submitted!')}>Request New Test</button>
        </div>

        <div className="reports-container">
          {reports.map((report) => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <div className="report-info">
                  <h3 className="report-type">{report.type}</h3>
                  <p className="report-date">{report.date}</p>
                  <p className="report-doctor">Ordered by: {report.doctor}</p>
                </div>
                <span className={`tag ${report.status === 'Normal' ? 'tag-success' : 'tag-warning'}`}>
                  {report.status}
                </span>
              </div>
              
              <div className="report-content">
                <h4>Test Results:</h4>
                <div className="results-table">
                  <div className="results-header">
                    <div className="result-cell">Test</div>
                    <div className="result-cell">Value</div>
                    <div className="result-cell">Normal Range</div>
                    <div className="result-cell">Status</div>
                  </div>
                  
                  {report.results.map((result, index) => (
                    <div key={index} className="result-row">
                      <div className="result-cell">{result.test}</div>
                      <div className="result-cell">{result.value}</div>
                      <div className="result-cell">{result.normal}</div>
                      <div className="result-cell">
                        <span className={`tag ${result.status === 'Normal' ? 'tag-success' : 'tag-warning'}`}>
                          {result.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="report-actions">
                  <button className="btn btn-secondary btn-small" onClick={() => alert('Downloading PDF...')}>Download PDF</button>
                  <button className="btn btn-primary btn-small" onClick={() => alert('Report shared with doctor!')}>Share with Doctor</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PatientLabReports;
