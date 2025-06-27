
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Heart, MessageSquare, Share2, Calendar, Clock, Users } from 'lucide-react';
import FloatingNavbar from '@/components/FloatingNavbar';

const Events = () => {
  const [likedEvents, setLikedEvents] = useState<Set<number>>(new Set());

  const events = [
    {
      id: 1,
      title: "African Cultural Festival 2024",
      location: "Cape Town, South Africa",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      attendees: 1234,
      likes: 892,
      comments: 45,
      organizer: "Cultural Heritage Society",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=600&fit=crop",
      description: "Join us for an incredible celebration of African culture with music, dance, food, and art from across the continent."
    },
    {
      id: 2,
      title: "Pan-African Business Summit",
      location: "Lagos, Nigeria",
      date: "Jan 20, 2025",
      time: "9:00 AM",
      attendees: 856,
      likes: 634,
      comments: 28,
      organizer: "AfricaBiz Network",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop",
      description: "Connect with business leaders across Africa and explore opportunities for collaboration and growth."
    },
    {
      id: 3,
      title: "Desert Safari Adventure",
      location: "Sahara Desert, Morocco",
      date: "Feb 10, 2025",
      time: "5:00 AM",
      attendees: 456,
      likes: 1203,
      comments: 67,
      organizer: "Nomad Adventures",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=600&fit=crop",
      description: "Experience the magic of the Sahara with camel rides, traditional music, and stargazing under the desert sky."
    }
  ];

  const handleLike = (eventId: number) => {
    setLikedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <FloatingNavbar />
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800/50 p-4">
        <h1 className="text-2xl font-bold text-center">✨ Events</h1>
      </div>

      {/* Events Feed */}
      <div className="max-w-md mx-auto">
        {events.map((event, index) => (
          <div key={event.id} className="relative h-screen snap-start">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end p-4 pb-8">
              {/* Event Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Avatar className="w-8 h-8 border-2 border-white/20">
                    <AvatarFallback className="bg-primary text-black text-xs">
                      {event.organizer.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white font-medium text-sm">{event.organizer}</span>
                </div>

                <h2 className="text-white text-xl font-bold leading-tight">
                  {event.title}
                </h2>

                <p className="text-white/90 text-sm line-clamp-3">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black/40 text-white border-white/20 backdrop-blur-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    {event.location}
                  </Badge>
                  <Badge className="bg-black/40 text-white border-white/20 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {event.date}
                  </Badge>
                  <Badge className="bg-black/40 text-white border-white/20 backdrop-blur-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {event.time}
                  </Badge>
                  <Badge className="bg-black/40 text-white border-white/20 backdrop-blur-sm">
                    <Users className="w-3 h-3 mr-1" />
                    {event.attendees}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Side Actions */}
            <div className="absolute right-4 bottom-32 flex flex-col space-y-4">
              {/* Like */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-full w-12 h-12 p-0 backdrop-blur-md border ${
                    likedEvents.has(event.id)
                      ? 'bg-red-500/20 border-red-500/50 text-red-400'
                      : 'bg-black/20 border-white/20 text-white hover:bg-white/10'
                  }`}
                  onClick={() => handleLike(event.id)}
                >
                  <Heart 
                    className={`w-6 h-6 ${likedEvents.has(event.id) ? 'fill-current' : ''}`} 
                  />
                </Button>
                <span className="text-white text-xs mt-1 font-medium">
                  {likedEvents.has(event.id) ? event.likes + 1 : event.likes}
                </span>
              </div>

              {/* Comment */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full w-12 h-12 p-0 bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/10"
                >
                  <MessageSquare className="w-6 h-6" />
                </Button>
                <span className="text-white text-xs mt-1 font-medium">{event.comments}</span>
              </div>

              {/* Share */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full w-12 h-12 p-0 bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/10"
                >
                  <Share2 className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
