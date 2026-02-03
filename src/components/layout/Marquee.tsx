interface MarqueeProps {
  messages: string[];
}

export function Marquee({ messages }: MarqueeProps) {
  const combinedMessage = messages.join('   •   ');
  
  return (
    <div className="w-full bg-gradient-gold overflow-hidden py-2">
      <div className="marquee whitespace-nowrap text-primary-foreground font-medium text-sm">
        <span className="inline-block pr-16">
          {combinedMessage}   •   {combinedMessage}
        </span>
      </div>
    </div>
  );
}
