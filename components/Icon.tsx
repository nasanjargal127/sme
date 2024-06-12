import React from "react";

import Svg, { Path } from "react-native-svg";

import { colors } from "@/constants/colors";

export type IconName =
  | "wallet"
  | "task-list"
  | "outlined-task-list"
  | "receipt"
  | "arrow-hook-down-right"
  | "person-account"
  | "arrow-up"
  | "arrow-down"
  | "dismiss"
  | "arrow-left"
  | "history"
  | "settings"
  | "bookmark";

export interface IconProps {
  color?: string;
  height?: number;
  name: IconName;
  width?: number;
}

function IconSVG({ color, name }: Pick<IconProps, "color" | "name">) {
  switch (name) {
    case "wallet":
      return (
        <Path
          d="M19.25 6.045V5.75A2.75 2.75 0 0016.5 3H5.25a2.25 2.25 0 00-2.244 2.409A.757.757 0 003 5.5v12.25A3.25 3.25 0 006.25 21h12.5a2.75 2.75 0 002.75-2.75v-9.5a2.75 2.75 0 00-2.25-2.705zM5.25 4.5H16.5c.69 0 1.25.56 1.25 1.25V6H5.25a.75.75 0 010-1.5zm11 8.5h2a.75.75 0 010 1.5h-2a.75.75 0 010-1.5z"
          fill={color}
        />
      );
    case "task-list":
      return (
        <Path
          d="M5.25 3A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25zm5.53 5.78l-2 2a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47a.75.75 0 111.06 1.06zm5.97-.28a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5h3.5zm-4.25 6.25a.75.75 0 01.75-.75h3.5a.75.75 0 110 1.5h-3.5a.75.75 0 01-.75-.75zm-1.72-1.53a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47a.75.75 0 011.06 0z"
          fill={color}
        />
      );
    case "outlined-task-list":
      return (
        <Path
          d="M13.25 8.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm-.75 6.25a.75.75 0 01.75-.75h3.5a.75.75 0 110 1.5h-3.5a.75.75 0 01-.75-.75zm-1.72-7.03a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47a.75.75 0 011.06 0zm0 6.56a.75.75 0 10-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 00-1.06 1.06l1 1a.75.75 0 001.06 0l2-2zM5.25 3A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25zM4.5 5.25a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V5.25z"
          fill={color}
        />
      );
    case "receipt":
      return (
        <Path
          d="M4 6.25A2.25 2.25 0 016.25 4h8.5A2.25 2.25 0 0117 6.25V14h3.5v3.25a3.25 3.25 0 01-3.25 3.25h-10A3.25 3.25 0 014 17.25v-11zm13 9.25V19h.25A1.75 1.75 0 0019 17.25V15.5h-2zM15.5 19V6.25a.75.75 0 00-.75-.75h-8.5a.75.75 0 00-.75.75v11c0 .966.784 1.75 1.75 1.75h8.25zM7 8.75A.75.75 0 017.75 8h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 017 8.75zm0 3.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
          fill={color}
        />
      );
    case "arrow-hook-down-right":
      return (
        <Path
          d="M10.5 5.5H16A.75.75 0 0016 4h-5.5a6.5 6.5 0 000 13h5.95l-2.616 2.617a.75.75 0 101.06 1.06l3.882-3.882c.1-.1.166-.22.198-.348a.75.75 0 00-.205-.739l-3.88-3.88a.75.75 0 10-1.06 1.061l2.61 2.611H10.5a5 5 0 010-10z"
          fill={color}
        />
      );
    case "person-account":
      return (
        <Path
          d="M4.249 13.995h5.876a2.743 2.743 0 00-.62 1.53l-.009.22v4.5c0 .665.236 1.275.63 1.75l-.13.001c-3.42 0-5.943-1.072-7.486-3.236A2.75 2.75 0 012 17.164v-.92a2.249 2.249 0 012.249-2.249zm10.497-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 01-1.75 1.75h-8a1.75 1.75 0 01-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3zm2.75 1.5h-2.5v1h2.5v-1zM9.997 2a5 5 0 110 10 5 5 0 010-10z"
          fill={color}
        />
      );
    case "arrow-up":
      return (
        <Path
          d="M4.284 10.296A1 1 0 005.709 11.7L11 6.33V20a1 1 0 102 0V6.336l5.285 5.364a1 1 0 001.425-1.404l-6.823-6.924a1.25 1.25 0 00-1.78 0l-6.823 6.924z"
          fill={color}
        />
      );
    case "arrow-down":
      return (
        <Path
          d="M19.716 13.704a1 1 0 10-1.425-1.403L13 17.67V4a1 1 0 00-2 0v13.665L5.715 12.3a1 1 0 00-1.425 1.403l6.823 6.925a1.25 1.25 0 001.78 0l6.823-6.925z"
          fill={color}
        />
      );
    case "dismiss":
      return (
        <Path
          d="M4.21 4.387l.083-.094a1 1 0 011.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 111.414 1.414L13.415 12l6.292 6.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 01-1.414-1.414L10.585 12 4.293 5.707a1 1 0 01-.083-1.32l.083-.094-.083.094z"
          fill={color}
        />
      );
    case "arrow-left":
      return (
        <Path
          d="M10.295 19.716a1 1 0 001.404-1.425l-5.37-5.29h13.67a1 1 0 100-2H6.336L11.7 5.714a1 1 0 00-1.404-1.424l-6.924 6.822a1.25 1.25 0 000 1.78l6.924 6.823z"
          fill={color}
        />
      );
    case "history":
      return (
        <Path
          d="M12 3a9 9 0 11-8.963 8.183 1 1 0 111.992.18A6.962 6.962 0 007.05 16.95c.375.375.792.707 1.242.988A7 7 0 107.098 7.002l1.4.001a1 1 0 01.116 1.994l-.116.006H4.496a1 1 0 01-.993-.883l-.007-.117v-4a1 1 0 011.994-.116l.006.117v1.774A8.983 8.983 0 0112 3zm-.75 4a.75.75 0 01.743.648L12 7.75V12h2.25a.75.75 0 01.102 1.493l-.102.007h-3a.75.75 0 01-.743-.648l-.007-.102v-5a.75.75 0 01.75-.75z"
          fill={color}
        />
      );
    case "settings":
      return (
        <Path
          d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 01.582.649l.17 1.527a1.384 1.384 0 001.927 1.116l1.401-.615a.75.75 0 01.85.174 9.792 9.792 0 012.204 3.792.75.75 0 01-.271.825l-1.242.916a1.381 1.381 0 000 2.226l1.243.915a.75.75 0 01.272.826 9.797 9.797 0 01-2.204 3.792.75.75 0 01-.848.175l-1.407-.617a1.38 1.38 0 00-1.926 1.114l-.169 1.526a.75.75 0 01-.572.647 9.518 9.518 0 01-4.406 0 .75.75 0 01-.572-.647l-.168-1.524a1.382 1.382 0 00-1.926-1.11l-1.406.616a.75.75 0 01-.849-.175 9.798 9.798 0 01-2.204-3.796.75.75 0 01.272-.826l1.243-.916a1.38 1.38 0 000-2.226l-1.243-.914a.75.75 0 01-.271-.826 9.793 9.793 0 012.204-3.792.75.75 0 01.85-.174l1.4.615a1.387 1.387 0 001.93-1.118l.17-1.526a.75.75 0 01.583-.65c.717-.159 1.45-.243 2.201-.252zM12 9a3 3 0 100 6 3 3 0 000-6z"
          fill={color}
        />
      );
    case "bookmark":
      return (
        <Path
          d="M6.19 21.854a.75.75 0 01-1.188-.61V6.25A3.25 3.25 0 018.252 3h7.499A3.25 3.25 0 0119 6.249v14.996a.75.75 0 01-1.188.609l-5.811-4.181-5.812 4.18zM17.5 6.249a1.75 1.75 0 00-1.75-1.75H8.253a1.75 1.75 0 00-1.75 1.75v13.532l5.062-3.64a.75.75 0 01.876 0l5.06 3.64V6.25z"
          fill={color}
        />
      );
    default:
      return null;
  }
}
export function Icon({
  color = colors.blue,
  name,
  height = 24,
  width = 24,
}: IconProps) {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <IconSVG color={color} name={name} />
    </Svg>
  );
}
