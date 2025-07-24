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
      <path d="M14.5 2H12v8.5c-.7-.4-1.5-.6-2.3-.6C7.5 9.9 6 11.4 6 13.2s1.5 3.3 3.7 3.3c2.2 0 3.7-1.5 3.7-3.3V6.8c1.2.8 2.6 1.3 4.1 1.3V6c-1-.1-1.9-.6-2.6-1.4-.7-.8-1.1-1.8-1.1-2.8V2h1.7z" />
    </svg>
  );
};

export default TikTokIcon;