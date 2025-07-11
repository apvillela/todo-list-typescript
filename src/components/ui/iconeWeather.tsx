import { Sun } from "lucide-react";

type Props = {
  iconCode: string;
  size?: number;
  className?: string;
};

export function IconeWeather({ iconCode, size = 24, className }: Props) {
  const isUrl = iconCode.startsWith("http") || iconCode.endsWith(".png");

  if (isUrl) {
    return (
      <img
        src={iconCode}
        alt="Weather icon"
        width={size}
        height={size}
        className={className}
      />
    );
  }

  return <Sun size={size} className={className} />;
}
