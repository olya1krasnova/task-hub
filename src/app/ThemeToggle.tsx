'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ml-20 fixed right-5 bottom-5 z-50">
      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
        className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 text-neutral-800 dark:text-white dark:hover:bg-neutral-600 transition-colors"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
