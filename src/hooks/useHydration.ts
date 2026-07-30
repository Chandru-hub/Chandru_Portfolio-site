import { useEffect, useState, useSyncExternalStore } from 'react';
import { useAppContext } from '../context/AppContext';

const subscribeHydration = (onStoreChange: () => void) => {
  if (typeof window === 'undefined') return () => undefined;
  const id = requestAnimationFrame(() => onStoreChange());
  return () => cancelAnimationFrame(id);
};

const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Detects client hydration completion (React Fiber commit after SSR/CSR mount).
 * Uses useSyncExternalStore for tear-free concurrent-safe reads.
 */
export const useHydration = (): boolean => {
  const { setHydrated, isHydrated } = useAppContext();
  const clientReady = useSyncExternalStore(
    subscribeHydration,
    getClientSnapshot,
    getServerSnapshot
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHydrated(true);
  }, [setHydrated]);

  return isHydrated || (clientReady && mounted);
};
