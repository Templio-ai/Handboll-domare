import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function HandballIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2C12 2 8 8 8 12s4 10 4 10" />
      <path d="M12 2C12 2 16 8 16 12s-4 10-4 10" />
      <path d="M4.5 7.5h15" />
      <path d="M3 12h18" />
      <path d="M4.5 16.5h15" />
    </svg>
  );
}

export function CourtIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M2 8 Q5 8 5 12 Q5 16 2 16" />
      <path d="M22 8 Q19 8 19 12 Q19 16 22 16" />
    </svg>
  );
}

export function WhistleIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M2 8h4l3-3h6a5 5 0 0 1 0 10H9l-3-3H2" />
      <circle cx="16" cy="10" r="2" />
      <path d="M2 8v4" />
      <path d="M6 6v2" />
      <path d="M6 12v2" />
    </svg>
  );
}

export function YellowCardIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#fbbf24" stroke="#f59e0b" />
      <path d="M9 6h6" stroke="#f59e0b" />
      <path d="M9 10h6" stroke="#f59e0b" />
    </svg>
  );
}

export function RedCardIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#ef4444" stroke="#dc2626" />
      <path d="M9 8l6 6" stroke="white" strokeWidth="2.5" />
      <path d="M15 8l-6 6" stroke="white" strokeWidth="2.5" />
    </svg>
  );
}

export function StopwatchIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M10 2h4" />
      <path d="M12 2v3" />
      <path d="M19.4 7.6l1-1" />
    </svg>
  );
}

export function ClipboardIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  );
}

export function RefereeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v6" />
      <path d="M8 11l4-1 4 1" />
      <path d="M5 22l3-8" />
      <path d="M19 22l-3-8" />
      <path d="M8 11l-4-3" />
      <path d="M16 11l4-3" />
    </svg>
  );
}

export function GoalIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M3 22V6h18v16" />
      <path d="M3 6l2-4h14l2 4" />
      <path d="M3 10h18" />
      <path d="M3 14h18" />
      <path d="M3 18h18" />
      <path d="M7 6v16" />
      <path d="M11 6v16" />
      <path d="M15 6v16" />
      <path d="M19 6v16" />
    </svg>
  );
}

export function StrategyIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
      <circle cx="16" cy="9" r="1.5" fill="currentColor" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <path d="M8 9l4 5" strokeDasharray="3 2" />
      <path d="M16 9l-4 5" strokeDasharray="3 2" />
      <path d="M12 14v4" strokeDasharray="3 2" />
      <path d="M12 18l2-1.5" />
      <path d="M12 18l-2-1.5" />
    </svg>
  );
}

export function ShieldIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M12 2l8 4v6c0 5.25-3.5 8.75-8 10-4.5-1.25-8-4.75-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TrophyIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M6 9a6 6 0 0 0 12 0V4H6v5z" />
      <path d="M12 15v3" />
      <path d="M8 21h8" />
      <path d="M12 18h0" />
      <path d="M6 4H4a2 2 0 0 0 0 4h2" />
      <path d="M18 4h2a2 2 0 0 1 0 4h-2" />
    </svg>
  );
}

export function HandshakeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M2 14l4-4 3 1 4-4 3 2 6-5" />
      <path d="M6 10l-4 4" />
      <path d="M13 7l3 3-5 5-3-3" />
      <path d="M16 10l4 4" />
      <path d="M11 15l2 2" />
      <path d="M8 12l2 2" />
    </svg>
  );
}

export function MegaphoneIcon({ size, ...props }: IconProps) {
  return (
    <svg {...defaults(size)} {...props}>
      <path d="M18 3v18" />
      <path d="M18 6L4 10v2l14 4" />
      <path d="M4 10v4" />
      <path d="M7 14v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2" />
      <path d="M20 9a3 3 0 0 1 0 6" />
    </svg>
  );
}

export const iconMap: Record<string, React.ComponentType<IconProps>> = {
  handball: HandballIcon,
  court: CourtIcon,
  whistle: WhistleIcon,
  'yellow-card': YellowCardIcon,
  'red-card': RedCardIcon,
  stopwatch: StopwatchIcon,
  clipboard: ClipboardIcon,
  referee: RefereeIcon,
  goal: GoalIcon,
  strategy: StrategyIcon,
  shield: ShieldIcon,
  trophy: TrophyIcon,
  handshake: HandshakeIcon,
  megaphone: MegaphoneIcon,
};
