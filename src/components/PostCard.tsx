import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare, User, Send, MoreHorizontal, Play, Pause } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies: Comment[];
}

interface PostCardProps {
  author: string;
  username: string;
  avatar?: string;
  content: string;
  image?: string;
  videoUrl?: string;
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
  videoUrl,
  timestamp,
  likes,
  comments,
  isLiked = false
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [commentsList, setCommentsList] = useState<Comment[]>([
    { 
      id: 1,
      author: 'Amara Kone', 
      content: 'This is so inspiring! Our ancestors\' wisdom guides us. Africa rising! 🌍✊🏿', 
      timestamp: '1h',
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 2,
          author: 'Kofi Mensah',
          content: 'Ubuntu philosophy at its finest! "I am because we are"',
          timestamp: '45m',
          likes: 5,
          isLiked: true,
          replies: []
        }
      ]
    },
    { 
      id: 3,
      author: 'Kwame Asante', 
      content: 'Great work sister! We must continue to educate our people about our rich heritage. The motherland calls! 🇬🇭🇳🇬🇰🇪', 
      timestamp: '2h',
      likes: 8,
      isLiked: false,
      replies: []
    }
  ]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleVideoToggle = () => {
    const video = document.getElementById(`video-${username}-${timestamp}`) as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        author: 'You',
        content: newComment,
        timestamp: 'now',
        likes: 0,
        isLiked: false,
        replies: []
      };
      setCommentsList([...commentsList, newCommentObj]);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId: number) => {
    setCommentsList(prevComments => 
      prevComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          };
        }
        return {
          ...comment,
          replies: comment.replies.map(reply => {
            if (reply.id === commentId) {
              return {
                ...reply,
                isLiked: !reply.isLiked,
                likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
              };
            }
            return reply;
          })
        };
      })
    );
  };

  const handleReplyToComment = (commentId: number) => {
    if (replyContent.trim()) {
      const newReply: Comment = {
        id: Date.now(),
        author: 'You',
        content: replyContent,
        timestamp: 'now',
        likes: 0,
        isLiked: false,
        replies: []
      };

      setCommentsList(prevComments =>
        prevComments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReply]
            };
          }
          return comment;
        })
      );
      setReplyContent('');
      setReplyingTo(null);
    }
  };

  const CommentComponent: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`flex items-start space-x-2 ${isReply ? 'ml-8 mt-2' : ''}`}>
      <Avatar className="w-6 h-6">
        <AvatarFallback className="bg-primary text-black text-xs">
          {comment.author[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-dark-400 rounded-lg p-2">
          <p className="text-white text-xs font-medium">{comment.author}</p>
          <p className="text-neutral-300 text-xs">{comment.content}</p>
        </div>
        <div className="flex items-center space-x-4 mt-1">
          <p className="text-neutral-500 text-xs">{comment.timestamp}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLikeComment(comment.id)}
            className={`text-xs p-0 h-auto ${comment.isLiked ? 'text-red-500' : 'text-neutral-500'} hover:text-red-500`}
          >
            <Heart className={`w-3 h-3 mr-1 ${comment.isLiked ? 'fill-current' : ''}`} />
            {comment.likes > 0 && comment.likes}
          </Button>
          {!isReply && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="text-xs p-0 h-auto text-neutral-500 hover:text-primary"
            >
              Reply
            </Button>
          )}
        </div>
        
        {replyingTo === comment.id && (
          <div className="flex items-center space-x-2 mt-2">
            <Avatar className="w-5 h-5">
              <AvatarFallback className="bg-primary text-black text-xs">
                You
              </AvatarFallback>
            </Avatar>
            <Input
              type="text"
              placeholder={`Reply to ${comment.author}...`}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleReplyToComment(comment.id)}
              className="flex-1 bg-dark-300 border-neutral-600 text-white placeholder-neutral-400 text-xs h-8"
            />
            <Button
              size="sm"
              onClick={() => handleReplyToComment(comment.id)}
              disabled={!replyContent.trim()}
              className="bg-primary hover:bg-primary/90 text-black disabled:opacity-50 h-8 px-2"
            >
              <Send className="w-3 h-3" />
            </Button>
          </div>
        )}

        {comment.replies.map((reply) => (
          <CommentComponent key={reply.id} comment={reply} isReply={true} />
        ))}
      </div>
    </div>
  );

  return (
    <Card className="bg-dark-300 border-neutral-600/20 mb-6 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary text-black">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">{author}</h4>
            <p className="text-neutral-400 text-xs">@{username} · {timestamp}</p>
          </div>
          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-white text-sm leading-relaxed mb-3">{content}</p>
        
        {videoUrl && (
          <div className="relative rounded-lg overflow-hidden mb-3">
            <video
              id={`video-${username}-${timestamp}`}
              className="w-full h-auto max-h-96 object-cover"
              poster={image}
              controls={false}
              onClick={handleVideoToggle}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
              onClick={handleVideoToggle}
            >
              {isVideoPlaying ? (
                <Pause className="w-16 h-16 text-white drop-shadow-lg" />
              ) : (
                <Play className="w-16 h-16 text-white drop-shadow-lg" />
              )}
            </div>
          </div>
        )}
        
        {image && !videoUrl && (
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
            <Heart className={`w-5 h-5 mr-2 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likeCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleComment}
            className="text-neutral-400 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{comments}</span>
          </Button>
        </div>

        {showComments && (
          <div className="w-full space-y-3">
            {commentsList.map((comment) => (
              <CommentComponent key={comment.id} comment={comment} />
            ))}

            <div className="flex items-center space-x-2 pt-2 border-t border-neutral-600/20">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-primary text-black text-xs">
                  You
                </AvatarFallback>
              </Avatar>
              <Input
                type="text"
                placeholder="Share your thoughts on African heritage..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                className="flex-1 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400 text-xs"
              />
              <Button
                size="sm"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-primary hover:bg-primary/90 text-black disabled:opacity-50"
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
