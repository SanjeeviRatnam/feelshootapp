
const softwareApps = [
    {
      id: 1,
      name: 'TaskMaster',
      description: 'A task management app that helps you stay organized and productive.',
      version: '1.2.3',
      category: 'Productivity'
    },
    {
      id: 2,
      name: 'CodeFlow',
      description: 'An integrated development environment (IDE) for web developers.',
      version: '3.0.1',
      category: 'Development'
    },
    {
      id: 3,
      name: 'Foodie',
      description: 'A restaurant discovery app that recommends places based on your tastes.',
      version: '2.5.4',
      category: 'Lifestyle'
    },
    {
      id: 4,
      name: 'PhotoSnap',
      description: 'A photo editing app with powerful filters and effects.',
      version: '4.1.0',
      category: 'Media'
    },
    {
      id: 5,
      name: 'FitTrack',
      description: 'A fitness tracking app to monitor your daily activity and health metrics.',
      version: '1.8.2',
      category: 'Health'
    }
  ];

const SwAppsPage = () => {

	return (
        <div className='container mx-auto'>
          <div className="text-ternary-dark dark:text-primary-light">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Software Apps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8  ">
            {softwareApps.map(app => (
              <div className="bg-white border border-gray-300 rounded-lg mt-5 p-5" key={app.id} >
                <h3><strong>{app.name}</strong></h3>
                <p>Category: {app.category}</p>
                <p>{app.description}</p>
                <p>Version: {app.version}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
    )
}

export default SwAppsPage;

