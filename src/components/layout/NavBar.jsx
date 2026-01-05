import {Link} from 'react-router-dom';
import React from 'react';
import { Home, Heart, Sparkles } from 'lucide-react'; // Using lucide-react for icons

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
           <span className="text-white font-bold">B</span>
        </div>
        <span className="font-bold text-xl">MyBookShelf</span>
      </div>
      
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium">
          <Home size={18} /> Home
        </a>
        <a href="/favorites" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium">
          <Heart size={18} /> Favorite
        </a>
        <a href="/ai-assistant" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium">
          <Sparkles size={18} /> AI Assistant
        </a>
      </div>

      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
        A
      </div>
    </nav>
  );
};