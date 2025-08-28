# RoboPlay App

RoboPlay is a virtual robotics application that allows users to create, manage, and program robots while participating in various challenges. This project is built using a MERN stack (MongoDB, Express, React, Node.js) and includes features such as user authentication, role-based access control, and a responsive frontend.

## Features

- **User Authentication**: Secure registration and login with JWT tokens.
- **Robot Management**: Create, read, update, and delete robots with customizable parts and programming.
- **Challenge Management**: Participate in challenges that test your robot-building skills.
- **Role-Based Access Control**: Different user roles (admin, user) with specific permissions.
- **Input Validation**: Ensures data integrity and security.
- **Error Handling**: Consistent error responses across the application.
- **Responsive Design**: Built with Tailwind CSS for a modern user interface.

## Project Structure

```
roboplay-app/
├── backend/
│   ├── config/                # Database configuration
│   ├── controllers/           # Business logic for handling requests
│   ├── middleware/            # Middleware for authentication and validation
│   ├── models/                # Mongoose models for MongoDB
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── .env.example           # Example environment variables
│   ├── server.js              # Entry point for the backend
│   └── package.json           # Backend dependencies and scripts
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components for routing
│   │   ├── services/          # API service calls
│   │   ├── utils/             # Utility functions
│   │   ├── types/             # TypeScript type definitions
│   │   ├── App.tsx            # Main application component
│   │   └── main.tsx           # Entry point for the frontend
│   ├── package.json           # Frontend dependencies and scripts
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── vite.config.ts         # Vite configuration
└── README.md                  # Project documentation
```

## Setup Instructions

### 1. Clone the Repository

```bash
# Create project directory
mkdir roboplay-app
cd roboplay-app

# Initialize backend
mkdir backend
cd backend
npm init -y
# Copy backend package.json and install dependencies
npm install

# Initialize frontend
cd ..
mkdir frontend
cd frontend
npm create vite@latest . -- --template react-ts
# Copy frontend package.json and install dependencies
npm install
```

### 2. Environment Setup

#### Backend

```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

#### Start MongoDB (if running locally)

```bash
mongod
```

#### Seed Database

```bash
npm run seed
```

### 3. Run the Application

#### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend  

```bash
cd frontend
npm run dev
```

The application will be running at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Conclusion

This project is a complete, production-ready MERN stack application with a focus on user experience and security. Feel free to explore the code and contribute!