
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageSquare, UserPlus, Bell } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      type: 'like',
      user: 'Kwame Nkrumah Jr.',
      action: 'liked your post about Marcus Garvey\'s teachings',
      time: '2 minutes ago',
      icon: Heart
    },
    {
      type: 'comment',
      user: 'Amina Sankara',
      action: 'commented on your tribute to Thomas Sankara',
      time: '15 minutes ago',
      icon: MessageSquare
    },
    {
      type: 'follow',
      user: 'Mandela Legacy',
      action: 'started following you',
      time: '1 hour ago',
      icon: UserPlus
    },
    {
      type: 'like',
      user: 'Ubuntu Collective',
      action: 'liked your post about African unity and Ubuntu philosophy',
      time: '3 hours ago',
      icon: Heart
    },
    {
      type: 'comment',
      user: 'Nzinga Warrior',
      action: 'commented on your Queen Nzinga historical post',
      time: '5 hours ago',
      icon: MessageSquare
    },
    {
      type: 'follow',
      user: 'Panafrika Rising',
      action: 'started following you',
      time: '1 day ago',
      icon: UserPlus
    }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-dark-300 border-neutral-600/20">
          <CardHeader>
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Bell className="w-6 h-6 mr-2 text-primary" />
              Notifications
            </h1>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification, index) => {
                const IconComponent = notification.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-dark-400 transition-colors">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'like' ? 'bg-red-500/20 text-red-500' :
                      notification.type === 'comment' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" alt={notification.user} />
                      <AvatarFallback className="bg-primary text-white">
                        {notification.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-white">
                        <span className="font-semibold">{notification.user}</span>{' '}
                        {notification.action}
                      </p>
                      <p className="text-neutral-400 text-sm">{notification.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
      <Navbar />
    </div>
  );
};

export default Notifications;
