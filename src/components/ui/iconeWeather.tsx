import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  Zap,
  Snowflake,
  Wind,
} from "lucide-react";
import React from "react";

const iconMap = {
  "01": Sun,
  "02": CloudSun,
  "03": Cloud,
  "04": Cloud,
  "09": CloudRain,
  "10": CloudRain,
  "11": Zap,
  "13": Snowflake,
  "50": Wind,
} satisfies Record<string, React.ElementType>;
// `satisfies` vs `as`

type Props = {
  iconCode: string;
} & React.ComponentProps<typeof Sun>;

export function IconeWeather({ iconCode, ...props }: Props) {
  const Icon = iconMap[iconCode.slice(0, 2)] ?? Sun;
  return <Icon {...props} />;
}
