
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Home, Search, Plus, Bell, User, MessageSquare, BookOpen, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [unreadMessages] = useState(3);
  const [unreadNotifications] = useState(5);
  const navigate = useNavigate();

  return (
    <>
      {/* Top navbar with logo, notifications, and profile */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Vuka<span className="text-green-600">Africa</span>
              </span>
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-green-400 hover:bg-gray-800 p-2"
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
                className="text-gray-400 hover:text-green-400 hover:bg-gray-800 p-2"
                onClick={() => navigate('/profile')}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-green-600 text-white text-sm">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Navigation Icons - Centered */}
            <div className="flex items-center justify-center space-x-6">
              {/* Home */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-green-400 hover:bg-gray-800 flex-col p-2"
                onClick={() => navigate('/')}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs mt-1 hidden sm:block">Home</span>
              </Button>

              {/* Search */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-green-400 hover:bg-gray-800 flex-col p-2"
                onClick={() => navigate('/search')}
              >
                <Search className="w-6 h-6" />
                <span className="text-xs mt-1 hidden sm:block">Search</span>
              </Button>

              {/* Groups */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-green-400 hover:bg-gray-800 flex-col p-2"
                onClick={() => navigate('/groups')}
              >
                <Users className="w-6 h-6" />
                <span className="text-xs mt-1 hidden sm:block">Groups</span>
              </Button>

              {/* Create Post */}
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white flex-col p-2"
              >
                <Plus className="w-6 h-6" />
                <span className="text-xs mt-1 hidden sm:block">Post</span>
              </Button>

              {/* Messages */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-green-400 hover:bg-gray-800 flex-col p-2"
                  onClick={() => navigate('/messages')}
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-xs mt-1 hidden sm:block">Messages</span>
                  {unreadMessages > 0 && (
                    <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center bg-red-600">
                      {unreadMessages > 9 ? '9+' : unreadMessages}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Blog */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-green-400 hover:bg-gray-800 flex-col p-2"
                onClick={() => navigate('/blog')}
              >
                <BookOpen className="w-6 h-6" />
                <span className="text-xs mt-1 hidden sm:block">Blog</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
