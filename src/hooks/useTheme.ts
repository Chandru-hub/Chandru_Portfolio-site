import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

export const useTheme = (): 'light' | 'dark' => {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return mode;
};