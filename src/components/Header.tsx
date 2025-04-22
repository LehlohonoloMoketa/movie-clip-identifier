
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-background/90' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          aria-label="Logo"
        >
          <Film className="h-8 w-8 text-accent transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-semibold text-xl tracking-tight">
            <span className="text-primary">Movie</span>
            <span className="text-accent">ID</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-accent ${
              location.pathname === '/' ? 'text-accent' : 'text-primary'
            }`}
          >
            Home
          </Link>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium transition-colors hover:text-accent text-primary"
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium transition-colors hover:text-accent text-primary"
          >
            Features
          </a>
        </nav>
        
        <div className="flex items-center">
          <Link
            to="/"
            className="btn-accent rounded-full text-xs py-2 px-4 md:text-sm md:py-2 md:px-6 animate-slide-up"
          >
            Identify Movie
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
