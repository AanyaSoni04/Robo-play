import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Save, Play, Sparkles, Trash2 } from "lucide-react";

const Builder: React.FC = () => {
  const [robotParts, setRobotParts] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Robot Builder Studio
              </h1>
              <p className="text-gray-600 text-lg">
                Drag parts together to create your perfect robot
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 text-sm border border-gray-200 rounded-full bg-white/50">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                {robotParts.length} parts added
              </div>

              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
                Clear
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-4 h-4" />
                Save Robot
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 shadow-lg transition-colors">
                <Play className="w-4 h-4" />
                Test Drive
              </button>
            </div>
          </div>
        </motion.div>

        {/* Builder Interface */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Parts Library */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                Parts Library
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Click to add parts to your robot
              </p>

              <div className="space-y-3">
                {[
                  "Robot Body",
                  "Motor",
                  "Wheel",
                  "Sensor",
                  "LED Light",
                  "Speaker",
                ].map((part, index) => (
                  <button
                    key={part}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                        <Bot className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{part}</p>
                        <p className="text-xs text-gray-500">Add to robot</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Build Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-50 to-blue-50/20 rounded-2xl overflow-hidden border-4 border-dashed border-gray-200">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="1" fill="#94A3B8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Empty State */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Bot className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Your Canvas Awaits
                    </h3>
                    <p className="text-gray-500">
                      Click parts from the library to start building
                    </p>
                  </div>
                </div>

                {/* Canvas Instructions */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Click</span> to select •{" "}
                    <span className="font-semibold">Drag</span> to move
                  </p>
                  <p className="text-xs text-gray-500">
                    Build your robot by connecting parts together
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
