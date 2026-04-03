"use client";
import { useState } from 'react';

export function ThemeToggle() {
    const [mode, setMode] = useState('dark');
    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', mode === 'light' ? 'dark' : 'light');
    }
    if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', mode);
    }

    return (
        <div className="Theme_toggle">
            <button onClick={toggleMode}>
                {mode === 'light' ? '⏾' : '☀'}
            </button>
        </div>
    );
}