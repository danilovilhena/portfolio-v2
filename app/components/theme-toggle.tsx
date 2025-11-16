'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const themes = ['system', 'light', 'dark'] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme || 'system';
  const themeLabel = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);

  const handleClick = () => {
    const currentIndex = themes.indexOf(currentTheme as (typeof themes)[number]);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button className="text-xs font-[450] h-6 px-1.5 rounded-sm active:scale-95" variant="ghost" size="sm" onClick={handleClick}>
      {themeLabel}
    </Button>
  );
}
