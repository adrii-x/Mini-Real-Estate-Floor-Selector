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
  }
];

const Index = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default Index;