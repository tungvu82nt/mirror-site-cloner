import { useState } from 'react';
import { GameCard } from './GameCard';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  label: string;
}

const categories: Category[] = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'popular', label: 'Phổ Biến' },
  { id: 'new', label: 'Mới Nhất' },
  { id: 'action', label: 'Action' },
  { id: 'puzzle', label: 'Puzzle' },
  { id: 'racing', label: 'Racing' },
];

// Mock data for games
const mockGames = [
  {
    id: '1',
    title: 'Dragon Quest XI',
    provider: 'Square Enix',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
    rating: 4.8,
    playCount: 1250000,
    isHot: true,
    category: 'action',
  },
  {
    id: '2',
    title: 'Puzzle Master',
    provider: 'GameStudio',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f2f60?w=400&q=80',
    rating: 4.5,
    playCount: 890000,
    isNew: true,
    category: 'puzzle',
  },
  {
    id: '3',
    title: 'Speed Racer Pro',
    provider: 'Racing Games Inc',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
    rating: 4.7,
    playCount: 2100000,
    isHot: true,
    category: 'racing',
  },
  {
    id: '4',
    title: 'Adventure Island',
    provider: 'Adventure Co',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
    rating: 4.3,
    playCount: 560000,
    category: 'action',
  },
  {
    id: '5',
    title: 'Brain Teaser',
    provider: 'Mind Games',
    image: 'https://images.unsplash.com/photo-1485856407642-7f9ba0f24571?w=400&q=80',
    rating: 4.6,
    playCount: 780000,
    isNew: true,
    category: 'puzzle',
  },
  {
    id: '6',
    title: 'Drift King',
    provider: 'Speed Studios',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80',
    rating: 4.4,
    playCount: 1450000,
    category: 'racing',
  },
  {
    id: '7',
    title: 'Combat Zone',
    provider: 'Action Games',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0d?w=400&q=80',
    rating: 4.9,
    playCount: 3200000,
    isHot: true,
    category: 'action',
  },
  {
    id: '8',
    title: 'Sudoku Master',
    provider: 'Puzzle Pro',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80',
    rating: 4.2,
    playCount: 420000,
    category: 'puzzle',
  },
];

export function GameGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredGames = activeCategory === 'all' 
    ? mockGames 
    : activeCategory === 'popular'
      ? [...mockGames].sort((a, b) => b.playCount - a.playCount)
      : activeCategory === 'new'
        ? mockGames.filter(g => g.isNew)
        : mockGames.filter(g => g.category === activeCategory);

  return (
    <section className="py-12">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-gold-gradient">Trò Chơi</span> Nổi Bật
            </h2>
            <p className="text-muted-foreground mt-1">
              Khám phá hàng nghìn trò chơi hấp dẫn
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredGames.map((game, index) => (
            <div 
              key={game.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="btn-gold px-8 py-3 rounded-xl font-semibold">
            Xem Thêm Trò Chơi
          </button>
        </div>
      </div>
    </section>
  );
}
