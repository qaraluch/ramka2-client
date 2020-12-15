import Link from "next/link";
import React from "react";
import IconLogo from "../Icons/IconLogo";

export default function ButtonLogo({
  href = "/",
  color = "cyan-500",
  colorHover = "gray-400",
  children,
}) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href={href}>
      <button
        className="flex items-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        {isHover ? <IconLogo color={colorHover} /> : <IconLogo color={color} />}
      </button>
    </Link>
  );
}
