React Firebase Chat Application

A modern, real-time chat application built with React and Firebase, offering seamless messaging, file sharing, and user management.

## Features

### Authentication
- Email/Password authentication
- Secure user sessions
- Profile management

### Messaging
- Real-time message delivery
- Read receipts
- Message timestamps
- Online/offline status

### Media Sharing
- Image and file uploads
- Preview supported file types
- File size validation

### User Experience
- Responsive design (works on mobile & desktop)
- Light/dark theme
- Emoji support
- Loading indicators
- Error handling and user feedback

## Tech Stack

### Frontend
- **Framework:** React.js
- **State Management:** Zustand
- **Routing:** React Router
- **Styling:** CSS Modules
- **Build Tool:** Vite

### Backend (Firebase)
- **Authentication:** Firebase Auth
- **Database:** Firestore (NoSQL)
- **Storage:** Firebase Storage
- **Hosting:** Firebase Hosting

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm 
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-firebase-chat.git
   cd react-firebase-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Set up Storage
   - Get your Firebase configuration

4. Configure environment:
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_api_key_here


5. Run the development server:
   ```bash
   npm run dev
 
   ```

