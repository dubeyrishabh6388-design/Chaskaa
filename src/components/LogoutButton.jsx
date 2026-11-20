import { useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { Icon } from './ui';

/**
 * Shared sign-out control. Available in four clean variants so every workspace
 * can show it in its header, sidebar and footer without changing behaviour.
 */
export default function LogoutButton({ variant = 'text', label = 'Sign out', className = '' }) {
  const { signOut } = useApp();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/login', { replace: true });
  };

  if (variant === 'icon') {
    return (
      <button type="button" onClick={handleSignOut} title={label} aria-label={label}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#f0e2df] bg-white text-[#8a7477] transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 ${className}`}>
        <Icon name="LogOut" size={17} />
      </button>
    );
  }

  if (variant === 'sidebar') {
    return (
      <button type="button" onClick={handleSignOut}
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-white/75 transition hover:bg-white/10 hover:text-white ${className}`}>
        <Icon name="LogOut" size={17} className="shrink-0 text-white/60" />
        <span className="truncate">{label}</span>
      </button>
    );
  }

  if (variant === 'link') {
    return (
      <button type="button" onClick={handleSignOut}
        className={`inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8a7477] transition hover:text-rose-600 ${className}`}>
        <Icon name="LogOut" size={13} />
        {label}
      </button>
    );
  }

  return (
    <button type="button" onClick={handleSignOut} title={label} aria-label={label}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#f0e2df] bg-white px-2.5 py-2 text-[11px] font-bold text-[#8a7477] transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 sm:px-3 ${className}`}>
      <Icon name="LogOut" size={16} />
      <span className="hidden truncate sm:inline">{label}</span>
    </button>
  );
}
