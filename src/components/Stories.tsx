
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Plus } from 'lucide-react';

const Stories = () => {
  const [stories] = useState([
    {
      id: 1,
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: 'Just launched our fintech platform! 🚀',
      timestamp: '2h',
      likes: 45,
      replies: 12,
      isLiked: false,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'
    },
    {
      id: 2,
      author: 'David Ochieng',
      username: 'davidochieng',
      content: 'Beautiful sunrise in Nairobi today! 🌅',
      timestamp: '4h',
      likes: 89,
      replies: 23,
      isLiked: true
    },
    {
      id: 3,
      author: 'Amina Hassan',
      username: 'aminahassan',
      content: 'Women in Tech conference was amazing! 💪🏾',
      timestamp: '6h',
      likes: 156,
      replies: 34,
      isLiked: false,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    }
  ]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Stories</h2>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="w-4 h-4 mr-1" />
          Add Story
        </Button>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {stories.map((story) => (
          <Card key={story.id} className="min-w-[280px] bg-dark-300 border-neutral-600/20 cursor-pointer hover:bg-dark-400 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" alt={story.author} />
                  <AvatarFallback className="bg-primary text-white">
                    {story.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold text-sm">{story.author}</p>
                  <p className="text-neutral-400 text-xs">{story.timestamp}</p>
                </div>
              </div>
              
              {story.image && (
                <img 
                  src={story.image} 
                  alt="Story content" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
              )}
              
              <p className="text-white text-sm mb-3">{story.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`p-1 ${story.isLiked ? 'text-red-500' : 'text-neutral-400'} hover:text-red-500`}
                  >
                    <Heart className="w-4 h-4 mr-1" fill={story.isLiked ? 'currentColor' : 'none'} />
                    {story.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary p-1">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {story.replies}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Stories;
