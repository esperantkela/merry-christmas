"use client";
import React, { useState } from "react";
import { Star, Gift } from "lucide-react";
import { motion } from "framer-motion";

const ChristmasCard = () => {
  const [activeGift, setActiveGift] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-blue-950 flex flex-col">
      <main className="flex-grow flex justify-center items-center p-8 relative">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
            }}
          />
        ))}

        <div className="text-center relative z-10">
          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-16 
                       bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 
                       bg-clip-text text-transparent animate-pulse
                       hover:scale-105 transition-all duration-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Joyeux Noël
          </motion.h1>

          <div className="relative">
            {/* Sapin lumineux */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0 h-0 mx-auto relative
                         border-l-[100px] border-r-[100px] border-b-[160px] 
                         border-transparent"
                style={{
                  borderBottomColor: `hsl(140, ${70 + i * 5}%, ${30 + i * 5}%)`,
                  marginTop: `-${130 - i * 30}px`,
                  transform: `scale(${1 - i * 0.2})`,
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {[...Array(12)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: [
                        "#ff0000",
                        "#FFD700",
                        "#ff69b4",
                        "#4169e1",
                        "#32CD32",
                      ][Math.floor(Math.random() * 5)],
                      left: `${Math.random() * 160 - 80}px`,
                      top: `${Math.random() * 140}px`,
                    }}
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: j * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* animated stars*/}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star
                size={56}
                className="absolute -top-10 left-1/2 -translate-x-1/2
                           text-yellow-400 cursor-pointer"
                fill="gold"
              />
            </motion.div>

            <div className="flex justify-center gap-6 mt-12">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Gift
                    size={48}
                    className={`cursor-pointer
                             ${activeGift === i ? "text-yellow-400" : ""}`}
                    style={{
                      color:
                        activeGift === i
                          ? "#FFD700"
                          : ["#ff0000", "#00ff00", "#4169e1"][i],
                    }}
                    onMouseEnter={() => setActiveGift(i)}
                    onMouseLeave={() => setActiveGift(null)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 text-center py-6 bg-white/10 backdrop-blur-md">
        <motion.p
          className="text-white/90 font-medium text-lg hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Créé avec ❤️ par{" "}
          <span
            className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                             bg-clip-text text-transparent hover:scale-105 
                             inline-block transition-transform duration-300"
          >
            Espérant KELA
          </span>
        </motion.p>
      </footer>
    </div>
  );
};

export default ChristmasCard;
