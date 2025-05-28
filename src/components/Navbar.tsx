
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Home, Search, Plus, Bell, User, MessageSquare, Camera } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [unreadMessages] = useState(3);
  const [unreadNotifications] = useState(5);

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-100/95 backdrop-blur-md border-b border-neutral-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="hidden sm:block text-xl font-bold text-white">
                Vuka<span className="text-primary">Africa</span>
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for people, posts, or hashtags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-dark-300 border-neutral-600 text-white placeholder-neutral-400 focus:border-primary"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Home */}
            <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary hover:bg-dark-300">
              <Home className="w-5 h-5" />
            </Button>

            {/* Search (Mobile) */}
            <Button variant="ghost" size="sm" className="md:hidden text-neutral-400 hover:text-primary hover:bg-dark-300">
              <Search className="w-5 h-5" />
            </Button>

            {/* Create Post */}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Post</span>
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary hover:bg-dark-300">
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                    {unreadNotifications > 9 ? '9+' : unreadNotifications}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Messages */}
            <div className="relative">
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary hover:bg-dark-300">
                <MessageSquare className="w-5 h-5" />
                {unreadMessages > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                    {unreadMessages > 9 ? '9+' : unreadMessages}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="bg-primary text-white">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-dark-300 border-neutral-600">
                <DropdownMenuItem className="text-white hover:bg-dark-400">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-dark-400">
                  <Camera className="mr-2 h-4 w-4" />
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-dark-400">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-400 hover:bg-dark-400">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
