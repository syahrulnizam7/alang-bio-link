interface RobloxIconProps {
  className?: string;
}

export default function RobloxIcon({ className }: RobloxIconProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.269,2.936L1.503,21.293c-0.278,1.069,0.364,2.161,1.433,2.438l18.357,4.766 c1.069,0.278,2.161-0.364,2.438-1.433l4.766-18.357c0.278-1.069-0.364-2.161-1.433-2.438L8.707,1.503 C7.638,1.225,6.546,1.867,6.269,2.936z M13.411,12.296l4.293,1.115l-1.115,4.293l-4.293-1.115L13.411,12.296z"></path>
    </svg>
  );
}
