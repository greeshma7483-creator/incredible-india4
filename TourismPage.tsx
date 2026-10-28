import React, { useState, useMemo } from 'react';
import { TOURIST_PLACES } from '../data/indiaData';
import { TouristPlace } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { MapPin, Calendar, Award, Compass, Search, Eye } from 'lucide-react';

export const TourismPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<TouristPlace | null>(null);

  const categories = ['All', 'Monuments', 'Palaces & Forts', 'Spiritual', 'Nature & Backwaters'];

  const filteredPlaces = useMemo(() => {
    return TOURIST_PLACES.filter((place) => {
      const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
      const matchesSearch =
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="border-b border-stone-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
          <span>Page 4 · Incredible India Project</span>
          <span aria-hidden="true">·</span>
          <span>Architectural & Natural Wonders</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Iconic Tourist Destinations of India
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-3xl font-sans leading-relaxed">
          From the sublime white marble symmetry of the Taj Mahal and the royal pink sandstone balconies of Jaipur to the granite monoliths of Hampi and tranquil Kerala backwaters.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-700"
            />
          </div>
        </div>
      </div>

      {/* 2. Tourist Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            onClick={() => setSelectedPlace(place)}
            className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <ImageWithFallback
                  src={place.image}
                  alt={place.imageAlt}
                  fallbackTitle={place.name}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded">
                    {place.category}
                  </span>
                  {place.unesco && (
                    <span className="bg-emerald-900/80 backdrop-blur-md text-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                      <Award className="w-3 h-3" /> UNESCO
                    </span>
                  )}
                </div>

                {/* View Detail overlay hint */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" /> View Specs
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-amber-800 font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{place.state}</span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {place.name}
                </h3>

                <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3">
                  {place.description}
                </p>

                <div className="pt-2 border-t border-stone-100 space-y-1 text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span><strong>Best Season:</strong> {place.bestTimeToVisit}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate"><strong>Era:</strong> {place.historicalEra}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold group-hover:text-amber-950">
              <span>Inspect Historical Architecture</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Detailed Monument Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Header Image */}
            <div className="relative h-64 sm:h-72 bg-stone-100">
              <ImageWithFallback
                src={selectedPlace.image}
                alt={selectedPlace.imageAlt}
                fallbackTitle={selectedPlace.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPlace(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-xl text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedPlace.state}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                  {selectedPlace.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 font-sans">
              
              <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-cinzel">
                  Architectural & Engineering Highlight
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {selectedPlace.keyFeature}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Comprehensive Historical Narrative
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedPlace.description}
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[11px]">Historical Period</span>
                  <span className="font-semibold text-stone-900">{selectedPlace.historicalEra}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[11px]">Best Travel Season</span>
                  <span className="font-semibold text-stone-900">{selectedPlace.bestTimeToVisit}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[11px]">UNESCO World Heritage</span>
                  <span className="font-semibold text-stone-900">
                    {selectedPlace.unesco ? 'Yes (Recognized)' : 'National Heritage'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900 transition-colors"
                >
                  Close Destination View
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
