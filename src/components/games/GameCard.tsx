import { Heart, Star, Play, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface GameCardProps {
  id: string;
  title: string;
  provider: string;
  image: string;
  rating: number;
  playCount: number;
  isNew?: boolean;
  isHot?: boolean;
}

export function GameCard({ 
  id, 
  title, 
  provider, 
  image, 
  rating, 
  playCount,
  isNew,
  isHot 
}: GameCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPlayCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div className="group card-premium hover-lift cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="badge-new">NEW</span>
          )}
          {isHot && (
            <span className="badge-gold">HOT</span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={cn(
            "absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            isFavorite 
              ? "bg-destructive text-white" 
              : "bg-background/50 backdrop-blur-sm text-foreground/70 hover:text-destructive"
          )}
        >
          <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
        </button>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="lg"
            className="btn-gold rounded-full w-16 h-16 p-0 shadow-gold-lg"
          >
            <Play className="w-8 h-8 fill-current" />
          </Button>
        </div>

        {/* Play Count */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm text-xs">
          <Users className="w-3 h-3" />
          <span>{formatPlayCount(playCount)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground truncate">{provider}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < Math.floor(rating) 
                  ? "text-primary fill-primary" 
                  : i < rating 
                    ? "text-primary fill-primary/50"
                    : "text-muted-foreground/30"
              )}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
