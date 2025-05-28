
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'The Great Zimbabwe: Ancient African Civilization',
      excerpt: 'Exploring the magnificent stone city that gave Zimbabwe its name and showcased African architectural prowess.',
      author: 'Dr. Nomsa Mthembu',
      category: 'History',
      readTime: '8 min read',
      publishDate: '2 days ago',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
      featured: true
    },
    {
      title: 'Ubuntu Philosophy: The Heart of African Community',
      excerpt: 'Understanding the profound African philosophy that emphasizes our interconnectedness and shared humanity.',
      author: 'Prof. Kwame Asante',
      category: 'Culture',
      readTime: '6 min read',
      publishDate: '1 week ago',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'
    },
    {
      title: 'Timbuktu: The Golden Age of Learning',
      excerpt: 'How this ancient Mali city became a beacon of knowledge and Islamic scholarship in medieval Africa.',
      author: 'Dr. Aisha Diabaté',
      category: 'History',
      readTime: '10 min read',
      publishDate: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    },
    {
      title: 'Modern African Tech Innovation',
      excerpt: 'From mobile money to agricultural tech, how Africa is leading global innovation in the 21st century.',
      author: 'David Ochieng',
      category: 'Technology',
      readTime: '7 min read',
      publishDate: '3 weeks ago'
    },
    {
      title: 'The Kingdoms of Kush: Rivals to Egypt',
      excerpt: 'Discovering the powerful Nubian kingdoms that once ruled both Sudan and Egypt.',
      author: 'Dr. Fatima Hassan',
      category: 'History',
      readTime: '9 min read',
      publishDate: '1 month ago'
    }
  ];

  const categories = ['All', 'History', 'Culture', 'Technology', 'Politics', 'Arts'];

  return (
    <div className="min-h-screen bg-dark-100 pb-16">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Minimal Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            African Heritage
          </h1>
          <p className="text-neutral-400">Celebrating our rich history and achievements</p>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === 'All' ? 'default' : 'secondary'}
              className={`cursor-pointer whitespace-nowrap ${
                category === 'All' 
                  ? 'bg-primary text-white' 
                  : 'bg-dark-400 text-neutral-300 hover:bg-dark-300'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Article */}
        {articles[0].featured && (
          <Card className="bg-dark-300 border-neutral-600/20 mb-8 cursor-pointer hover:bg-dark-400 transition-colors">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 flex flex-col justify-center">
                  <Badge className="bg-primary text-white w-fit mb-3">Featured</Badge>
                  <h2 className="text-2xl font-bold text-white mb-3">{articles[0].title}</h2>
                  <p className="text-neutral-300 mb-4">{articles[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-neutral-400 text-sm">
                    <div className="flex items-center">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src="/placeholder.svg" alt={articles[0].author} />
                        <AvatarFallback className="bg-primary text-white text-xs">
                          {articles[0].author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {articles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {articles[0].publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                </div>
                {articles[0].image && (
                  <div className="h-64 md:h-auto">
                    <img 
                      src={articles[0].image} 
                      alt={articles[0].title}
                      className="w-full h-full object-cover rounded-r-lg"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="bg-dark-300 border-neutral-600/20 cursor-pointer hover:bg-dark-400 transition-colors">
              {article.image && (
                <div className="h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <Badge variant="secondary" className="bg-dark-400 text-neutral-300 mb-3">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{article.excerpt}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-neutral-400 text-xs">
                    <Avatar className="w-5 h-5 mr-2">
                      <AvatarImage src="/placeholder.svg" alt={article.author} />
                      <AvatarFallback className="bg-primary text-white text-xs">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {article.author}
                  </div>
                  <div className="flex items-center justify-between text-neutral-400 text-xs">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Blog;
