import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Users, Eye } from "lucide-react";
import NotFound from "./NotFound";

const towers = {
  'tower-a': {
    id: 'tower-a',
    name: 'Tower A - Skyline Residences',
    description: 'Luxury high-rise with panoramic city views and premium amenities',
    floors: 15,
    gradient: 'from-blue-600 to-purple-600'
  },
  'tower-b': {
    id: 'tower-b',
    name: 'Tower B - Marina Heights',
    description: 'Waterfront living with stunning marina and ocean views',
    floors: 12,
    gradient: 'from-teal-600 to-blue-600'
  },
  'tower-c': {
    id: 'tower-c',
    name: 'Tower C - Garden Terraces',
    description: 'Urban oasis with private terraces and garden views',
    floors: 10,
    gradient: 'from-green-600 to-teal-600'
  }
};

const TowerView = () => {
  const { towerId } = useParams();
  const navigate = useNavigate();
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
  
  const tower = towers[towerId as keyof typeof towers];
  
  if (!tower) {
    return <NotFound />;
  }

  const floors = Array.from({ length: tower.floors }, (_, i) => ({
    number: tower.floors - i,
    units: Math.floor(Math.random() * 4) + 8,
    available: Math.floor(Math.random() * 5) + 2,
    view: i < 5 ? 'Premium View' : i < 10 ? 'City View' : 'Garden View'
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.6
      }
    }
  };

  const floorVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white rounded-lg border border-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Towers</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{tower.name}</h1>
              <p className="text-slate-600 text-sm">{tower.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Select a Floor</h2>
          <p className="text-slate-600">Choose from {tower.floors} floors of luxury living</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {floors.map((floor) => (
            <motion.div
              key={floor.number}
              variants={floorVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              onHoverStart={() => setHoveredFloor(floor.number)}
              onHoverEnd={() => setHoveredFloor(null)}
              onClick={() => navigate(`/tower/${towerId}/floor/${floor.number}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Floor Number Badge */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${tower.gradient} text-white flex items-center justify-center rounded-bl-xl`}>
                  <span className="text-lg font-bold">{floor.number}</span>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      Floor {floor.number}
                    </h3>
                    <p className="text-sm text-slate-600">{floor.view}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="text-sm font-semibold text-slate-700">{floor.units}</div>
                        <div className="text-xs text-slate-500">Total Units</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <div>
                        <div className="text-sm font-semibold text-green-600">{floor.available}</div>
                        <div className="text-xs text-slate-500">Available</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-600 font-medium">{floor.view}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 rounded-lg bg-gradient-to-r ${tower.gradient} text-white font-medium text-sm transition-all duration-200 hover:shadow-lg`}
                  >
                    View Apartments
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredFloor === floor.number ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6">Tower Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">{tower.floors}</div>
              <div className="text-sm text-slate-600">Total Floors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">{floors.reduce((acc, floor) => acc + floor.units, 0)}</div>
              <div className="text-sm text-slate-600">Total Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{floors.reduce((acc, floor) => acc + floor.available, 0)}</div>
              <div className="text-sm text-slate-600">Available Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-slate-600">Occupancy Rate</div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TowerView;
