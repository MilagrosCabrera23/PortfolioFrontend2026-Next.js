interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'minimal' | 'neon' | 'contrast';  // 🎨 Variantes de estilo
  className?: string;
  // Override para casos específicos
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  variant = 'minimal',  // 👈 Por defecto usa minimalista
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // 🎨 ESTILOS PREDEFINIDOS (3 opciones que te mostré)
  const styles = {
    minimal: {
      subtitle: 'text-lg sm:text-2xl md:text-3xl font-semibold text-(--color-text-secondary) tracking-wide',
      title: 'gradient-text text-lg sm:text-2xl md:text-3xl font-bold tracking-tighter leading-tight drop-shadow-lg',
      description: 'text-sm  sm:text-xl md:text-2xl font-medium text-white leading-relaxed drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] max-w-3xl',
    },
    neon: {
      subtitle: 'text-[var(--color-primary)] font-bold text-sm tracking-[0.2em] uppercase drop-shadow-[0_0_8px_var(--color-primary)] animate-pulse',
      title: 'text-[var(--color-text)] font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-accent)] bg-clip-text text-transparent drop-shadow-2xl',
      description: 'text-[var(--color-text-secondary)] text-lg leading-relaxed font-medium border-l-4 border-[var(--color-primary)] pl-4 shadow-[0_0_15px_rgba(0,200,255,0.1)]',
    },
    contrast: {
      subtitle: 'text-[var(--color-text)] bg-[var(--color-primary)] px-4 py-1.5 rounded-full font-semibold text-xs uppercase tracking-wider inline-block shadow-lg',
      title: 'text-[var(--color-text)] font-black text-4xl md:text-6xl tracking-tight leading-none mb-2 [text-shadow:2px_2px_0_var(--color-primary)]',
      description: 'text-[var(--color-text)] text-lg md:text-xl leading-relaxed font-medium bg-[var(--color-primary)]/10 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg',
    },
  };

  // Combina: estilo predefinido + override personalizado
  const currentStyle = styles[variant];

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <span className={`inline-block mb-2 ${currentStyle.subtitle} ${subtitleClassName}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`mb-4 ${currentStyle.title} ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`${currentStyle.description} ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
