# Product List with Cart

This project is a product list application with cart functionality, built using React, TypeScript, and SASS following the BEM methodology.

## Project Structure

The project follows a modular architecture with a focus on maintainable and scalable styling using SASS and BEM methodology.

## Styles Architecture

Our styling architecture follows the 7-1 pattern with SASS and implements BEM methodology for clear, maintainable, and scalable CSS. Here's how it's organized:

```
src/styles/
|
|– abstracts/            # Variables, functions, mixins, and placeholders
|   |– _variables.scss   # Global variables (colors, spacing, etc.)
|   |– _mixins.scss     # Global mixins
|   |– _functions.scss  # Global functions
|
|– base/                # Base styles and reset
|   |– _reset.scss     # Reset/normalize
|   |– _base.scss      # Base HTML elements
|
|– components/         # Component-specific styles
|   |– _app.scss      # App component styles
|   |– _product.scss  # Product component styles
|   |– _cart.scss     # Cart component styles
|
|– design-system/     # Design system elements
|   |– _colors.scss   # Color system
|   |– _typography.scss # Typography system
|
|– layouts/           # Layout-specific styles
|   |– _grid.scss    # Grid system
|   |– _header.scss  # Header layout
|
|– pages/            # Page-specific styles
|
|– themes/           # Theme-specific styles (if needed)
|
`– main.scss         # Main SASS file that imports all other files
```

### Using BEM with SASS

We follow the BEM (Block Element Modifier) methodology for naming our CSS classes. Here's how to implement it:

#### BEM Naming Convention

```scss
.block {                   // Component
    &__element {          // Component part
        &--modifier {     // Variant
            // styles
        }
    }
}
```

#### Example Implementation

```scss
.product-card {                      // Block
    &__image {                       // Element
        width: 100%;
        
        &--featured {                // Modifier
            border: 2px solid gold;
        }
    }
    
    &__title {                      // Element
        font-size: 1.2rem;
        
        &--large {                  // Modifier
            font-size: 1.5rem;
        }
    }
}
```

### How to Add Styles for New Components

1. Create a new SCSS file in the `components` directory:
   ```
   src/styles/components/_your-component.scss
   ```

2. Import your new component styles in `main.scss`:
   ```scss
   @import "components/your-component";
   ```

3. Follow the BEM naming convention in your component:
   ```scss
   .your-component {
       // Base styles
       
       &__element {
           // Element styles
           
           &--modifier {
               // Modifier styles
           }
       }
   }
   ```

4. Use design system variables for consistency:
   ```scss
   .your-component {
       color: var(--color-primary);
       font-family: var(--font-family-base);
       padding: var(--spacing-medium);
   }
   ```

### Best Practices

1. Always use variables from `abstracts/_variables.scss` for colors, spacing, and typography
2. Keep component styles modular and isolated
3. Use BEM naming to avoid style conflicts
4. Utilize SASS nesting for BEM but try not to nest more than 3 levels deep
5. Create mixins for frequently reused style patterns
6. Comment your code when implementing complex styling logic

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
