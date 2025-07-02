
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      emoji: '🏛️', 
      label: 'Home', 
      path: '/',
      active: location.pathname === '/'
    },
    { 
      emoji: '🔍', 
      label: 'Search', 
      path: '/search',
      active: location.pathname === '/search'
    },
    { 
      emoji: '🎭', 
      label: 'Events', 
      path: '/events',
      active: location.pathname === '/events'
    },
    { 
      emoji: '🌍', 
      label: 'Groups', 
      path: '/groups',
      active: location.pathname === '/groups'
    },
    { 
      emoji: '💌', 
      label: 'Messages', 
      path: '/messages',
      active: location.pathname === '/messages'
    },
    { 
      emoji: '👑', 
      label: 'Profile', 
      path: '/profile',
      active: location.pathname === '/profile'
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              onClick={() => navigate(item.path)}
              className={`relative rounded-full w-12 h-12 p-0 transition-all duration-300 ${
                item.active
                  ? 'bg-primary/20 border border-primary/30 scale-110'
                  : 'hover:bg-white/10 hover:scale-105'
              }`}
            >
              <span className="text-xl" role="img" aria-label={item.label}>
                {item.emoji}
              </span>
              
              {/* Active indicator */}
              {item.active && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
