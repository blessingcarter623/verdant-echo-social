
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Home, Search, Plus, Bell, User, MessageSquare, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [unreadMessages] = useState(3);
  const [unreadNotifications] = useState(5);
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full bg-dark-100/95 backdrop-blur-md border-t border-neutral-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Hidden on mobile for space */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-white">
                Vuka<span className="text-primary">Africa</span>
              </span>
            </div>
          </div>

          {/* Navigation Icons - Centered on mobile */}
          <div className="flex items-center justify-center space-x-4 flex-1 lg:flex-none">
            {/* Home */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
              onClick={() => navigate('/')}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs mt-1 hidden sm:block">Home</span>
            </Button>

            {/* Search */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
              onClick={() => navigate('/search')}
            >
              <Search className="w-5 h-5" />
              <span className="text-xs mt-1 hidden sm:block">Search</span>
            </Button>

            {/* Blog */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
              onClick={() => navigate('/blog')}
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs mt-1 hidden sm:block">Blog</span>
            </Button>

            {/* Create Post */}
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-white flex-col p-2"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs mt-1 hidden sm:block">Post</span>
            </Button>

            {/* Messages */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
                onClick={() => navigate('/messages')}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs mt-1 hidden sm:block">Messages</span>
                {unreadMessages > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                    {unreadMessages > 9 ? '9+' : unreadMessages}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
                onClick={() => navigate('/notifications')}
              >
                <Bell className="w-5 h-5" />
                <span className="text-xs mt-1 hidden sm:block">Alerts</span>
                {unreadNotifications > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                    {unreadNotifications > 9 ? '9+' : unreadNotifications}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Profile */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-neutral-400 hover:text-primary hover:bg-dark-300 flex-col p-2"
              onClick={() => navigate('/profile')}
            >
              <Avatar className="w-5 h-5">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-primary text-white text-xs">
                  <User className="w-3 h-3" />
                </AvatarFallback>
              </Avatar>
              <span className="text-xs mt-1 hidden sm:block">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
