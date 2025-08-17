"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
}

export default function LoadingScreen({ isLoading, message = "Loading..." }: LoadingScreenProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="text-center">
        {/* ACES Logo */}
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl p-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-orange-600 font-bold text-2xl">A</span>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">ACES</h2>
        <p className="text-gray-600 mb-4">{message}{dots}</p>
        
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-orange-200 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-orange-600 rounded-full animate-pulse" style={{
            animation: 'loading-bar 2s ease-in-out infinite'
          }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
