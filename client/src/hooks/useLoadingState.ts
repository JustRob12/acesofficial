import { useState, useEffect, useCallback } from 'react';

interface UseLoadingStateOptions {
  minLoadingTime?: number; // Minimum time to show loading (ms)
  slowLoadingThreshold?: number; // Time after which to show loading (ms)
  message?: string;
}

export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const {
    minLoadingTime = 800,
    slowLoadingThreshold = 300,
    message = "Loading..."
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(message);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  const startLoading = useCallback((customMessage?: string) => {
    setIsLoading(true);
    setLoadingMessage(customMessage || message);
    setLoadingStartTime(Date.now());
  }, [message]);

  const stopLoading = useCallback(() => {
    if (!loadingStartTime) {
      setIsLoading(false);
      return;
    }

    const elapsedTime = Date.now() - loadingStartTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    if (remainingTime > 0) {
      setTimeout(() => {
        setIsLoading(false);
        setLoadingStartTime(null);
      }, remainingTime);
    } else {
      setIsLoading(false);
      setLoadingStartTime(null);
    }
  }, [loadingStartTime, minLoadingTime]);

  const withLoading = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    customMessage?: string
  ): Promise<T> => {
    startLoading(customMessage);
    
    try {
      const result = await asyncFn();
      return result;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  // Auto-detect slow loading for data fetching
  const detectSlowLoading = useCallback((promise: Promise<any>, customMessage?: string) => {
    let timeoutId: NodeJS.Timeout;
    let hasShownLoading = false;

    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        if (!hasShownLoading) {
          startLoading(customMessage);
          hasShownLoading = true;
        }
      }, slowLoadingThreshold);
    });

    const wrappedPromise = promise.then((result) => {
      clearTimeout(timeoutId);
      if (hasShownLoading) {
        stopLoading();
      }
      return result;
    }).catch((error) => {
      clearTimeout(timeoutId);
      if (hasShownLoading) {
        stopLoading();
      }
      throw error;
    });

    return Promise.race([wrappedPromise, timeoutPromise]);
  }, [slowLoadingThreshold, startLoading, stopLoading]);

  return {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    withLoading,
    detectSlowLoading
  };
}
