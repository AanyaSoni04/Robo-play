import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Heart, Eye } from "lucide-react";

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Robot Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing robots created by the community
          </p>
        </motion.div>

        <div className="text-center py-20">
          <LayoutGrid className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">
            Community Gallery Coming Soon
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            This is where you'll be able to browse and share robot creations
            with other users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
