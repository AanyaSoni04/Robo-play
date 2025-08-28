import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Builder from "./pages/Builder";
import Programming from "./pages/Programming";
import Simulation from "./pages/Simulation";
import Challenges from "./pages/Challenges";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Loading RoboPlay...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Public Route Component (for login/register)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Loading RoboPlay...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/builder" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/builder" replace />}
                    />
                    <Route path="/builder" element={<Builder />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/simulation" element={<Simulation />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
