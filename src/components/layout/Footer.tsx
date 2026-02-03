import { Link } from 'react-router-dom';
import { 
  Gamepad2, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const footerLinks = {
  games: [
    { label: 'Danh Mục', href: '#categories' },
    { label: 'Phổ Biến', href: '#popular' },
    { label: 'Mới Nhất', href: '#new' },
    { label: 'Xếp Hạng', href: '#ranking' },
  ],
  support: [
    { label: 'Trung Tâm Hỗ Trợ', href: '#help' },
    { label: 'Liên Hệ', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Hướng Dẫn', href: '#guide' },
  ],
  legal: [
    { label: 'Điều Khoản Sử Dụng', href: '#terms' },
    { label: 'Chính Sách Bảo Mật', href: '#privacy' },
    { label: 'Cookies', href: '#cookies' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: MessageCircle, href: '#', label: 'Telegram' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gold-gradient">GameHub</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Nền tảng giải trí số hàng đầu với hàng nghìn trò chơi hấp dẫn. 
              Trải nghiệm gaming đỉnh cao cùng cộng đồng game thủ sôi động.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@gamehub.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>1900 xxxx xxx</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Games Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Trò Chơi</h4>
            <ul className="space-y-2">
              {footerLinks.games.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Hỗ Trợ</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Pháp Lý</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 GameHub. Bảo lưu mọi quyền.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
