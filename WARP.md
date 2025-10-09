# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Portfonext is a portfolio website built with Next.js 14, TypeScript, and modular SCSS. It features smooth scrolling with Lenis, GSAP animations, WebGL particles, and reusable components designed for easy customization and integration into other projects.

## Common Development Commands

### Package Management
- Install dependencies: `pnpm install`
- Add new package: `pnpm add <package-name>`
- Add dev dependency: `pnpm add -D <package-name>`

### Development
- Start dev server: `pnpm dev` (runs on localhost:3000)
- Build for production: `pnpm build`
- Start production server: `pnpm start`

### Code Quality
- Run ESLint: `pnpm lint`
- Format code with Prettier: `pnpm format`

## Architecture Overview

### Project Structure
- `src/components/` - React components organized by purpose
  - `landing/` - Portfolio section components (Hero, Projects, Skills, etc.)
  - `layout/` - Layout components (Header, Footer, MainLayout)
  - `utils/` - Reusable utility components (StyledButton, StyledCard, etc.)
- `src/data/` - Static data files for each portfolio section
- `src/lib/` - Utilities, hooks, and type definitions
- `src/pages/` - Next.js pages following App Router pattern
- `src/styles/` - Modular SCSS organized by component/section
- `public/` - Static assets including images and resume

### Key Technical Features

**Animation System**
- GSAP with ScrollTrigger for scroll-based animations
- Custom animation classes: `.animated-title`, `.animated-container`, `.animated-container-reverse`
- Responsive animation triggers based on screen size

**Smooth Scrolling**
- Lenis integration for buttery-smooth scrolling experience
- Custom React context provider for Lenis state management

**Loading System**
- Zustand store for asset loading progress tracking
- Custom loading overlay with progress indication

**Styling Architecture**
- Modular SCSS with component-specific stylesheets
- Global color system defined in `src/styles/colors.scss`
- TypeScript integration for color types in `src/lib/types.ts`

### State Management
- Zustand for global state (loading progress)
- React Context for Lenis smooth scrolling

### Path Aliases
- `@/*` maps to `./src/*`
- `@public/*` maps to `./public/*`

## Customization Guidelines

### Adding New Colors
1. Define colors in `src/styles/colors.scss`
2. Add color type to `ColorType` in `src/lib/types.ts`
3. Colors will be available throughout utility components

### Adding New Data
- Portfolio data is stored in `src/data/` directory
- Each section has its own data file (projects.tsx, skills.tsx, etc.)
- Images should be placed in `public/` directory with appropriate folder structure

### Animation Customization
- GSAP animations are configured in `src/components/layout/MainLayout.tsx`
- Scroll triggers are responsive and adjust based on `isMobile` detection
- Custom animation classes can be added to trigger specific animations

## Build Configuration

### Next.js Config
- Standalone output for deployment
- Custom webpack config for GLSL shader support
- Fallback configuration for client-side filesystem usage

### TypeScript Config
- Strict mode enabled with comprehensive checks
- Path mapping configured for clean imports
- Verbatim module syntax for better compatibility

### Linting & Formatting
- ESLint with Next.js, TypeScript, and Prettier integration
- 100 character line limit
- Consistent import ordering and type definitions
- PascalCase naming convention for types

## Development Notes

### Performance Optimizations
- Next.js Image component used throughout for optimized image loading
- Lazy loading implemented for portfolio images
- Asset loading tracking for improved user experience

### Browser Compatibility
- GSAP tick optimization for better performance
- RAF (requestAnimationFrame) integration with studio-freight/tempus

### Deployment
- Configured for standalone builds
- Vercel Analytics integration included
- Production-optimized CSS with cssnano