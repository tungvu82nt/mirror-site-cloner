import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  ChevronDown,
  Globe,
  Gamepad2,
  TrendingUp,
  Sparkles,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: { label: string; href: string; icon?: React.ReactNode }[];
}

const navItems: NavItem[] = [
  {
    label: 'Danh Mục',
    href: '#categories',
    icon: <Gamepad2 className="w-4 h-4" />,
    children: [
      { label: 'Action Games', href: '#action', icon: <Sparkles className="w-4 h-4" /> },
      { label: 'Puzzle Games', href: '#puzzle', icon: <Star className="w-4 h-4" /> },
      { label: 'Racing Games', href: '#racing', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Adventure', href: '#adventure', icon: <Gamepad2 className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Phổ Biến',
    href: '#popular',
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    label: 'Mới Nhất',
    href: '#new',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    label: 'Xếp Hạng',
    href: '#ranking',
    icon: <Star className="w-4 h-4" />,
  },
];

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

export function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'VN' | 'EN'>('VN');
  const [hasNotifications] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 glass border-b border-border/50">
      <div className="container h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 hover-scale"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
            <Gamepad2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gold-gradient hidden sm:block">
            GameHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="gap-2 text-foreground/80 hover:text-foreground hover:bg-white/5"
                  >
                    {item.icon}
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-48 bg-popover border-border"
                  align="start"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link 
                        to={child.href} 
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                key={item.label}
                variant="ghost" 
                asChild
                className="gap-2 text-foreground/80 hover:text-foreground hover:bg-white/5"
              >
                <Link to={item.href}>
                  {item.icon}
                  {item.label}
                </Link>
              </Button>
            )
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground/80 hover:text-foreground hover:bg-white/5"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative text-foreground/80 hover:text-foreground hover:bg-white/5"
          >
            <Bell className="w-5 h-5" />
            {hasNotifications && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full pulse-gold" />
            )}
          </Button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-1 text-foreground/80 hover:text-foreground hover:bg-white/5 hidden sm:flex"
              >
                <Globe className="w-4 h-4" />
                {language}
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover border-border" align="end">
              <DropdownMenuItem 
                onClick={() => setLanguage('VN')}
                className={cn(language === 'VN' && 'text-primary')}
              >
                🇻🇳 Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage('EN')}
                className={cn(language === 'EN' && 'text-primary')}
              >
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost"
              onClick={onLoginClick}
              className="text-foreground/80 hover:text-foreground hover:bg-white/5"
            >
              Đăng Nhập
            </Button>
            <Button 
              onClick={onRegisterClick}
              className="btn-gold rounded-lg"
            >
              Đăng Ký
            </Button>
          </div>

          {/* User Menu (when logged in - hidden for now) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/80 hover:text-foreground hover:bg-white/5"
              >
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-popover border-border" align="end">
              <DropdownMenuItem>Tài khoản</DropdownMenuItem>
              <DropdownMenuItem>Lịch sử</DropdownMenuItem>
              <DropdownMenuItem>Yêu thích</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden text-foreground/80 hover:text-foreground hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-lg border-t border-border transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="container py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <details className="group">
                  <summary className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 cursor-pointer list-none">
                    <span className="flex items-center gap-3 font-medium">
                      {item.icon}
                      {item.label}
                    </span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link 
                        key={child.label}
                        to={child.href}
                        className="flex items-center gap-3 p-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link 
                  to={item.href}
                  className="flex items-center gap-3 p-4 rounded-lg font-medium hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
            <Button 
              variant="outline"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLoginClick?.();
              }}
              className="w-full border-primary/50 text-primary hover:bg-primary/10"
            >
              Đăng Nhập
            </Button>
            <Button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRegisterClick?.();
              }}
              className="w-full btn-gold"
            >
              Đăng Ký
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
