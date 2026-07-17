type FourLeafIconProps = {
  size?: number;
  className?: string;
  strokeColor?: string;
  showVein?: boolean;
};

/**
 * Single clover leaf lifted from the Four Leaf Comfort Solutions logo mark.
 * Fill inherits `currentColor` (set via className, e.g. "text-green-dark")
 * so it drops into the same color/hover utilities used by lucide icons
 * elsewhere on the site. Stroke defaults to brand gold.
 */
export default function FourLeafIcon({
  size = 24,
  className = "",
  strokeColor = "#D6B261",
  showVein = true,
}: FourLeafIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 94C34 79 9 58 9 32C9 15 22 3 37 6C46 8 50 15 50 24C50 15 54 8 63 6C78 3 91 15 91 32C91 58 66 79 50 94Z"
        fill="currentColor"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {showVein && (
        <path
          d="M50 26V83"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      )}
    </svg>
  );
}
