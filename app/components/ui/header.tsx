    interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <span className="inline-block text-color-primary text-sm font-semibold uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-color-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-color-text-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
