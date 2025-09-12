import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Basic global error reporting utility for white-screen debugging
export function installGlobalErrorLogging() {
  if (typeof window === 'undefined') return;
  if ((window as any).__errorLoggingInstalled) return;
  (window as any).__errorLoggingInstalled = true;

  window.addEventListener('error', (event) => {
    try {
      console.error('[GlobalError]', event.message, event.filename, event.lineno, event.colno, event.error);
    } catch {}
  });

  window.addEventListener('unhandledrejection', (event) => {
    try {
      console.error('[UnhandledRejection]', event.reason);
    } catch {}
  });
}

// ErrorBoundary moved to ./ErrorBoundary.tsx to avoid JSX in .ts file
