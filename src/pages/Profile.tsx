
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Heart, Edit3, Plus } from 'lucide-react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('/placeholder.svg');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-md mx-auto px-4 py-6">
        {/* TikTok-style Profile Header */}
        <div className="text-center mb-6">
          {/* Profile Picture */}
          <div className="relative mx-auto mb-4">
            <Avatar className="w-24 h-24 mx-auto border-2 border-primary">
              <AvatarImage src={profileImage} alt="Profile" />
              <AvatarFallback className="bg-primary text-white text-2xl">
                KA
              </AvatarFallback>
            </Avatar>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profile-upload"
            />
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 cursor-pointer hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-3 h-3 text-white" />
            </label>
          </div>

          {/* User Info */}
          <h1 className="text-xl font-bold text-white mb-1">@kemiadebayo</h1>
          <p className="text-lg font-semibold text-white mb-2">Kemi Adebayo</p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-6 mb-4">
            <div className="text-center">
              <p className="text-white font-bold text-lg">127</p>
              <p className="text-neutral-400 text-sm">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">1.2K</p>
              <p className="text-neutral-400 text-sm">Following</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">5.6K</p>
              <p className="text-neutral-400 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">45.2K</p>
              <p className="text-neutral-400 text-sm">Likes</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-white text-sm mb-3 leading-relaxed">
            Celebrating African excellence 🌍<br/>
            Tech entrepreneur | Pan-Africanist<br/>
            Building bridges across the continent
          </p>

          {/* Location and Join Date */}
          <div className="flex justify-center items-center space-x-4 mb-4 text-neutral-400 text-xs">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              Lagos, Nigeria
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              Joined March 2023
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mb-6">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" className="flex-1 border-neutral-600 text-white hover:bg-dark-300">
              Share Profile
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-neutral-600/20 mb-4">
          <button className="flex-1 py-3 text-white border-b-2 border-primary font-medium">
            Posts
          </button>
          <button className="flex-1 py-3 text-neutral-400 font-medium">
            Liked
          </button>
        </div>

        {/* Posts Grid - TikTok Style */}
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-dark-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        <div className="text-center py-8">
          <p className="text-neutral-400 text-sm">Share your African heritage stories</p>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Profile;
