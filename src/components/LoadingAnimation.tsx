
import { useState, useEffect } from 'react';
import { Film, Search, Server } from 'lucide-react';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const steps = [
    "Analyzing clip details...",
    "Matching visual patterns...",
    "Searching movie database...",
    "Identifying scenes and shots...",
    "Finding your movie..."
  ];

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        // Progress calculation to reach 100% in about 4-5 seconds
        const newProgress = prev + Math.random() * 3;
        
        // Update step based on progress
        if (newProgress >= 20 && step === 0) setStep(1);
        else if (newProgress >= 40 && step === 1) setStep(2);
        else if (newProgress >= 60 && step === 2) setStep(3);
        else if (newProgress >= 80 && step === 3) setStep(4);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 150);
    
    return () => clearInterval(timer);
  }, [step]);

  const getIcon = (currentStep: number) => {
    switch(currentStep) {
      case 0:
      case 1:
        return <Film className="mr-2 h-5 w-5" />;
      case 2:
      case 3:
        return <Search className="mr-2 h-5 w-5" />;
      case 4:
        return <Server className="mr-2 h-5 w-5" />;
      default:
        return <Film className="mr-2 h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md animate-fade-in">
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-accent transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex items-center text-sm font-medium mb-2 text-center">
        {getIcon(step)}
        <span className="animate-pulse-slow">{steps[step]}</span>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        <div className="h-3 w-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '0ms' }}></div>
        <div className="h-3 w-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '100ms' }}></div>
        <div className="h-3 w-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '200ms' }}></div>
        <div className="h-3 w-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '300ms' }}></div>
        <div className="h-3 w-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '400ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
