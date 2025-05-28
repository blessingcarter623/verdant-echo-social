
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed = () => {
  const samplePosts = [
    {
      author: 'Kwame Asante',
      username: 'kwameasante',
      content: "Today marks 47 years since Steve Biko's assassination. His words still echo: 'The most potent weapon in the hands of the oppressor is the mind of the oppressed.' Let's continue the consciousness movement! ✊🏿 #SteveBiko #BlackConsciousness #NeverForget",
      timestamp: '2h',
      likes: 892,
      comments: 156,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'
    },
    {
      author: 'Amina Sankara',
      username: 'aminasankara',
      content: "Reading Thomas Sankara's speeches tonight. 'Our revolution in Burkina Faso draws on the totality of man's experiences since the first breath of humanity.' Africa's true leaders understood Pan-African unity long before it was fashionable. 🌍📚",
      timestamp: '4h',
      likes: 567,
      comments: 89,
      isLiked: true
    },
    {
      author: 'Ubuntu Collective',
      username: 'ubuntucollective',
      content: "Ubuntu teaching moment: 'I am because we are, and since we are, therefore I am.' Our ancestors knew that individualism was foreign to African consciousness. Community over competition, always. Let's decolonize our minds! 🤝🏿 #Ubuntu #AfricanPhilosophy",
      timestamp: '6h',
      likes: 1234,
      comments: 234,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400'
    },
    {
      author: 'Marcus Garvey Jr.',
      username: 'garveylegacy',
      content: "My grandfather said: 'A people without the knowledge of their past history is like a tree without roots.' Today's young Africans must know their true history - not the colonizer's version. Knowledge is power! 📖⚡ #MarcusGarvey #BlackPride #AfricanHistory",
      timestamp: '8h',
      likes: 445,
      comments: 78
    },
    {
      author: 'Nzinga Warrior',
      username: 'nzingawarrior',
      content: "Queen Nzinga fought Portuguese colonizers for 40 years and never surrendered. African women have always been warriors and leaders. Don't let anyone tell you different! Our strength runs deep. 👑⚔️ #QueenNzinga #AfricanQueens #BlackGirlMagic",
      timestamp: '12h',
      likes: 678,
      comments: 123,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-4">
      <CreatePost />
      <Stories />
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
