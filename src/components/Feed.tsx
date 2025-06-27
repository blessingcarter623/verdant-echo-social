
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed = () => {
  const samplePosts = [
    {
      author: 'Thabo Mthembu',
      username: 'thabomthembu',
      content: "President Zuma's legacy continues to inspire young South Africans! His fight against economic apartheid and commitment to radical economic transformation shows us the path forward. We must reclaim our land and resources! 🇿🇦 #ZumaLegacy #EconomicFreedom #LandReform",
      timestamp: '2h',
      likes: 342,
      comments: 127,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    },
    {
      author: 'Fatima Sankara',
      username: 'fatimasankara',
      content: "Ibrahim Traore is showing the world what true African leadership looks like! 🇧🇫 At 34, he's proving that our youth can lead revolutionary change. Burkina Faso's sovereignty movement is inspiration for all of Africa. No more puppet governments! ✊🏿 #IbrahimTraore #AfricanSovereignty #BurkinaFaso",
      timestamp: '4h',
      likes: 1289,
      comments: 456,
      isLiked: true,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73600?w=400'
    },
    {
      author: 'Julius Ndaba',
      username: 'juliusndaba',
      content: "The revolution is not coming, it's here! Captain Traore and the African liberation movements are showing us that we don't need Western approval to govern ourselves. From Burkina Faso to South Africa, the youth are rising! 🔥 #AfricanRevolution #YouthPower #Liberation",
      timestamp: '6h',
      likes: 892,
      comments: 234,
      image: 'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?w=400'
    },
    {
      author: 'Nomsa Dlamini',
      username: 'nomsadlamini',
      content: "Ubuntu philosophy teaches us 'I am because we are' - this is why leaders like Zuma and Traore fight for ALL their people, not just the elite. True African leadership serves the masses, not foreign interests! 🤝 #Ubuntu #AfricanLeadership #PeopleFirst",
      timestamp: '8h',
      likes: 567,
      comments: 189
    },
    {
      author: 'Kwame Osei',
      username: 'kwameosei',
      content: "Watching Captain Ibrahim Traore speak truth to power reminds me why Sankara's vision lives on! 'A soldier without political or ideological training is a potential criminal.' These young leaders understand liberation! 🇬🇭🇧🇫 #ThomasSankara #IbrahimTraore #PanAfricanism",
      timestamp: '12h',
      likes: 743,
      comments: 298,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    },
    {
      author: 'Amahle Zulu',
      username: 'amahlezulu',
      content: "From Zuma's defiance of Western imperialism to Traore's expulsion of French forces - Africa is reclaiming her dignity! No more colonial puppet masters. Our resources, our decisions, our future! 💪🏿 #AfricanSovereignty #EndNeocolonialism #AfricaRising",
      timestamp: '1d',
      likes: 1156,
      comments: 378
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
