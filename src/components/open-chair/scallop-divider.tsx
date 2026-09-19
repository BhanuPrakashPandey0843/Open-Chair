type ScallopDividerProps = {
  /** Fill color of the scallop shapes — should match the section it belongs to. */
  className?: string;
  /** Flip vertically, for use at the bottom of a section instead of the top. */
  flip?: boolean;
};


export function ScallopDivider({ className, flip = false }: ScallopDividerProps) {
  // 12 evenly spaced bumps across a 240-wide viewBox.
  const scallops = Array.from({ length: 12 }, (_, i) => 10 + i * 20);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 240 16"
        preserveAspectRatio="none"
        className={`h-4 w-full sm:h-5 ${className ?? ""}`}
      >
        {scallops.map((cx) => (
          <circle key={cx} cx={cx} cy="0" r="8.5" fill="currentColor" />
        ))}
      </svg>
    </div>
  );
}
