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

    </div>
  );
};

export default ApartmentDetail;