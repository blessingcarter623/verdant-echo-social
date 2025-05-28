
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed = () => {
  const samplePosts = [
    {
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: "Just launched our new fintech platform connecting rural communities across Nigeria! 🚀 Excited to bridge the digital divide and bring financial services to everyone. #FinTechAfrica #DigitalInclusion",
      timestamp: '2h',
      likes: 45,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'
    },
    {
      author: 'David Ochieng',
      username: 'davidochieng',
      content: "The future of African tech is so bright! 🌍✨ From AI startups in Kenya to blockchain innovations in South Africa, we're building solutions that matter. What's your favorite African tech story this week?",
      timestamp: '4h',
      likes: 89,
      comments: 23,
      isLiked: true
    },
    {
      author: 'Amina Hassan',
      username: 'aminahassan',
      content: "Attending the African Women in Tech conference in Lagos next week! Looking forward to connecting with incredible women who are changing the game. Anyone else going? Let's meet up! 💪🏾 #WomenInTech #Lagos",
      timestamp: '6h',
      likes: 156,
      comments: 34,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400'
    },
    {
      author: 'Joseph Mensah',
      username: 'josephmensah',
      content: "Building sustainable tech solutions in Ghana 🇬🇭 Our solar-powered internet hubs are now serving 50+ communities. Technology should uplift everyone, everywhere! #SustainableTech #Ghana #Innovation",
      timestamp: '8h',
      likes: 203,
      comments: 67
    },
    {
      author: 'Fatou Diallo',
      username: 'fatoudiallo',
      content: "Coding bootcamp graduates just got their first jobs! 🎉 So proud of these amazing developers from Senegal, Mali, and Burkina Faso. The next generation of African developers is here! #CodingBootcamp #AfricanDevelopers",
      timestamp: '12h',
      likes: 78,
      comments: 19,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-4">
      <Stories />
      <CreatePost />
      <div className="space-y-0">
        {samplePosts.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            username={post.username}
            content={post.content}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
            isLiked={post.isLiked}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
