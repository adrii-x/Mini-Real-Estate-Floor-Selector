# Mini Real Estate Floor Selector

This is a React application I built for exploring apartment towers and their floor plans. The idea was to create something that lets users browse through different residential towers, check out floors, and see available apartments.

## Features

- **Interactive Tower Visualization**: Browse through multiple residential towers with detailed floor plans
- **Floor-by-Floor Navigation**: Explore each floor of the towers with unit availability and views
- **Apartment Details**: Comprehensive apartment information with amenities and specifications
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with fluid transitions and interactions
- **Modern UI/UX**: Clean, professional design with intuitive navigation

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive, utility-first styling
- **UI Components**: Shadcn/ui component library
- **Animations**: Framer Motion for smooth, performant animations
- **Routing**: React Router for seamless navigation
- **State Management**: React Query (TanStack Query) for efficient data fetching
- **Icons**: Lucide React for consistent iconography

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Shadcn/ui components
├── pages/              # Main application pages
│   ├── Index.tsx       # Home page with tower overview
│   ├── TowerView.tsx   # Individual tower details
│   ├── FloorView.tsx   # Floor-specific apartment listings
│   ├── ApartmentDetail.tsx # Individual apartment details
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## How to run it

You'll need Node.js installed (I used version 18, but 16+ should work fine).

1. Clone the repository:
```bash
git clone https://github.com/adrii-x/Mini-Real-Estate-Floor-Selector.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Deployment

The app is deployed on Vercel. I chose Vercel because it integrates really well with React projects and handles the build process automatically when you push to GitHub.

## Browser compatibility

Tested on Chrome, Firefox, Safari, and Edge. The animations might be slightly different on older browsers, but the core functionality works everywhere.

---

Built this as a coding challenge - had fun working on the hover animations and making the navigation feel smooth!