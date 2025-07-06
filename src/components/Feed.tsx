
import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed = () => {
  const samplePosts = [
    {
      author: 'Thabo Mthembu',
      username: 'thabo_mthembu',
      content: "President Zuma's legacy continues to inspire young South Africans! His fight against economic apartheid and commitment to radical economic transformation shows us the path forward. We must reclaim our land and resources! 🇿🇦 #ZumaLegacy #EconomicFreedom #LandReform",
      timestamp: '2h',
      likes: 342,
      comments: 127,
      image: 'https://images.unsplash.com/photo-1566895291281-68f8282acb5b?w=600&h=400&fit=crop',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      author: 'Nonhlanhla Mabaso',
      username: 'nonhlanhla_mabaso',
      content: "Ibrahim Traore is showing the world what true African leadership looks like! 🇧🇫 At 34, he's proving that our youth can lead revolutionary change. Burkina Faso's sovereignty movement is inspiration for all of Africa. No more puppet governments! ✊🏿 #IbrahimTraore #AfricanSovereignty #BurkinaFaso",
      timestamp: '4h',
      likes: 1289,
      comments: 456,
      isLiked: true,
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop'
    },
    {
      author: 'Siyabonga Ndaba',
      username: 'siyabonga_ndaba',
      content: "The revolution is not coming, it's here! Captain Traore and the African liberation movements are showing us that we don't need Western approval to govern ourselves. 🔥 Watch this powerful speech that's changing everything!",
      timestamp: '6h',
      likes: 892,
      comments: 234,
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      image: 'https://images.unsplash.com/photo-1528151215936-7ee1b5427d7e?w=600&h=400&fit=crop'
    },
    {
      author: 'Nomsa Dlamini',
      username: 'nomsa_dlamini',
      content: "Ubuntu philosophy teaches us 'I am because we are' - this is why leaders like Zuma and Traore fight for ALL their people, not just the elite. True African leadership serves the masses, not foreign interests! 🤝 #Ubuntu #AfricanLeadership #PeopleFirst",
      timestamp: '8h',
      likes: 567,
      comments: 189,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop'
    },
    {
      author: 'Mandla Khumalo',
      username: 'mandla_khumalo',
      content: "Watching Captain Ibrahim Traore speak truth to power reminds me why Sankara's vision lives on! 'A soldier without political or ideological training is a potential criminal.' These young leaders understand liberation! 🇬🇭🇧🇫 #ThomasSankara #IbrahimTraore #PanAfricanism",
      timestamp: '12h',
      likes: 743,
      comments: 298,
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=600&h=400&fit=crop'
    },
    {
      author: 'Thandiwe Zulu',
      username: 'thandiwe_zulu',
      content: "From Zuma's defiance of Western imperialism to Traore's expulsion of French forces - Africa is reclaiming her dignity! No more colonial puppet masters. Our resources, our decisions, our future! 💪🏿 #AfricanSovereignty #EndNeocolonialism #AfricaRising",
      timestamp: '1d',
      likes: 1156,
      comments: 378,
      image: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=600&h=400&fit=crop'
    },
    {
      author: 'Palesa Mogale',
      username: 'palesa_mogale',
      content: "The strength of African women throughout history continues to inspire our liberation movement today! From Queen Nzinga to Winnie Mandela, we stand on the shoulders of giants. 👑 #AfricanWomen #Liberation #Heritage",
      timestamp: '1d',
      likes: 834,
      comments: 201,
      image: 'https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=600&h=400&fit=crop'
    },
    {
      author: 'Lethabo Motsepe',
      username: 'lethabo_motsepe',
      content: "Mali's rich cultural heritage reminds us of Africa's golden age before colonial disruption. The libraries of Timbuktu held knowledge that lit the world! 📚✨ Time to reclaim our intellectual sovereignty! #Mali #Timbuktu #AfricanKnowledge",
      timestamp: '2d',
      likes: 612,
      comments: 145,
      image: 'https://images.unsplash.com/photo-1559045156-d1f4cc2a5d66?w=600&h=400&fit=crop'
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
