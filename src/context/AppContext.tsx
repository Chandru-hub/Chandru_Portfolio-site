import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
  startTransition,
} from 'react';
import { IPortfolioRepository } from '../services/interfaces/IPortfolioRepository';
import { PortfolioRepository } from '../services/implementations/PortfolioRepository';
import { ICacheService } from '../services/interfaces/ICacheService';
import { isrCache } from '../services/implementations/IsrCacheService';

export interface AppContextValue {
  isOnline: boolean;
  isHydrated: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  setHydrated: (value: boolean) => void;
  portfolioRepository: IPortfolioRepository;
  cacheService: ICacheService;
}

const AppContext = createContext<AppContextValue | null>(null);

interface AppProviderProps {
  children: ReactNode;
  repository?: IPortfolioRepository;
  cache?: ICacheService;
}

/**
 * Global context for cross-cutting UI/runtime state.
 * Services are injected (Dependency Inversion) for testability.
 */
export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  repository = new PortfolioRepository(),
  cache = isrCache,
}) => {
  const [isHydrated, setHydratedState] = useState(false);
  const [activeSection, setActiveSectionState] = useState('about');
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  React.useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  const setHydrated = useCallback((value: boolean) => {
    startTransition(() => {
      setHydratedState(value);
    });
  }, []);

  const setActiveSection = useCallback((section: string) => {
    startTransition(() => {
      setActiveSectionState(section);
    });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      isOnline,
      isHydrated,
      activeSection,
      setActiveSection,
      setHydrated,
      portfolioRepository: repository,
      cacheService: cache,
    }),
    [
      isOnline,
      isHydrated,
      activeSection,
      setActiveSection,
      setHydrated,
      repository,
      cache,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return ctx;
};
