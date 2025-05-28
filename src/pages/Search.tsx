
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search as SearchIcon, TrendingUp, User, MapPin } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingTopics = [
    { hashtag: '#LoadShedding', posts: '12.5k posts' },
    { hashtag: '#Braai', posts: '8.2k posts' },
    { hashtag: '#Springboks', posts: '15.3k posts' },
    { hashtag: '#CapeTown', posts: '6.8k posts' },
    { hashtag: '#Johannesburg', posts: '9.1k posts' },
    { hashtag: '#Heritage', posts: '4.7k posts' }
  ];

  const suggestedUsers = [
    { name: 'Thabo Mokwena', username: 'thabo_mk', location: 'Johannesburg' },
    { name: 'Nomsa Dlamini', username: 'nomsa_d', location: 'Durban' },
    { name: 'Pieter van der Merwe', username: 'pieter_vdm', location: 'Cape Town' },
    { name: 'Aisha Patel', username: 'aisha_p', location: 'Pretoria' }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-4">Discover South Africa</h1>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for people, posts, or places across Mzansi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-dark-300 border-neutral-600 text-white placeholder-neutral-400 focus:border-primary h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trending in South Africa */}
          <Card className="bg-dark-300 border-neutral-600/20">
            <CardHeader>
              <h2 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Trending in Mzansi
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-dark-400 cursor-pointer transition-colors">
                    <div>
                      <p className="text-primary font-semibold">{topic.hashtag}</p>
                      <p className="text-neutral-400 text-sm">{topic.posts}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested People */}
          <Card className="bg-dark-300 border-neutral-600/20">
            <CardHeader>
              <h2 className="text-lg font-semibold text-white flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                People to Follow
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestedUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-dark-400 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder.svg" alt={user.name} />
                        <AvatarFallback className="bg-primary text-white">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-semibold text-sm">{user.name}</p>
                        <p className="text-neutral-400 text-xs">@{user.username}</p>
                        <p className="text-neutral-500 text-xs flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {user.location}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Search;
