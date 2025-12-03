import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Traditional Idli Making',
    thumbnail: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/breakfast.png',
    platform: 'Instagram',
  },
  {
    title: 'Authentic Sambar Recipe',
    thumbnail: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/full-meals.png',
    platform: 'Instagram',
  },
  {
    title: 'Homemade Pickle Process',
    thumbnail: 'https://mocha-cdn.com/019ac9b7-cb6c-7b19-9533-2e037ab9c4f6/pickles.png',
    platform: 'Instagram',
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Making Videos
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Watch how we prepare our delicious pure veg dishes
          </p>
          <a
            href="https://instagram.com/sri_aksshaya_foods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg"
          >
            @sri_aksshaya_foods
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Platform Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                  {video.platform}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/sri_aksshaya_foods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Watch More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
