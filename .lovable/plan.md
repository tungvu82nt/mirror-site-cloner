

# 🎮 Kế Hoạch Xây Dựng Nền Tảng Giải Trí Số

## Tổng Quan Dự Án
Xây dựng một nền tảng giải trí kỹ thuật số với giao diện hiện đại, sử dụng thiết kế dark theme kết hợp màu vàng/amber sang trọng theo đúng specifications trong tài liệu.

---

## 🎨 Phase 1: Thiết Lập Design System
**Mục tiêu**: Cấu hình nền tảng thiết kế theo đúng color palette và typography

### Tính năng:
- **Color Palette**
  - Primary: Gold/Amber (#d0ad4a, #FFD700)
  - Dark Background (#1a1f3a, #0f0f0f)
  - Secondary colors (Success, Warning, Error, Info)
  
- **Typography System**
  - Font family: Roboto
  - Type scale từ H1 (32-48px) đến Caption (11-12px)
  - Responsive font sizing

- **Global Animations**
  - Fade in/out effects
  - Scale animations
  - Slide transitions
  - Hover effects (scale 1.05)

---

## 🧭 Phase 2: Navigation & Layout
**Mục tiêu**: Xây dựng cấu trúc trang và header navigation

### Tính năng:
- **Fixed Header** (80px height)
  - Logo với animation
  - Navigation menu (Categories, Popular, New Releases)
  - Dropdown submenus với hover effects
  - Search button
  - Notification bell với badge
  - User menu dropdown
  - Language selector (VN/EN)
  - Mobile hamburger menu

- **Marquee Notification Bar**
  - Scrolling text cho thông báo quan trọng
  - Auto-pause khi hover

- **Footer**
  - Links nhanh
  - Thông tin hỗ trợ
  - Social media icons

---

## 🖼️ Phase 3: Hero Banner & Carousel
**Mục tiêu**: Tạo banner chính với carousel tương tác

### Tính năng:
- **Promotional Banner Carousel**
  - Auto-play với indicators
  - Navigation arrows
  - Transition effects mượt
  - Touch/swipe support cho mobile
  - Height: 300-400px responsive

---

## 🃏 Phase 4: Game Card Grid
**Mục tiêu**: Hiển thị grid các game cards theo specifications

### Tính năng:
- **Game Card Component**
  - Aspect ratio 1:1
  - Image với overlay gradient
  - Favorite button (heart icon)
  - Game title & provider info
  - Star rating display
  - Play count
  - "Play Now" CTA button
  - Hover effects (scale 1.05, shadow increase, image brighten)

- **Responsive Grid**
  - Mobile: 1 cột
  - Tablet: 2 cột
  - Desktop: 3-6 cột

- **Tab Navigation**
  - Category tabs với active indicator (gold bottom border)
  - Smooth transitions

---

## 🔍 Phase 5: Search & Filter
**Mục tiêu**: Hệ thống tìm kiếm và lọc nội dung

### Tính năng:
- **Search Box**
  - Real-time search với debounce (300ms)
  - Search icon
  - Clear button

- **Filter Panel**
  - Provider filter (checkboxes)
  - Rating filter (radio buttons)
  - Sort options (Popular, Newest, Trending, Rating)
  - Apply/Clear buttons

- **Pagination/Load More**
  - Load more button hoặc infinite scroll

---

## 🔐 Phase 6: Authentication System
**Mục tiêu**: Đăng ký/Đăng nhập người dùng (UI only, sẽ cần backend sau)

### Tính năng:
- **Login Modal**
  - Email/username input
  - Password input với toggle visibility
  - "Remember me" checkbox
  - Forgot password link
  - Social login buttons
  - Close button

- **Register Modal**
  - Username input
  - Email input
  - Password + confirm password
  - Terms agreement checkbox
  - Form validation messages

- **User Profile Dropdown**
  - Avatar display
  - Account settings link
  - Logout option

---

## 💬 Phase 7: Live Chat Support
**Mục tiêu**: Widget hỗ trợ khách hàng

### Tính năng:
- **Floating Chat Button**
  - Fixed position (bottom-right)
  - Pulse animation khi có tin nhắn mới
  - Badge notification

- **Chat Window**
  - Expandable/collapsible
  - Message history display
  - Input field + send button
  - Typing indicator
  - Close/minimize controls

- **Quick Contact Options**
  - Telegram, Zalo, Messenger icons
  - Support phone number

---

## 📱 Phase 8: Responsive & Mobile
**Mục tiêu**: Đảm bảo trải nghiệm tốt trên mọi thiết bị

### Tính năng:
- **Mobile Navigation Drawer**
  - Slide-in menu
  - Touch-friendly (60x60px touch targets)
  - Accordion submenus

- **Responsive Breakpoints**
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Wide: 1280px+

- **Mobile-specific Optimizations**
  - Larger touch targets
  - Bottom navigation option
  - Simplified layouts

---

## ✨ Bonus Features (Optional)
- Dark/Light mode toggle
- Skeleton loading states
- Toast notifications
- Error boundaries
- Performance optimizations

---

## 📋 Tóm Tắt Deliverables
| Phase | Thành phần | Ưu tiên |
|-------|------------|---------|
| 1 | Design System (Colors, Typography, Animations) | 🔴 Cao |
| 2 | Header Navigation & Layout | 🔴 Cao |
| 3 | Hero Banner Carousel | 🟡 Trung bình |
| 4 | Game Card Grid | 🔴 Cao |
| 5 | Search & Filter | 🟡 Trung bình |
| 6 | Authentication UI | 🔴 Cao |
| 7 | Live Chat Widget | 🟡 Trung bình |
| 8 | Responsive/Mobile | 🔴 Cao |

**Lưu ý**: Đây là phiên bản UI/frontend. Để có chức năng đầy đủ (đăng nhập thực, chat thực), sẽ cần tích hợp backend (Supabase hoặc Lovable Cloud) ở giai đoạn sau.

