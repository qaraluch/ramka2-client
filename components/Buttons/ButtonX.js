import Link from "next/link";
import React from "react";
import IconX from "../Icons/IconX";

export default function ButtonX({
  href = "/",
  color = "black",
  colorHover = "gray-200",
}) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href={href}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? <IconX color={colorHover} /> : <IconX color={color} />}
      </button>
    </Link>
  );
}
