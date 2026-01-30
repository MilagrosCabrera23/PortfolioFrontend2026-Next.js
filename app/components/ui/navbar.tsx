import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative px-3 py-2 text-sm font-medium tracking-wide
        transition-colors duration-200 
        ${isActive
        ? 'text-color-primary' 
          : 'text-color-secondary hover:text-color-text'
        }
          ${className}
      `}
    >
      {children}


      {
        isActive && (
          <span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-(--color-primary) rounded-t-md"
          />
        )}
    </Link>
  );
}