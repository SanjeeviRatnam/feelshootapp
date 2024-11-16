
const entertainmentApps = [
    {
        id: 1,
        name: 'Netflix',
        description: 'Stream movies, TV shows, and documentaries.',
        category: 'Streaming',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Netflix-logo.png',
        link: 'https://www.netflix.com',
      },
      {
        id: 2,
        name: 'Spotify',
        description: 'Listen to music, podcasts, and more.',
        category: 'Music',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
        link: 'https://www.spotify.com',
      },
      {
        id: 3,
        name: 'YouTube',
        description: 'Watch and share videos online.',
        category: 'Video Streaming',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
        link: 'https://www.youtube.com',
      },
      {
        id: 4,
        name: 'Twitch',
        description: 'Live streaming platform for gamers.',
        category: 'Gaming',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitch_Icon_2019.jpg',
        link: 'https://www.twitch.tv',
      },
      {
        id: 5,
        name: 'Disney+',
        description: 'Stream Disney movies, shows, and originals.',
        category: 'Streaming',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Disney%2B_Logo_2021.png',
        link: 'https://www.disneyplus.com',
      },
      {
        id: 6,
        name: 'HBO Max',
        description: 'Watch movies, shows, and HBO originals.',
        category: 'Streaming',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/HBO_Max_logo_2020.svg',
        link: 'https://www.hbomax.com',
      },
    ]

const EntertainmentApps = () => {

	return (
        <div className='container mx-auto'>
            <div className="text-center text-ternary-dark dark:text-primary-light">Entertainment Apps Page</div>
        </div>
    )
}

export default EntertainmentApps;