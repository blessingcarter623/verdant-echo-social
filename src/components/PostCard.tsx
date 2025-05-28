
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, MessageSquare, User } from 'lucide-react';

interface PostCardProps {
  author: string;
  username: string;
  avatar?: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  username,
  avatar,
  content,
  image,
  timestamp,
  likes,
  comments,
  isLiked = false
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="bg-dark-300 border-neutral-600/20 mb-6 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary text-white">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">{author}</h4>
            <p className="text-neutral-400 text-xs">@{username} · {timestamp}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-white text-sm leading-relaxed mb-3">{content}</p>
        {image && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Post content"
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <div className="flex items-center space-x-6 w-full">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`text-neutral-400 hover:text-red-500 hover:bg-red-500/10 transition-colors ${
              liked ? 'text-red-500' : ''
            }`}
          >
            <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
            <span className="text-xs">{likeCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-neutral-400 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-xs">{comments}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
