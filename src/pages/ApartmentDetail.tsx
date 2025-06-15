import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Home, Maximize, Bath, Car, Star, MapPin, Calendar, Phone } from "lucide-react";
import NotFound from "./NotFound";

const towers = {
  'tower-a': { name: 'Tower A - Skyline Residences', gradient: 'from-blue-600 to-purple-600' },
  'tower-b': { name: 'Tower B - Marina Heights', gradient: 'from-teal-600 to-blue-600' },
  'tower-c': { name: 'Tower C - Garden Terraces', gradient: 'from-green-600 to-teal-600' }
};

const apartmentDetails = {
  'apt-1': {
    id: 'apt-1',
    unitType: 'Studio Deluxe',
    area: 650,
    areaUnit: 'sq ft',
    rooms: 1,
    bathrooms: 1,
    price: 350000,
    features: ['City View', 'Modern Kitchen', 'Smart Home', 'Hardwood Floors', 'Stainless Steel Appliances'],
    availability: 'Available',
    description: 'This stunning studio apartment offers modern city living with premium finishes and smart home technology. Perfect for young professionals seeking luxury and convenience.',
    monthlyMaintenance: 450,
    parkingSpaces: 1,
    balcony: false,
    petFriendly: true,
    moveInDate: '2024-07-01'
  },
  'apt-2': {
    id: 'apt-2',
    unitType: '1BR Premium',
    area: 850,
    areaUnit: 'sq ft',
    rooms: 2,
    bathrooms: 1,
    price: 475000,
    features: ['Balcony', 'Ocean View', 'Walk-in Closet', 'Modern Kitchen', 'Smart Home'],
    availability: 'Available',
    description: 'A spacious one-bedroom apartment with a private balcony and ocean views. Enjoy a walk-in closet and a modern kitchen in this premium unit.',
    monthlyMaintenance: 520,
    parkingSpaces: 1,
    balcony: true,
    petFriendly: true,
    moveInDate: '2024-08-15'
  },
  'apt-3': {
    id: 'apt-3',
    unitType: '2BR Luxury',
    area: 1200,
    areaUnit: 'sq ft',
    rooms: 3,
    bathrooms: 2,
    price: 625000,
    features: ['Corner Unit', 'Dual Balcony', 'Master Suite', 'City View', 'Smart Home'],
    availability: 'Reserved',
    description: 'A luxury two-bedroom corner unit with dual balconies and a spacious master suite. Reserved for those seeking the best in city living.',
    monthlyMaintenance: 600,
    parkingSpaces: 2,
    balcony: true,
    petFriendly: false,
    moveInDate: '2024-09-01'
  },
  'apt-4': {
    id: 'apt-4',
    unitType: '2BR Penthouse',
    area: 1450,
    areaUnit: 'sq ft',
    rooms: 3,
    bathrooms: 2,
    price: 785000,
    features: ['Panoramic View', 'Private Terrace', 'Premium Finishes', 'Smart Home', 'Walk-in Closet'],
    availability: 'Available',
    description: 'Experience penthouse living with panoramic views, a private terrace, and premium finishes throughout. The ultimate in luxury and comfort.',
    monthlyMaintenance: 750,
    parkingSpaces: 2,
    balcony: true,
    petFriendly: true,
    moveInDate: '2024-10-01'
  }
};

const ApartmentDetail = () => {
  const { towerId, floorNumber, apartmentId } = useParams();
  const navigate = useNavigate();
  
  const tower = towers[towerId as keyof typeof towers];
  const apartment = apartmentDetails[apartmentId as keyof typeof apartmentDetails];
  
  if (!tower || !apartment) {
    return <NotFound/>;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/tower/${towerId}/floor/${floorNumber}`)}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white rounded-lg border border-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Units</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{apartment.unitType}</h1>
              <p className="text-slate-600 text-sm">{tower.name} - Floor {floorNumber}</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 ">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Unit Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tower.gradient} flex items-center justify-center`}>
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{apartment.rooms}</div>
                    <div className="text-sm text-slate-600">Rooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tower.gradient} flex items-center justify-center`}>
                    <Bath className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{apartment.bathrooms}</div>
                    <div className="text-sm text-slate-600">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tower.gradient} flex items-center justify-center`}>
                    <Maximize className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{apartment.area}</div>
                    <div className="text-sm text-slate-600">{apartment.areaUnit}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tower.gradient} flex items-center justify-center`}>
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{apartment.parkingSpaces}</div>
                    <div className="text-sm text-slate-600">Parking</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Description</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{apartment.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">Move-in Date</div>
                    <div className="text-sm text-slate-600">{apartment.moveInDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">Monthly Fee</div>
                    <div className="text-sm text-slate-600">${apartment.monthlyMaintenance}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-1 gap-3">
                {apartment.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl bg-gradient-to-r ${tower.gradient} text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200`}
              >
                Schedule Viewing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-white/80 border border-slate-300 text-slate-700 font-semibold hover:bg-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Agent
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ApartmentDetail;