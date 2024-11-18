
// const entertainmentApps = [
//     {
//         id: 1,
//         name: 'Netflix',
//         description: 'Stream movies, TV shows, and documentaries.',
//         category: 'Streaming',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Netflix-logo.png',
//         link: 'https://www.netflix.com',
//       },
//       {
//         id: 2,
//         name: 'Spotify',
//         description: 'Listen to music, podcasts, and more.',
//         category: 'Music',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
//         link: 'https://www.spotify.com',
//       },
//       {
//         id: 3,
//         name: 'YouTube',
//         description: 'Watch and share videos online.',
//         category: 'Video Streaming',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
//         link: 'https://www.youtube.com',
//       },
//       {
//         id: 4,
//         name: 'Twitch',
//         description: 'Live streaming platform for gamers.',
//         category: 'Gaming',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitch_Icon_2019.jpg',
//         link: 'https://www.twitch.tv',
//       },
//       {
//         id: 5,
//         name: 'Disney+',
//         description: 'Stream Disney movies, shows, and originals.',
//         category: 'Streaming',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Disney%2B_Logo_2021.png',
//         link: 'https://www.disneyplus.com',
//       },
//       {
//         id: 6,
//         name: 'HBO Max',
//         description: 'Watch movies, shows, and HBO originals.',
//         category: 'Streaming',
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/HBO_Max_logo_2020.svg',
//         link: 'https://www.hbomax.com',
//       },
//     ]

// const EntertainmentApps = () => {

// 	return (
//         <div className='container mx-auto'>
//             <div className="text-center text-ternary-dark dark:text-primary-light">Entertainment Apps Page</div>
//         </div>
//     )
// }

// export default EntertainmentApps;
import { Link } from 'react-router-dom';
import React from 'react';

const entertainmentApps = [
    {
      name: 'Netflix',
      description: 'Watch the latest movies and TV shows.',
      imageUrl: 'https://via.placeholder.com/150/FF5733/ffffff?text=Netflix',
      url: 'https://www.netflix.com/',
    },
    {
      name: 'Spotify',
      description: 'Stream music from your favorite artists.',
      imageUrl: 'https://via.placeholder.com/150/1DB954/ffffff?text=Spotify',
      url: 'https://open.spotify.com/',
    },
    {
      name: 'Disney+',
      description: 'Enjoy movies and shows from Disney, Pixar, Marvel, and more.',
      imageUrl: 'https://via.placeholder.com/150/0063B1/ffffff?text=Disney+',
      url: 'https://www.hotstar.com/',
    },
    {
      name: 'HBO Max',
      description: 'Stream your favorite HBO series and movies.',
      imageUrl: 'https://via.placeholder.com/150/00A3E0/ffffff?text=HBO+Max',
      url: 'https://www.hbomax.com/',
    },
    {
      name: 'Prime Video',
      description: 'Watch thousands of movies and TV shows.',
      imageUrl: 'https://via.placeholder.com/150/FF9900/ffffff?text=Prime+Video',
      url: 'https://www.primevideo.com/',
    },
    {
      name: 'YouTube',
      description: 'Watch videos, music, and more.',
      imageUrl: 'https://via.placeholder.com/150/FF0000/ffffff?text=YouTube',
      url: 'https://www.youtube.com/',
    },
  ];

const EntertainmentApps = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-ternary-dark dark:text-primary-light">
        <h2 className="text-4xl text-center font-semibold text-yellow-500">Featured Entertainment</h2>
        

      {/* Entertainment Apps Grid */}
      <section className="py-12">
        <h3 className="text-3xl text-center text-yellow-500 mt-10 mb-8">Popular Apps</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6">
          {entertainmentApps.map((app, index) => (
            <Link to={app.url} target="_blank">
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300 ease-in-out">
              <img
                src={app.imageUrl}
                alt={app.name}
                className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
              />
              <h4 className="text-xl font-semibold">{app.name}</h4>
              <p className="mt-2">{app.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default EntertainmentApps;
