# Health Record System - Frontend

A modern React-based frontend for a comprehensive Health Record Management System.

## Features

- **Multi-Role Authentication**: Admin, Doctor, and Patient dashboards
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface matching healthcare standards
- **Real-time Data**: Dashboard with live statistics and updates
- **Secure Access**: Role-based access control

## User Roles

### Admin
- System administration and monitoring
- User management
- System health monitoring
- User registration overview

### Doctor
- Patient management
- Medical records access
- Prescription management
- Lab reports review

### Patient
- Personal health records access
- Prescription tracking
- Lab results viewing
- Health summary dashboard

## Demo Credentials

- **Admin**: `admin@health.com` / `admin123`
- **Doctor**: `dr.smith@health.com` / `doctor123`
- **Patient**: `jane.doe@email.com` / `patient123`

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Auth/           # Login and Register components
│   ├── Dashboard/      # Role-specific dashboard components
│   ├── Layout/         # Layout components (Header, Sidebar)
│   └── Pages/          # Page components (HomePage, NotFound)
├── styles/             # CSS styling files
├── utils/              # Utility functions
└── App.js              # Main application component
```

## Backend Integration

This frontend is designed to work with a Spring Boot backend. The API endpoints are configured to connect to `http://localhost:8080/api/` by default.

### API Endpoints

- Authentication: `/api/auth/login`, `/api/auth/register`
- Patients: `/api/patients/*`
- Doctors: `/api/doctors/*`
- Admin: `/api/admin/*`

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Styling and responsive design
- **Axios** - HTTP client for API calls

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
