import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HexagonIconProps {
  children?: ReactNode;
  // Accept direct color values (e.g., "#fff", "hsl(...)"), used when class props aren't provided
  borderColor?: string;
  // Prefer Tailwind fill classes when available (e.g., "fill-orange-500")
  borderClass?: string;

  size?: "sm" | "md" | "lg" | "xl";
  // Explicit icon size in pixels; if not provided, sized proportionally to hex size
  iconSizePx?: number;
  className?: string;
  // Controls the inner hexagon fill color; use "transparent" to let parent bg show
  innerFill?: string;
  // Tailwind-driven inner fill (e.g., "fill-primary/5"); takes precedence over innerFill
  innerFillClass?: string;
}

const sizeMap = {
  sm: 64,
  md: 96,
  lg: 128,
  xl: 160,
};

const HexagonIcon = ({
  children,
  borderColor = "hsl(12, 87%, 64%)",
  borderClass,
  size = "md",
  iconSizePx,
  className,
  innerFill = "rgba(0, 169, 255, 0.5)",
  innerFillClass,
}: HexagonIconProps) => {
  const dimension = sizeMap[size];
  const borderWidth = 3;
  const computedIconSize = iconSizePx ?? Math.round(dimension * 0.35);

  // Create hexagon path with rounded corners
  const createHexagonPath = (width: number, height: number, radius: number) => {
    const cx = width / 2;
    const cy = height / 2;
    const size = Math.min(width, height) * 0.45;
    const r = Math.min(radius, size * 0.15); // Corner radius

    // Calculate hexagon points
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      points.push({
        x: cx + size * Math.cos(angle),
        y: cy + size * Math.sin(angle),
      });
    }

    // Build path with rounded corners
    let path = "";

    for (let i = 0; i < 6; i++) {
      const current = points[i];
      const next = points[(i + 1) % 6];
      const prev = points[(i + 5) % 6];

      // Calculate direction vectors
      const dx1 = current.x - prev.x;
      const dy1 = current.y - prev.y;
      const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      const dx2 = next.x - current.x;
      const dy2 = next.y - current.y;
      const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      // Start and end points of the curve
      const startX = current.x - (dx1 / len1) * r;
      const startY = current.y - (dy1 / len1) * r;
      const endX = current.x + (dx2 / len2) * r;
      const endY = current.y + (dy2 / len2) * r;

      if (i === 0) {
        path += `M ${startX} ${startY}`;
      } else {
        path += ` L ${startX} ${startY}`;
      }
      path += ` Q ${current.x} ${current.y} ${endX} ${endY}`;
    }

    path += " Z";
    return path;
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-105",
        className
      )}
      style={{ width: dimension, height: dimension }}
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox={`0 0 ${dimension} ${dimension}`}
        className="absolute inset-0"
      >
        {/* Outer hexagon (border) */}
        <path
          d={createHexagonPath(dimension, dimension, 8)}
          {...(borderClass
            ? { className: cn("fill-current", borderClass) }
            : { fill: borderColor })}
        />

        {/* Inner hexagon (background) */}
        <path
          d={createHexagonPath(
            dimension - borderWidth * 2,
            dimension - borderWidth * 2,
            8
          )}
          {...(innerFillClass
            ? { className: cn("fill-current", innerFillClass) }
            : { fill: innerFill })}
          transform={`translate(${borderWidth}, ${borderWidth})`}
        />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 text-white flex items-center justify-center"
        style={{ fontSize: computedIconSize }}
      >
        {children}
      </div>
    </div>
  );
};

export default HexagonIcon;
