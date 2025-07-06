
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Stories = () => {
  const [stories] = useState([
    {
      id: 1,
      author: 'Thandi Mthembu',
      username: 'thandi_mthembu',
      hasStory: true,
      isViewed: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      author: 'Sizani Dlamini',
      username: 'sizani_dlamini',
      hasStory: true,
      isViewed: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      author: 'Naledi Khumalo',
      username: 'naledi_khumalo',
      hasStory: true,
      isViewed: false,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      author: 'Bongani Zulu',
      username: 'bongani_zulu',
      hasStory: true,
      isViewed: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      author: 'Zinhle Ndaba',
      username: 'zinhle_ndaba',
      hasStory: true,
      isViewed: true,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]);

  return (
    <div className="mb-4">
      <div className="bg-dark-300 border-neutral-600/20 rounded-lg p-4">
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          {/* Add Your Story */}
          <div className="flex flex-col items-center space-y-2 min-w-[70px]">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-neutral-600">
                <AvatarImage src="/placeholder.svg" alt="Your story" />
                <AvatarFallback className="bg-dark-400 text-white">
                  You
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary hover:bg-primary/90 rounded-full"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-white text-xs text-center truncate w-16">Your story</p>
          </div>

          {/* Stories from other users */}
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-2 min-w-[70px] cursor-pointer">
              <div className="relative">
                <div className={`p-0.5 rounded-full ${
                  story.isViewed 
                    ? 'bg-gradient-to-tr from-neutral-600 to-neutral-500' 
                    : 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500'
                }`}>
                  <Avatar className="w-16 h-16 border-2 border-dark-300">
                    <AvatarImage src={story.avatar} alt={story.author} />
                    <AvatarFallback className="bg-primary text-white">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <p className="text-white text-xs text-center truncate w-16">
                {story.author.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
