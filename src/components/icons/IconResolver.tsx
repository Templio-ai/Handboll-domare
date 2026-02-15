import { iconMap } from './HandballIcons';

interface IconResolverProps {
  icon: string;
  size?: number;
  className?: string;
}

export default function IconResolver({ icon, size = 24, className }: IconResolverProps) {
  const SvgIcon = iconMap[icon];

  if (SvgIcon) {
    return <SvgIcon size={size} className={className} />;
  }

  // Emoji fallback for backward compatibility
  return <span className={className} style={{ fontSize: size }}>{icon}</span>;
}
