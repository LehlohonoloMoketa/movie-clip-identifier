
import { Link } from 'react-router-dom';
import { Film, Heart, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Film className="h-7 w-7 text-accent transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold text-lg tracking-tight">
                <span className="text-primary">Movie</span>
                <span className="text-accent">ID</span>
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground">
              Identify any movie from just a short clip. Our advanced technology analyzes visual cues to pinpoint the exact film you're watching.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider text-muted-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider text-muted-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider text-muted-foreground">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MovieID. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" /> for movie enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
