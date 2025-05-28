
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Heart } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <Card className="bg-dark-300 border-neutral-600/20 mb-6">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-primary text-white text-2xl">
                  <Users className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white">Your Name</h1>
                <p className="text-neutral-400">@username</p>
                <p className="text-white mt-2">Proudly South African 🇿🇦 | Love for braai, biltong, and beautiful sunsets</p>
                <div className="flex items-center space-x-4 mt-3 text-neutral-400 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Cape Town, South Africa
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2023
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-6">
              <div className="text-center">
                <p className="text-white font-bold text-lg">127</p>
                <p className="text-neutral-400 text-sm">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">1,234</p>
                <p className="text-neutral-400 text-sm">Following</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">5,678</p>
                <p className="text-neutral-400 text-sm">Followers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card className="bg-dark-300 border-neutral-600/20">
          <CardHeader>
            <h2 className="text-lg font-semibold text-white">Your Posts</h2>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Heart className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
              <p className="text-neutral-400">Your posts will appear here</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Navbar />
    </div>
  );
};

export default Profile;
