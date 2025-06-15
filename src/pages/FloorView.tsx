import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Car, Star, Home } from "lucide-react";
import NotFound from "./NotFound";

const towers = {
  'tower-a': { name: 'Tower A - Skyline Residences', gradient: 'from-blue-600 to-purple-600' },
  'tower-b': { name: 'Tower B - Marina Heights', gradient: 'from-teal-600 to-blue-600' },
  'tower-c': { name: 'Tower C - Garden Terraces', gradient: 'from-green-600 to-teal-600' }
};

const apartments = [
  {
    id: 'apt-1',
    unitType: 'Studio Deluxe'
  }
];

const FloorView = () => {
  const { towerId, floorNumber } = useParams();
  const navigate = useNavigate();
  const [hoveredApartment, setHoveredApartment] = useState<string | null>(null);

  const tower = towers[towerId as keyof typeof towers];

  if (!tower) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/tower/${towerId}`)}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white rounded-lg border border-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Floors</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{tower.name}</h1>
              <p className="text-slate-600 text-sm">Floor {floorNumber} - Apartment Layouts</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-15">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Available Units</h2>
          <p className="text-slate-600">Choose from {apartments.length} unique apartment layouts on floor {floorNumber}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              onMouseEnter={() => setHoveredApartment(apartment.id)}
              onMouseLeave={() => setHoveredApartment(null)}
              onClick={() => navigate(`/tower/${towerId}/floor/${floorNumber}/apartment/${apartment.id}`)}
              className="group cursor-pointer relative z-20"
            >
              <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {apartment.unitType}
                    </h3>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg bg-gradient-to-r ${tower.gradient} text-white font-medium text-sm transition-all duration-200 hover:shadow-lg`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Floor {floorNumber} Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500" />
              <div>
                <h4 className="font-semibold text-slate-700">Premium Finishes</h4>
                <p className="text-sm text-slate-600">High-end materials throughout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-semibold text-slate-700">Parking Included</h4>
                <p className="text-sm text-slate-600">Dedicated parking spaces</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 text-green-500" />
              <div>
                <h4 className="font-semibold text-slate-700">Smart Home Ready</h4>
                <p className="text-sm text-slate-600">Pre-wired for automation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FloorView;