import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isServer = typeof window === 'undefined';

export const fallbackDisplayname = (displayName?: string) => {
  if (!displayName) return 'UN';
  return displayName?.slice(0, 2).toUpperCase();
};

export const checkInString = (patternString: string, searchString: string) => {
  if (!patternString || !searchString) return false;

  const pattern = new RegExp(patternString, 'i');

  return pattern.test(searchString);
};
