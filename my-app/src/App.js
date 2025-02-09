import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGamepad, FaUsers, FaLaptopCode, FaStar } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Beginner", value: 30 },
  { name: "Intermediate", value: 50 },
  { name: "Advanced", value: 20 }
];

const HomePage = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 flex flex-col items-center justify-center p-5">
      <motion.h1
        className="text-white text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Game Dev Bootcamp for Kids
      </motion.h1>

      <Card className="w-full max-w-md bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg mb-6">
        <CardContent className="flex flex-col items-center text-center">
          <FaGamepad className="text-6xl text-yellow-400 mb-4" />
          <p className="text-lg mb-4">
            Join our beginner-friendly game development course and start building your own games today!
          </p>
          <Button className="bg-yellow-400 text-black px-6 py-3 rounded-xl text-lg font-bold hover:bg-yellow-300 transition">
            Get Started
          </Button>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-md bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg mb-6">
        <CardContent className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mb-4">Game Difficulty Range</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip cursor={{ fill: "rgba(255,255,255,0.2)" }} />
              <Bar dataKey="value" fill="#FFD700" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-md bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg mb-6">
        <CardContent className="flex flex-col items-center text-center">
          <FaUsers className="text-6xl text-green-400 mb-4" />
          <h2 className="text-xl font-bold mb-4">Community & Collaboration</h2>
          <p className="text-lg mb-4">Join a network of like-minded Gen Z developers and collaborate on exciting projects!</p>
        </CardContent>
 
 
      </Card>
    </div>
  );
};

export default HomePage;
