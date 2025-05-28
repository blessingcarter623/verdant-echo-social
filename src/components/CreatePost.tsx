
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, User } from 'lucide-react';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    
    console.log('Creating post:', postContent);
    setPostContent('');
  };

  return (
    <Card className="bg-dark-300 border-neutral-600/20 mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" alt="Your avatar" />
            <AvatarFallback className="bg-primary text-white">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="text-white font-medium">What's happening?</h4>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Share your thoughts with the community..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="bg-dark-100 border-neutral-600 text-white placeholder-neutral-400 resize-none min-h-[100px] focus:border-primary"
          />
          
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-neutral-400 hover:text-primary hover:bg-primary/10"
            >
              <Camera className="w-4 h-4 mr-2" />
              Photo/Video
            </Button>
            
            <Button
              type="submit"
              disabled={!postContent.trim()}
              className="bg-primary hover:bg-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
