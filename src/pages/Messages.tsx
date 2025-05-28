
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Send, Phone, Video } from 'lucide-react';

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      name: 'Thabo Mokwena',
      username: 'thabo_mk',
      lastMessage: 'Eish, the load shedding is hitting hard today!',
      time: '2m',
      unread: 2,
      online: true
    },
    {
      name: 'Nomsa Dlamini',
      username: 'nomsa_d',
      lastMessage: 'Ready for the braai this weekend? 🔥',
      time: '15m',
      unread: 0,
      online: true
    },
    {
      name: 'Pieter van der Merwe',
      username: 'pieter_vdm',
      lastMessage: 'Did you catch the Springboks game?',
      time: '1h',
      unread: 1,
      online: false
    },
    {
      name: 'Aisha Patel',
      username: 'aisha_p',
      lastMessage: 'The sunset from Table Mountain was incredible!',
      time: '3h',
      unread: 0,
      online: false
    }
  ];

  const currentMessages = [
    { sender: 'Thabo Mokwena', message: 'Howzit! How are you doing?', time: '10:30', isMe: false },
    { sender: 'Me', message: 'Sharp sharp! All good thanks, you?', time: '10:32', isMe: true },
    { sender: 'Thabo Mokwena', message: 'Eish, the load shedding is hitting hard today!', time: '10:35', isMe: false },
    { sender: 'Me', message: 'Ag man, I know! When is it ending?', time: '10:36', isMe: true }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations List */}
          <Card className="bg-dark-300 border-neutral-600/20 md:col-span-1">
            <CardHeader>
              <h2 className="text-lg font-semibold text-white">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedChat(index)}
                    className={`p-4 cursor-pointer transition-colors border-b border-neutral-600/20 ${
                      selectedChat === index ? 'bg-dark-400' : 'hover:bg-dark-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" alt={conversation.name} />
                          <AvatarFallback className="bg-primary text-white">
                            {conversation.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-300"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-semibold text-sm truncate">{conversation.name}</p>
                          <span className="text-neutral-400 text-xs">{conversation.time}</span>
                        </div>
                        <p className="text-neutral-400 text-sm truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge variant="destructive" className="w-5 h-5 text-xs p-0 flex items-center justify-center">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="bg-dark-300 border-neutral-600/20 md:col-span-2 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b border-neutral-600/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" alt={conversations[selectedChat].name} />
                    <AvatarFallback className="bg-primary text-white">
                      {conversations[selectedChat].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-semibold">{conversations[selectedChat].name}</p>
                    <p className="text-neutral-400 text-sm">
                      {conversations[selectedChat].online ? 'Online' : 'Last seen recently'}
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
                {currentMessages.map((msg, index) => (
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
                  className="flex-1 bg-dark-400 border-neutral-600 text-white placeholder-neutral-400"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Messages;
