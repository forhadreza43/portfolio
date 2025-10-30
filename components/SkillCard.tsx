import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface HexagonIconProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  borderWidth?: number;
  name: string;
}

const sizeMap = {
  sm: 64,
  md: 96,
  lg: 128,
  xl: 140,
};

const SkillCard = ({
  children,
  size = "xl",
  name,
  borderWidth = 1.5,
}: HexagonIconProps) => {
  const dimension = sizeMap[size];
  const computedIconSize = Math.round(dimension * 0.35);

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
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "relative inline-flex items-center justify-center transition-transform hover:scale-105 duration-500 group"
          )}
          style={{ width: dimension, height: dimension }}
          aria-label={name}
        >
          <svg
            width={dimension}
            height={dimension}
            viewBox={`0 0 ${dimension} ${dimension}`}
            className="absolute inset-0"
          >
            <defs>
              <filter
                id="hexShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="1"
                  dy="2"
                  stdDeviation="2"
                  flood-color="rgb(0,58,89)"
                  flood-opacity="0.20"
                />
              </filter>
            </defs>
            {/* Outer hexagon (border) */}
            <path
              d={createHexagonPath(dimension, dimension, 8)}
              className="dark:fill-[rgb(184,229,255)] fill-[rgb(0,58,89)]"
              filter="url(#hexShadow)"
            />

            {/* Inner hexagon (background) */}
            <path
              d={createHexagonPath(
                dimension - borderWidth * 2,
                dimension - borderWidth * 2,
                8
              )}
              className="dark:fill-[rgb(227,244,255)] fill-[rgb(0,29,46)]"
              transform={`translate(${borderWidth}, ${borderWidth})`}
              pointerEvents="visiblePainted"
            />
          </svg>

          {/* Content */}
          <div
            className="relative z-10 flex items-center justify-center"
            style={{ fontSize: computedIconSize }}
          >
            {children}
            {/* <p className="text-nowrap text-xs font-semibold group-hover:opacity-100 opacity-0 transition-opacity duration-500 absolute -bottom-4 left-0 right-0 text-center">
          {name}
        </p> */}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={-11}>{name}</TooltipContent>
    </Tooltip>
  );
};

export default SkillCard;
