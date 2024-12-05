import { cn } from "@/lib/utils";

export const LeftSvg = ({ className }: { className: string }) => {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-green", className)}
    >
      <path
        d="M7.5 13L1.5 7L7.5 1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
