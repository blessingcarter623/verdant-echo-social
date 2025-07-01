
# VukaAfrica - Project Context

## Project Overview

VukaAfrica is a React-based social media platform celebrating African culture, heritage, and community. The application features a modern, dark-themed interface with Pan-African color schemes and TikTok-style interactions.

## Technology Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM
- **State Management**: @tanstack/react-query for server state
- **Icons**: Lucide React
- **Charts**: Recharts (when needed)

## Design System

### Color Scheme (Pan-African Theme)
- **Primary**: Golden yellow (#FFD700) - representing the wealth and prosperity of Africa
- **Background**: Deep black (#000000) - main background
- **Surface**: Dark grays (#1a1a1a, #262626) - cards and containers
- **Text**: White and neutral grays for contrast
- **Accent**: Red (#dc2626) - for notifications and important actions

### Typography
- Uses system fonts with Tailwind's font utilities
- Consistent sizing scale from text-xs to text-2xl
- Bold weights for headings and emphasis

### Layout Principles
- Mobile-first responsive design
- Maximum content width of 7xl (1280px) centered
- Consistent spacing using Tailwind's spacing scale
- Grid and flexbox layouts for structure

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components (read-only)
│   ├── Navbar.tsx         # Main navigation with top bar + floating nav
│   ├── FloatingNavbar.tsx # Standalone floating navigation
│   ├── Feed.tsx           # Main content feed
│   ├── CreatePost.tsx     # Post creation component (read-only)
│   ├── PostCard.tsx       # Individual post display (read-only)
│   ├── Stories.tsx        # Stories component (read-only)
│   ├── Sidebar.tsx        # Right sidebar (read-only)
│   └── SplashScreen.tsx   # App loading screen (read-only)
├── pages/
│   ├── Index.tsx          # Home page with feed
│   ├── Search.tsx         # Search and discovery page
│   ├── Events.tsx         # TikTok-style events feed
│   ├── Messages.tsx       # Chat conversations list
│   ├── Blog.tsx           # African heritage articles
│   ├── Chat.tsx           # Individual chat view (read-only)
│   ├── Groups.tsx         # Community groups (read-only)
│   ├── Profile.tsx        # User profile (read-only)
│   ├── Notifications.tsx  # Notifications (read-only)
│   └── NotFound.tsx       # 404 page (read-only)
└── App.tsx                # Main app component with routing
```

## Key Features

### 1. Splash Screen
- Animated loading screen with VukaAfrica branding
- Automatically transitions to main app after loading

### 2. Navigation System
- **Top Navigation**: Fixed header with logo, notifications, and profile
- **Floating Navigation**: Bottom floating bar with main navigation items
- **Active States**: Visual indicators for current page
- **Badges**: Unread count indicators for messages and notifications

### 3. TikTok-Style Events Page
- **Full-screen vertical scrolling**: Each event takes full viewport height
- **Background images**: Events use cover images with gradient overlays
- **Interactive actions**: Like, comment, and share buttons on the right side
- **Event details**: Location, date, time, and attendee count displayed as badges
- **Smooth animations**: Transitions and hover effects throughout

### 4. Content Feed
- **African-themed content**: Posts focus on African culture, politics, and heritage
- **Rich media support**: Images and videos in posts
- **Social interactions**: Like, comment, and share functionality
- **Stories component**: Horizontal scrolling stories at the top

### 5. Search & Discovery
- **Trending topics**: South African hashtags and trends
- **People suggestions**: Users to follow with location information
- **Search functionality**: Search bar with icons and proper styling

### 6. Blog Section
- **Educational content**: Articles about African history and culture
- **Featured articles**: Highlighted content with larger display
- **Category filtering**: Articles organized by History, Culture, Technology, etc.
- **Author information**: Articles show author details and publication info

### 7. Messages
- **Conversation list**: Chat conversations with unread indicators
- **User status**: Online/offline indicators
- **Navigation integration**: Direct routing to individual chats

## Component Patterns

### Responsive Design
```tsx
// Consistent responsive patterns
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Content */}
  </div>
</div>
```

### Dark Theme Styling
```tsx
// Consistent dark theme classes
className="bg-dark-100 text-white"           // Page backgrounds
className="bg-dark-300 border-neutral-600/20" // Card backgrounds
className="text-neutral-400"                 // Secondary text
```

### Navigation State Management
```tsx
// Active state detection using useLocation
const location = useLocation();
const isActive = location.pathname === '/path';
```

## State Management

### React Query Usage
- Used for data fetching and caching
- Configured with QueryClient in App.tsx
- Object format for query configuration:
```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ['key'],
  queryFn: fetchFunction,
});
```

### Local State
- useState for component-level state
- Focus on simple, focused state management
- Avoid over-engineering with complex state patterns

## Styling Guidelines

### Tailwind Classes
- Use semantic color names when possible
- Leverage Tailwind's spacing scale consistently
- Prefer composition over custom CSS
- Use backdrop-blur for glassmorphism effects

### Component Styling
```tsx
// Floating elements (navigation, cards)
className="backdrop-blur-md border border-white/10"

// Interactive elements
className="transition-all duration-300 hover:scale-105"

// Buttons and actions
className="rounded-full w-12 h-12 p-0"
```

## Development Guidelines

### Code Organization
- Keep components focused and small (under 200 lines)
- Extract reusable logic into custom hooks when needed
- Use TypeScript strictly - no `any` types
- Follow React best practices for hooks and effects

### Performance Considerations
- Use React.memo for expensive components when needed
- Optimize images with proper sizing and formats
- Lazy load components when appropriate
- Keep bundle size reasonable

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels for interactive elements
- Ensure keyboard navigation works properly
- Maintain proper color contrast ratios

## Content Strategy

### African-Centric Content
- Focus on African culture, history, and achievements
- Highlight Pan-African unity and collaboration
- Educational content about African heritage
- Contemporary African politics and leadership

### User Experience
- Familiar social media patterns (like TikTok, Twitter)
- Intuitive navigation and interactions
- Mobile-first approach for accessibility
- Fast loading and smooth animations

## Future Considerations

### Potential Enhancements
- User authentication and profiles
- Real-time messaging functionality
- Content creation tools
- Video upload and streaming
- Community moderation tools
- Analytics and insights

### Scalability
- Component architecture supports easy feature additions
- Routing structure allows for new page additions
- State management can be extended with additional stores
- API integration ready for backend connectivity

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Key Dependencies

- **UI Components**: All shadcn/ui components are pre-configured
- **Routing**: React Router DOM handles all navigation
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React provides consistent iconography
- **State**: React Query for server state management

This project emphasizes clean, maintainable code with a focus on African culture and community building through modern web technologies.
