import { useState, useEffect } from "react";
import logo from "../assets/logos/aviral1.png";

const SplashScreen = ({ onFinished }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
      onFinished();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onFinished]);

  if (!showSplash) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#050816] z-50">
      <img
        src={logo}
        alt="Logo"
        className="w-full max-w-[300px] transition-all duration-4000 transform-gpu scale-150"
        style={{ animation: "scaleDown 4s" }}
      />
      <style>
        {`
          @keyframes scaleDown {
            0% {
              transform: scale(5.5);
            }
            45% {
              transform: scale(3.5);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
