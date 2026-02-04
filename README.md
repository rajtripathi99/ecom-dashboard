# 🛍️ E-Commerce Dashboard

A modern, feature-rich e-commerce dashboard built with Next.js 16, React 19, and TypeScript. This dashboard provides a comprehensive admin panel for managing products, orders, customers, inventory, and analytics with a beautiful, responsive UI.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

### 📊 **Dashboard Overview**
- Real-time statistics cards displaying key metrics
- Interactive revenue charts with data visualization
- Top-performing products table
- Recent orders overview
- Responsive grid layout

### 🛒 **Product Management**
- Complete product catalog with data tables
- Product categories management
- Advanced filtering and sorting
- Product details and inventory tracking

### 📦 **Order Management**
- Comprehensive order tracking system
- Order status management
- Customer order history
- Order analytics

### 👥 **Customer Management**
- Customer database with detailed profiles
- Customer activity tracking
- User management interface

### 📈 **Analytics & Reporting**
- Revenue analytics with interactive charts
- Sales performance metrics
- Top products analysis
- Bar graphs and pie charts for data visualization

### 📦 **Inventory Management**
- Stock level monitoring
- Restock alerts and tables
- Inventory pie charts
- Multi-product inventory cards

### 📢 **Marketing Dashboard**
- Active campaigns management
- Marketing performance cards
- Sales distribution pie charts
- Campaign analytics

### ⚙️ **Settings & Configuration**
- User profile management
- Notification preferences
- Customizable settings panel

### 🔐 **Authentication**
- Secure login system
- Protected routes with authentication guards
- User session management
- Demo credentials for testing

### 🎨 **UI/UX Features**
- **Dark/Light Mode**: Theme switching with `next-themes`
- **Responsive Design**: Mobile-first approach, works on all devices
- **Collapsible Sidebar**: Space-efficient navigation with tooltips
- **Modern Components**: Built with shadcn/ui
- **Smooth Animations**: Enhanced user experience
- **Data Tables**: Powered by TanStack Table

## 🚀 Tech Stack

### **Frontend**
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **React**: v19.2.3
- **TypeScript**: Type-safe development
- **Styling**: TailwindCSS 4.x
- **Icons**: [Lucide React](https://lucide.dev/)

### **UI Components**
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Data Tables**: [@tanstack/react-table](https://tanstack.com/table/latest)
- **Charts**: [Recharts](https://recharts.org/)
- **Animations**: tw-animate-css

### **State & Utilities**
- **Class Names**: `clsx` + `tailwind-merge`
- **Variants**: `class-variance-authority`
- **Theme**: `next-themes`

## 📁 Project Structure

```
ecom-dashboard/
├── app/
│   ├── (dashboard)/          # Protected dashboard routes
│   │   ├── analytics/        # Analytics page
│   │   ├── categories/       # Categories management
│   │   ├── customers/        # Customer management
│   │   ├── inventory/        # Inventory tracking
│   │   ├── marketing/        # Marketing dashboard
│   │   ├── orders/           # Order management
│   │   ├── products/         # Product catalog
│   │   ├── settings/         # Settings panel
│   │   └── page.tsx          # Main dashboard
│   ├── login/                # Login page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── dashboard/            # Dashboard-specific components
│   ├── analytics/            # Analytics components
│   ├── products/             # Product components
│   ├── orders/               # Order components
│   ├── customers/            # Customer components
│   ├── inventory/            # Inventory components
│   ├── marketing/            # Marketing components
│   ├── settings/             # Settings components
│   ├── AppSidebar.tsx        # Main navigation sidebar
│   ├── Navbar.tsx            # Top navigation bar
│   └── ProtectedRoute.tsx    # Authentication guard
├── hooks/
│   └── useAuth.ts            # Authentication hook
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajtripathi99/ecom-dashboard.git
   cd ecom-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🔑 Demo Credentials

For testing purposes, use the following credentials:

- **Username**: `emilys`
- **Password**: `emilyspass`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Key Components

### **Sidebar Navigation**
- Collapsible sidebar with icon-only mode
- Tooltips for collapsed state
- User profile dropdown with avatar
- Logout functionality

### **Dashboard Pages**
- **Products**: Full product management with data tables
- **Categories**: Category organization system
- **Orders**: Order tracking and management
- **Customers**: Customer database and profiles
- **Analytics**: Revenue charts and performance metrics
- **Inventory**: Stock management and alerts
- **Marketing**: Campaign tracking and analytics
- **Settings**: User preferences and configurations

### **Data Visualization**
- Revenue line charts
- Sales bar graphs
- Inventory pie charts
- Marketing performance charts

## 🔒 Authentication

The application uses a custom authentication system with:
- Protected routes via `ProtectedRoute` component
- `useAuth` hook for authentication state management
- Session persistence
- Automatic redirects for unauthorized access

## 🎨 Theming

The dashboard supports both **light** and **dark** modes:
- Toggle via theme switcher in the UI
- Persistent theme preference
- CSS variables for easy customization
- TailwindCSS dark mode support

## 📱 Responsive Design

Fully responsive across all devices:
- **Mobile**: Optimized layouts for small screens
- **Tablet**: Adaptive grid systems
- **Desktop**: Full-featured experience
- Collapsible sidebar for space efficiency

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Advanced filtering and search
- [ ] Export functionality (CSV, PDF)
- [ ] Multi-language support
- [ ] Role-based access control
- [ ] Advanced analytics dashboards

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Raj Tripathi**
- GitHub: [@rajtripathi99](https://github.com/rajtripathi99)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

---

<div align="center">
  <p>Made with ❤️ using Next.js and React</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
