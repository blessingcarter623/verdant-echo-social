
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

const Navbar = () => {
  const [unreadMessages] = useState(3);
  const [unreadNotifications] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      emoji: '🏠', 
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
      emoji: '🎉', 
      label: 'Events', 
      path: '/events',
      active: location.pathname === '/events'
    },
    { 
      emoji: '👥', 
      label: 'Groups', 
      path: '/groups',
      active: location.pathname === '/groups'
    },
    { 
      emoji: '💬', 
      label: 'Messages', 
      path: '/messages',
      active: location.pathname === '/messages',
      badge: unreadMessages
    },
    { 
      emoji: '📝', 
      label: 'Blog', 
      path: '/blog',
      active: location.pathname === '/blog'
    }
  ];

  return (
    <>
      {/* Top navbar with logo, notifications, and profile */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Vuka<span className="text-primary">Africa</span>
              </span>
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-primary hover:bg-gray-800 p-2"
                  onClick={() => navigate('/notifications')}
                >
                  <Bell className="w-6 h-6" />
                  {unreadNotifications > 0 && (
                    <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center bg-red-600">
                      {unreadNotifications > 9 ? '9+' : unreadNotifications}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Profile */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-primary hover:bg-gray-800 p-2"
                onClick={() => navigate('/profile')}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-black text-sm">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <Button
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

                {/* Badge for messages */}
                {item.badge && item.badge > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center bg-red-600">
                    {item.badge > 9 ? '9+' : item.badge}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
