import React, { useState, useMemo } from 'react';
import { FESTIVALS_DATA } from '../data/indiaData';
import { Festival } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Sparkles, Calendar, Utensils, HeartHandshake, Eye } from 'lucide-react';

export const FestivalsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  const categories = ['All', 'Lights & Joy', 'Spring', 'Spiritual', 'Harvest', 'Cultural'];

  const filteredFestivals = useMemo(() => {
    if (selectedFilter === 'All') return FESTIVALS_DATA;
    return FESTIVALS_DATA.filter((fest) => fest.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="border-b border-stone-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
          <span>Page 5 · Incredible India Project</span>
          <span aria-hidden="true">·</span>
          <span>Spiritual & Seasonal Celebrations</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Vibrant Festivals of India
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-3xl font-sans leading-relaxed">
          Known as the &ldquo;Land of Festivals&rdquo;, India celebrates life with a dazzling kaleidoscope of lights, organic colors, sacred chants, seasonal harvests, and communal harmony.
        </p>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Festivals Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFestivals.map((fest) => (
          <div
            key={fest.id}
            onClick={() => setSelectedFestival(fest)}
            className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <ImageWithFallback
                  src={fest.image}
                  alt={fest.imageAlt}
                  fallbackTitle={fest.name}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded">
                  {fest.monthOrSeason}
                </div>

                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" /> Explore Rituals
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 font-cinzel">
                    {fest.category}
                  </span>
                  <span className="text-xs text-stone-600 font-sans">
                    {fest.alternateName}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {fest.name}
                </h3>

                <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3">
                  {fest.description}
                </p>

                <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-start gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="line-clamp-1"><strong>Delicacies:</strong> {fest.traditionalFood}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{fest.celebratedBy}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold group-hover:text-amber-950">
              <span>View Traditions & Significance</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Festival Detail Modal */}
      {selectedFestival && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 bg-stone-100">
              <ImageWithFallback
                src={selectedFestival.image}
                alt={selectedFestival.imageAlt}
                fallbackTitle={selectedFestival.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFestival(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-xl text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold font-cinzel block">
                  {selectedFestival.alternateName || selectedFestival.category}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                  {selectedFestival.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 font-sans">
              
              <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-cinzel">
                  Spiritual & Mythological Significance
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {selectedFestival.significance}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  How India Celebrates
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedFestival.description}
                </p>
              </div>

              {/* Rituals and Traditions List */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-900 block font-cinzel">
                  Key Rituals & Customs
                </span>
                <ul className="space-y-1.5 text-xs text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {selectedFestival.traditions.map((trad, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                      <span>{trad}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Festive Foods */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-900 block font-cinzel">
                  Traditional Festive Foods & Sweets
                </span>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  {selectedFestival.traditionalFood}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedFestival(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900 transition-colors"
                >
                  Close Festival View
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
