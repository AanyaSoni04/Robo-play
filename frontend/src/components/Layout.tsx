import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Code,
  Play,
  Trophy,
  LayoutGrid,
  Sparkles,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const navigationItems = [
  {
    title: "Robot Builder",
    path: "/builder",
    icon: Bot,
    color: "from-blue-500 to-blue-600",
    description: "Create your robot",
  },
  {
    title: "Programming Lab",
    path: "/programming",
    icon: Code,
    color: "from-green-500 to-green-600",
    description: "Code with blocks",
  },
  {
    title: "Simulation Arena",
    path: "/simulation",
    icon: Play,
    color: "from-purple-500 to-purple-600",
    description: "Watch it come alive",
  },
  {
    title: "Challenges",
    path: "/challenges",
    icon: Trophy,
    color: "from-orange-500 to-orange-600",
    description: "Complete missions",
  },
  {
    title: "Robot Gallery",
    path: "/gallery",
    icon: LayoutGrid,
    color: "from-pink-500 to-pink-600",
    description: "Browse creations",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
        <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-xl shadow-2xl border-r border-white/20">
          {/* Logo Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  RoboPlay
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Virtual Robotics
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4">
            <div className="space-y-3">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r shadow-lg transform scale-[1.02] ${item.color}`
                        : "hover:bg-gray-50 hover:shadow-md hover:transform hover:scale-[1.01]"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className={`font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-gray-900 group-hover:text-gray-700"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-sm transition-colors ${
                          isActive ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* User Section */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Build • Code • Play</p>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">RoboPlay</h2>
              <p className="text-xs text-gray-500">Virtual Robotics</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl"
          >
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <button
                  onClick={logout}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-600 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Main Content */}
      <main className="md:ml-80">
        <div className="min-h-screen">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
