import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const towers = {
  'tower-a': { name: 'Tower A - Skyline Residences', gradient: 'from-blue-600 to-purple-600' },
  'tower-b': { name: 'Tower B - Marina Heights', gradient: 'from-teal-600 to-blue-600' },
  'tower-c': { name: 'Tower C - Garden Terraces', gradient: 'from-green-600 to-teal-600' }
};




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

    </div>
  );
};

export default FloorView;