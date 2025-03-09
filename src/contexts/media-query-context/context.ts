import { createContext } from 'react';
import { MediaQueryContextType } from './types';

export const MediaQueryContext = createContext<MediaQueryContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export default MediaQueryContext;
