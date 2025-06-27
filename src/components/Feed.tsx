
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
      image: 'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?w=600&h=400&fit=crop',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      author: 'Fatima Sankara',
      username: 'fatimasankara',
      content: "Ibrahim Traore is showing the world what true African leadership looks like! 🇧🇫 At 34, he's proving that our youth can lead revolutionary change. Burkina Faso's sovereignty movement is inspiration for all of Africa. No more puppet governments! ✊🏿 #IbrahimTraore #AfricanSovereignty #BurkinaFaso",
      timestamp: '4h',
      likes: 1289,
      comments: 456,
      isLiked: true,
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop'
    },
    {
      author: 'Julius Ndaba',
      username: 'juliusndaba',
      content: "The revolution is not coming, it's here! Captain Traore and the African liberation movements are showing us that we don't need Western approval to govern ourselves. 🔥 Watch this powerful speech that's changing everything!",
      timestamp: '6h',
      likes: 892,
      comments: 234,
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop'
    },
    {
      author: 'Nomsa Dlamini',
      username: 'nomsadlamini',
      content: "Ubuntu philosophy teaches us 'I am because we are' - this is why leaders like Zuma and Traore fight for ALL their people, not just the elite. True African leadership serves the masses, not foreign interests! 🤝 #Ubuntu #AfricanLeadership #PeopleFirst",
      timestamp: '8h',
      likes: 567,
      comments: 189,
      image: 'https://images.unsplash.com/photo-1559717201-fbb671ff56b7?w=600&h=400&fit=crop'
    },
    {
      author: 'Kwame Osei',
      username: 'kwameosei',
      content: "Watching Captain Ibrahim Traore speak truth to power reminds me why Sankara's vision lives on! 'A soldier without political or ideological training is a potential criminal.' These young leaders understand liberation! 🇬🇭🇧🇫 #ThomasSankara #IbrahimTraore #PanAfricanism",
      timestamp: '12h',
      likes: 743,
      comments: 298,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop'
    },
    {
      author: 'Amahle Zulu',
      username: 'amahlezulu',
      content: "From Zuma's defiance of Western imperialism to Traore's expulsion of French forces - Africa is reclaiming her dignity! No more colonial puppet masters. Our resources, our decisions, our future! 💪🏿 #AfricanSovereignty #EndNeocolonialism #AfricaRising",
      timestamp: '1d',
      likes: 1156,
      comments: 378,
      image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69ea?w=600&h=400&fit=crop'
    },
    {
      author: 'Chinwe Okoro',
      username: 'chinweokoro',
      content: "The strength of African women throughout history continues to inspire our liberation movement today! From Queen Nzinga to Winnie Mandela, we stand on the shoulders of giants. 👑 #AfricanWomen #Liberation #Heritage",
      timestamp: '1d',
      likes: 834,
      comments: 201,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
    },
    {
      author: 'Mamadou Diallo',
      username: 'mamadoudiallo',
      content: "Mali's rich cultural heritage reminds us of Africa's golden age before colonial disruption. The libraries of Timbuktu held knowledge that lit the world! 📚✨ Time to reclaim our intellectual sovereignty! #Mali #Timbuktu #AfricanKnowledge",
      timestamp: '2d',
      likes: 612,
      comments: 145,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
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
            videoUrl={post.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
