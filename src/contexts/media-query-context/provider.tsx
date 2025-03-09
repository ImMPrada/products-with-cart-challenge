import {
  MediaQueryContextType,
  MediaQueryProviderProps,
} from './types';
import { MediaQueryContext } from './context';
import { useMediaQuery } from 'react-device-sizes'

const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 992 })
  const isDesktop = useMediaQuery({ minWidth: 993 })

  const contextVal: MediaQueryContextType = {
    isMobile,
    isTablet,
    isDesktop,
  };

  return (
    <MediaQueryContext.Provider value={contextVal}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;
