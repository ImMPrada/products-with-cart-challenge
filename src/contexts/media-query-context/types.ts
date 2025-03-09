import { ReactNode } from 'react';

export interface MediaQueryContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface MediaQueryProviderProps {
  children: ReactNode;
} 