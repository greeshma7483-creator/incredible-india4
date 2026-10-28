import React, { useState, useMemo } from 'react';
import { INDIAN_STATES } from '../data/indiaData';
import { StateInfo } from '../types';
import { Search, MapPin, Globe, Compass, Filter, BookOpen } from 'lucide-react';

export const StatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeStateModal, setActiveStateModal] = useState<StateInfo | null>(null);

  const regions = ['All', 'North', 'South', 'West', 'East', 'Central', 'North-East', 'Union Territory'];

  const filteredStates = useMemo(() => {
    return INDIAN_STATES.filter((st) => {
      const matchesSearch =
        st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        st.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        st.languages.some((l) => l.toLowerCase().includes(searchTerm.toLowerCase())) ||
        st.famousFor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion = selectedRegion === 'All' || st.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. Header */}
      <div className="border-b border-stone-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
          <span>Page 3 · Incredible India Project</span>
          <span aria-hidden="true">·</span>
          <span>Geographic Integrity</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          States & Union Territories of India
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-3xl font-sans leading-relaxed">
          India comprises 28 federated States and 8 Union Territories, spanning the mighty Himalayas to the tropical southern ocean, each governed by its vibrant linguistic and cultural heritage.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Largest State by Area</span>
            <span className="font-cinzel font-bold text-stone-900 text-sm">Rajasthan (342,239 km²)</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Highest Literacy</span>
            <span className="font-cinzel font-bold text-stone-900 text-sm">Kerala (96.2%)</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Most Populous State</span>
            <span className="font-cinzel font-bold text-stone-900 text-sm">Uttar Pradesh (~240M)</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-stone-200">
            <span className="text-stone-400 block text-[11px] uppercase tracking-wider">First 100% Organic State</span>
            <span className="font-cinzel font-bold text-stone-900 text-sm">Sikkim (Himalayas)</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Map & Regional Visualizer Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
              Geographic Zones of India
            </span>
            <h3 className="font-cinzel text-xl font-bold text-stone-900">
              Interactive Regional Visualizer
            </h3>
          </div>
          <p className="text-xs text-stone-500 max-w-md">
            Select a region below or use the search bar to explore each state&apos;s capital, official languages, and cultural specialties.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-amber-800 text-white font-semibold shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {reg === 'All' ? 'All Regions' : reg}
            </button>
          ))}
        </div>

        {/* Stylized SVG Map Representation of India's Regional Zones */}
        <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-stone-200 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-center space-y-2 mb-4">
            <span className="text-xs font-semibold text-stone-600 font-cinzel">
              Map of India · 6 Cultural Zones
            </span>
            <p className="text-[11px] text-stone-500">
              Click any zone in the visual compass below to quickly filter the states directory.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-4xl">
            <button
              onClick={() => setSelectedRegion('North')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'North' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">North Zone</span>
              <span className="text-[10px] opacity-80">Himalayas & Punjab</span>
            </button>

            <button
              onClick={() => setSelectedRegion('South')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'South' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">South Zone</span>
              <span className="text-[10px] opacity-80">Deccan & Coastline</span>
            </button>

            <button
              onClick={() => setSelectedRegion('West')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'West' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">West Zone</span>
              <span className="text-[10px] opacity-80">Thar & Maharashtra</span>
            </button>

            <button
              onClick={() => setSelectedRegion('East')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'East' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">East Zone</span>
              <span className="text-[10px] opacity-80">Ganga Delta & Kalinga</span>
            </button>

            <button
              onClick={() => setSelectedRegion('Central')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'Central' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">Central Zone</span>
              <span className="text-[10px] opacity-80">Heart of India</span>
            </button>

            <button
              onClick={() => setSelectedRegion('North-East')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRegion === 'North-East' ? 'bg-amber-800 text-white border-amber-800' : 'bg-white hover:border-amber-400 text-stone-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block font-bold font-cinzel">North-East</span>
              <span className="text-[10px] opacity-80">Seven Sisters</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Search Bar & Directory */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by state, capital, language, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span>Showing <strong>{filteredStates.length}</strong> jurisdictions</span>
            {selectedRegion !== 'All' && (
              <button
                onClick={() => setSelectedRegion('All')}
                className="text-amber-800 underline ml-2 cursor-pointer hover:text-amber-950"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((state, index) => (
            <div
              key={index}
              onClick={() => setActiveStateModal(state)}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 font-cinzel">
                    {state.region}
                  </span>
                  <span className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                    {state.areaKm2.toLocaleString()} km²
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {state.name}
                </h3>

                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span><strong>Capital:</strong> {state.capital}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span><strong>Languages:</strong> {state.languages.join(', ')}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-sans pt-1 line-clamp-2">
                  {state.famousFor}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-amber-900 italic line-clamp-1">
                  &ldquo;{state.highlight}&rdquo;
                </span>
                <span className="text-amber-800 group-hover:translate-x-1 transition-transform font-bold ml-2">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State Detail Modal */}
      {activeStateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-800 font-cinzel font-semibold">
                  {activeStateModal.region} India
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                  {activeStateModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveStateModal(null)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                <span className="font-bold text-amber-950 block text-xs">Key Highlight:</span>
                <p className="text-amber-900 mt-0.5">{activeStateModal.highlight}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-lg">
                  <span className="text-stone-400 block text-[11px]">Capital City</span>
                  <span className="font-semibold text-stone-900">{activeStateModal.capital}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg">
                  <span className="text-stone-400 block text-[11px]">Official Language(s)</span>
                  <span className="font-semibold text-stone-900">{activeStateModal.languages.join(', ')}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg">
                  <span className="text-stone-400 block text-[11px]">Total Geographic Area</span>
                  <span className="font-semibold text-stone-900">{activeStateModal.areaKm2.toLocaleString()} sq km</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg">
                  <span className="text-stone-400 block text-[11px]">Population Rank</span>
                  <span className="font-semibold text-stone-900">
                    {activeStateModal.populationRank > 0 ? `#${activeStateModal.populationRank} in India` : 'Union Territory'}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-bold text-stone-900 block text-xs">Famous For & Culture:</span>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">{activeStateModal.famousFor}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setActiveStateModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
