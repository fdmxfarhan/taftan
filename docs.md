# Taftan Project Documentation

## Overview
Taftan is a comprehensive service management and device tracking application built with React Native. It provides a robust platform for managing device installations, maintenance, damage reports, and service requests with real-time tracking and reporting capabilities.

## Project Structure

The project follows a modular architecture with clear separation of concerns:

### 📁 Assets
Contains static resources used throughout the application:
- `fonts/` - Custom font files for consistent typography
- `logo.png` - Application logo and branding assets
- Other image assets for UI elements and icons

### 📁 Components
Reusable UI components and modules organized by functionality:

#### Report Management Components
- `report-damageBeforeUse.js` - Handles pre-use damage assessment
- `report-upload.js` - Manages file uploads for reports
- `report-components.js` - Core report functionality components
- `report-Actions.js` - Report action handlers
- `report-garanti.js` - Warranty management
- `report-tabLinks.js` - Report navigation
- `report-questionnaire.js` - Dynamic questionnaire system
- `report-installation.js` - Installation reporting
- `report-info.js` - Report information display
- `report-recognize.js` - Device recognition system

#### Home Screen Components
- `home-notif.js` - Notification center
- `home-message.js` - Messaging system
- `home-myrequests.js` - Request management
- `home-tabLinks.js` - Navigation tabs
- `home-bootomNav.js` - Bottom navigation bar

#### Request Management Components
- `reqview-actionsinfo.js` - Action information display
- `reqview-installationInfo.js` - Installation details
- `reqview-deviceInfo.js` - Device information
- `reqview-expertsinfo.js` - Expert assignment
- `reqview-periodicInfo.js` - Periodic maintenance info
- `reqview-projectInfo.js` - Project details
- `reqview-reqinfo.js` - Request information
- `reqview-siteInfo.js` - Site information
- `reqview-SLAinfo.js` - SLA tracking
- `reqview-workflowinfo.js` - Workflow management

#### Core UI Components
- `SideMenu.js` - Side navigation menu
- `navbar.js` - Top navigation bar
- `dropdown.js` - Custom dropdown component
- `loading.js` - Loading indicators
- `popup.js` - Modal popup system
- `checkbox.js` - Custom checkbox component
- `map-view.js` - Map integration component

### 📁 Config
Configuration and environment management:

#### API Configuration
- `api.js` - Base API configuration
- `api-auth.js` - Authentication endpoints
- `api-serial.js` - Serial number validation
- `api-upload.js` - File upload endpoints

#### Application Settings
- `userPreferences.js` - User settings management
- `consts.js` - Application constants
- `getSLAColor.js` - SLA status colors
- `save.js` - Data persistence
- `storage.js` - Local storage management

### 📁 Screens
Main application views and pages:

#### Core Screens
- `report.js` - Report management interface
- `home.js` - Main dashboard
- `login.js` - Authentication screen

#### Service Management
- `service-installations.js` - Installation tracking
- `service-damage.js` - Damage reporting
- `service-periodic.js` - Maintenance scheduling
- `service-projects.js` - Project management
- `service-site.js` - Site management

#### Device Management
- `deviceDetail.js` - Device information
- `deviceList.js` - Device inventory
- `cameraScan.js` - QR/Barcode scanning

#### Request Management
- `request-view.js` - Request details
- `request-add.js` - New request creation

#### Utility Screens
- `splash.js` - Loading screen
- `mapPage.js` - Location services
- `profile.js` - User profile

### 📁 Services
Business logic and API integration:

#### Authentication
- `auth.js` - User authentication and session management

#### Device Services
- `device-config-henzaRecognition.js` - Device recognition
- `device-detail.js` - Device information retrieval
- `device-get-list.js` - Device inventory management
- `device-get-on-map.js` - Location tracking

#### Report Services
- `report-save-report.js` - Report persistence
- `report-get-detail.js` - Report retrieval
- `report-get-waranty-reasons.js` - Warranty management

#### Request Services
- `req-allowed-actions.js` - Action permissions
- `req-detail.js` - Request information
- `req-my-requests.js` - User request management

#### Location Services
- `country-dev-city-list.js` - City management
- `country-dev-local-province.js` - Province management
- `country-dev-zone-list.js` - Zone management

#### Utility Services
- `upload.js` - File upload handling
- `message-my-list.js` - Messaging system
- `get-service-title-list.js` - Service catalog

### 📁 Styles
UI styling and theming:
- `requestList.js` - Request list styling
- `reqView.js` - Request view styling

## Technology Stack

### Frontend
- React Native
- JavaScript/JSX
- Custom UI components
- React Navigation
- Redux (State Management)
- React Native Maps
- React Native Camera

### Backend Integration
- RESTful API
- WebSocket for real-time updates
- JWT Authentication
- File upload handling
- Location services

### Development Tools
- ESLint
- Prettier
- Jest for testing
- React Native Debugger

## Advanced Features

### Real-time Capabilities
- Live device tracking
- Instant notifications
- Real-time status updates
- Live chat support

### Security Features
- JWT-based authentication
- Role-based access control
- Secure file uploads
- Data encryption

### Performance Optimizations
- Lazy loading
- Image optimization
- Caching strategies
- Offline support

### Integration Capabilities
- Map services
- Camera integration
- File storage
- Push notifications
- Analytics

## Development Guidelines

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Maintain component documentation
- Follow React Native best practices

### State Management
- Use Redux for global state
- Implement local state when appropriate
- Follow unidirectional data flow
- Maintain immutable state

### Testing Strategy
- Unit tests for components
- Integration tests for services
- E2E testing for critical flows
- Performance testing

### Performance Considerations
- Implement lazy loading
- Optimize image assets
- Use proper caching
- Monitor memory usage

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- React Native CLI
- Android Studio / Xcode
- Git

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Run the application: `npm start`

### Development Setup
1. Configure development environment
2. Set up debugging tools
3. Configure API endpoints
4. Set up testing environment

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
[Add your license information here]

## Support
For support, please contact [your support contact information]
