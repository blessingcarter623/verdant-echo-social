import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare, User, Send } from 'lucide-react';

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
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { author: 'Amara Kone', content: 'This is inspiring! Africa rising! 🌍', timestamp: '1h' },
    { author: 'Kwame Asante', content: 'Great work brother, keep pushing the movement forward!', timestamp: '2h' }
  ]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentsList([
        ...commentsList,
        { author: 'You', content: newComment, timestamp: 'now' }
      ]);
      setNewComment('');
    }
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

      <CardFooter className="pt-0 pb-4 flex-col items-start">
        <div className="flex items-center space-x-6 w-full mb-4">
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
            onClick={handleComment}
            className="text-neutral-400 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-xs">{comments}</span>
          </Button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="w-full space-y-3">
            {/* Existing Comments */}
            {commentsList.map((comment, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-primary text-white text-xs">
                    {comment.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-dark-400 rounded-lg p-2">
                    <p className="text-white text-xs font-medium">{comment.author}</p>
                    <p className="text-neutral-300 text-xs">{comment.content}</p>
                  </div>
                  <p className="text-neutral-500 text-xs mt-1">{comment.timestamp}</p>
                </div>
              </div>
            ))}

            {/* Add Comment Input */}
            <div className="flex items-center space-x-2">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-primary text-white text-xs">
                  You
                </AvatarFallback>
              </Avatar>
              <Input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                className="flex-1 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400 text-xs"
              />
              <Button
                size="sm"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
