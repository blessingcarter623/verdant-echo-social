
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Send, Phone, Video, PhoneCall, VideoIcon, Mic, MicOff } from 'lucide-react';

const Chat = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const [isInCall, setIsInCall] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const conversations = [
    {
      name: 'Thabo Mokwena',
      username: 'thabo_mk',
      online: true
    },
    {
      name: 'Nomsa Dlamini',
      username: 'nomsa_d',
      online: true
    },
    {
      name: 'Pieter van der Merwe',
      username: 'pieter_vdm',
      online: false
    },
    {
      name: 'Aisha Patel',
      username: 'aisha_p',
      online: false
    }
  ];

  const currentChat = conversations[parseInt(chatId || '0')] || conversations[0];

  const messages = [
    { sender: currentChat.name, message: 'Sanibonani! How are you doing, my African brother/sister?', time: '10:30', isMe: false },
    { sender: 'Me', message: 'Sawubona! All good thanks, celebrating our heritage today! You?', time: '10:32', isMe: true },
    { sender: currentChat.name, message: 'Beautiful! I was just reading about Shaka Zulu\'s military innovations. Such tactical genius!', time: '10:35', isMe: false },
    { sender: 'Me', message: 'Yes! Our ancestors were brilliant strategists. We have so much to be proud of! 👑', time: '10:36', isMe: true },
    { sender: currentChat.name, message: 'Absolutely! Ubuntu philosophy guides everything I do. "I am because we are" 🌍✊🏿', time: '10:38', isMe: false }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const startVoiceCall = () => {
    setIsInCall(true);
    setIsVideoCall(false);
    console.log('Starting voice call with', currentChat.name);
  };

  const startVideoCall = () => {
    setIsInCall(true);
    setIsVideoCall(true);
    console.log('Starting video call with', currentChat.name);
  };

  const endCall = () => {
    setIsInCall(false);
    setIsVideoCall(false);
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (isInCall) {
    return (
      <div className="min-h-screen bg-dark-100 pb-16">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Card className="bg-dark-300 border-neutral-600/20 h-[calc(100vh-8rem)] flex flex-col">
            <CardHeader className="border-b border-neutral-600/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" alt={currentChat.name} />
                    <AvatarFallback className="bg-primary text-white">
                      {currentChat.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-semibold">{currentChat.name}</p>
                    <p className="text-primary text-sm">
                      {isVideoCall ? 'Video calling...' : 'Voice calling...'}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-8">
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src="/placeholder.svg" alt={currentChat.name} />
                    <AvatarFallback className="bg-primary text-white text-4xl">
                      {currentChat.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isVideoCall && (
                    <div className="absolute inset-0 bg-dark-400 rounded-full flex items-center justify-center">
                      <VideoIcon className="w-16 h-16 text-primary" />
                    </div>
                  )}
                </div>
                <h2 className="text-white text-2xl font-semibold mb-2">{currentChat.name}</h2>
                <p className="text-neutral-400 mb-8">
                  {isVideoCall ? 'Video call in progress' : 'Voice call in progress'}
                </p>

                <div className="flex justify-center space-x-6">
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={toggleMute}
                    className={`w-16 h-16 rounded-full ${
                      isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-dark-400 hover:bg-dark-500'
                    }`}
                  >
                    {isMuted ? (
                      <MicOff className="w-6 h-6 text-white" />
                    ) : (
                      <Mic className="w-6 h-6 text-white" />
                    )}
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="lg"
                    onClick={endCall}
                    className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600"
                  >
                    <PhoneCall className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <Navbar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-dark-300 border-neutral-600/20 h-[calc(100vh-8rem)] flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-neutral-600/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate('/messages')}
                  className="text-neutral-400 hover:text-primary p-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" alt={currentChat.name} />
                  <AvatarFallback className="bg-primary text-white">
                    {currentChat.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">{currentChat.name}</p>
                  <p className="text-neutral-400 text-sm">
                    {currentChat.online ? 'Online' : 'Last seen recently'}
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-400 hover:text-primary p-3 rounded-full bg-dark-400 hover:bg-primary/10"
                  onClick={startVoiceCall}
                >
                  <Phone className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-400 hover:text-primary p-3 rounded-full bg-dark-400 hover:bg-primary/10"
                  onClick={startVideoCall}
                >
                  <Video className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isMe 
                      ? 'bg-primary text-white' 
                      : 'bg-dark-400 text-white'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.isMe ? 'text-green-100' : 'text-neutral-400'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t border-neutral-600/20 p-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Share your thoughts on African unity..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400"
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-white px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
      <Navbar />
    </div>
  );
};

export default Chat;
