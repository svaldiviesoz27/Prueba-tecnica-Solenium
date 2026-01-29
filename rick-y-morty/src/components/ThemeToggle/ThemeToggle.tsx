import { SunIcon, MoonIcon } from '../Icons/Icons'

interface ThemeToggleProps {
    isDark: boolean
    onToggle: () => void
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
    )
}
