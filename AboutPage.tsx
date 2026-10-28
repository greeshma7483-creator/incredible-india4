import React, { useState } from 'react';
import { NATIONAL_SYMBOLS, HISTORY_TIMELINE } from '../data/indiaData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Flag, Shield, Landmark, Sparkles, BookOpen, Clock, HeartHandshake, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'symbols' | 'culture'>('history');

  const danceForms = [
    { name: 'Bharatanatyam', origin: 'Tamil Nadu', desc: 'Ancient temple dance known for crisp footwork, dramatic mudras (hand gestures), and expressive facial bhava.' },
    { name: 'Kathak', origin: 'Uttar Pradesh', desc: 'Narrative storytelling dance famous for intricate rhythmic pirouettes (chakkars) and tatkar footwork.' },
    { name: 'Kathakali', origin: 'Kerala', desc: 'Spectacular dance-drama featuring vibrant facial makeup, billowing layered skirts, and intense eye expressions.' },
    { name: 'Odissi', origin: 'Odisha', desc: 'Sculpturesque classical dance characterized by the graceful Tribhangi (three-bend) posture and lyrical torso movements.' },
    { name: 'Kuchipudi', origin: 'Andhra Pradesh', desc: 'Dynamic dance form combining speech, mime, and rhythmic balance dancing upon the rim of a brass plate.' },
    { name: 'Manipuri', origin: 'Manipur', desc: 'Gentle, devotional dance celebrating the divine Raasleela of Radha and Krishna with delicate circular motions.' },
  ];

  const interestingFacts = [
    { label: 'Invention of Zero', desc: 'Mathematician Aryabhata codified zero (shunya) and the decimal place-value system in classical India, revolutionizing global science.' },
    { label: 'World’s Oldest University', desc: 'Nalanda and Takshashila flourished centuries before European universities, housing thousands of scholars from Greece, China, and Persia.' },
    { label: 'World’s Highest Cricket Ground', desc: 'Chail Cricket Ground in Himachal Pradesh stands at an elevation of 2,444 meters (8,018 ft) above sea level.' },
    { label: 'Wettest Place on Earth', desc: 'Mawsynram in Meghalaya holds the Guinness World Record for the highest average annual rainfall on the planet (11,872 mm).' },
    { label: 'Floating Post Office', desc: 'Dal Lake in Srinagar, Kashmir, features the world’s only floating post office built on an ornate cedar wood houseboat.' },
    { label: 'Largest Postal Network', desc: 'With over 155,000 post offices, India operates the most extensive postal system in the world, connecting the most remote Himalayan hamlets.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header Banner */}
      <div className="border-b border-stone-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
          <span>Page 2 · Incredible India Project</span>
          <span aria-hidden="true">·</span>
          <span>Heritage & Identity</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          About India: Heritage, Identity & Diversity
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-3xl font-sans leading-relaxed">
          Spanning five millennia of unbroken civilizational memory, India represents one of the richest crucibles of human thought, spiritual discovery, art, and multicultural coexistence on Earth.
        </p>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'history'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Chronological History
          </button>
          <button
            onClick={() => setActiveTab('symbols')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'symbols'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            National Identity & Symbols
          </button>
          <button
            onClick={() => setActiveTab('culture')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'culture'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Culture & Traditions
          </button>
        </div>
      </div>

      {/* 2. TAB 1: HISTORY OF INDIA */}
      {activeTab === 'history' && (
        <section className="space-y-10 animate-fadeIn">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
              5,000-Year Timeline
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
              The Evolution of an Ancient Civilization
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              From the planned brick streets of the Bronze-Age Indus Valley to the modern spacefaring republic that landed spacecraft at the lunar south pole, follow the great epochs that shaped India.
            </p>
          </div>

          <div className="relative border-l-2 border-amber-700/40 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {HISTORY_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-6 h-6 rounded-full bg-amber-800 border-4 border-[#FAF7F2] flex items-center justify-center text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 self-start sm:self-auto">
                      {item.era}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. TAB 2: NATIONAL IDENTITY & SACRED SYMBOLS */}
      {activeTab === 'symbols' && (
        <section className="space-y-10 animate-fadeIn">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
              Constitutional & Ecological Emblems
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
              National Symbols of the Republic of India
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              Each national symbol of India was thoughtfully adopted by the Constituent Assembly to embody the nation’s noble aspirations, rich biological heritage, and moral ideals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATIONAL_SYMBOLS.map((symbol, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
                      {symbol.name}
                    </span>
                    <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                      Adopted {symbol.adoptedYear}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-stone-900">
                    {symbol.title}
                  </h3>
                  <div className="text-xs text-amber-950 font-medium bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60">
                    {symbol.symbol}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {symbol.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. TAB 3: CULTURE & TRADITIONS */}
      {activeTab === 'culture' && (
        <section className="space-y-12 animate-fadeIn">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
              Arts, Music & Classical Dance
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
              Living Traditions & Classical Performing Arts
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              India recognizes eight classical dance traditions grounded in the Natya Shastra, the world’s oldest surviving treatise on theatrical performance composed by Sage Bharata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceForms.map((dance, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-lg font-bold text-stone-900">
                    {dance.name}
                  </h3>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                    {dance.origin}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {dance.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Music Traditions Box */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl border border-amber-200/80 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-900 font-cinzel block">
              Musical Heritage
            </span>
            <h3 className="font-cinzel text-xl font-bold text-amber-950">
              The Dual Pillars of Indian Classical Music: Hindustani & Carnatic
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-4xl font-sans">
              Indian classical music is based on two fundamental melodic concepts: <strong>Raga</strong> (melodic framework evoking specific emotions, seasons, and times of day) and <strong>Tala</strong> (rhythmic cycles). While the <em>Hindustani</em> tradition evolved in the North through synthesis with Persian and Sufi nuances (represented by instruments like the Sitar, Sarod, and Tabla), the <em>Carnatic</em> tradition preserved ancient devotional compositions in the South (centered on the Veena, Mridangam, and spiritual kritis of Saint Tyagaraja).
            </p>
          </div>
        </section>
      )}

      {/* 5. INTERESTING FACTS GRID */}
      <section className="space-y-8 pt-8 border-t border-stone-200">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
            Curated Curiosities
          </span>
          <h2 className="font-cinzel text-2xl font-bold text-stone-900">
            Fascinating Facts About India
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Extraordinary milestones, geographical anomalies, and civilizational contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interestingFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors space-y-2"
            >
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-4 h-4" />
                <h3 className="font-cinzel text-sm font-bold text-stone-900">
                  {fact.label}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
