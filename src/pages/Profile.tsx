
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Heart, MessageSquare, Share, MoreHorizontal, Play } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userPosts = [
    {
      type: 'video',
      content: 'Just visited the Apartheid Museum in Johannesburg. The strength of our ancestors who fought for freedom continues to inspire me. #NeverForget #BlackConsciousness',
      timestamp: '3h',
      likes: 234,
      comments: 45,
      shares: 12,
      views: '1.2K'
    },
    {
      type: 'image',
      content: 'Reading "Black Consciousness" by Steve Biko again. Every young African should understand their true history and identity. Knowledge is liberation! 📚✊🏿',
      timestamp: '1d',
      likes: 189,
      comments: 32,
      shares: 8,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'
    },
    {
      type: 'text',
      content: 'Ubuntu: "I am because we are." Our ancestors understood community and collective consciousness long before individualism was forced upon us. Let\'s remember our roots.',
      timestamp: '3d',
      likes: 156,
      comments: 28,
      shares: 15
    }
  ];

  const tabs = [
    { id: 'posts', label: 'Posts', count: '127' },
    { id: 'videos', label: 'Videos', count: '45' },
    { id: 'photos', label: 'Photos', count: '89' },
    { id: 'about', label: 'About', count: '' }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <Card className="bg-dark-300 border-neutral-600/20 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-primary text-white text-4xl">
                    <Users className="w-16 h-16" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-dark-300"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">Amara Okafor</h1>
                  <Badge className="bg-primary text-white">Verified</Badge>
                </div>
                <p className="text-neutral-400 text-lg mb-2">@amara_conscious</p>
                <p className="text-white mb-3">Pan-African consciousness advocate | Steve Biko scholar | Ubuntu philosophy student 🌍✊🏿</p>
                
                <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Johannesburg, South Africa
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2023
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-6 mb-4">
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">2.3M</p>
                    <p className="text-neutral-400 text-sm">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">892</p>
                    <p className="text-neutral-400 text-sm">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">45.2M</p>
                    <p className="text-neutral-400 text-sm">Likes</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Following
                </Button>
                <Button variant="outline" className="border-neutral-600 text-white hover:bg-dark-400">
                  Message
                </Button>
                <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-dark-300 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-neutral-400 hover:text-white hover:bg-dark-400'
              }`}
            >
              {tab.label} {tab.count && <span className="ml-1">({tab.count})</span>}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeTab === 'posts' && (
          <div className="space-y-4">
            {userPosts.map((post, index) => (
              <Card key={index} className="bg-dark-300 border-neutral-600/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-primary text-white">
                        AO
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-white">Amara Okafor</h3>
                        <Badge className="bg-primary text-white text-xs">Verified</Badge>
                        <span className="text-neutral-400 text-sm">@amara_conscious</span>
                        <span className="text-neutral-400">·</span>
                        <span className="text-neutral-400 text-sm">{post.timestamp}</span>
                      </div>
                      
                      <p className="text-white mb-4">{post.content}</p>
                      
                      {post.type === 'video' && (
                        <div className="relative bg-dark-400 rounded-lg h-64 mb-4 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white/60" />
                          <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            {post.views} views
                          </span>
                        </div>
                      )}
                      
                      {post.image && (
                        <div className="mb-4">
                          <img 
                            src={post.image} 
                            alt="Post content"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      {/* Engagement Actions */}
                      <div className="flex items-center justify-between text-neutral-400">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                            <MessageSquare className="w-5 h-5" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                            <Share className="w-5 h-5" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <Card className="bg-dark-300 border-neutral-600/20">
            <CardHeader>
              <h2 className="text-lg font-semibold text-white">About</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-white">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Mission</h3>
                  <p className="text-neutral-300">Spreading black consciousness and Pan-African unity through education, awareness, and community building. Together we rise! ✊🏿</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Black Consciousness', 'Pan-Africanism', 'Ubuntu Philosophy', 'African History', 'Decolonization', 'Marcus Garvey', 'Steve Biko'].map((interest) => (
                      <Badge key={interest} variant="secondary" className="bg-dark-400 text-neutral-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Navbar />
    </div>
  );
};

export default Profile;
