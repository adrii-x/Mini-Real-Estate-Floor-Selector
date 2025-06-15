import { useState } from "react";
import { motion } from "framer-motion";
import { Building, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const towers = [
  {
    id: 'tower-a',
    name: 'Tower A - Skyline Residences',
    description: 'Luxury high-rise with panoramic city views and premium amenities',
    floors: 15,
    totalUnits: 180,
    priceRange: '$350K - $750K',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'tower-b',
    name: 'Tower B - Marina Heights',
    description: 'Waterfront living with stunning marina and ocean views',
    floors: 12,
    totalUnits: 144,
    priceRange: '$425K - $850K',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    id: 'tower-c',
    name: 'Tower C - Garden Terraces',
    description: 'Urban oasis with private terraces and garden views',
    floors: 10,
    totalUnits: 120,
    priceRange: '$400K - $700K',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
    gradient: 'from-green-600 to-teal-600'
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [hoveredTower, setHoveredTower] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
              Premium Residences
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover luxury living in our architecturally stunning towers, each offering unique views and premium amenities
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {towers.map((tower) => (
            <motion.div
              key={tower.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredTower(tower.id)}
              onHoverEnd={() => setHoveredTower(null)}
              onClick={() => navigate(`/tower/${tower.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tower.gradient} opacity-90`}></div>
                  <img
                    src={tower.image}
                    alt={tower.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-slate-800">Premium</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {tower.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {tower.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{tower.floors} Floors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{tower.totalUnits} Units</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-800">{tower.priceRange}</span>
                    <motion.div
                      animate={{ x: hoveredTower === tower.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTower === tower.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Choose Our Residences?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Premium Location</h3>
                <p className="text-slate-600 text-sm">Prime urban location with easy access to business districts and entertainment</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Modern Amenities</h3>
                <p className="text-slate-600 text-sm">State-of-the-art facilities including gym, pool, and concierge services</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Smart Living</h3>
                <p className="text-slate-600 text-sm">Integrated smart home technology and sustainable design features</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;