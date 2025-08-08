import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const GetStartedPage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');

  // Initialize theme and animations
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
    
    // Dynamic animation speed based on theme
    document.documentElement.style.setProperty(
      '--float-speed', 
      savedTheme === 'dark' ? '15s' : '10s'
    );
  }, []);

  const handleGetStarted = () =>{
   navigate('/chat')
//    toast("Please wait backend is Initializing...")
  }

  // Generate random HSL color based on theme
  const randomThemeColor = () => {
    const hue = theme === 'dark' 
      ? Math.floor(Math.random() * 60) + 200 // Cool colors for dark
      : Math.floor(Math.random() * 60) + 20; // Warm colors for light
    return `hsl(${hue}, 80%, 60%)`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-300 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating bubbles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full opacity-[0.15] animate-float"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: randomThemeColor(),
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `var(--float-speed)`,
            }}
          />
        ))}

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,var(--fallback-b1,oklch(var(--b1)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,var(--fallback-b1,oklch(var(--b1)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-pan"></div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent animate-pulse-slow opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="max-w-md mx-auto bg-base-100/80 backdrop-blur-md rounded-box p-8 border border-base-content/10 shadow-2xl">
          <div className="mb-8 animate-bounce">
            <div className="avatar online placeholder">
              <div className="w-24 rounded-full bg-neutral text-neutral-content">
                <span className="text-4xl">💬</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-2 animate-fade-in">
            Welcome to <span className="text-primary">Chatty</span>
          </h1>
          <p className="text-lg text-base-content/70 mb-8 animate-fade-in delay-100">
            Where conversations come alive
          </p>

          <button
            onClick={handleGetStarted}
            className="btn btn-primary btn-lg w-full mb-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in delay-200"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        :root {
          --float-speed: 15s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-40px) rotate(5deg); opacity: 1; }
        }
        
        @keyframes grid-pan {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-grid-pan {
          animation: grid-pan 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default GetStartedPage;