interface Props {
  signal: number;
  size?: number;
}

export default function RefereeSignalSVG({ signal, size = 120 }: Props) {
  const scale = size / 120;
  return (
    <svg
      width={size}
      height={size * (160 / 120)}
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${Math.min(scale, 1)})` }}
      className="max-w-full h-auto"
    >
      {/* Base referee figure */}
      <RefereeBase />
      {/* Signal-specific overlay */}
      <SignalOverlay signal={signal} />
    </svg>
  );
}

function RefereeBase() {
  return (
    <g stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Head */}
      <ellipse cx="60" cy="28" rx="14" ry="16" fill="#f0f4f8" />
      {/* Torso */}
      <path d="M44 44 L40 95 L80 95 L76 44 Z" fill="#1e3a5f" stroke="#1e3a5f" />
      {/* Legs */}
      <line x1="50" y1="95" x2="45" y2="145" />
      <line x1="70" y1="95" x2="75" y2="145" />
      {/* Feet */}
      <line x1="40" y1="145" x2="50" y2="145" />
      <line x1="70" y1="145" x2="80" y2="145" />
    </g>
  );
}

function SignalOverlay({ signal }: { signal: number }) {
  const armStyle = {
    stroke: '#1e3a5f',
    strokeWidth: 2.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };

  const handFill = '#f0f4f8';
  const accent = '#f97316';

  switch (signal) {
    case 1:
      // Inträngning — arm pointing down at area
      return (
        <g>
          <line x1="40" y1="55" x2="20" y2="85" {...armStyle} />
          <circle cx="18" cy="87" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="76" y1="55" x2="90" y2="70" {...armStyle} />
          {/* Area indicator */}
          <path d="M10 120 Q60 100 110 120" stroke={accent} strokeWidth="2" strokeDasharray="5 3" fill="none" />
        </g>
      );
    case 2:
      // Dubbeldribbling — bouncing hand motion
      return (
        <g>
          <line x1="76" y1="55" x2="95" y2="55" {...armStyle} />
          <circle cx="97" cy="55" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="30" y2="65" {...armStyle} />
          {/* Bouncing arrows */}
          <path d="M95 62 L95 80 L95 62" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M90 75 L95 82 L100 75" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M90 62 L95 55 L100 62" stroke={accent} strokeWidth="2" fill="none" />
        </g>
      );
    case 3:
      // Steg/tidsspel — arms rotating forward
      return (
        <g>
          <line x1="40" y1="55" x2="25" y2="70" {...armStyle} />
          <circle cx="23" cy="72" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="76" y1="55" x2="95" y2="70" {...armStyle} />
          <circle cx="97" cy="72" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          {/* Rotation arrows */}
          <path d="M20 60 Q15 72 23 80" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M18 76 L23 82 L28 76" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M100 60 Q105 72 97 80" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M92 76 L97 82 L102 76" stroke={accent} strokeWidth="2" fill="none" />
        </g>
      );
    case 4:
      // Fasthållning — gripping motion at chest
      return (
        <g>
          <line x1="40" y1="55" x2="48" y2="70" {...armStyle} />
          <line x1="76" y1="55" x2="72" y2="70" {...armStyle} />
          {/* Gripping hands */}
          <path d="M45 68 Q50 75 55 68" stroke={armStyle.stroke} strokeWidth={2.5} fill={handFill} />
          <path d="M65 68 Q70 75 75 68" stroke={armStyle.stroke} strokeWidth={2.5} fill={handFill} />
          {/* Grip lines */}
          <line x1="50" y1="70" x2="50" y2="65" stroke={accent} strokeWidth="1.5" />
          <line x1="70" y1="70" x2="70" y2="65" stroke={accent} strokeWidth="1.5" />
        </g>
      );
    case 5:
      // Slå/stöta — striking arm forward
      return (
        <g>
          <line x1="76" y1="55" x2="100" y2="50" {...armStyle} />
          <circle cx="103" cy="49" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="30" y2="65" {...armStyle} />
          {/* Strike motion */}
          <path d="M103 44 L110 40" stroke={accent} strokeWidth="2" />
          <path d="M105 52 L112 55" stroke={accent} strokeWidth="2" />
          <path d="M106 47 L115 47" stroke={accent} strokeWidth="2" />
        </g>
      );
    case 6:
      // Anfallsfoul — pushing open palm
      return (
        <g>
          <line x1="76" y1="55" x2="100" y2="55" {...armStyle} />
          {/* Open palm */}
          <rect x="100" y="48" width="10" height="14" rx="2" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="30" y2="70" {...armStyle} />
          {/* Push lines */}
          <line x1="112" y1="50" x2="117" y2="50" stroke={accent} strokeWidth="2" />
          <line x1="112" y1="55" x2="117" y2="55" stroke={accent} strokeWidth="2" />
          <line x1="112" y1="60" x2="117" y2="60" stroke={accent} strokeWidth="2" />
        </g>
      );
    case 7:
      // Inkast — arm pointing horizontally
      return (
        <g>
          <line x1="76" y1="55" x2="110" y2="55" {...armStyle} />
          <circle cx="112" cy="55" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Direction arrow */}
          <path d="M105 48 L115 55 L105 62" stroke={accent} strokeWidth="2.5" fill="none" />
        </g>
      );
    case 8:
      // Frikast — arm pointing in attack direction
      return (
        <g>
          <line x1="76" y1="55" x2="105" y2="42" {...armStyle} />
          <circle cx="107" cy="40" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Direction arrow */}
          <path d="M100 34 L110 38 L103 45" stroke={accent} strokeWidth="2.5" fill="none" />
        </g>
      );
    case 9:
      // Målvaktskast — arm pointing at goal area
      return (
        <g>
          <line x1="76" y1="55" x2="100" y2="70" {...armStyle} />
          <circle cx="102" cy="72" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Goal area */}
          <path d="M90 100 Q100 85 110 100" stroke={accent} strokeWidth="2" strokeDasharray="4 3" fill="none" />
        </g>
      );
    case 10:
      // Håll avstånd — stop gesture, palm out
      return (
        <g>
          <line x1="76" y1="55" x2="100" y2="45" {...armStyle} />
          {/* Open stop palm */}
          <rect x="99" y="36" width="12" height="16" rx="3" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Stop lines */}
          <line x1="113" y1="40" x2="117" y2="40" stroke={accent} strokeWidth="2" />
          <line x1="113" y1="44" x2="117" y2="44" stroke={accent} strokeWidth="2" />
          <line x1="113" y1="48" x2="117" y2="48" stroke={accent} strokeWidth="2" />
        </g>
      );
    case 11:
      // Passivt spel — arm raised, open palm up
      return (
        <g>
          <line x1="76" y1="50" x2="95" y2="20" {...armStyle} />
          {/* Upward palm */}
          <rect x="90" y="10" width="12" height="14" rx="3" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
        </g>
      );
    case 12:
      // Mål — arms pointing to center
      return (
        <g>
          <line x1="76" y1="50" x2="100" y2="70" {...armStyle} />
          <circle cx="102" cy="72" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="50" x2="16" y2="70" {...armStyle} />
          <circle cx="14" cy="72" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          {/* Center point indicator */}
          <circle cx="60" cy="115" r="5" fill={accent} opacity="0.6" />
          {/* Arrow lines pointing to center */}
          <path d="M102 76 L75 110" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M14 76 L45 110" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
        </g>
      );
    case 13:
      // Kort — hand holding colored card
      return (
        <g>
          <line x1="76" y1="50" x2="90" y2="20" {...armStyle} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Card */}
          <rect x="85" y="4" width="14" height="20" rx="2" fill={accent} stroke="#ea580c" strokeWidth={1.5} />
        </g>
      );
    case 14:
      // Utvisning — two fingers raised
      return (
        <g>
          <line x1="76" y1="50" x2="90" y2="18" {...armStyle} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Two fingers */}
          <line x1="88" y1="18" x2="85" y2="4" stroke={armStyle.stroke} strokeWidth={2.5} />
          <line x1="93" y1="18" x2="95" y2="4" stroke={armStyle.stroke} strokeWidth={2.5} />
          {/* Fist base */}
          <circle cx="90" cy="20" r="5" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
        </g>
      );
    case 15:
      // Timeout — T-shape with hands
      return (
        <g>
          {/* Horizontal arm */}
          <line x1="30" y1="50" x2="90" y2="50" {...armStyle} />
          {/* Vertical arm */}
          <line x1="60" y1="50" x2="60" y2="25" {...armStyle} />
          {/* Hands */}
          <circle cx="28" cy="50" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <circle cx="92" cy="50" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <circle cx="60" cy="23" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          {/* T label */}
          <text x="60" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill={accent}>T</text>
        </g>
      );
    case 16:
      // Tillåtelse — beckoning gesture
      return (
        <g>
          <line x1="76" y1="55" x2="95" y2="50" {...armStyle} />
          <circle cx="97" cy="49" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="50" {...armStyle} />
          <circle cx="23" cy="49" r="4" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          {/* Beckoning motion */}
          <path d="M100 44 Q105 38 100 32" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M97 34 L100 30 L103 34" stroke={accent} strokeWidth="2" fill="none" />
        </g>
      );
    case 17:
      // Förvarningstecken — arm raised with open palm
      return (
        <g>
          <line x1="76" y1="50" x2="85" y2="15" {...armStyle} />
          {/* Open palm up */}
          <rect x="80" y="4" width="12" height="14" rx="3" fill={handFill} stroke={armStyle.stroke} strokeWidth={2} />
          <line x1="40" y1="55" x2="25" y2="65" {...armStyle} />
          {/* Warning indicator */}
          <text x="86" y="36" textAnchor="middle" fontSize="10" fontWeight="bold" fill={accent}>!</text>
        </g>
      );
    default:
      return null;
  }
}
