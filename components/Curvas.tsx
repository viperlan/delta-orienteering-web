type Props = {
  id: string;
  cx?: string;
  cy?: string;
};

// Curvas de nivel decorativas para fondos oscuros.
export default function Curvas({ id, cx = "82%", cy = "35%" }: Props) {
  return (
    <svg className="absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
      <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
      </defs>
      <g filter={`url(#${id})`} fill="none" className="stroke-white/15" strokeWidth="1.5">
        {Array.from({ length: 18 }, (_, i) => (
          <circle key={i} cx={cx} cy={cy} r={30 + i * 36} />
        ))}
      </g>
    </svg>
  );
}
