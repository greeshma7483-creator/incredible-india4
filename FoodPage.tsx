import React, { useState, useMemo } from 'react';
import { FOOD_DISHES } from '../data/indiaData';
import { FoodDish } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Utensils, Sparkles, Flame, Eye, Leaf } from 'lucide-react';

export const FoodPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedDish, setSelectedDish] = useState<FoodDish | null>(null);

  const regions = ['All', 'North India', 'South India', 'West India', 'East India'];

  const filteredDishes = useMemo(() => {
    if (selectedRegion === 'All') return FOOD_DISHES;
    return FOOD_DISHES.filter((d) => d.region === selectedRegion);
  }, [selectedRegion]);

  const spices = [
    { name: 'Turmeric (Haldi)', benefit: 'Natural antiseptic & anti-inflammatory golden root that forms the base of almost every Indian curry.' },
    { name: 'Green Cardamom (Elaichi)', benefit: 'Fragrant sweet pod imparting floral elegance to biryanis, chai, kheer, and royal gravies.' },
    { name: 'Cumin (Jeera)', benefit: 'Earthy, nutty seeds tempered in sizzling ghee or roasted into fragrant powders for digestion.' },
    { name: 'Mustard Seeds (Rai)', benefit: 'Tiny dark seeds crackled in hot oil to release a pungent, nutty aroma in South & West Indian cooking.' },
    { name: 'Kashmiri Saffron (Kesar)', benefit: 'The world’s most precious spice, giving royal golden hues and regal honey aroma to biryanis and desserts.' },
    { name: 'Cloves (Laung)', benefit: 'Intensely aromatic flower buds providing warm pungent depth and Ayurvedic dental and respiratory wellness.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="border-b border-stone-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
          <span>Page 6 · Incredible India Project</span>
          <span aria-hidden="true">·</span>
          <span>Gastronomy & Culinary Traditions</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Food of India: A Symphony of Spices
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-3xl font-sans leading-relaxed">
          Indian cuisine is an ancient art form governed by Ayurvedic principles of the six tastes (Shad Rasa): sweet, sour, salty, bitter, pungent, and astringent, balanced to nourish both body and spirit.
        </p>

        {/* Region filter buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {reg === 'All' ? 'All Indian Cuisines' : reg}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Interactive Spice Box (Masala Dabba) Educational Feature */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-amber-900 font-cinzel">
              Ayurvedic Alchemy
            </span>
            <h3 className="font-cinzel text-xl font-bold text-amber-950">
              The Sacred Indian Spice Box (Masala Dabba)
            </h3>
          </div>
          <span className="text-xs text-amber-800/80 font-medium">
            Core Healing Aromatics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spices.map((spice, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-amber-200/60 shadow-sm space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-amber-700" />
                <h4 className="font-cinzel text-sm font-bold text-stone-900">
                  {spice.name}
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {spice.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Famous Dishes Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-cinzel text-2xl font-bold text-stone-900">
            Celebrated Regional Dishes
          </h2>
          <span className="text-xs text-stone-500">
            Showing {filteredDishes.length} iconic preparations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.imageAlt}
                    fallbackTitle={dish.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded">
                    {dish.region}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                    <Leaf className="w-3 h-3 text-emerald-600" />
                    {dish.dietType}
                  </div>

                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" /> Recipe Insights
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-cinzel text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1 text-xs text-stone-600">
                    <p className="line-clamp-1">
                      <strong>Flavor:</strong> {dish.flavorProfile}
                    </p>
                    <p className="line-clamp-1 text-stone-500">
                      <strong>Best With:</strong> {dish.bestServedWith}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold group-hover:text-amber-950">
                <span>View Ingredients & Tradition</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 bg-stone-100">
              <ImageWithFallback
                src={selectedDish.image}
                alt={selectedDish.imageAlt}
                fallbackTitle={selectedDish.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-xl text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold font-cinzel block">
                  {selectedDish.region} Cuisine · {selectedDish.dietType}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                  {selectedDish.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 font-sans">
              
              <div className="space-y-2">
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Culinary Heritage & Story
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedDish.description}
                </p>
              </div>

              {/* Flavor Profile Box */}
              <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-cinzel">
                  Flavor Profile & Mouthfeel
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {selectedDish.flavorProfile}
                </p>
              </div>

              {/* Ingredients List */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-900 block font-cinzel">
                  Key Ingredients & Aromatics
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDish.mainIngredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-stone-100 border border-stone-200 text-stone-800 text-xs rounded-lg font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Serving Pairing */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-900 block font-cinzel">
                  Traditional Serving Accompaniments
                </span>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  {selectedDish.bestServedWith}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900 transition-colors"
                >
                  Close Dish View
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
