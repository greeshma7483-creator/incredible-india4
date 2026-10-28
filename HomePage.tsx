import React, { useState } from 'react';
import { PageId } from '../types';
import { HERO_IMAGE, HAMPI_IMAGE, JAIPUR_IMAGE, DIWALI_IMAGE, DOSA_IMAGE, VARANASI_IMAGE, QUIZ_QUESTIONS } from '../data/indiaData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ArrowRight, Compass, Sparkles, BookOpen, MapPin, PartyPopper, UtensilsCrossed, Award, CheckCircle2, RotateCcw } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Mini quiz state for college evaluation
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const question = QUIZ_QUESTIONS[currentQuizIndex];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setCurrentQuizIndex(0);
      setScore(0);
    }
  };

  const portalCards: {
    page: PageId;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    badge: string;
  }[] = [
    {
      page: 'about',
      title: 'About India',
      subtitle: 'Civilization & National Identity',
      description: 'Explore 5,000 years of documented history from Indus Valley to the modern space age, national symbols, and the philosophy of unity in diversity.',
      image: VARANASI_IMAGE,
      icon: <BookOpen className="w-5 h-5 text-amber-700" />,
      badge: 'Page 2'
    },
    {
      page: 'states',
      title: 'States & Capitals',
      subtitle: '28 States & 8 Union Territories',
      description: 'Interactive geographic directory of Indian states, official capitals, regional languages, cultural landmarks, and interactive regional map.',
      image: JAIPUR_IMAGE,
      icon: <Compass className="w-5 h-5 text-amber-700" />,
      badge: 'Page 3'
    },
    {
      page: 'tourism',
      title: 'Tourist Places',
      subtitle: 'Monuments, Palaces & Backwaters',
      description: 'Wonders of Indian architecture including the Taj Mahal, Hampi stone chariot, Mysore Palace, Delhi Red Fort, and serene Kerala backwaters.',
      image: HAMPI_IMAGE,
      icon: <MapPin className="w-5 h-5 text-amber-700" />,
      badge: 'Page 4'
    },
    {
      page: 'festivals',
      title: 'Festivals of India',
      subtitle: 'Colors, Lights & Harvests',
      description: 'Vibrant celebrations of Diwali, Holi, Dasara, Eid, Christmas, and Pongal illustrating spiritual traditions, folklore, and festive sweets.',
      image: DIWALI_IMAGE,
      icon: <PartyPopper className="w-5 h-5 text-amber-700" />,
      badge: 'Page 5'
    },
    {
      page: 'food',
      title: 'Food of India',
      subtitle: 'Culinary Traditions & Spices',
      description: 'Taste the diverse gastronomy: crispy Masala Dosa, fragrant Hyderabadi Biryani, spongy Khaman Dhokla, rich Chole Bhature, and royal curries.',
      image: DOSA_IMAGE,
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-700" />,
      badge: 'Page 6'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-stone-900 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
        {/* Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={HERO_IMAGE}
            alt="Majestic sunrise view of the Taj Mahal reflecting in Yamuna garden water"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-black/40" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* National Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>Cradle of Civilization · Unity in Diversity</span>
            </div>

            {/* Regal Title */}
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              INCREDIBLE INDIA
            </h1>

            {/* Editorial Intro */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-sans">
              Welcome to the land of timeless wonders, where ancient philosophies harmonize with cutting-edge modernity. Home to over 1.4 billion people, 28 states, 8 union territories, and thousands of years of living heritage.
            </p>

            {/* Animated Action Buttons linking to 5 other pages */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/30 flex items-center gap-2.5 group cursor-pointer hover:translate-y-[-2px]"
              >
                <span>Discover About India</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('tourism')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm rounded-xl border border-white/30 transition-all duration-200 flex items-center gap-2 cursor-pointer hover:translate-y-[-2px]"
              >
                <span>Explore Monuments</span>
                <MapPin className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/20 text-stone-300 text-xs">
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400 block tabular-nums">5,000+</span>
                <span className="text-stone-400 uppercase tracking-wider text-[11px]">Years of History</span>
              </div>
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400 block tabular-nums">28 & 8</span>
                <span className="text-stone-400 uppercase tracking-wider text-[11px]">States & UTs</span>
              </div>
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400 block tabular-nums">22</span>
                <span className="text-stone-400 uppercase tracking-wider text-[11px]">Official Languages</span>
              </div>
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-400 block tabular-nums">42</span>
                <span className="text-stone-400 uppercase tracking-wider text-[11px]">UNESCO Sites</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE ESSENCE OF INDIA - EDITORIAL ESSAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
              Civilizational Foundation
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              A Tapestry of Culture, Heritage and Diversity
            </h2>
            <div className="w-12 h-1 bg-amber-700 rounded-full" />
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              India is not merely a country; it is an enduring civilization that has welcomed, assimilated, and nurtured diverse cultures, religions, and philosophical inquiries for millennia. From the snow-clad peaks of the Himalayas in the north to the sun-kissed waters of Kanyakumari in the south, India unfolds a vivid canvas of geographical wonders and human expressions.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              Its ancient dictum <em className="text-stone-900 font-medium font-serif">&ldquo;Ekam Sat Vipra Bahudha Vadanti&rdquo;</em> (Truth is one, the wise speak of it in varied ways) mirrors the foundational ethos of tolerance, pluralism, and boundless hospitality that defines everyday life.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-amber-800 hover:text-amber-950 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Read detailed historical chronicle</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5 hover:border-amber-400 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs font-cinzel">
                01
              </span>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                Unity in Diversity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hundreds of dialects, dozens of dance forms, traditional handlooms, and diverse festive calendars coexist under one proud secular democratic constitution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5 hover:border-amber-400 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs font-cinzel">
                02
              </span>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                Spiritual & Scientific Cradle
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Birthplace of Yoga, Ayurveda, and the concept of Zero (shunya), blending deep metaphysical wisdom with pioneering astronomical and mathematical insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5 hover:border-amber-400 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs font-cinzel">
                03
              </span>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                Architectural Masterpieces
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Over 42 UNESCO World Heritage Sites ranging from monolithic rock-cut cave temples in Ellora to the marble symmetry of the Taj Mahal and royal forts of Rajasthan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5 hover:border-amber-400 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs font-cinzel">
                04
              </span>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                Living Traditions
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Festivals that transform entire cities into open-air celebrations of light, music, and seasonal gratitude, accompanied by rich ancient cuisines.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. 5 ADDITIONAL PAGES PORTAL CARDS (MANDATORY REQUIREMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
            Project Navigation Guide
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
            Explore All 5 Additional Pages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Click any portal below to visit the dedicated page with detailed information, real photographs, and interactive tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalCards.map((card) => (
            <div
              key={card.page}
              onClick={() => onNavigate(card.page)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {card.badge}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <h3 className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-amber-700 block">
                    {card.subtitle}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-stone-100">
                <span className="text-xs font-semibold text-amber-800 group-hover:text-amber-950 inline-flex items-center gap-1.5 transition-colors">
                  <span>Open Page &rarr;</span>
                </span>
              </div>
            </div>
          ))}

          {/* 6th Card: Project Overview & Academic Credential */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white rounded-2xl p-6 flex flex-col justify-between border border-stone-800 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5" />
                <span className="font-cinzel text-xs uppercase tracking-widest font-bold">
                  College Project
                </span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Complete 6-Page Structure
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Constructed strictly following the project specification: 1 Home (Landing) Page + 5 Topic Pages (About, States, Tourism, Festivals, Food), complete with responsive navigation and verified imagery.
              </p>
              <div className="space-y-1.5 text-xs text-stone-400 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Search & Map filters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real monument and food photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Static responsive web application</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800">
              <span className="text-xs text-amber-400 font-medium">
                Satyameva Jayate · Truth Alone Triumphs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE KNOWLEDGE QUIZ (COLLEGE PROJECT SHOWCASE) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 font-cinzel">
                Interactive Learning Module
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                Test Your Knowledge of India
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                Question {currentQuizIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                Score: {score}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-stone-800">
              {question.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {question.options.map((option, idx) => {
                let buttonStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
                if (selectedOption !== null) {
                  if (idx === question.correctAnswer) {
                    buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                  } else if (idx === selectedOption) {
                    buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                  } else {
                    buttonStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                  }
                }
                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-3.5 rounded-xl border text-left text-sm transition-all cursor-pointer ${buttonStyle}`}
                  >
                    <span className="font-bold mr-2 text-xs text-amber-800">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-2 text-xs text-amber-950 animate-fadeIn">
                <span className="font-bold uppercase tracking-wider text-[11px] text-amber-900 block">
                  Fact & Explanation:
                </span>
                <p className="leading-relaxed">{question.explanation}</p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{currentQuizIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Restart Quiz'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
