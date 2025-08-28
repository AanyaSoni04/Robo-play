import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Square } from "lucide-react";

const Simulation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Simulation Arena
          </h1>
          <p className="text-gray-600 text-lg">
            Watch your robot come to life in the virtual world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <Play className="w-20 h-20 text-white/50 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">
                      3D Simulation Viewport
                    </h3>
                    <p className="text-white/70 mb-8">
                      Your robot would appear here in a 3D physics simulation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-bold mb-6">Simulation Controls</h3>
              <div className="space-y-4">
                <button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Start
                </button>
                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Pause className="w-5 h-5 mr-2 inline" />
                  Pause
                </button>
                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Square className="w-5 h-5 mr-2 inline" />
                  Stop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
