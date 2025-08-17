"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LoadingScreen from './LoadingScreen';
import { useLoadingState } from '../hooks/useLoadingState';

interface NavigationContextType {
  navigateWithLoading: (href: string, message?: string) => void;
  isLoading: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const { isLoading, loadingMessage, startLoading, stopLoading } = useLoadingState({
    minLoadingTime: 600,
    slowLoadingThreshold: 200,
    message: "Navigating..."
  });

  // Handle route changes
  useEffect(() => {
    if (isNavigating) {
      setIsNavigating(false);
      stopLoading();
    }
  }, [pathname, isNavigating, stopLoading]);

  const navigateWithLoading = (href: string, message?: string) => {
    if (href === pathname) return;
    
    setIsNavigating(true);
    startLoading(message || "Loading page...");
    
    // Simulate a small delay to show loading for fast loads
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ navigateWithLoading, isLoading }}>
      {children}
      <LoadingScreen isLoading={isLoading} message={loadingMessage} />
    </NavigationContext.Provider>
  );
}
