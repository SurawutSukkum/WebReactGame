
import { useState } from "react";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";
import { Sparkles } from "lucide-react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

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

export default function GamePortal() {
  const [score, setScore] = useState(0);

  const handlePlay = () => {
    setScore(score + Math.floor(Math.random() * 10));
  };

  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline /> {/* Ensures background stays dark */}
    <div className="App">
      <motion.h1 
        className="text-4xl font-bold mb-6 flex items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       Kids Game Portal <Sparkles className="App" />
      </motion.h1>
      
      <Card className="App">
        <CardContent className="flex flex-col items-center">
          <p className="text-xl font-semibold">Your Score: {score}</p>
          <Button 
            className="logo"
            onClick={handlePlay}
          >
            Play Game
          </Button>
        </CardContent>
      </Card>
    </div>
       </ThemeProvider>
  );
}
