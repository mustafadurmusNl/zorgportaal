# Angst (Anxiety) Page Feature

This feature implements a comprehensive anxiety information page following the design and structure from the reference FORTA Volwassenen website.

## Project Structure

The angst feature follows a scalable component-based architecture:

```
src/
├── app/[locale]/angst/
│   └── page.tsx                    # Main page component
├── components/angst/
│   ├── index.ts                    # Component exports
│   ├── AngstHero.tsx              # Hero section with dynamic image
│   ├── WhatIsAnxiety.tsx          # Information about anxiety
│   ├── PanicDisorder.tsx          # Panic disorder section
│   ├── AnxietyDisorders.tsx       # Grid of anxiety disorders
│   ├── TreatmentMethods.tsx       # Available treatments
│   └── Testimonial.tsx            # Patient testimonial
├── lib/
│   └── imageApi.ts                # Unsplash API integration
└── messages/
    ├── en.json                    # English translations
    └── nl.json                    # Dutch translations
```

## Features

### 1. **Component Separation**

- Each section is a separate, reusable component
- Easy to maintain and extend
- Follows separation of concerns principle

### 2. **Internationalization (i18n)**

- Full support for Dutch and English
- Comprehensive translations for all content
- Uses next-intl for seamless language switching

### 3. **Dynamic Images**

- Integration with Unsplash API for high-quality images
- Random therapy/mental health related images
- Fallback to animated background when API fails
- Cached for 1 hour to optimize performance

### 4. **Responsive Design**

- Mobile-first approach
- Tailwind CSS for styling
- Matches the reference design aesthetic
- Smooth animations and transitions

### 5. **Scalable Architecture**

- Easy to add new care categories (depression, ADHD, etc.)
- Component structure can be replicated for other pages
- Consistent styling and patterns

## API Integration

The page uses the Unsplash API to fetch relevant images:

```typescript
// Fetches a single random image for the hero section
const heroImage = await fetchAnxietyImage();

// Fetches multiple images for disorder cards
const images = await fetchMultipleAnxietyImages(6);
```

Keywords used for image search:

- therapy
- counseling
- meditation
- mental health
- calm
- support

## Content Sections

1. **Hero Section**: Title, description, and call-to-action
2. **What is Anxiety**: General information about anxiety
3. **Panic Disorder**: Specific information about panic attacks
4. **Anxiety Disorders**: Grid of 6 common anxiety disorders
5. **Testimonial**: Patient review and experience
6. **Treatment Methods**: Available therapeutic approaches

## Usage

Visit the page at:

- Dutch: `http://localhost:3001/nl/angst`
- English: `http://localhost:3001/en/angst`

## Future Extensions

This architecture makes it easy to add similar pages for other mental health conditions:

```
src/app/[locale]/zorgaanbod/
├── angst/          # Anxiety (implemented)
├── depressie/      # Depression (future)
├── adhd/           # ADHD (future)
├── trauma/         # Trauma & PTSD (future)
└── ...
```

Each new condition can reuse the component patterns and structure established here.

## Technical Notes

- Uses Next.js 15 with App Router
- Tailwind CSS for styling
- TypeScript for type safety
- Server-side image fetching for better performance
- Responsive design with mobile-first approach
