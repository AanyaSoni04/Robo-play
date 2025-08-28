const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Challenge = require('../models/Challenge');

dotenv.config();

const challenges = [
  {
    title: "First Steps",
    description: "Make your robot move forward for 3 seconds, then stop.",
    difficulty: "beginner",
    category: "movement",
    required_parts: ["body", "motor", "wheel"],
    success_criteria: ["Robot moves forward", "Robot stops after 3 seconds"],
    hint: "Use the 'Move Forward' block followed by a 'Wait' block.",
    points: 10
  },
  {
    title: "Square Dance",
    description: "Program your robot to move in a perfect square pattern.",
    difficulty: "intermediate",
    category: "movement",
    required_parts: ["body", "motor", "wheel"],
    success_criteria: ["Robot creates square path", "Returns to starting position"],
    hint: "Combine forward movement with 90-degree turns in a loop.",
    points: 25
  },
  {
    title: "Light Sensor Magic",
    description: "Create a robot that turns on its LED when it detects an obstacle nearby.",
    difficulty: "intermediate",
    category: "sensors",
    required_parts: ["body", "sensor", "light"],
    success_criteria: ["LED activates near obstacles", "LED turns off when clear"],
    hint: "Use an 'If' block with the sensor reading condition.",
    points: 30
  },
  {
    title: "Maze Navigator",
    description: "Build a robot that can navigate through a simple maze using sensors.",
    difficulty: "advanced",
    category: "logic",
    required_parts: ["body", "motor", "wheel", "sensor"],
    success_criteria: ["Robot avoids walls", "Reaches maze exit", "No manual intervention needed"],
    hint: "Combine sensor readings with decision-making logic.",
    points: 50
  },
  {
    title: "Musical Robot",
    description: "Program your robot to play a simple melody while moving in rhythm.",
    difficulty: "intermediate",
    category: "creativity",
    required_parts: ["body", "speaker", "motor"],
    success_criteria: ["Robot plays melody", "Movement syncs with music"],
    hint: "Use timing blocks to coordinate sound and movement.",
    points: 35
  },
  {
    title: "Security Guard",
    description: "Create a robot that patrols an area and sounds an alarm when it detects motion.",
    difficulty: "advanced",
    category: "advanced",
    required_parts: ["body", "motor", "wheel", "sensor", "speaker", "light"],
    success_criteria: ["Robot patrols automatically", "Detects intruders", "Sounds alarm", "Flashes warning lights"],
    hint: "Combine patrol movement with continuous sensor monitoring.",
    points: 75
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

const seedChallenges = async () => {
  try {
    await connectDB();
    
    // Clear existing challenges
    await Challenge.deleteMany();
    console.log('🗑️  Cleared existing challenges');
    
    // Insert new challenges
    await Challenge.insertMany(challenges);
    console.log('✅ Challenges seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedChallenges();