import React from "react";
import { motion } from "framer-motion";
import { User, Settings } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your account and view your robotics journey
          </p>
        </motion.div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-gray-500 capitalize">
                Role: {user?.role}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600">0</h3>
              <p className="text-gray-600">Robots Created</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <h3 className="text-2xl font-bold text-green-600">0</h3>
              <p className="text-gray-600">Challenges Completed</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-600">0</h3>
              <p className="text-gray-600">Points Earned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
