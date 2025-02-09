
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGamepad, FaUsers  } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FFD700" }, // Gold
    secondary: { main: "#C0A060" }, // Deeper Gold
    background: { default: "#00FF00", paper: "#000000" },
    text: { primary: "#F0FFFF", secondary: "#F0FFFF" },
    fontFamily: "Arial, sans-serif",
    
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: { color: "#E6E6FA" },
    h5: { color: "#E6E6FA" },
    h55: { color: "#FFFFFF" },
  },
});

const data = [
  { name: "Beginner", value: 30 },
  { name: "Intermediate", value: 50 },
  { name: "Advanced", value: 20 }
];

const HomePage = () => {
  const [likes, setLikes] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline /> {/* Ensures background stays dark */}
     <div  className="w-full max-w-md bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg mb-6">
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
         <p className="text-lg mb-4">Join a network of like-minded Kids developers and collaborate on exciting projects!</p>
       </CardContent>
       <img src={"logo512.png"} className="App-logo" alt="logo" />


     </Card>
   </div>
   </ThemeProvider>

 );
};

export default HomePage;
