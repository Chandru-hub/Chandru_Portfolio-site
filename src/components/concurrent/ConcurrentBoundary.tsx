import React, { Suspense, ReactNode, Component, ErrorInfo } from 'react';

interface ConcurrentBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

/** Error boundary for Fiber error recovery (Single Responsibility). */
class FiberErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[FiberErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Concurrent rendering boundary: Suspense + error recovery.
 * Leverages React 18 Fiber concurrent features.
 */
export const ConcurrentBoundary: React.FC<ConcurrentBoundaryProps> = ({
  children,
  fallback,
}) => {
  return (
    <FiberErrorBoundary
      fallback={
        <div className="error-fallback" role="alert">
          Something went wrong loading this section. Please refresh.
        </div>
      }
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </FiberErrorBoundary>
  );
};

export default ConcurrentBoundary;
