
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Briefcase, 
  Dumbbell, 
  Users, 
  Plus, 
  BookOpen,
  DollarSign,
  Target,
  Calendar,
  FileText,
  Video,
  CheckSquare,
  PieChart,
  Trophy
} from 'lucide-react';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const groupTypes = [
    {
      id: 'student',
      title: 'Study & Academic Groups',
      icon: GraduationCap,
      color: 'bg-green-600',
      description: 'Transform learning with collaborative study spaces',
      features: ['Shared Timetables', 'Note Sharing', 'Virtual Study Rooms', 'Task Management'],
      examples: ['Law Students SA', 'Tech Bootcamp CT', 'Medical School Joburg']
    },
    {
      id: 'business',
      title: 'Business & Hustle Groups',
      icon: Briefcase,
      color: 'bg-red-600',
      description: 'Build ventures together with startup toolkit',
      features: ['Business Plans', 'Fund Pooling', 'CRM Tools', 'Marketplace Access'],
      examples: ['Township Entrepreneurs', 'Tech Startup Circle', 'Local Traders Network']
    },
    {
      id: 'fitness',
      title: 'Fitness & Wellness Groups',
      icon: Dumbbell,
      color: 'bg-yellow-600',
      description: 'Achieve health goals as a motivated team',
      features: ['Fitness Tracking', 'Progress Logs', 'Challenges', 'Achievement Badges'],
      examples: ['Joburg Run Club', 'Cape Town Gym Warriors', 'Wellness Sisters']
    }
  ];

  const myGroups = [
    {
      name: 'Young Lions Business Circle',
      type: 'business',
      members: 12,
      avatar: '/placeholder.svg',
      lastActivity: '2h ago',
      description: 'Following Julius Malema\'s economic vision for youth empowerment'
    },
    {
      name: 'Burkina Faso Study Group',
      type: 'student',
      members: 8,
      avatar: '/placeholder.svg',
      lastActivity: '5h ago',
      description: 'Learning from Ibrahim Traore\'s revolutionary leadership'
    },
    {
      name: 'Ubuntu Fitness Collective',
      type: 'fitness',
      members: 24,
      avatar: '/placeholder.svg',
      lastActivity: '1d ago',
      description: 'Building strong bodies for a strong Africa'
    }
  ];

  const featuredGroups = [
    {
      name: 'Zuma Youth Leadership',
      type: 'student',
      members: 156,
      avatar: '/placeholder.svg',
      isPublic: true,
      description: 'Learning political strategy and African leadership'
    },
    {
      name: 'Pan-African Entrepreneurs',
      type: 'business',
      members: 89,
      avatar: '/placeholder.svg',
      isPublic: true,
      description: 'Building businesses across the continent'
    },
    {
      name: 'Liberation Movement Fitness',
      type: 'fitness',
      members: 67,
      avatar: '/placeholder.svg',
      isPublic: true,
      description: 'Physical strength for mental liberation'
    }
  ];

  const renderGroupFeatures = (type: string) => {
    const featureIcons = {
      student: [Calendar, FileText, Video, CheckSquare],
      business: [FileText, DollarSign, PieChart, Target],
      fitness: [Target, PieChart, Trophy, CheckSquare]
    };

    const icons = featureIcons[type as keyof typeof featureIcons] || [];
    const groupType = groupTypes.find(g => g.id === type);

    return (
      <div className="grid grid-cols-2 gap-3 mt-4">
        {groupType?.features.map((feature, index) => {
          const IconComponent = icons[index];
          return (
            <div key={feature} className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg">
              {IconComponent && <IconComponent className="w-4 h-4 text-green-400" />}
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black pb-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Groups</h1>
          <p className="text-gray-400">Empowering Africa through purpose-based communities</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          {[
            { id: 'discover', label: 'Discover', icon: Users },
            { id: 'my-groups', label: 'My Groups', icon: Users },
            { id: 'create', label: 'Create Group', icon: Plus }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-4 py-3 font-medium ${
                activeTab === id
                  ? 'text-green-400 border-b-2 border-green-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Discover Tab */}
        {activeTab === 'discover' && (
          <div className="space-y-6">
            {/* Group Types */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Choose Your Purpose</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {groupTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={type.id} className="bg-gray-900 border-gray-700 hover:border-green-400 transition-colors cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg ${type.color}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-white text-lg">{type.title}</CardTitle>
                        </div>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </CardHeader>
                      <CardContent>
                        {renderGroupFeatures(type.id)}
                        <div className="mt-4">
                          <p className="text-gray-500 text-xs mb-2">Popular examples:</p>
                          <div className="flex flex-wrap gap-1">
                            {type.examples.map((example) => (
                              <Badge key={example} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Featured Groups */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Featured Groups</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredGroups.map((group, index) => {
                  const groupType = groupTypes.find(t => t.id === group.type);
                  const IconComponent = groupType?.icon || Users;
                  
                  return (
                    <Card key={index} className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={group.avatar} alt={group.name} />
                            <AvatarFallback className="bg-green-600 text-white">
                              <IconComponent className="w-6 h-6" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-white">{group.name}</h3>
                              {group.isPublic && (
                                <Badge className="bg-green-600 text-white">Public</Badge>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{group.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 text-sm">{group.members} members</span>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                Join Group
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* My Groups Tab */}
        {activeTab === 'my-groups' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Your Groups</h2>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </div>
            
            {myGroups.map((group, index) => {
              const groupType = groupTypes.find(t => t.id === group.type);
              const IconComponent = groupType?.icon || Users;
              
              return (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={group.avatar} alt={group.name} />
                        <AvatarFallback className={`${groupType?.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-white">{group.name}</h3>
                          <Badge className={`${groupType?.color} text-white`}>
                            {groupType?.title.split(' ')[0]}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{group.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{group.members} members</span>
                          <span className="text-gray-500">Active {group.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Create Group Tab */}
        {activeTab === 'create' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Create a New Group</h2>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Group Purpose</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {groupTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <div key={type.id} className="p-4 border border-gray-700 rounded-lg cursor-pointer hover:border-green-400 transition-colors">
                            <div className="text-center">
                              <div className={`inline-flex p-3 rounded-lg ${type.color} mb-2`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-white font-medium text-sm">{type.title}</h3>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Continue Setup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Navbar />
    </div>
  );
};

export default Groups;
