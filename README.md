
# Premium Residences - Luxury Real Estate Platform

A modern, responsive web application for showcasing luxury residential towers and apartment listings. Built with cutting-edge web technologies to provide an exceptional user experience for potential residents and real estate professionals.

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

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd premium-residences
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory and can be deployed to any static hosting service.

## Deployment

This application can be deployed to various platforms:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3**: Upload the build files to an S3 bucket with static hosting
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---

**Premium Residences** - Where luxury meets innovation.
