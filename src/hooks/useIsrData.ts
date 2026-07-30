import { useEffect, useTransition, useDeferredValue } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchPortfolioData,
  revalidatePortfolioData,
  markStale,
} from '../store/slices/portfolioSlice';
import { ISR_REVALIDATE_SECONDS } from '../utils/constants';

/**
 * ISR hook: initial load + interval revalidation with concurrent transitions.
 */
export const useIsrData = () => {
  const dispatch = useAppDispatch();
  const portfolio = useAppSelector((state) => state.portfolio);
  const [isPending, startTransition] = useTransition();
  const deferredStatus = useDeferredValue(portfolio.status);

  useEffect(() => {
    startTransition(() => {
      void dispatch(fetchPortfolioData());
    });
  }, [dispatch]);

  useEffect(() => {
    const intervalMs = ISR_REVALIDATE_SECONDS * 1000;
    const timer = window.setInterval(() => {
      dispatch(markStale());
      startTransition(() => {
        void dispatch(revalidatePortfolioData());
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [dispatch]);

  return {
    ...portfolio,
    isPending,
    deferredStatus,
    isLoading: portfolio.status === 'loading' || portfolio.status === 'idle',
  };
};
