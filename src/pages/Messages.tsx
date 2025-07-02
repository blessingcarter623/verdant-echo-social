
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
      name: 'Sipho Mahlangu',
      username: 'sipho_mah',
      lastMessage: 'Did you catch the Springboks game?',
      time: '1h',
      unread: 1,
      online: false
    },
    {
      name: 'Lerato Molefe',
      username: 'lerato_m',
      lastMessage: 'The sunset from Table Mountain was incredible!',
      time: '3h',
      unread: 0,
      online: false
    }
  ];

  const handleChatClick = (index: number) => {
    navigate(`/chat/${index}`);
  };

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-dark-300 border-neutral-600/20">
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
                  onClick={() => handleChatClick(index)}
                  className="p-4 cursor-pointer transition-colors border-b border-neutral-600/20 hover:bg-dark-400"
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
      </main>
      <Navbar />
    </div>
  );
};

export default Messages;
