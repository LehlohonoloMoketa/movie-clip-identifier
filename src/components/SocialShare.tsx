
import { useState } from 'react';
import { Share2, Copy, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  url?: string;
}

const SocialShare = ({ title, url = window.location.href }: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('Link copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
        toast.error('Failed to copy link');
      });
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: 'Email',
      icon: <Mail className="h-4 w-4" />,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-3 w-56 z-10">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium">Share this movie</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Close</span>
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mb-2"
          >
            <span>Copy link</span>
            <Copy className="h-4 w-4" />
          </button>
          
          <div className="grid grid-cols-4 gap-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {link.icon}
                <span className="text-xs mt-1">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
