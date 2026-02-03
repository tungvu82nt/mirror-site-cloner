import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/layout/Marquee';
import { Footer } from '@/components/layout/Footer';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { GameGrid } from '@/components/games/GameGrid';
import { LiveChat } from '@/components/support/LiveChat';
import { AuthModals } from '@/components/auth/AuthModals';

const marqueeMessages = [
  '🎮 Chào mừng đến với GameHub - Nền tảng giải trí số hàng đầu!',
  '🎁 Đăng ký ngay để nhận ưu đãi đặc biệt cho thành viên mới!',
  '🏆 Sự kiện mùa hè - Nhận quà cực hot khi tham gia!',
  '📱 Tải app GameHub để trải nghiệm tốt hơn trên mobile!',
];

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Marquee */}
      <Marquee messages={marqueeMessages} />
      
      {/* Header */}
      <Header 
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Game Grid */}
        <GameGrid />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Chat */}
      <LiveChat />

      {/* Auth Modals */}
      <AuthModals
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onRegisterClose={() => setIsRegisterOpen(false)}
        onSwitchToRegister={() => setIsRegisterOpen(true)}
        onSwitchToLogin={() => setIsLoginOpen(true)}
      />
    </div>
  );
};

export default Index;
