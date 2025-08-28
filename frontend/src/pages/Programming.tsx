import React from "react";
import { motion } from "framer-motion";
import { Code, Play } from "lucide-react";

const Programming: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Programming Lab
          </h1>
          <p className="text-gray-600 text-lg">
            Drag code blocks to bring your robot to life
          </p>
        </motion.div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center py-20">
            <Code className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              Visual Programming Interface
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              This is where the Blockly visual programming interface would be
              integrated
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Play className="w-5 h-5 mr-2 inline" />
              Start Programming
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
