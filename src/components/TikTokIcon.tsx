interface TikTokIconProps {
  size?: number;
  className?: string;
}

const TikTokIcon = ({ size = 20, className = "" }: TikTokIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 2h4v6.5c1.5-.5 3-1 4.5-.5v3c-1.5-.5-3 0-4.5.5V16c0 2.5-2 4.5-4.5 4.5S4 18.5 4 16s2-4.5 4.5-4.5c.5 0 1 .1 1.5.3V15c-.5-.2-1-.3-1.5-.3-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2z" />
    </svg>
  );
};

export default TikTokIcon;