# Yonile Digital Marketing Agency Website

A modern, fully responsive digital marketing agency website built with React, TypeScript, and Tailwind CSS. This project replicates a professional agency design with smooth animations, modern UI components, and mobile-first responsive design.

## Features

- **Modern Design**: Clean, professional design with gradient effects and smooth transitions
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Component-Based Architecture**: Modular components for easy maintenance and scalability
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first styling for rapid UI development
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation header with mobile menu
│   ├── Hero.tsx          # Hero section with CTA buttons
│   ├── Features.tsx      # What Sets Us Apart section
│   ├── Services.tsx      # Services showcase grid
│   ├── Portfolio.tsx     # Latest works with filtering
│   ├── Clients.tsx       # Client logos showcase
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── CTA.tsx           # Call-to-action section
│   └── Footer.tsx        # Footer with links and social media
├── App.tsx               # Main application component
├── App.css               # Global application styles
├── index.css             # Tailwind CSS imports and base styles
└── main.tsx              # Application entry point
```

## Technology Stack

- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript 5.5.3**: Static type checking
- **Vite 5.4.2**: Next-generation frontend tooling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Sections Overview

### Header
- Fixed navigation bar with logo
- Desktop and mobile responsive menu
- Smooth scroll navigation

### Hero Section
- Eye-catching headline and subheading
- Call-to-action buttons
- Video player mockup with thumbnails

### Features
- Three key differentiators
- Icon-based feature cards
- Gradient border effects

### Services
- Six comprehensive service offerings
- Color-coded service cards
- Interactive hover effects

### Portfolio
- Filterable project showcase
- High-quality project images from Pexels
- Project descriptions and details

### Clients
- Logo showcase grid
- Brand recognition display
- Responsive grid layout

### Testimonials
- Customer feedback cards
- Profile images and credentials
- Social proof section

### Call-to-Action
- Prominent collaboration invitation
- Action-oriented messaging
- Gradient background effects

### Footer
- Multi-column link structure
- Social media integration
- Copyright information

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Color Scheme

- Primary Navy Dark: `#0a1628`
- Secondary Navy: `#0f2847`
- Accent Blue: `#00a8ff`
- Text Primary: `#ffffff`
- Text Secondary: `rgba(255, 255, 255, 0.7)`

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to modify the color scheme:

```js
theme: {
  extend: {
    colors: {
      'navy-dark': '#0a1628',
      'navy': '#0f2847',
      'blue-bright': '#00a8ff',
    },
  },
}
```

### Updating Content

Each component is self-contained. To update content:
1. Navigate to the relevant component file in `src/components/`
2. Modify the content arrays or text directly
3. Save and the changes will hot-reload

## Performance Optimizations

- Optimized images from Pexels CDN
- Lazy loading for images
- Minimal bundle size with tree-shaking
- CSS purging in production
- Gzip compression enabled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for use under the MIT License.

## Credits

- Images: [Pexels](https://pexels.com)
- Icons: Built-in SVG icons
- Fonts: Google Fonts (Inter)
