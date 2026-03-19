'use client';

import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 'var(--icon-lg)',
        padding: 'var(--padding-tiny)',
        color: 'var(--text-secondary)',
        lineHeight: 1,
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
