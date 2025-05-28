
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed = () => {
  const samplePosts = [
    {
      author: 'Kemi Adebayo',
      username: 'kemiadebayo',
      content: "Today marks the anniversary of the Organization of African Unity! 🌍 Founded in 1963, it laid the foundation for African unity and independence. From Addis Ababa to the African Union today, our ancestors' dream of a united Africa lives on! #OAU #AfricanUnity #PanAfricanism",
      timestamp: '2h',
      likes: 189,
      comments: 47,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    },
    {
      author: 'David Ochieng',
      username: 'davidochieng',
      content: "Reading Frantz Fanon's 'The Wretched of the Earth' again and it hits different every time. 📚 His analysis of decolonization is as relevant today as it was in the 1960s. Mental decolonization is the first step to true freedom! ✊🏿 #FrantzFanon #Decolonization #BlackConsciousness",
      timestamp: '4h',
      likes: 256,
      comments: 73,
      isLiked: true
    },
    {
      author: 'Amina Hassan',
      username: 'aminahassan',
      content: "Visiting the ancient pyramids of Meroë in Sudan 🏺 Reminder that Egypt wasn't the only African civilization with pyramids! The Kingdom of Kush built these magnificent structures, proving African excellence spans the entire continent. Our history is vast and glorious! #Kush #Sudan #AfricanHistory",
      timestamp: '6h',
      likes: 342,
      comments: 89,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73600?w=400'
    },
    {
      author: 'Joseph Mensah',
      username: 'josephmensah',
      content: "Ubuntu philosophy in action! 🤝 'I am because we are' - this ancient African wisdom teaches us that our humanity is interconnected. In a world of individualism, Ubuntu reminds us that community and collective responsibility are our strength. #Ubuntu #AfricanPhilosophy #Community",
      timestamp: '8h',
      likes: 278,
      comments: 91
    },
    {
      author: 'Fatou Diallo',
      username: 'fatoudiallo',
      content: "Celebrating the legacy of Queen Nzinga of Angola! 👑 For 40 years, she resisted Portuguese colonization, proving that African women have always been fierce leaders and warriors. Her tactical brilliance and diplomacy inspire us today. #QueenNzinga #AfricanQueens #WomenWarriors",
      timestamp: '12h',
      likes: 425,
      comments: 156,
      image: 'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?w=400'
    },
    {
      author: 'Sekou Traore',
      username: 'sekoutraore',
      content: "The wealth of the Mali Empire under Mansa Musa made him the richest person in history! 💰 His pilgrimage to Mecca in 1324 was so lavish that it caused inflation in Egypt for a decade. Africa has always been rich - colonialism just tried to make us forget. #MansaMusa #MaliEmpire #AfricanWealth",
      timestamp: '1d',
      likes: 389,
      comments: 127
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
