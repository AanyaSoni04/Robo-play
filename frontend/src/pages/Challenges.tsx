import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

const Challenges: React.FC = () => {
  const challenges = [
    { title: "First Steps", difficulty: "Beginner", points: 10 },
    { title: "Square Dance", difficulty: "Intermediate", points: 25 },
    { title: "Maze Navigator", difficulty: "Advanced", points: 50 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            Robot Challenges
          </h1>
          <p className="text-gray-600 text-lg">
            Complete missions to level up your robotics skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="font-bold text-lg">{challenge.title}</h3>
                  <p className="text-sm text-gray-500">
                    {challenge.difficulty}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold">
                    {challenge.points} points
                  </span>
                </div>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Start Challenge
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
