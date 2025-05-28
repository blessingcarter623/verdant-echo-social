
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      type: 'like',
      user: 'Thabo Mokwena',
      action: 'liked your post about the Great Zimbabwe ruins',
      time: '2 minutes ago'
    },
    {
      type: 'comment',
      user: 'Nomsa Dlamini',
      action: 'commented on your post about Ubuntu philosophy',
      time: '15 minutes ago'
    },
    {
      type: 'follow',
      user: 'Kwame Asante',
      action: 'started following you',
      time: '1 hour ago'
    },
    {
      type: 'like',
      user: 'Aisha Kone',
      action: 'liked your post about Marcus Garvey\'s teachings',
      time: '3 hours ago'
    },
    {
      type: 'comment',
      user: 'Sekou Traore',
      action: 'commented on your post about the Mali Empire',
      time: '5 hours ago'
    },
    {
      type: 'like',
      user: 'Amara Diallo',
      action: 'liked your post about African traditional medicine',
      time: '1 day ago'
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
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-dark-400 transition-colors cursor-pointer">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" alt={notification.user} />
                    <AvatarFallback className="bg-primary text-white">
                      {notification.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-white">
                      <span className="font-semibold text-primary">{notification.user}</span>{' '}
                      {notification.action}
                    </p>
                    <p className="text-neutral-400 text-sm">{notification.time}</p>
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

export default Notifications;
