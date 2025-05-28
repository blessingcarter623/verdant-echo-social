
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, Edit3, Plus, Grid3X3, Heart } from 'lucide-react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('/placeholder.svg');
  const [activeTab, setActiveTab] = useState('posts');

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

  const userPosts = [
    {
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: "Reflecting on the wisdom of Marcus Garvey: 'A people without the knowledge of their past history, origin and culture is like a tree without roots.' 🌳 Let's continue building our African renaissance! #MarcusGarvey #PanAfricanism #AfricanRenaissance",
      timestamp: '2h',
      likes: 127,
      comments: 43,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    },
    {
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: "Teaching my children about the great kingdoms of Africa - from Kush to Mali, from Zimbabwe to Ethiopia. Our history is rich with achievements that the world needs to know! 👑 #AfricanHistory #BlackExcellence #Education",
      timestamp: '1d',
      likes: 89,
      comments: 28,
      isLiked: true
    },
    {
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: "Unity is our strength! As Kwame Nkrumah said, 'We must unite now or perish.' Building bridges across the African diaspora, one connection at a time. 🤝🌍 #Unity #KwameNkrumah #AfricanUnity",
      timestamp: '3d',
      likes: 156,
      comments: 67,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Header - Inspired by TikTok but with unique touches */}
        <Card className="bg-dark-300 border-neutral-600/20 mb-6">
          <CardContent className="p-6">
            <div className="text-center">
              {/* Cover Photo Area */}
              <div className="h-32 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-lg mb-4 relative">
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              </div>

              {/* Profile Picture */}
              <div className="relative -mt-16 mb-4">
                <Avatar className="w-24 h-24 mx-auto border-4 border-dark-300">
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
                  className="absolute bottom-0 right-1/2 transform translate-x-12 bg-primary rounded-full p-1.5 cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-3 h-3 text-white" />
                </label>
              </div>

              {/* User Info */}
              <h1 className="text-2xl font-bold text-white mb-1">Kemi Adebayo</h1>
              <p className="text-primary font-medium mb-2">@kemiadebayo</p>
              
              {/* Bio */}
              <p className="text-white text-sm mb-4 leading-relaxed max-w-md mx-auto">
                Pan-Africanist | Tech Entrepreneur | Mother Africa's Daughter 🌍<br/>
                "Awakening the consciousness of our people"<br/>
                Building bridges across the diaspora ✊🏿
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

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="flex-1 border-neutral-600 text-white hover:bg-dark-400">
                  Share Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs - Facebook Style */}
        <div className="flex border-b border-neutral-600/20 mb-6">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 font-medium flex items-center justify-center space-x-2 ${
              activeTab === 'posts' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Posts</span>
          </button>
          <button 
            onClick={() => setActiveTab('liked')}
            className={`flex-1 py-3 font-medium flex items-center justify-center space-x-2 ${
              activeTab === 'liked' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Liked</span>
          </button>
        </div>

        {/* Facebook-style Feed */}
        {activeTab === 'posts' && (
          <div className="space-y-0">
            {userPosts.map((post, index) => (
              <PostCard
                key={index}
                author={post.author}
                username={post.username}
                content={post.content}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
                isLiked={post.isLiked}
                image={post.image}
              />
            ))}
          </div>
        )}

        {activeTab === 'liked' && (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <p className="text-neutral-400">Posts you've liked will appear here</p>
          </div>
        )}
      </main>
      <Navbar />
    </div>
  );
};

export default Profile;
