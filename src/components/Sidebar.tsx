
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

const Sidebar = () => {
  const trendingTopics = [
    { tag: '#VukaAfrica', posts: '12.5K posts' },
    { tag: '#TechInAfrica', posts: '8.2K posts' },
    { tag: '#AfricanStartups', posts: '5.1K posts' },
    { tag: '#DigitalTransformation', posts: '3.8K posts' }
  ];

  const suggestedUsers = [
    { name: 'Amara Johnson', username: 'amaratech', avatar: '/placeholder.svg' },
    { name: 'Kwame Asante', username: 'kwamecodes', avatar: '/placeholder.svg' },
    { name: 'Fatima Al-Rashid', username: 'fatimareads', avatar: '/placeholder.svg' }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="bg-dark-300 border-neutral-600/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">Trending in Africa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="hover:bg-dark-400 p-2 rounded-lg cursor-pointer transition-colors">
              <p className="text-primary font-medium">{topic.tag}</p>
              <p className="text-neutral-400 text-sm">{topic.posts}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Users */}
      <Card className="bg-dark-300 border-neutral-600/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">Who to Follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary text-white">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white text-sm font-medium">{user.name}</p>
                  <p className="text-neutral-400 text-xs">@{user.username}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Community Stats */}
      <Card className="bg-dark-300 border-neutral-600/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">Community Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-neutral-400">Active Users</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary">2.4M</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-400">Posts Today</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary">156K</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-400">Countries</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary">54</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
