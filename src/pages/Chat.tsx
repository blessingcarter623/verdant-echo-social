
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Send, Phone, Video } from 'lucide-react';

const Chat = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');

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
    { sender: currentChat.name, message: 'Howzit! How are you doing?', time: '10:30', isMe: false },
    { sender: 'Me', message: 'Sharp sharp! All good thanks, you?', time: '10:32', isMe: true },
    { sender: currentChat.name, message: 'Eish, the load shedding is hitting hard today!', time: '10:35', isMe: false },
    { sender: 'Me', message: 'Ag man, I know! When is it ending?', time: '10:36', isMe: true },
    { sender: currentChat.name, message: 'Not sure hey, but we make a plan as always! 😄', time: '10:38', isMe: false }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

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
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-primary">
                  <Video className="w-4 h-4" />
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
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400"
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-white"
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
