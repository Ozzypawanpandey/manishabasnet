
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    // Set active link based on current path
    setActiveLink(window.location.pathname);

    // Handle scroll event to change navbar style
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium transition-opacity hover:opacity-80"
          onClick={() => setActiveLink('/')}
        >
          <span className="font-bold">Manisha</span>
          <span className="text-muted-foreground">.Basnet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'relative text-sm font-medium transition-colors',
                'hover:text-primary after:absolute after:bottom-[-4px] after:left-0',
                'after:h-[2px] after:bg-primary after:transition-all after:duration-300',
                activeLink === item.path 
                  ? 'text-primary after:w-full' 
                  : 'text-muted-foreground hover:text-primary after:w-0 hover:after:w-full'
              )}
              onClick={() => setActiveLink(item.path)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass py-4 animate-fade-in">
          <nav className="container mx-auto px-6 flex flex-col space-y-4">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium py-2 transition-colors animate-slide-in-bottom',
                  activeLink === item.path ? 'text-primary' : 'text-muted-foreground',
                  `delay-${index * 100}`
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => {
                  setActiveLink(item.path);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
