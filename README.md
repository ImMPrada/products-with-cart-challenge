# Product List with Cart

This project is a product list application with cart functionality, built using React, TypeScript, and SASS following the BEM methodology.

## Project Structure

The project follows a modular architecture with a focus on maintainable and scalable styling using SASS and BEM methodology.

## Styles Architecture

We follow a hybrid approach for styling our application:

### Co-located Component Styles

Each component has its own styles file co-located within its directory:

```
src/
  components/
    ProductCard/
      ├── index.ts
      ├── types.ts
      ├── ProductCard.tsx
      └── styles.scss      # Component-specific styles
```

This approach provides several benefits:
- Better encapsulation of component styles
- Improved maintainability and discoverability
- Easier component portability
- Clear ownership of styles

### Global Styles Organization

Global styles and shared resources are organized in the `styles/` directory:

```
src/
  styles/
    ├── abstracts/        # Variables, mixins, functions
    ├── base/            # Reset, typography, base elements
    ├── design-system/   # Design tokens, themes
    ├── layouts/         # Layout-specific styles
    └── themes/          # Theme configurations
```

### Naming Convention

We use BEM (Block Element Modifier) methodology for class naming:

```scss
.block {
  &__element {
    // Element styles
    
    &--modifier {
      // Modified element styles
    }
  }
}
```

### Style Imports

Components import their styles directly:

```typescript
import './styles.scss';
```

Global styles and utilities can be imported using the @use rule:

```scss
@use '@/styles/abstracts' as *;
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally

## Technologies Used

- React
- TypeScript
- SASS
- Vite
