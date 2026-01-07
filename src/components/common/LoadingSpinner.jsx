import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full">
      <Loader2 
        className="text-purple-600 animate-spin mb-4" 
        size={48} 
        strokeWidth={2.5}
      />
      
      {/* Loading text to guide the user */}
      <p className="text-gray-500 font-medium animate-pulse">
        Searching the library...
      </p>
    </div>
  );
};

export default LoadingSpinner;