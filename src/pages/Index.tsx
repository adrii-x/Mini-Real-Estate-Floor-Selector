import { useState } from "react";
import { Building, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const towers = [
  {
    id: 'tower-a',
    name: 'Tower A - Skyline Residences',
    description: 'Luxury high-rise with panoramic city views and premium amenities',
    floors: 15,
    totalUnits: 180,
    priceRange: '$350K - $750K',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'tower-b',
    name: 'Tower B - Marina Heights',
    description: 'Waterfront living with stunning marina and ocean views',
    floors: 12,
    totalUnits: 144,
    priceRange: '$425K - $850K',
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    id: 'tower-c',
    name: 'Tower C - Garden Terraces',
    description: 'Urban oasis with private terraces and garden views',
    floors: 10,
    totalUnits: 120,
    priceRange: '$400K - $700K',
    gradient: 'from-green-600 to-teal-600'
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [hoveredTower, setHoveredTower] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
              Premium Residences
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover luxury living in our architecturally stunning towers, each offering unique views and premium amenities
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {towers.map((tower) => (
            <div>
              <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500">
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
                    <div
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;