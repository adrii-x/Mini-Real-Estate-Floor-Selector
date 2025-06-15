import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Home, Maximize, Bath, Car, Star } from "lucide-react";
import NotFound from "./NotFound";

const towers = {
  'tower-a': { name: 'Tower A - Skyline Residences', gradient: 'from-blue-600 to-purple-600' },
  'tower-b': { name: 'Tower B - Marina Heights', gradient: 'from-teal-600 to-blue-600' },
  'tower-c': { name: 'Tower C - Garden Terraces', gradient: 'from-green-600 to-teal-600' }
};

const apartments = [
  {
    id: 'apt-1',
    unitType: 'Studio Deluxe',
    area: 650,
    areaUnit: 'sq ft',
    rooms: 1,
    bathrooms: 1,
    price: 350000,
    thumbnail: 'https://plus.unsplash.com/premium_photo-1674730952112-965c8e4decf4?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['City View', 'Modern Kitchen', 'Smart Home'],
    availability: 'Available'
  },
  {
    id: 'apt-2',
    unitType: '1BR Premium',
    area: 850,
    areaUnit: 'sq ft',
    rooms: 2,
    bathrooms: 1,
    price: 475000,
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661962302410-36d3325cf9ce?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Balcony', 'Ocean View', 'Walk-in Closet'],
    availability: 'Available'
  },
  {
    id: 'apt-3',
    unitType: '2BR Luxury',
    area: 1200,
    areaUnit: 'sq ft',
    rooms: 3,
    bathrooms: 2,
    price: 625000,
    thumbnail: 'https://images.unsplash.com/photo-1686056040370-b5e5c06c4273?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Corner Unit', 'Dual Balcony', 'Master Suite'],
    availability: 'Reserved'
  },
  {
    id: 'apt-4',
    unitType: '2BR Penthouse',
    area: 1450,
    areaUnit: 'sq ft',
    rooms: 3,
    bathrooms: 2,
    price: 785000,
    thumbnail: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Panoramic View', 'Private Terrace', 'Premium Finishes'],
    availability: 'Available'
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Header */}
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

      {/* Main Content */}
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={apartment.thumbnail}
                    alt={apartment.unitType}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    apartment.availability === 'Available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {apartment.availability}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{formatPrice(apartment.price)}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {apartment.unitType}
                    </h3>
                    <p className="text-sm text-slate-600">{apartment.area} {apartment.areaUnit}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{apartment.rooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{apartment.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{apartment.area}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {apartment.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {apartment.features.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{apartment.features.length - 2}
                        </span>
                      )}
                    </div>
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